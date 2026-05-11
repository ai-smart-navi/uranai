const lineFriendUrl = "https://lin.ee/sabWBtS";
const pagePath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const siteLinks = {
  line: lineFriendUrl,
  order: lineFriendUrl,
  freeTool: `${import.meta.env.BASE_URL}#free-tool`,
  freeToolSection: "#free-tool-section",
  instagram: "https://www.instagram.com/love_tips000/",
  legal: pagePath("legal.html"),
  privacy: pagePath("privacy.html"),
  terms: pagePath("terms.html"),
  contact: lineFriendUrl,
};
