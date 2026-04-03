#!/data/data/com.termux/files/usr/bin/bash

echo "[*] Installing termux-utils..."

PREFIX="/data/data/com.termux/files/usr"
BIN_DIR="$PREFIX/bin"
BASE_URL="https://raw.githubusercontent.com/tanazd2/termux-utils"
# 🔥 DEFINE FILES HERE (IMPORTANT)
FILES="c cdt exe! lock ns r su tc tct x lfsls lfsrm lfsdu lfsmkdir lfstouch"
for cmd in $FILES; do
    echo "[*] Installing $cmd..."

    if curl -fsSL "$BASE_URL/$cmd" -o "$BIN_DIR/$cmd"; then
        chmod +x "$BIN_DIR/$cmd"
        echo "[✓] Installed $cmd"
    else
        echo "[✗] Failed $cmd"
    fi
done

 
echo "[✓] Done!"
echo "installing headers..."

SO="libobjects.so"
H="objects.h"
HDIR="$PREFIX/include"
SODIR="$PREFIX/lib"

for so in $SO; do
 echo Installing $so
 curl -fsSL $BASE_URL/$so -o $SODIR/$so
done

for h in $H; do
 echo installing $h
 curl -fsSL $BASE_URL/$h -o $HDIR/$h
done

