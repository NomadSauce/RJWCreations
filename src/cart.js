import { readable, writable, get } from "svelte/store";
import ring1 from '$lib/assets/ring1.jpg'
import ring2 from '$lib/assets/ring2.jpg'
import ring3 from '$lib/assets/ring3.jpg'


export let products = readable([
    {
        id: 'price_1NY9noKdqpjcUxB6Z859vc0q',
        name: 'Black Ceramic',
        price: 135,
        image: ring2,
        description: '',
        options: [
            {
                value: 'Yooperlight',
                label: 'Yooperlight',
                price: 135
            },
            {
                value: 'Opal',
                label: 'Opal',
                price: 115
            }
        ]
    },
    {
        id: 'price_1NY9noKdqpjcUxB6Z859vc0q',
        name: 'Titanium',
        price: 135,
        image: ring1,
        description: '',
        options: [
            {
                value: 'Yooperlight',
                label: 'Yooperlight',
                price: 135
            },
            {
                value: 'Opal',
                label: 'Opal',
                price: 115
            }
        ]
    },
    {
        id: 'price_1NY9noKdqpjcUxB6Z859vc0q',
        name: 'White Ceramic',
        price: 135,
        image: ring3,
        description: '',
        options: [
            {
                value: 'Yooperlight',
                label: 'Yooperlight',
                price: 135
            },
            {
                value: 'Opal',
                label: 'Opal',
                price: 115
            }
        ]
    },
  ])

export let cartItems = writable([])

export const addToCart = (id, name, price) => {
    console.log('AddToCart', id, name, price)
    let items = get(cartItems)

    let itemIndex = items.findIndex(
        (item) => { return item.id == id}
    )



    if(itemIndex !== -1) {
        cartItems.update(() => {
            let updatedItems = items.map( (item) => {
                if(item.id === id) {
                    console.log('Product Item', item)
                    return { ...item, name: name, quantity: item.quantity + 1, price: item.price}
                }
                return item
            })
            return updatedItems
        })
    } else {
        cartItems.update(() => {
            return [ ...items, {id: id, name: name, quantity: 1, price: price} ]
        })
    }
}

export const removeFromCart = (id) => {
    let items = get(cartItems)
    let itemIndex = items.findIndex(
        (item) => { return item.id == id}
    )

    if(items[itemIndex]?.quantity - 1 === 0) {
        items.splice(itemIndex, 1)
    }

    cartItems.update(() => {
        let updatedItems = items.map( (item) => {
            if(item.id === id) {
                return { ...item, quantity: item.quantity - 1}
            }
            return item
        })
        return updatedItems
    })
}

