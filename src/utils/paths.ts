// Utility function to get correct paths for GitHub Pages
export const getImagePath = (imagePath: string): string => {
  // Always add the GitHub Pages base path for production
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
  return `/gylog-landing/${cleanPath}`
}
