const lineFriendUrl = "https://lin.ee/sabWBtS";
const pagePath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const siteLinks = {
  line: lineFriendUrl,
  order: lineFriendUrl,
  freeTool: `${import.meta.env.BASE_URL}free-tool/`,
  freeToolSection: "#free-tool-section",
  dailyFortune: `${import.meta.env.BASE_URL}daily-fortune/`,
  dailyFortuneSection: "#daily-fortune-section",
  instagram: "https://www.instagram.com/love_tips000/",
  checkout: pagePath("checkout.html"),
  commercialTransaction: pagePath("commercial-transaction.html"),
  legal: pagePath("commercial-transaction.html"),
  privacy: pagePath("privacy.html"),
  terms: pagePath("terms.html"),
  refund: pagePath("refund.html"),
  disclaimer: pagePath("disclaimer.html"),
  success: pagePath("success.html"),
  contact: lineFriendUrl,
};
