
![Demo of C shell and x working](.hidden/.secrets/x1/Demo.png)

🚀 **Termux Misc Toolkit**

A collection of powerful utilities to supercharge your Termux Application!!!

![Stars](https://img.shields.io/github/stars/tanazd1/termux-miscellaneous?style=flat&color=blue) ![Forks](https://img.shields.io/github/forks/tanazd1/termux-miscellaneous?style=flat&color=green) ![Issues](https://img.shields.io/github/issues/tanazd1/termux-miscellaneous?style=flat&color=orange) ![Pull Requests](https://img.shields.io/github/issues-pr/tanazd1/termux-miscellaneous?style=flat&color=red) ![License](https://img.shields.io/github/license/tanazd1/termux-miscellaneous?style=flat&color=yellowgreen) ![Last Commit](https://img.shields.io/github/last-commit/tanazd1/termux-miscellaneous?style=flat&color=purple) ![Open Source](https://img.shields.io/badge/Open%20Source-Yes-brightgreen)

---

⚡ **Features**

- `"c"` → Custom C shell (similar to cling)  
- `"cdt"` → Run commands in a directory and return to `$OLDPWD`  
- `"ns"` → Run scripts without a shebang  
  ```bash
  ns <INTERPRETER> <SCRIPT>
  ```  
- `"su"` → Fake superusr wrapper  
- `"tc"` → Parallel job runner  
- `"tct"` → Test `"tc"`  
- `"x"` → Universal archive extractor  
- `"lock"` → Lock your terminal  
- `"exe!"` → Run scripts even from internal storage  
- `"r"` → Run hex codes  

---

📦 **Installation**

```bash
apt update -y && apt upgrade -y
apt install curl wget tar coreutils -y
bash <(curl -sL https://bit.ly/4d7AzZC)
```

---

🧪 **Examples**

```bash
# Start custom shell
c

# Run command in another directory
cdt ls /sdcard

# Run script without shebang
ns python script.py

# Extract archive
x file.zip
```

---

🧠 **Why this exists**

Termux is powerful but lacks convenience tools.  
This toolkit adds speed, flexibility, and better workflows.

---

📁 **Custom Properties**

This repository contains a **Custom Properties YAML** that stores structured metadata:

**Path:** `.github/custom-properties/properties.yaml`

```yaml
type: Custom Properties
owner: tanazd1
repo_name: termux-utils
purpose: Termux utilities and scripts
default_timeout: 30
enable_logging: true
max_daily_commits: 100
features:
  - c
  - cdt
  - exe!
  - ns
  - su
  - tc
  - tct
  - r
  - x
```

> This YAML can be read by scripts, automation tools, or CI/CD pipelines for configuration and management.

---

⭐ **Support**

If you like this project:

- Star ⭐ the repo  
- Fork 🍴 it  
- Suggest features / improvements
