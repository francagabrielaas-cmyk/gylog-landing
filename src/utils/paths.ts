// Utility function to get correct paths for GitHub Pages
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Return path with GitHub Pages base
  return `/gylog-landing/${cleanPath}`
}

// Helper function for images
export const getImagePath = (imagePath: string): string => {
  return getAssetPath(imagePath)
}

// Helper function for other assets
export const getAssetUrl = (assetPath: string): string => {
  return getAssetPath(assetPath)
}
