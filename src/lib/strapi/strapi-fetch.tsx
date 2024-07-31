"use client"

import { StrapiResponse } from 'strapi-sdk-js';
import { strapi } from './strapi-client';
import {
  StrapiButtonFields,
  StrapiImageFields,
  StrapiVideoFields,
} from './strapi-types';

// get layout
export async function getLayout() {
  const resp = await strapi.find('layout', {
    populate: {
      menu: {
        populate: '*',
      },
      socials: {
        populate: '*',
      },
      legal: {
        populate: '*',
      },
      footerVideo: StrapiVideoFields,
    },
  });

  return responseHandler(resp);
}

export async function getHome() {
  const resp = await strapi.find('homes', {
    populate: {
      blocks: {
        populate: '*',
      },
    },
  });
  return resp;
}

// get contact
export async function getContact() {
  const resp = await strapi.find('contact', {
    populate: {
      form: {
        populate: '*',
      },
    },
  });

  return responseHandler(resp);
}

export async function getBusiness() {
  const resp = await strapi.find('businesses', {
    populate: {
      blocks: {
        populate: '*',
      },
    },
  });
  return resp;
}

export async function getIndividual() {
  const resp = await strapi.find('individuals', {
    populate: {
      blocks: {
        populate: '*',
      },
    },
  });
  return resp;
}

export async function getCapitalism() {
  const resp = await strapi.find('capitalisms', {
    populate: {
      blocks: {
        populate: '*',
      },
    },
  });
  return resp;
}

export async function getMarketing() {
  const resp = await strapi.find('marketings', {
    populate: {
      blocks: {
        populate: '*',
      },
    },
  });
  return resp;
}

export async function getBlog() {
  const resp = await strapi.find('blogs', {
    populate: {
      blogs: {
        populate: {
          main: {
            populate: {
              mainSection: {
                populate: '*',
              },
              avata: {
                populate: '*',
              },
            },
          },
          related_posts: {
            populate: {
              mainSection: {
                populate: '*',
              },
              avata: {
                populate: '*',
              },
            },
          },
        },
      },
    },
  });
  return resp;
}

export async function getHeader() {
  const resp = await strapi.find('headers', {
    populate: '*',
  });
  return resp;
}

export async function getFooter() {
  const resp = await strapi.find('footers', {
    populate: '*',
  });
  return resp;
}
// get page by slug
export async function getPage(slug: string) {
  const resp = await strapi.findOne('pages', slug, {
    fields: ['id', 'title', 'slug', 'navColor'],
    populate: {
      blocks: {
        populate: {
          video: StrapiVideoFields,
          poster: StrapiImageFields,
          image: StrapiImageFields,
          projects: {
            populate: {
              featuredImage: StrapiImageFields,
            },
          },
          services: {
            populate: {
              featuredImage: StrapiImageFields,
            },
          },
          items: {
            populate: '*',
          },
          socials: {
            populate: '*',
          },
          form: {
            populate: {
              fields: {
                populate: '*',
              },
              options: {
                populate: '*',
              },
            },
          },
          images: {
            populate: StrapiImageFields,
          },
          button: StrapiButtonFields,
        },
      },
    },
  });

  return responseHandler(resp);
}

// get services by slug
export async function getServices(slug: string) {
  const resp = await strapi.findOne('services', slug, {
    fields: ['id', 'title', 'slug', 'navColor'],
    populate: {
      featuredImage: StrapiImageFields,
      blocks: {
        populate: {
          items: {
            populate: '*',
          },
          socials: {
            populate: '*',
          },
          button: StrapiButtonFields,
          email: StrapiButtonFields,
          image: StrapiImageFields,
          projects: {
            populate: {
              featuredImage: StrapiImageFields,
            },
          },
        },
      },
    },
  });

  return responseHandler(resp);
}

// get project by slug
export async function getProject(slug: string) {
  const resp = await strapi.findOne('projects', slug, {
    fields: ['id', 'title', 'slug', 'navColor', 'url'],
    populate: {
      featuredImage: StrapiImageFields,
      blocks: {
        populate: {
          image: StrapiImageFields,
          video: StrapiVideoFields,
          project: {
            populate: {
              featuredImage: StrapiImageFields,
            },
          },
          items: {
            populate: '*',
          },
        },
      },
    },
  });

  return responseHandler(resp);
}

// get post by slug
export async function getPost(slug: string) {
  const resp = await strapi.findOne('posts', slug, {
    fields: ['id', 'title', 'slug', 'navColor', 'publishedAt'],
    populate: {
      featuredImage: StrapiImageFields,
      categories: {
        populate: '*',
      },
      blocks: {
        populate: {
          image: StrapiImageFields,
          // video: StrapiVideoFields,
          post: {
            populate: {
              featuredImage: StrapiImageFields,
            },
          },
          content: {
            populate: '*',
          },
          // items: {
          //   populate: '*',
          // },
        },
      },
    },
  });

  return responseHandler(resp);
}

// get projects by slug
export async function getProjects(params?: any) {
  let filters: any = [];

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      const paramsArray = (value as string).split(',');

      paramsArray.forEach((prm) => {
        filters.push({
          [key]: {
            slug: {
              $eq: prm,
            },
          },
        });
      });
    }
  }

  const resp = await strapi.find('projects', {
    fields: ['id', 'title', 'slug'],
    filters: {
      $or: filters,
    },
    populate: {
      featuredImage: StrapiImageFields,
      categories: {
        populate: '*F',
      },
    },
  });

  return responseHandler(resp);
}

// get posts by slug
export async function getPosts(params?: any) {
  let filters: any = [];

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      const paramsArray = (value as string).split(',');

      paramsArray.forEach((prm) => {
        filters.push({
          [key]: {
            slug: {
              $eq: prm,
            },
          },
        });
      });
    }
  }

  const resp = await strapi.find('posts', {
    fields: ['id', 'title', 'slug'],
    filters: {
      $or: filters,
    },
    populate: {
      featuredImage: StrapiImageFields,
      categories: {
        populate: '*',
      },
    },
  });

  return responseHandler(resp);
}

// get projects categories
export async function getProjectCategories() {
  const resp = await strapi.find('project-categories', {
    fields: ['id', 'title', 'slug'],
    populate: {
      projects: '*',
    },
  });

  return responseHandler(resp);
}

// get categories
export async function getCategories() {
  const resp = await strapi.find('categories', {
    fields: ['id', 'title', 'slug'],
    populate: {
      posts: '*',
    },
  });

  return responseHandler(resp);
}

// get page nav color
export async function getNavColor(slug: string) {
  const resp = await strapi.findOne('pages', slug, {
    fields: ['id', 'navcolor'],
  });

  return responseHandler(resp);
}

// get seo by slug
export async function getSEO(slug: string) {
  const resp = await strapi.findOne('pages', slug, {
    fields: ['id', 'title', 'slug'],
    populate: {
      seo: {
        populate: '*',
      },
    },
  });

  return responseHandler(resp);
}

// get contacts
export async function getContacts() {
  const resp = await strapi.find('contacts', {
    // fields: ['id', 'image'],
    populate: {
      demo: {
        populate: '*',
      },
      touch: { populate: '*' },
      image: {
        populate: '*',
      },
    },
  });

  return responseHandler(resp);
}

// get settings
export async function getSettings() {
  const resp = await strapi.find('settings', {
    populate: {
      setting: {
        populate: {
          favicon: {
            populate: '*',
          },
        },
      },
    },
  });

  return responseHandler(resp);
}

export async function sendEmail(
  to: string,
  subject: string,
  text: string,
  html: string,
) {
  strapi.axios.defaults.method = 'POST';
  // strapi.axios.defaults.headers. = '';

  const resp = await strapi.axios.post(
    (process.env.STRAPI_URL + 'api/send-email') as string,
    {
      to,
      subject,
      text,
      html,
    },
  );

  return resp.data;
}

// handle response data
function responseHandler(resp: StrapiResponse<any>) {
  const { data, meta } = resp;
  const isArray = Array.isArray(data);

  const newData = [data].reduce(
    (prev, curr) => {
      if (isArray) {
        return curr.reduce(
          (currPrev: any, currNext: any, index: number) => [
            ...currPrev,
            {
              id: currNext.id,
              ...currNext.attributes,
            },
          ],
          [],
        );
      } else {
        return {
          id: curr.id,
          ...curr.attributes,
        };
      }
    },
    isArray ? [] : {},
  );

  if (newData?.blocks) {
    const newBlocks = newData?.blocks?.reduce(
      (prev: any, curr: any, index: number) => {
        const { __component: component, ...rest } = curr;

        return {
          ...prev,
          [`${index}:${component.split('.')[1]}`]: {
            ...rest,
          },
        };
      },
      {},
    );

    newData.blocks = newBlocks;
  }

  return { data: newData || null, meta: meta || null };
}
