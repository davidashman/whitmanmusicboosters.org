# Whitman Music Boosters - Donation Website

A modern, responsive Next.js website for Whitman Music Boosters to accept donations via Donorbox.

## Features

- 🎵 Beautiful, modern design featuring the Whitman Music logo
- 💳 Integrated Donorbox donation widget
- 📱 Fully responsive design for all devices
- ⚡ Fast loading with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS
- 🔍 SEO optimized with proper metadata

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd whitmanmusicboosters.org
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Donorbox Integration

The website includes a Donorbox iframe for accepting donations. To customize the donation form:

### Current Setup
The donation widget is currently pointing to a placeholder URL:
```
https://donorbox.org/embed/whitman-music-boosters-donation
```

### To Set Up Your Own Donorbox Form:

1. **Create a Donorbox Account:**
   - Go to [donorbox.org](https://donorbox.org)
   - Sign up for an account
   - Create a new donation form

2. **Customize Your Form:**
   - Set your organization name as "Whitman Music Boosters"
   - Add your mission statement
   - Configure donation amounts
   - Set up tax receipt settings

3. **Get Your Embed Code:**
   - In your Donorbox dashboard, go to your form
   - Click "Embed" or "Share"
   - Copy the iframe embed code

4. **Update the Website:**
   - Open `src/app/page.tsx`
   - Find the iframe section (around line 70)
   - Replace the `src` attribute with your Donorbox form URL

### Example Donorbox iframe:
```html
<iframe 
  src="https://donorbox.org/embed/your-actual-form-name" 
  name="donorbox" 
  allowpaymentrequest="allowpaymentrequest" 
  seamless="seamless" 
  frameborder="0" 
  scrolling="no" 
  height="900px" 
  width="100%"
  style={{
    maxWidth: '500px',
    minWidth: '250px',
    maxHeight: 'none!important'
  }}
></iframe>
```

## Customization

### Logo
The logo is located at `public/whitman-music-logo.svg`. You can replace this with your own logo file.

### Colors and Styling
The website uses a blue gradient theme. To customize colors, edit the Tailwind classes in `src/app/page.tsx`:

- Background gradient: `bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900`
- Text colors: `text-white`, `text-blue-100`, `text-blue-200`
- Card backgrounds: `bg-white/10`

### Content
Update the mission statement, descriptions, and other text content in `src/app/page.tsx`.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## File Structure

```
src/
├── app/
│   ├── page.tsx          # Main donation page
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles
public/
├── whitman-music-logo.svg # Logo file
└── ...                   # Other static assets
```

## Support

For questions about:
- **Website functionality**: Check the Next.js documentation
- **Donorbox integration**: Contact Donorbox support
- **Whitman Music Boosters**: Contact your organization

## License

This project is for the exclusive use of Whitman Music Boosters.
