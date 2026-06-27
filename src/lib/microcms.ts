import { createClient } from "microcms-js-sdk";
import type { MicroCMSListContent, MicroCMSImage } from "microcms-js-sdk";

const serviceDomain = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN || "";
const apiKey = import.meta.env.VITE_MICROCMS_API_KEY || "";

export const isMicroCMSEnabled = !!(serviceDomain && apiKey);

export const client = isMicroCMSEnabled
  ? createClient({ serviceDomain, apiKey })
  : null;

export type Tag = {
  name: string;
} & MicroCMSListContent;

export type Case = {
  title: string;
  image: MicroCMSImage;
  instagramUrl: string;
  tag: Tag;
} & MicroCMSListContent;
