import { loadScript } from "@paypal/paypal-js";
import { PAYPAL_ID_TEST } from '$env/static/private'

let cartTotal = 100
const CLIENT_ID = PAYPAL_ID_TEST

loadScript({'client-id': CLIENT_ID })