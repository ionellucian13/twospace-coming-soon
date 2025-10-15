#!/bin/bash

echo "🔧 Fixing Git remote and pushing to GitHub..."
echo ""

# Remove incorrect remote
echo "1️⃣ Removing incorrect remote..."
git remote remove origin 2>/dev/null || true

# Add correct remote
echo "2️⃣ Adding correct remote..."
git remote add origin https://github.com/ionellucian13/twospace-coming-soon.git

# Verify remote
echo "3️⃣ Verifying remote configuration..."
git remote -v

echo ""
echo "4️⃣ Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ DONE! Your repository is now live at:"
echo "🔗 https://github.com/ionellucian13/twospace-coming-soon"
echo ""
echo "Next steps:"
echo "1. Visit your repository on GitHub"
echo "2. Click 'Deploy' in Replit to publish live"
echo "3. Connect your custom domain"
