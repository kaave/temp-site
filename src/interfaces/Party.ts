export interface PartySummaryEntity {
  draft: false;
  title: string;
  dir: string;
  base: string;
  ext: string;
  sourceBase: string;
  sourceExt: string;
}

export interface PartyDetailEntity {
  draft: false;
  bodyContent: string;
  bodyHtml: string;
  title: string;
  dir: string;
  base: string;
  ext: string;
  sourceBase: string;
  sourceExt: string;
}

export interface Parties {
  [key: string]: PartySummaryEntity;
}
