#!/bin/bash

# Two Space - Git Commit & Push Script
# Run this script to commit and push the Coming Soon page to GitHub

echo "🚀 Two Space - GitHub Deployment Script"
echo "========================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git branch -M main
fi

# Check if remote exists
if ! git remote | grep -q origin; then
    echo ""
    echo "⚠️  GitHub remote not configured!"
    echo "Please enter your GitHub repository URL:"
    echo "Example: https://github.com/YOUR_USERNAME/twospace-coming-soon.git"
    read -p "Repository URL: " repo_url
    git remote add origin "$repo_url"
    echo "✅ Remote added: $repo_url"
fi

echo ""
echo "📋 Staging files for Coming Soon page..."

# Add all necessary files for Coming Soon page
git add app/
git add components/
git add public/
git add styles/
git add lib/
git add package.json
git add package-lock.json
git add next.config.js
git add tailwind.config.js
git add postcss.config.js
git add tsconfig.json
git add components.json
git add README.md
git add DEPLOYMENT_GUIDE.md
git add replit.md
git add .gitignore

echo "✅ Files staged successfully!"
echo ""

# Show status
echo "📊 Git Status:"
git status --short

echo ""
echo "💬 Committing changes..."
git commit -m "Initial commit: Two Space Coming Soon page

- Modern Coming Soon page with Blood Orange brand
- Logo with custom 'î' letter design  
- Newsletter subscription with validation
- Scroll indicator animation
- Responsive design (mobile-first)
- Next.js 15 with TailwindCSS 4
- Production-ready deployment config"

echo ""
echo "🚀 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ SUCCESS! Your Coming Soon page is now on GitHub! 🎉"
echo ""
echo "Next steps:"
echo "1. Click 'Deploy' button in Replit to publish live"
echo "2. Connect your custom domain in Deployments settings"
echo ""
