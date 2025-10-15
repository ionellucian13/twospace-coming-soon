# 🚀 Two Space - Coming Soon Page Instructions

## Pagina Coming Soon este ACTIVĂ cu Brand Guide Oficial

Pagina Coming Soon este acum **homepage-ul principal** al aplicației, stilizată EXACT după brand guide-ul oficial Two Space.

### 🎨 Design Two Space Brand (Implementat):

**Culori Oficiale:**
- **Blood Orange (#FF491F)** - Culoare primară vibrantă
- **Grey Space (#2B2B2B)** - Gri închis, aproape negru
- **Chalk (#F5F5F5)** - Gri deschis pentru background
- **Cream Brand (#F2F6D0)** - Accent galben-verde deschis

**Fonturi Oficiale:**
- **Space Grotesk** - Font principal pentru headings
- **Manrope** - Font secundar pentru body text și UI

**Logo Design (Din Brand Guide):**
- Cerc Orange cu "two SPACE" în Grey Space
- Cerc Grey cu "THINGS WORK OUT." în Chalk

### ✨ Ce include pagina:

- **Logo cercuri Two Space** exact ca în brand guide oficial
- **Heading animat** "Ceva Extraordinar Se Pregătește" cu "Extraordinar" în italic orange
- **Descriere** în română cu fontul Manrope
- **Formular email signup** cu focus state blood-orange
- **3 carduri features**: Marketing Premium, Coffee Experience, Un Singur Loc
- **Animații premium** cu Framer Motion (fade-in, stagger effects)
- **Design responsive** optimizat pentru toate device-urile

### 📋 Cum să RESTAUREZI homepage-ul complet după lansare:

Când ești gata să lansezi site-ul complet Two Space:

1. **Șterge pagina Coming Soon actuală:**
   ```bash
   rm app/page.tsx
   ```

2. **Reactivează homepage-ul complet:**
   ```bash
   mv app/page.main.backup.tsx app/page.tsx
   ```

3. **Restart server (automat în Replit):**
   - Server-ul va recompila automat
   - Homepage-ul complet cu toate secțiunile va fi live

### 🎨 Personalizare Coming Soon Page:

Pentru a modifica conținutul paginii Coming Soon, editează `app/page.tsx`:

- **Logo cercuri**: Liniile 37-62 (modifică textul "two SPACE" și "THINGS WORK OUT.")
- **Textul heading**: Liniile 66-76 (modifică "Ceva Extraordinar Se Pregătește")
- **Subtitlul**: Liniile 81-87 (modifică descrierea în română)
- **Features carduri**: Liniile 128-131 (modifică cele 3 carduri)
- **Footer text**: Linia 152 (modifică copyright-ul)

**Culori Brand** în `tailwind.config.js`:
- `blood-orange` (#FF491F) - Culoarea primară
- `grey-space` (#2B2B2B) - Gri închis
- `chalk` (#F5F5F5) - Background
- `cream-brand` (#F2F6D0) - Accent

**Fonturi Brand**:
- `font-space-grotesk` - Pentru headings și logo
- `font-manrope` - Pentru body text

### 🔄 Backup-uri disponibile:

- **Homepage complet**: `app/page.main.backup.tsx` (toate secțiunile Two Space)
- **Pagina Coming Soon**: Actuala `app/page.tsx`

### 🌐 Conectare la domeniu:

Pagina este gata pentru conectare la domeniul tău! Când conectezi domeniul, vizitatorii vor vedea automat pagina Coming Soon elegantă și profesională.

---

**Creat**: 15 Octombrie 2025  
**Status**: ✅ Coming Soon Page ACTIVĂ ca homepage
