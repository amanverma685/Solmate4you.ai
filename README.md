# solmate4you.ai - Investor Site

A beautiful, single-page investor website for solmate4you.ai featuring smooth scroll animations and a modern, inviting design with soft pastel colors.

## Features

- **Single-page scrollable design** - All content on one continuous page
- **Smooth scroll animations** - Sections fade in as you scroll using Framer Motion
- **Soft pastel theme** - Gentle blues and greens for a calm, welcoming atmosphere
- **Responsive design** - Works beautifully on all devices
- **Modern UI** - Professional and elegant design suitable for investor pitches

## Sections

1. **Header** - Prominent header with "Building an MVP" button
2. **Welcome Section** - Introduction to solmate4you.ai as a virtual voice companion
3. **Features Section** - Three key features with animated icons:
   - AI Chat Companion
   - Community Connection
   - Interactive Sessions
4. **Impact Section** - User testimonials and mission statement
5. **Developer Section** - Team introduction with photos

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
# or
npm start
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Framer Motion** - Smooth animations
- **Tailwind CSS** - Styling with custom pastel color palette

## Customization

### Team Photos

To add team member photos, update the `image` property in the `teamMembers` array in `src/components/DeveloperSection.jsx`. Place images in the `public` folder and reference them as `/image-name.jpg`.

### Testimonials

Edit the testimonials array in `src/components/ImpactSection.jsx` to update user testimonials.

### Colors

The color palette can be customized in `tailwind.config.js` under the `extend.colors` section.

