#!/usr/bin/env bash
echo "┏━━━ 🧹 Cleaning Workspace ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
yarn lerna run clean --concurrency 4
