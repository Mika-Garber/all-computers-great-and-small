const cdnBase =
  'https://images.squarespace-cdn.com/content/v1/658da6a7eae9d204cd8b67d4';

function imageUrl(path: string) {
  return `${cdnBase}/${path}?format=750w`;
}

export interface PhotoComparisonItem {
  src: string;
  alt: string;
  caption: string;
}

export interface PhotoComparisonRow {
  items: PhotoComparisonItem[];
  compact?: boolean;
}

export interface NegativesSection {
  negative: PhotoComparisonItem;
  printScan: PhotoComparisonItem;
  description: string;
  restored: PhotoComparisonItem;
}

export const photoVideoContent = {
  intro:
    'Do you have a box of photos that are getting curled, discolored, or that have suffered water damage? Or maybe a bureau full of aging VHS or 8mm tapes taking up space that might have some precious footage? Take some of those treasured memories and send them our way.',
  detail:
    'We can digitize those tapes and restore photos to their original beauty, or use the wonders of photo editing to bring out even more detail and color than before. Some photos were originally developed with processing that resulted in unrealistic hues, and we can bring out colors in your photos that you’ve never thought possible. The photos below are just a few examples.',
  photoRestorationRows: [
    {
      compact: true,
      items: [
        {
          src: imageUrl('95f24ee6-11cc-4502-bc7a-f3743ee59fb5/dad%27s+dad+ORIG+scan.jpg'),
          alt: 'Scanned photo of grandfather circa 1930s before restoration',
          caption: 'Scanned photo of my grandfather, circa 1930s.',
        },
        {
          src: imageUrl('c3f8f0fc-5107-4a4d-bddf-b94c2c300c35/Restored.jpeg'),
          alt: 'Grandfather photo after restoration',
          caption:
            'Wrinkles and folds removed, noise reduced, details enhanced, even at a larger resolution and size.',
        },
      ],
    },
    {
      items: [
        {
          src: imageUrl('752005d1-d04a-471f-89a0-ce4ab049c14e/Dad+n+Me.JPEG'),
          alt: 'Naturalization Day photo before restoration',
          caption: 'Scanned photo of my father and I on my Naturalization Day (1976).',
        },
        {
          src: imageUrl('afe30eb3-be83-4410-9221-2e406386f7fa/Dad+n+Me-restored-red.JPEG'),
          alt: 'Naturalization Day photo intermediate restoration',
          caption:
            'Intermediate restoration - less blurry but retaining “original” red hue characteristic of print processing from that time.',
        },
        {
          src: imageUrl('907e5e01-9764-4288-92d0-bf9df7f094f5/Dad+n+Me-FINAL.jpeg'),
          alt: 'Naturalization Day photo final restoration',
          caption:
            'Further restoration, with balancing of colors and lighting for a more realistic image.',
        },
      ],
    },
  ] satisfies PhotoComparisonRow[],
  negativesToDigital: {
    negative: {
      src: imageUrl('be7cbd43-8ba4-4cb6-9abc-af778287c407/negative.jpeg'),
      alt: '35mm film negative',
      caption: '35mm negative',
    },
    printScan: {
      src: imageUrl('a53e7e0b-2984-42c0-8296-9d1b868bb7f8/ap-scan+of+original.jpg'),
      alt: 'Scan of photo as originally developed from negative',
      caption: 'Scan of photo as originally developed from negative (early 2000s)',
    },
    description:
      'By scanning the original negative, we were able to ‘re-develop’ the photo, restoring more of its original colors, enhancing the contrast of the whites, and bringing back lost details in both the background and faces.',
    restored: {
      src: imageUrl(
        'd2c3a825-6ac1-472f-9f56-11836fca07b0/ap-restored-topaz-face-sharpen-color-upscale-1163h.jpg',
      ),
      alt: 'Photo re-developed from original negative',
      caption: '',
    },
  } satisfies NegativesSection,
};
