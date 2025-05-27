import axios from "axios";

const COSMIC_BUCKET = "my-projects-production-9c87d4d0-2952-11f0-8bac-2911276de7fa";
const READ_KEY = "s9YZqaKZN3tTrVAr2BIPYXRaWQkRQZZXPU7kfnvH5J1YMoZgsp";

export const getProjects = async () => {
  const url = `https://api.cosmicjs.com/v3/buckets/${COSMIC_BUCKET}/objects?type=projects&read_key=${READ_KEY}`;

  const response = await axios.get(url);
  return response.data.objects;
};
