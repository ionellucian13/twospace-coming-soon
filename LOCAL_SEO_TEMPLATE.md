# 📍 Local SEO Template - Two Space

## When You Have a Physical Location

This template is ready to use when Two Space opens its physical location. Simply update the values and add to `app/layout.tsx`.

---

## LocalBusiness Schema Markup

### Step 1: Update app/layout.tsx

Add this script to the `<head>` section (after the existing Organization schema):

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Two Space',
      image: 'https://twospace.ro/two-space-logo.svg',
      '@id': 'https://twospace.ro',
      url: 'https://twospace.ro',
      telephone: '+1-555-123-4567', // UPDATE THIS
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Main Street', // UPDATE THIS
        addressLocality: 'Your City', // UPDATE THIS
        addressRegion: 'CA', // UPDATE THIS
        postalCode: '12345', // UPDATE THIS
        addressCountry: 'US' // UPDATE THIS
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 40.7128, // UPDATE THIS
        longitude: -74.0060 // UPDATE THIS
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00', // UPDATE THIS
          closes: '18:00' // UPDATE THIS
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '09:00', // UPDATE THIS
          closes: '15:00' // UPDATE THIS
        }
      ],
      sameAs: [
        'https://facebook.com/twospace',
        'https://instagram.com/twospace',
        'https://twitter.com/twospace',
        'https://linkedin.com/company/twospace'
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8', // UPDATE when you have reviews
        reviewCount: '127' // UPDATE when you have reviews
      },
      servesCuisine: 'Coffee, Beverages',
      paymentAccepted: 'Cash, Credit Card',
      currenciesAccepted: 'USD' // UPDATE THIS
    })
  }}
/>
```

---

## Google My Business Setup

### Step 1: Create Your Listing

1. Visit [Google Business Profile](https://www.google.com/business/)
2. Click "Manage now"
3. Enter business name: **Two Space**
4. Choose category: **Marketing Agency** + **Coffee Shop**
5. Add location (your physical address)
6. Add phone number and website

### Step 2: Verify Your Business

Google will send verification via:
- **Postcard** (most common) - arrives in 5-7 days
- **Phone** (if eligible)
- **Email** (if eligible)

### Step 3: Complete Your Profile

**Essential Information:**
- ✅ Business name: Two Space
- ✅ Category: Marketing Agency, Coffee Shop
- ✅ Address: [Your physical address]
- ✅ Phone: [Your phone number]
- ✅ Website: https://twospace.ro
- ✅ Hours: [Your business hours]

**Additional Information:**
- Description: "Professional marketing services meet inspiring coffee space. Where creativity meets strategy."
- Services: Branding, Marketing Strategy, Coffee, Workspace
- Attributes: Wi-Fi, Wheelchair accessible, Outdoor seating (if applicable)

### Step 4: Upload Photos

**Required Photos:**
- Logo (already have: two-space-logo.svg)
- Exterior of location (building/entrance)
- Interior (workspace, coffee area)
- Products/services (coffee, meeting spaces)
- Team photos (optional)

**Photo Guidelines:**
- Minimum resolution: 720px × 720px
- Format: JPG or PNG
- Clear, well-lit, professional

### Step 5: Collect Reviews

**How to Get Reviews:**
1. Get your unique review link from Google Business
2. Share with satisfied customers via:
   - Email after service
   - Receipt/invoice
   - Social media
   - QR code in location

**Review Link Format:**
```
https://g.page/r/[YOUR_BUSINESS_ID]/review
```

---

## Local Citations & Directories

List your business in these directories for better local SEO:

### Free Directories
- [ ] Google My Business (most important!)
- [ ] Bing Places for Business
- [ ] Apple Maps Connect
- [ ] Yelp for Business
- [ ] Facebook Business Page
- [ ] LinkedIn Company Page
- [ ] Instagram Business Profile
- [ ] Yellow Pages
- [ ] Foursquare

### Industry-Specific
- [ ] Marketing directories (Clutch, Agency Spotter)
- [ ] Coffee/food directories (Zomato, TripAdvisor)
- [ ] Coworking spaces directories

---

## NAP Consistency (Name, Address, Phone)

**IMPORTANT**: Keep your business information identical everywhere!

**Format to Use Everywhere:**
```
Two Space
123 Main Street
Your City, CA 12345
+1-555-123-4567
https://twospace.ro
```

**Where to Check:**
- Website footer
- Google My Business
- Social media profiles
- Directory listings
- Email signatures
- Marketing materials

---

## Local Keywords to Target

### Primary Local Keywords
1. "coffee shop in [Your City]"
2. "marketing agency [Your City]"
3. "creative workspace [Your City]"
4. "branding services [Your City]"
5. "coworking space with coffee [Your City]"

### Long-tail Local Keywords
6. "best marketing agency near me"
7. "coffee shop for entrepreneurs [Your City]"
8. "creative agency with workspace"
9. "branding and coffee [Your City]"
10. "networking coffee shop [Your City]"

### How to Use:
- Include in website content
- Add to Google My Business description
- Use in blog posts (future)
- Include in social media posts

---

## Location Page Template (For Future)

When you create a location page:

### URL Structure
```
https://twospace.ro/location
```

### Content to Include:
```markdown
# Two Space - [Your City] Location

## Where Coffee Meets Strategy

Visit us at our [Your City] location for premium coffee and professional marketing services.

### Address
Two Space
123 Main Street
Your City, CA 12345

### Hours
Monday - Friday: 8:00 AM - 6:00 PM
Saturday: 9:00 AM - 3:00 PM
Sunday: Closed

### Contact
Phone: (555) 123-4567
Email: hello@twospace.ro

### What We Offer
- Specialty Coffee & Beverages
- Marketing Consultation
- Workspace Rentals
- Networking Events
- Brand Development Services

### Getting Here
[Embedded Google Map]

Parking: Street parking available
Public Transit: [Nearest station/bus stop]

### Photos
[Gallery of location photos]

### Reviews
[Embedded Google Reviews widget]
```

---

## Tracking Local SEO Performance

### Google My Business Insights
Monitor these metrics:
- **Discovery**: How customers find you (search vs. maps)
- **Engagement**: Clicks, calls, direction requests
- **Photos**: Total views and customer photos
- **Reviews**: New reviews and average rating

### Google Search Console
Filter by:
- **Queries**: See local search terms
- **Location**: Geographic performance
- **Devices**: Mobile vs. desktop searches

### Goals to Track:
- Phone calls from Google
- Direction requests
- Website clicks from GMB
- Message inquiries
- Review count and rating

---

## Next Steps Checklist

When opening physical location:

**Week 1:**
- [ ] Create Google My Business listing
- [ ] Submit for verification
- [ ] Add complete business information
- [ ] Upload high-quality photos
- [ ] Add LocalBusiness schema to website

**Week 2:**
- [ ] Verify ownership
- [ ] Optimize GMB description with keywords
- [ ] Set up messaging
- [ ] Create posts about opening
- [ ] List in other directories (Yelp, Bing, etc.)

**Week 3-4:**
- [ ] Request reviews from first customers
- [ ] Monitor and respond to reviews
- [ ] Add special attributes (Wi-Fi, accessibility)
- [ ] Create Google Posts regularly
- [ ] Track local search performance

**Ongoing:**
- [ ] Post updates weekly on GMB
- [ ] Respond to all reviews within 24h
- [ ] Update photos monthly
- [ ] Monitor competitor listings
- [ ] Track local keyword rankings

---

**This template is ready to use when you open your physical location! 🎯**
