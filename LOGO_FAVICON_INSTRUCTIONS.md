# Logo and Favicon Setup Instructions

## Required Files

To complete the branding setup, you need to add the following image files to the `public` folder:

### 1. Favicon (Browser Tab Icon)
- **File name:** `favicon.png`
- **Location:** `/public/favicon.png`
- **Recommended size:** 32x32 pixels or 64x64 pixels
- **Format:** PNG with transparent background

### 2. Logo (Touch Icon / Brand Logo)
- **File name:** `logo.png`
- **Location:** `/public/logo.png`
- **Recommended size:** 180x180 pixels (for Apple touch icon)
- **Format:** PNG

## How to Add

1. Create or obtain your PrimusOrigin logo and favicon images
2. Save them with the exact names mentioned above
3. Place them in the `public` folder of your project
4. The website will automatically use them

## Optional: Add Logo to Navbar

If you want to display a logo image in the navbar instead of just text, you can update `src/components/Navbar.jsx`:

Replace the text logo:
```jsx
<Link to="/" className="...">
    PrimusOrigin
</Link>
```

With an image logo:
```jsx
<Link to="/" className="flex items-center gap-2">
    <img src="/logo.png" alt="PrimusOrigin" className="h-8 md:h-10" />
    <span className="text-xl md:text-2xl font-serif font-bold">PrimusOrigin</span>
</Link>
```

Or just the image:
```jsx
<Link to="/">
    <img src="/logo.png" alt="PrimusOrigin" className="h-10 md:h-12" />
</Link>
```

## Design Recommendations

- Use your brand colors (primary green #0E3D2F, accent gold #D4B98A)
- Keep the design simple and recognizable at small sizes
- Ensure good contrast for visibility
- Consider using a pepper or spice-related icon
