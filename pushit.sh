#!/usr/bin/env bash
set -e
echo ""
git status
echo ""
read -p "Commit message: " msg
git add -A
git commit -m "$msg"
git push origin main
