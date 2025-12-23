/**
 * Opções para exportação de imagem
 */
export interface ExportOptions {
  /** Escala de renderização (1-4). Padrão: auto-detectado por dispositivo. */
  scale?: number;
}

/**
 * Detecta se é um dispositivo móvel para otimização de memória
 */
function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(max-width: 768px)').matches ||
         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Exporta um elemento HTML como PNG
 * Usa dynamic import para carregar html2canvas apenas quando necessário (-362KB bundle inicial)
 * @param elementId - ID do elemento DOM a ser exportado
 * @param fileName - Nome do arquivo de saída
 * @param options - Opções de exportação (escala, etc.)
 */
export async function exportToPNG(
  elementId: string,
  fileName: string = 'meus-pecados-2025.png',
  options?: ExportOptions
): Promise<void> {
  // Validação de escala (1-4)
  if (options?.scale !== undefined) {
    if (!Number.isFinite(options.scale) || options.scale < 1 || options.scale > 4) {
      throw new RangeError('Export scale must be a finite number between 1 and 4');
    }
  }

  const element = document.getElementById(elementId);

  if (!element) {
    throw new Error(`Element with id "${elementId}" not found`);
  }

  // Dynamic import - carrega apenas quando necessário (economia de 362KB no bundle inicial)
  const [{ default: html2canvas }, { saveAs }] = await Promise.all([
    import('html2canvas'),
    import('file-saver'),
  ]);

  // Escala adaptativa: 2x para mobile (economia de memória), 3x para desktop
  // Usuário pode sobrescrever via options.scale
  const autoScale = isMobileDevice() ? 2 : 3;
  const scale = options?.scale ?? autoScale;

  // Aguarda as fontes carregarem e garante que o browser teve tempo de renderizar
  await document.fonts.ready;
  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

  try {
    // Captura o elemento exatamente como está renderizado
    const canvas = await html2canvas(element, {
      scale,
      backgroundColor: '#F5F4F1', // Força cor de fundo do cartão (celestial-ivory)
      logging: false,
      useCORS: true,
      allowTaint: false, // Mais seguro: assume que fontes externas suportam CORS
      // Melhora renderização de texto
      onclone: (clonedDoc) => {
        const clonedElement = clonedDoc.getElementById(elementId);
        if (clonedElement) {
          // Força antialiasing no texto
          // @ts-expect-error - Propriedades CSS não padrão
          clonedElement.style.fontSmooth = 'always';
          // @ts-expect-error - Propriedades CSS não padrão
          clonedElement.style.webkitFontSmoothing = 'antialiased';
          // @ts-expect-error - Propriedades CSS não padrão
          clonedElement.style.mozOsxFontSmoothing = 'grayscale';
        }
      },
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
