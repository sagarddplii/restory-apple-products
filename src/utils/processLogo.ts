import { removeBackground, loadImage } from './removeBackground';

export async function processLogoImage(imagePath: string): Promise<string> {
  try {
    // Fetch the image
    const response = await fetch(imagePath);
    const blob = await response.blob();
    
    // Load as HTMLImageElement
    const img = await loadImage(blob);
    
    // Remove background
    const processedBlob = await removeBackground(img);
    
    // Convert to data URL
    return URL.createObjectURL(processedBlob);
  } catch (error) {
    console.error('Error processing logo:', error);
    throw error;
  }
}
