#!/data/data/com.termux/env bash

echo "[*] Installing termux-miscallious..."

cd "$(dirname "$0")" || exit 1

BIN_DIR="$PREFIX/bin"

command -v install >/dev/null || {
    echo "[✗] install command not found!"
    exit 1
}

for cmd in *; do
    [ -f "$cmd" ] || continue
    [[ "$cmd" == .* ]] && continue

    case "$cmd" in
        install.sh|uninstall.sh|README.md) continue ;;
    esac

    chmod +x "$cmd"

    if install -Dm755 "$cmd" "$BIN_DIR/$cmd"; then
        echo "[✓] Installed $cmd"
    else
        echo "[✗] Failed to install $cmd"
    fi
done

echo "[✓] Done!"
