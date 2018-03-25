export interface PartySummaryEntity {
  date: string;
  overview: string;
  title: string;
  thumbnail?: string;
}

export interface PartySummary {
  date: Date;
  overview: string;
  title: string;
  thumbnail?: string;
}

export interface PartyDetailEntity {
  date: string;
  title: string;
  html: string;
}

export interface PartyDetail {
  date: Date;
  title: string;
  html: string;
}
