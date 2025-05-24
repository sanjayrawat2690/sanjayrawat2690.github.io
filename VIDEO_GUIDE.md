# YouTube Video Integration Guide

## How to Add YouTube Videos to Aartis

You can easily add YouTube videos to any individual aarti by editing the `data.js` file.

### Step-by-Step Instructions:

1. **Open the `data.js` file**
2. **Find the deity and aarti** you want to add a video to
3. **Add the `videoLink` property** to the aarti object

### Example:

```javascript
{
    id: "ganesh-1",
    title: "जय गणेश देवा",
    hindi: `जय गणेश, जय गणेश, जय गणेश देवा।
    माता जाकी पार्वती, पिता महादेवा॥`,
    english: `Jai Ganesh, Jai Ganesh, Jai Ganesh Deva.
    Mata Jaaki Parvati, Pita Mahadeva.`,
    videoLink: "https://www.youtube.com/watch?v=ZYxdhMAF4F0"  // ← Add this line
}
```

### Supported YouTube URL Formats:

✅ **Standard YouTube URLs:**
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://www.youtube.com/watch?v=VIDEO_ID&other_params`

✅ **Short YouTube URLs:**
- `https://youtu.be/VIDEO_ID`

✅ **Embed URLs:**
- `https://www.youtube.com/embed/VIDEO_ID`

### Important Notes:

- **Each aarti can have its own video** - you're not limited to one video per deity
- **Videos are optional** - if you don't add a `videoLink`, no video will be shown for that aarti
- **Videos appear below the aarti text** with a clean white background
- **Videos are responsive** and work on all devices

### Examples in the Current Data:

1. **Ganesh Aarti 1** (जय गणेश देवा) - Has video
2. **Ganesh Aarti 2** (श्री गणेश चालीसा) - No video
3. **Lakshmi Aarti** - Example video link added
4. **Shiva Aarti** - Example video link added
5. **Krishna Aarti** - Example video link added

### After Making Changes:

1. **Save the `data.js` file**
2. **Regenerate static pages:** Run `node generate-static-pages.js`
3. **Commit and push to git**
4. **Your videos will be live!**

### Testing:

- Visit any deity page on your website
- Click on different aarti cards
- Videos should appear/disappear based on whether the aarti has a `videoLink`

---

**Need help?** The system automatically handles video ID extraction and embedding - just provide the YouTube URL and it will work! 