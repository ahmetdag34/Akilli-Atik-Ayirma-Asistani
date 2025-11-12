
export enum WasteCategory {
  PLASTIC = 'Plastik',
  PAPER = 'Kağıt',
  GLASS = 'Cam',
  METAL = 'Metal',
  ORGANIC = 'Organik',
  UNKNOWN = 'Bilinmeyen',
}

export interface WasteClassificationResult {
  item: string;
  category: WasteCategory;
  description: string;
  recyclingTip: string;
}
