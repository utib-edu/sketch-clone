// ng build -c staging
export const environment = {
  production: false,
  auth: {
    clientId: '3fba556e-5d4a-48e3-8e1a-fd57c12cb82e',
    authority: 'https://login.windows-ppe.net/common',
    redirectUri: '/',
    postLogoutRedirectUri: '/'
  },
  apiDomain: {
    mock: "https://my.api.mockaroo.com"
  }
};