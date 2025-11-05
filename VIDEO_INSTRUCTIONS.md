# How to Add Your 60-Second Video

## Location
The video placeholder is in: `/app/frontend/src/pages/FunnelLanding.js`

## Instructions

### Option 1: Add Video URL (Recommended)
Replace the video placeholder section (lines ~55-71) with:

```jsx
{/* VIDEO SECTION */}
<div className="video-container">
  <video 
    controls 
    className="video-player"
    poster="YOUR_THUMBNAIL_URL_HERE"
  >
    <source src="YOUR_VIDEO_URL_HERE.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
```

### Option 2: Embed YouTube/Vimeo
Replace with iframe:

```jsx
{/* VIDEO SECTION */}
<div className="video-container">
  <iframe
    className="video-iframe"
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
    title="Course Introduction"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
```

### Option 3: Use a Video Hosting Service
Upload your video to:
- YouTube (unlisted)
- Vimeo
- AWS S3
- Cloudflare Stream

Then use the embed code provided by the service.

## Styling
The video container already has proper styling for:
- 16:9 aspect ratio
- Responsive design
- Shadow and border radius
- Mobile optimization

No additional CSS changes needed!

## Current Placeholder Location
Look for this comment in the code:
```jsx
{/* VIDEO PLACEHOLDER */}
<div className="video-container">
  <div className="video-placeholder">
    ...
  </div>
</div>
```

Replace everything inside `<div className="video-container">...</div>` with your video code.
