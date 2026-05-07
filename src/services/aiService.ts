/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Artwork } from "../constants";
import { analyzeArtTasteFixed, TasteAnalysis } from "./artAnalysisLogic";

export type { TasteAnalysis };

export async function analyzeArtTaste(likedArtworks: Artwork[]): Promise<TasteAnalysis> {
  // Use the fixed deterministic logic for "Fixed Question Pool Mode"
  return analyzeArtTasteFixed(likedArtworks);
}
