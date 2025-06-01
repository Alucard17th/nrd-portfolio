import axios from "axios";

const COSMIC_BUCKET = import.meta.env.VITE_COSMIC_BUCKET;
const READ_KEY = import.meta.env.VITE_COSMIC_READ_KEY;

export const getProjects = async () => {
  const url = `https://api.cosmicjs.com/v3/buckets/${COSMIC_BUCKET}/objects?type=projects&read_key=${READ_KEY}`;

  const response = await axios.get(url);
  return response.data.objects;
};
