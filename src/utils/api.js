import axios from "axios";

const API_KEY = "28cebdf363msh969d84e2b2ebc0ep163c5cjsn56ddb1c20a51";
const API_HOST = "instagram-scraper-api2.p.rapidapi.com";

const createApiOptions = (endpoint, username) => ({
  method: "GET",
  url: `https://${API_HOST}/v1${endpoint === "posts" ? ".2" : ""}/` + endpoint,
  params: {
    username_or_id_or_url: username,
  },
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": API_HOST,
  },
  timeout: 5000, // Add a timeout of 5 seconds
});

export const fetchInstagramProfile = async (username) => {
  try {
    const response = await axios.request(createApiOptions("info", username));
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching Instagram profile:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const fetchInstagramFollowers = async (username) => {
  try {
    const response = await axios.request(
      createApiOptions("followers", username)
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching Instagram followers:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const fetchInstagramFollowing = async (username) => {
  try {
    const response = await axios.request(
      createApiOptions("following", username)
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching Instagram following:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const fetchInstagramPosts = async (username) => {
  try {
    const response = await axios.request(createApiOptions("posts", username));
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching Instagram posts:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
