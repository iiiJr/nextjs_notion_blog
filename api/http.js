import fetch from "node-fetch";

const NOTION_BLOG_ID = process.env.NOTION_BLOG_ID


export const getDatabase = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
};

export const getPage = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/page/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
};
