🚀 Termux Misc Toolkit

A collection of powerful utilities to supercharge your Termux workflow.

---

⚡ Features

- "c" → Custom C shell (similar to cling)
- "cdt" → Run commands in a directory and return to "$OLDPWD"
- "ns" → Run scripts without a shebang
  ns <INTERPRETER> <SCRIPT>
- "su" → Fake superuser wrapper
- "tc" → Parallel job runner
- "tct" → Test "tc"
- "x" → Universal archive extractor

---

📦 Installation

apt update -y && apt upgrade -y
apt install curl wget tar coreutils -y

curl -sL https://raw.githubusercontent.com/tanazd1/termux-miscellaneous/main/install.sh | bash

---

🧪 Examples

# Start custom shell
c

# Run command in another directory
cdt ls /sdcard

# Run script without shebang
ns python script.py

# Extract archive
x file.zip

---

🧠 Why this exists

Termux is powerful but lacks convenience tools.
This toolkit adds speed, flexibility, and better workflows.

---

⚠️ Disclaimer

Always review install scripts before running:

curl -s

---

⭐ Support

If you like this project:

- Star ⭐ the repo
- Fork 🍴 it
- Suggest features / improvements
