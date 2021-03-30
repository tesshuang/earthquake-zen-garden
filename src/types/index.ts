export interface Site {
  title: string;
  heroImage: string;
  logoImage: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  avatarImage: string;
  phone: string;
  email: string;
  bio: string;
}

export interface Metadata {
  generated: number;
  url: string;
  title: string;
  status: number;
  api: string;
  count: number;
}

export interface Properties {
  mag: number;
  place: string;
  time: any;
  updated: any;
  tz: number;
  url: string;
  detail: string;
  felt?: number;
  cdi?: number;
  mmi?: any;
  alert?: any;
  status: string;
  tsunami: number;
  sig: number;
  net: string;
  code: string;
  ids: string;
  sources: string;
  types: string;
  nst?: number;
  dmin?: number;
  rms: number;
  gap?: number;
  magType: string;
  type: string;
  title: string;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
  id: string;
}

export interface Data {
  type: string;
  metadata: Metadata;
  features: Feature[];
  bbox: number[];
}