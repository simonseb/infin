import Strapi from 'strapi-sdk-js';

export const strapi = new Strapi({
  url: process.env.STRAPI_URL,
  // url: 'http://localhost:1337/',
  axiosOptions: {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer 9505364998c98f1b7cfc562ae20c69a2d890b9202b35fc06f2f1d3294d584b0ecf3af1229df2b0f20382af1d70885eb4a346f861e7355f8fe21f9c04f4f7dd7c863a8ff0b8e7191ac2e63800da4585b0e3f866b5dddf6b9dcec2958f251b15fc8e37f71397a85778c57901b4ff723255f0020e15e07f97dac46e152ff5f59fe2`,
      Authorization: `Bearer 95e005e3a9fb9de4d73a8018430e4fc2e1fd06d6ae51339ec83e3d3ea94f3a2e65a2a5161af0b3f4a43327d84a2effd75f0b62ce70940e37e8cb6a9ca1dee6e15a6e1b91d9914fb42d407c571bc42fe731166d7167c417f9f33870c87e8351906c28f9d6cee9b45ebc5e40c6b8aa8286116dd957cc1b8802f9c401f9c6d81824`,
    },
  },
});
