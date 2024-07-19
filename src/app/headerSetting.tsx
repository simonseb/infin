'use client';

import { getSettings } from '@/lib/strapi/strapi-fetch';
import React, { useEffect, useState } from 'react';
import d from '../../public/images/icon.png';

interface ILayoutData {
  setting: {
    title: string;
    favicon: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export const Settings = () => {
  const [data, setData] = useState<ILayoutData[]>();

  const getData = async () => {
    try {
      const res = await getSettings();
      console.log(res);
      if (res) {
        setData(res.data as ILayoutData[]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return null;
  }

  const { setting } = data[0];

  if (!setting) {
    return null;
  }

  return (
    <>
      <title>{setting.title}</title>
      <link rel="icon" href={setting.favicon.data.attributes.url} sizes="any" />
    </>
  );
};
