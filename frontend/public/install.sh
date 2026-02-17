#!/bin/bash

# AnveshakAI CLI Installer

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}Starting AnveshakAI CLI Installation...${NC}"

# correct directory for installation
INSTALL_DIR="$HOME/.anveshak-ai"
REPO_URL="https://github.com/ChinmayBhattt/AnveshakAI-Decentralized-AI-Assistant.git"

# Check for git
if ! command -v git &> /dev/null; then
    echo -e "${RED}Error: git is not installed.${NC}"
    exit 1
fi

# Check for node
if ! command -v node &> /dev/null; then
    echo -e "${RED}Error: node is not installed.${NC}"
    exit 1
fi

# Clone or update repository
if [ -d "$INSTALL_DIR" ]; then
    echo -e "${BLUE}Updating existing installation...${NC}"
    cd "$INSTALL_DIR"
    git pull
else
    echo -e "${BLUE}Cloning repository to $INSTALL_DIR...${NC}"
    git clone "$REPO_URL" "$INSTALL_DIR"
fi

# Install dependencies
echo -e "${BLUE}Installing dependencies...${NC}"
cd "$INSTALL_DIR/cli"
npm install --silent

# Link command
echo -e "${BLUE}Linking 'anveshak' command...${NC}"
npm link --force

echo -e "${GREEN}Installation complete!${NC}"
echo -e "You can now run the CLI using: ${BLUE}anveshak${NC}"
