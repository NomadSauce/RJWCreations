import Stripe from "stripe";
import { SECRET_STRIPE_KEY } from '$env/static/private'

const stripe = new Stripe(SECRET_STRIPE_KEY)

export async function POST({request}) {
    console.log('Posting Order')

    const data = await request.json()
    console.log('DATA:', data)
    const items = data.items
    console.log('Items:', items, '\n')

    let lineItems = []
    items.forEach((item) => {
        let temp = {
            quantity: 1,
            price_data: {
                currency: 'usd',
                unit_amount: item.price*100,
                product_data: {
                    name: item.blank + '-' + item.stone + '-' + item.size,
                }
            }
        }
        lineItems.push( temp )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:5173',
        cancel_url: 'http://localhost:5173'

    })

    return new Response(
        JSON.stringify({ url: session.url }),
        {
            status: 200,
            headers: {'content-type': 'application/json'}
        }
    )
    
    // const paymentIntent = await stripe.paymentIntents.create({
    //     amount: 135,
    //     currency: 'usd',
    //     payment_method_types: ['card']
    // })

    // return {
    //     body: {
    //         clientSecret: paymentIntent.client_secret
    //     }
    // }
}


// const data = await request.json()
//     const items = data.items

//     let lineItems : any = []
//     items.forEach((item: any) => {
//         lineItems.push( { price: item.id, quantity: item.quantity } )
//     });

//     const session = await stripe.checkout.sessions.create({
//         line_items: lineItems,
//         mode: 'payment',
//         success_url: 'http://localhost:5173/success',
//         cancel_url: 'http://localhost:5173/cancel'

//     })

//     return new Response(
//         JSON.stringify({ url: session.url }),
//         {
//             status: 200,
//             headers: {'content-type': 'application/json'}
//         }
//     )