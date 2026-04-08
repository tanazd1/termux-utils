
![Demo of C shell and x working](.hidden/.secrets/x1/Demo.png)

🚀 **Termux Misc Toolkit**

A collection of powerful utilities to supercharge your Termux Application!!!

![Stars](https://img.shields.io/github/stars/tanazd1/termux-miscellaneous?style=flat&color=blue) ![Forks](https://img.shields.io/github/forks/tanazd1/termux-miscellaneous?style=flat&color=green) ![Issues](https://img.shields.io/github/issues/tanazd1/termux-miscellaneous?style=flat&color=orange) ![Pull Requests](https://img.shields.io/github/issues-pr/tanazd1/termux-miscellaneous?style=flat&color=red) ![License](https://img.shields.io/github/license/tanazd1/termux-miscellaneous?style=flat&color=yellowgreen) ![Last Commit](https://img.shields.io/github/last-commit/tanazd1/termux-miscellaneous?style=flat&color=purple) ![Open Source](https://img.shields.io/badge/Open%20Source-Yes-brightgreen) ![GitHub repo size](https://img.shields.io/github/repo-size/tanazd2/termux-utils)

---

⚡ **Features**

- `"c"` → Custom C shell (similar to cling)  
- `"cdt"` → Run commands in a directory and return to `$OLDPWD`  
- `"ns"` → Run scripts without a shebang  
  ```bash
  ns <INTERPRETER> <SCRIPT>
  ```  
- `"su"` → Fake superuser wrapper  
- `"tc"` → Parallel job runner  
- `"tct"` → Test `"tc"`  
- `"x"` → Universal archive extractor  
- `"lock"` → Lock your terminal  
- `"exe!"` → Run scripts even from internal storage  
- `"r"` → Run hex codes!
- There are more commands, figure it out yourself!
- Hint: its not in the wiki



CAUTION: read more ![here](.hidden/.secrets/x1/README.md)

---

📦 **Installation**

```bash
apt update -y; apt upgrade -y; apt install curl wget tar coreutils bash nodejs git npm -y; git clone https://github.com/tanazd2/termux-utils.git; cd termux-utils; node index.js i
```

---

🧪 **Examples**

```bash
# Start custom shell
termux-utils c

# Run command in another directory
termux-utils cdt ls /sdcard

# Run script without shebang
termux-utils ns python script.py

# Extract archive
termux-utils x file.zip
```

---

🧠 **Why this exists**

Termux is powerful but lacks convenience tools.  
This toolkit adds speed, flexibility, and better workflows.

---

⭐ **Support**

If you like this project:

- Star ⭐ the repo  
- Fork 🍴 it  
- Suggest features / improvements

Any FAQ? Click ![here](FAQ.md)

