export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "657ae6e05dmshd145d249109ead7p1ccbe8jsn6d5f82c17c82",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "6cfb82ef08mshd7f023c8b58253bp1f32edjsnd34416fe0d41",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
