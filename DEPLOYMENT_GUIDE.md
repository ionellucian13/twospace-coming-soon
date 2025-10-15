# 🚀 Two Space - Deployment & GitHub Guide

This guide will help you deploy your Coming Soon page live and connect it to GitHub.

---

## ✅ Pre-Deployment Checklist

Your app is **READY FOR DEPLOYMENT**! All configurations are complete:

- ✅ **Deployment Config**: Autoscale deployment configured
- ✅ **Build Command**: `npm run build`
- ✅ **Start Command**: `npm run start`
- ✅ **Environment**: Production-ready Next.js app
- ✅ **Newsletter**: Functional with data storage
- ✅ **Assets**: Logo and icons optimized

---

## 🌐 Step 1: Deploy to Replit (Live Publishing)

### Option A: Quick Deploy (Recommended)

1. **Click the "Deploy" button** in the top-right corner of Replit
2. **Choose "Autoscale Deployment"** (already configured)
3. **Review settings**:
   - Machine: 1 vCPU, 2 GiB RAM (recommended)
   - Max machines: 3
   - Build: `npm run build`
   - Run: `npm run start`
4. **Click "Deploy"** - Your app will be live in 2-3 minutes!

### Option B: Manual Configuration

1. Go to **Deployments** tab in Replit
2. Select **"Create Deployment"**
3. Choose **"Autoscale"**
4. Configure as above and deploy

### 🔗 Connect Your Custom Domain

After deployment:

1. Go to **Deployments → Settings → Domain**
2. Click **"Link a domain"** or **"Connect from another registrar"**
3. Enter your domain name (e.g., `twospace.com`)
4. Add the provided **DNS records** to your domain registrar:
   - **A Record**: Points to Replit IP
   - **TXT Record**: For domain verification
5. Wait for DNS propagation (up to 48 hours, usually much faster)

---

## 📦 Step 2: Connect to GitHub

### Using Git Pane (Visual Interface)

1. **Open Git Tool**:
   - Click **Tools** in left sidebar
   - Click **+** to add new tool
   - Select **Git** from the list

2. **Connect to GitHub**:
   - Click **"Connect to GitHub"**
   - Authorize Replit to access your GitHub account
   - Create new repository or connect to existing one

3. **Stage & Commit Changes**:
   - Review changed files in Git pane
   - Check the files you want to commit
   - Write commit message: `"Initial commit: Two Space Coming Soon page"`
   - Click **"Commit"**

4. **Push to GitHub**:
   - Click **"Push"** button
   - Your code is now on GitHub!

### Using Shell (Command Line)

1. **Open Shell**: Tools → Shell

2. **Initialize Git** (if not already):
   ```bash
   git init
   ```

3. **Add Remote** (replace with your GitHub repo URL):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/twospace.git
   ```

4. **Stage All Files**:
   ```bash
   git add .
   ```

5. **Commit Changes**:
   ```bash
   git commit -m "Initial commit: Two Space Coming Soon page"
   ```

6. **Push to GitHub**:
   ```bash
   git push -u origin main
   ```

### 🔐 GitHub Authentication (if needed)

For private repos, create a **Personal Access Token**:

1. Go to GitHub → Settings → Developer Settings → Personal Access Tokens
2. Create new token with **repo** permissions
3. In Replit Shell:
   ```bash
   git push https://YOUR_TOKEN@github.com/YOUR_USERNAME/twospace.git
   ```

Or save in Replit Secrets:
- Key: `GIT_URL`
- Value: `https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/twospace.git`
- Then: `git push $GIT_URL`

---

## 🔄 Step 3: Deploy from GitHub (Optional)

Once your code is on GitHub, you can deploy directly from there:

1. In **Deployments** settings
2. Select **"Deploy from GitHub"**
3. Choose your repository and branch
4. Replit will auto-deploy on every push

---

## 📊 Important Files

### Included in Repository:
- ✅ `app/` - Next.js app with Coming Soon page
- ✅ `public/` - Logo and icons (SVG)
- ✅ `components/` - React components
- ✅ `styles/` - Global styles
- ✅ `README.md` - Project documentation
- ✅ `package.json` - Dependencies
- ✅ `tailwind.config.js` - Design system config

### Excluded from Repository (in `.gitignore`):
- ❌ `node_modules/` - Dependencies (reinstalled on deploy)
- ❌ `.next/` - Build output
- ❌ `data/subscribers.json` - Newsletter data (sensitive)
- ❌ `.env` - Environment variables
- ❌ `attached_assets/` - Temporary uploads

---

## 🎯 Post-Deployment Checklist

After deploying:

- [ ] Visit your live URL to confirm it works
- [ ] Test newsletter subscription
- [ ] Test responsive design on mobile
- [ ] Verify scroll indicator animation
- [ ] Check logo displays correctly
- [ ] Connect custom domain (if applicable)
- [ ] Test on different browsers

---

## 🐛 Troubleshooting

### Build Fails
- Check `package.json` dependencies
- Ensure Node.js version compatibility
- Review build logs in Deployments tab

### Domain Not Working
- Verify DNS records are correct
- Wait 24-48 hours for propagation
- Check domain registrar settings

### Newsletter Not Saving
- Data is stored in `data/subscribers.json`
- Folder is auto-created on first subscription
- File is gitignored for security

---

## 📞 Support

For Replit-specific issues:
- Replit Docs: https://docs.replit.com
- Community: https://ask.replit.com

---

## 🎉 You're Ready!

Your Two Space Coming Soon page is ready to go live! 

**Next Steps:**
1. ✅ Deploy to Replit (get live URL)
2. ✅ Push to GitHub (version control)
3. ✅ Connect custom domain (optional)
4. 🚀 Launch and share with the world!

---

**Built on Balance** ⚖️
© 2025 Two Space
