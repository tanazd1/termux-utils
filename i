#!/data/data/com.termux/files/usr/bin/bash

G="\e[32m"; R="\e[31m"; Y="\e[33m"; C="\e[36m"; X="\e[0m"

debug=0; quiet=0; invert=0; raw=0

# Parse flags
while [[ "$1" == -* ]]; do
    case "$1" in
        -h|--help) echo -e "Usage: i [OPTIONS] CONDITION \n -a and -o not supported."; exit 0 ;;
        -d|--debug) debug=1 ;;
        -q|--quiet) quiet=1 ;;
        -n|--not) invert=1 ;;
        --raw) raw=1 ;;
        *) break ;;
    esac
    shift
done

[[ $# -eq 0 ]] && echo "Usage: i CONDITION" && exit 2

# Preserve quoting
args=("$@")

# Detect AND/OR
and_or=0
for a in "${args[@]}"; do [[ "$a" == "-a" || "$a" == "-o" ]] && and_or=1; done

# Build expression
if [[ $and_or -eq 1 ]]; then
    expr="[ ${args[*]} ]"
else
    expr="[[ ${args[*]} ]]"
fi

[[ $debug -eq 1 ]] && echo -e "${C}Expr:${X} $expr"

# Evaluate safely
eval "$expr" 2>/dev/null && result=1 || result=0

[[ $invert -eq 1 ]] && result=$((!result))

# Output
if [[ $quiet -eq 0 ]]; then
    if [[ $raw -eq 1 ]]; then
        echo "$result"
    else
        [[ $result -eq 1 ]] && echo -e "${G}true${X}" || echo -e "${R}false${X}"
    fi
fi

exit $((1-result ^ 1))
