// ng build
export const environment = {
  production: false,
  auth: {
    // clientId: '6226576d-37e9-49eb-b201-ec1eeb0029b6', // Prod enviroment. Uncomment to use. 
    clientId: '3fba556e-5d4a-48e3-8e1a-fd57c12cb82e', // PPE testing environment
    // authority: 'https://login.microsoftonline.com/common', // Prod environment. Uncomment to use.
    authority: 'https://login.windows-ppe.net/common', // PPE testing environment.
    redirectUri: '/',
    postLogoutRedirectUri: '/'
  },
  apiDomain: {
    mock: "https://my.api.mockaroo.com"
  }
};