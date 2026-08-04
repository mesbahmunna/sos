import { IndustryData } from "./industries";
import { chunk1 } from "./chunk1";
import { chunk2 } from "./chunk2";
import { chunk3 } from "./chunk3";

export const industries24Data: Record<string, IndustryData> = {
  ...chunk1,
  ...chunk2,
  ...chunk3,
};

export const industries24 = Object.values(industries24Data);
