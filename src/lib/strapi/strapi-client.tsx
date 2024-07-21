import Strapi from 'strapi-sdk-js';

export const strapi = new Strapi({
  url: process.env.STRAPI_URL,
  // url: 'http://localhost:1337/',
  axiosOptions: {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer 9505364998c98f1b7cfc562ae20c69a2d890b9202b35fc06f2f1d3294d584b0ecf3af1229df2b0f20382af1d70885eb4a346f861e7355f8fe21f9c04f4f7dd7c863a8ff0b8e7191ac2e63800da4585b0e3f866b5dddf6b9dcec2958f251b15fc8e37f71397a85778c57901b4ff723255f0020e15e07f97dac46e152ff5f59fe2`,
      Authorization: `Bearer f4788ed0c7902acfb9653bdf3e50494738a37de932974ca0b4833a7d34f4b7ab47e669dbc9ddc84e43569127fc1bef4fc61296d67a004a9f9446f265621463b2b890d314681db79d31a07db37202128291c1fc9028f4d0ab25d51b9de99675abf8b355e82274b594d9bb8982cc91003eb043bed8cde776a52b91ebeb7856209f`,
    },
  },
});
