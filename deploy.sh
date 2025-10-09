#!/bin/bash

# Exit immediately if any command fails
set -e

# Paths
REPO_PATH="/home/cyonexla/repositories/cyonex"
VENV_PATH="/home/cyonexla/nodevenv/repositories/cyonex/24/bin/activate"
DEPLOYPATH="/home/cyonexla/public_html"

echo "Starting deployment..."

# 1. Activate Node.js virtual environment
source "$VENV_PATH"
echo "Activated Node.js virtual environment."

# 2. Navigate to repository
cd "$REPO_PATH"

# 3. Install dependencies
echo "Installing dependencies..."
npm ci

# 4. Build React app
echo "Building React app..."
npm run build

# 5. Remove old public_html files
echo "Cleaning old files in public_html..."
rm -rf "$DEPLOYPATH"/*

# 6. Copy new build (dist) to public_html
echo "Copying new build to public_html..."
cp -R dist/* "$DEPLOYPATH"

# 7. Add .htaccess for React Router SPA
echo "Adding .htaccess for SPA routing..."
cat > "$DEPLOYPATH/.htaccess" <<EOL
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
</IfModule>
EOL

echo "Deployment complete!"
