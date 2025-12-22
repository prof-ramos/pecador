import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

/**
 * Exporta um elemento HTML como PNG
 */
export async function exportToPNG(
  elementId: string,
  fileName: string = 'meus-pecados-2025.png'
): Promise<void> {
  const element = document.getElementById(elementId);

  if (!element) {
    throw new Error(`Element with id "${elementId}" not found`);
  }

  try {
    // Configura o html2canvas
    const canvas = await html2canvas(element, {
      scale: 2, // HD quality
      backgroundColor: null,
      logging: false,
      useCORS: true,
      allowTaint: true,
      width: 1080,
      height: 1920,
    });

    // Converte canvas para blob
    canvas.toBlob((blob) => {
      if (blob) {
        saveAs(blob, fileName);
      } else {
        throw new Error('Failed to generate image');
      }
    }, 'image/png');
  } catch (error) {
    console.error('Error exporting to PNG:', error);
    throw error;
  }
}

/**
 * Verifica se o browser suporta as funcionalidades necessárias
 */
export function checkBrowserSupport(): boolean {
  return !!(
    document.createElement('canvas').getContext &&
    document.createElement('canvas').getContext('2d') &&
    window.Blob
  );
}
