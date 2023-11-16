import { SECRET_STRIPE_KEY } from '$env/static/private'
import Stripe from 'stripe'

const stripe = new Stripe(SECRET_STRIPE_KEY, {apiVersion: '2023-08-16'})

export async function load({params}) {

    let products = await stripe.products.list({
    limit: 10
    })

    // console.log('Products:', products)

    return products
}
