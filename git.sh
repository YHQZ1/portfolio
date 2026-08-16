#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Usage: ./git.sh <commit-message>"
    exit 1
fi

git add .
git commit -m "$*"
git push origin main