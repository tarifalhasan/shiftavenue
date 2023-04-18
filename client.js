import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const config = {
  projectId: 'jux51xx7',
  dataset: 'production',
  apiVersion: '2021-08-31', // use a UTC date string
  useCdn: true, // Set this to false if you want to retrieve the latest data
};

export const client = createClient(config);

export const urlFor = source => createImageUrlBuilder(config).image(source);
