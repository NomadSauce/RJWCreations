<script>
    import { loadScript } from '@paypal/paypal-js'
    import { cartItems } from '../cart';
    // import { PAYPAL_ID_TEST} from '$env/static/private'

    export let cartTotal 
    let shoppingCart
    export let cartReset = false
    // $: console.log('Shopping Cart', cartTotal)
   $: shoppingCart = addCart(cartTotal)
   let total_cart = 0

    function addCart(items) {
        // console.log('Items', items, items.length)
        let temp = []
        total_cart = 0
        items.forEach(el => {
            let amount = el.price
            let name = el.size + '-' + el.blank + '-' + el.stone
            let item = {
                'name': name,
                'description': name,
                'quantity': 1,
                'unit_amount': {
                    'currency_code': 'USD',
                    'value': el.price
                }
            }
            temp = [...temp, item]
            total_cart += el.price
        });

        console.log('CART:', temp, total_cart)

        return temp
        // let amount = items.price
        // let name = items.size + '-' + items.blank + '-' + items.stone
        // console.log('Inside:', amount, name)
        // return name
    }

    $: console.log('Total price:', total_cart)

    const CLIENT_ID_TEST = 'AU00jhFiZ9cquwIydsAa8uXXwSmyScPOKsR19UGTMKO58YhD-cax7fURREfvJ2IYQx7PUrx7oQmwGy-N'
    const CLIENT_ID = 'AfJXNYIBKWxEJJ14X-YfCCaMKl-2kkw6wcw2DrRP1RDspAhokruTKsqrGmr0-uEULE8Feohi7gk1FkXb'
    loadScript({ 'client-id': CLIENT_ID, 'currency': 'USD'}).then((paypal) => {
        paypal
            .Buttons({
                style: {
                    color: 'blue',
                    shape: 'pill'
                },
                createOrder: function (data, actions) {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: 'USD',
                                    value: total_cart,
                                    breakdown: {
                                        item_total: {
                                            value: total_cart,
                                            currency_code: 'USD'
                                        }
                                    }
                                },
                                items: shoppingCart
                            }
                        ]
                    })
                },
                onApprove: function (data, actions) {
                    return actions.order.capture().then(function (details) {
                        alert('Payment Successful')
                        console.log('Payment Successful')
                        cartReset = true
                    })
                },
                onError: function (err) {
                    alert('Something went wrong')
                    console.log('Something went wrong', err)
                }
            })
            .render('#checkout-button-container')
    })

</script>

<div id='checkout-button-container' class="text-white-50" />

<style>
    #checkout-button-container {
        margin: 30px 0;
    }
</style>