#!/data/data/com.termux/env bash
# x: universal extractor

if [ -z "$1" ]; then
    echo "Usage: x <archive>"
    exit 1
fi

file="$1"

if [ ! -f "$file" ]; then
    echo "x: file not found: $file"
    exit 1
fi

case "$file" in
    *.tar.bz2) tar -xjf "$file" ;;
    *.tar.gz)  tar -xzf "$file" ;;
    *.tar.xz)  tar -xJf "$file" ;;
    *.tar)     tar -xf "$file" ;;
    *.bz2)     bunzip2 "$file" ;;
    *.gz)      gunzip "$file" ;;
    *.zip)     unzip "$file" ;;
    *.rar)     unrar x "$file" ;;
    *.7z)      7z x "$file" ;;
    *)
        echo "x: unknown format: $file"
        exit 1
        ;;
esac
