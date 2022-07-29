import React from 'react'

export const exerciseOptions  = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '6cfb82ef08mshd7f023c8b58253bp1f32edjsnd34416fe0d41',
  }
};


export const FetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

