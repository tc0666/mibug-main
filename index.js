const axios = require('axios');
const OAuth = require('oauth-1.0a');
const crypto = require('crypto');
const readline = require('readline'); // Add this for dynamic input
require('dotenv').config();

const API_URLS = {
  REQUEST_TOKEN: 'https://rest.immobilienscout24.de/restapi/security/oauth/request_token',
  AUTHORIZE: 'https://rest.immobilienscout24.de/restapi/security/oauth/confirm_access',
  ACCESS_TOKEN: 'https://rest.immobilienscout24.de/restapi/security/oauth/access_token',
  CUSTOMERS: 'https://rest.immobilienscout24.de/restapi/api/search/v1.0/user/me/realestate'
};

const oauth = OAuth({
  consumer: {
    key: process.env.IMMOSCOUT_CONSUMER_KEY,
    secret: process.env.IMMOSCOUT_CONSUMER_SECRET
  },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  }
});

const getRequestToken = async () => {
  try {
    const authData = oauth.authorize({
      url: API_URLS.REQUEST_TOKEN,
      method: 'POST',
      data: { oauth_callback: 'oob' } // Use 'oob' for manual verifier entry
    });

    const response = await axios.post(API_URLS.REQUEST_TOKEN, null, {
      headers: oauth.toHeader(authData)
    });

    const params = new URLSearchParams(response.data);
    return {
      oauth_token: params.get('oauth_token'),
      oauth_token_secret: params.get('oauth_token_secret')
    };
  } catch (error) {
    console.error('Error getting request token:', error.response?.data || error.message);
    throw error;
  }
};

const getAccessToken = async (requestToken, requestTokenSecret, verifier) => {
  try {
    console.log('Request Token:', requestToken);
    console.log('Verifier:', verifier);

    const authData = oauth.authorize({
      url: API_URLS.ACCESS_TOKEN,
      method: 'POST',
      data: { oauth_verifier: verifier }
    }, { key: requestToken, secret: requestTokenSecret });

    const response = await axios.post(API_URLS.ACCESS_TOKEN, null, {
      headers: oauth.toHeader(authData)
    });

    const params = new URLSearchParams(response.data);
    return {
      oauth_token: params.get('oauth_token'),
      oauth_token_secret: params.get('oauth_token_secret')
    };
  } catch (error) {
    console.error('Error getting access token:', error.response?.data || error.message);
    throw error;
  }
};

const fetchContacts = async (accessToken, accessTokenSecret) => {
  try {
    const API_URL = 'https://rest.immobilienscout24.de/restapi/api/offer/v1.0/user/me/contact';

    const authData = oauth.authorize({ url: API_URL, method: 'GET' }, {
      key: accessToken,
      secret: accessTokenSecret
    });

    console.log('Request Headers:', oauth.toHeader(authData)); // Log request headers
    console.log('Request URL:', API_URL); // Log request URL

    const response = await axios.get(API_URL, {
      headers: oauth.toHeader(authData)
    });

    console.log('Response Data:', response.data); // Log response data
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error.response?.data || error.message);
    throw error;
  }
};
const main = async () => {
  try {
    // Step 1: Get a request token
    const { oauth_token, oauth_token_secret } = await getRequestToken();
    console.log(`Go to this URL and authorize: ${API_URLS.AUTHORIZE}?oauth_token=${oauth_token}`);

    // Step 2: Dynamically input the verifier
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Enter the verifier code: ', async (verifier) => {
      rl.close();

      // Step 3: Exchange the request token for an access token
      const { oauth_token: accessToken, oauth_token_secret: accessTokenSecret } =
        await getAccessToken(oauth_token, oauth_token_secret, verifier);

      // Step 4: Fetch customer data
      const customers = await fetchContacts(accessToken, accessTokenSecret);
      console.log('Customers:', customers);
    });
  } catch (error) {
    console.error('Process execution failed:', error);
  }
};

main();
