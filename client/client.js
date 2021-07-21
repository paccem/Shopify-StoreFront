import Client from 'shopify-buy';

const client = Client.buildClient({
    domain: 'elixstores.myshopify.com',
    storefrontAccessToken: 'bb125907127099d31e24bd937ac16745'
})
export { client }