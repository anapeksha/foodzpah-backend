const stripeKey = process.env.REACT_APP_STRIPE_KEY;
const stripe = require( "stripe" )( stripeKey );
const uuid4 = require( "uuid/v4" );


exports.makepayment = (req, res) => {
	const { products, token } = req.body;
	console.log("PRODUCTS", products);

	let amount = 0;
	products.map((p) => {
		amount = amount + (p.price*p.count);
	});
	const idempotencyKey = uuid4();
	return stripe.customers
		.create({
			email: token.email,
			source: token.id,
		})
		.then((customer) => {
			stripe.charges
				.create(
					{
						amount: amount * 100,
						currency: "USD",
						customer: customer.id,
						receipt_email: token.email,
						description: `Purchased the product`,
						shipping: {
							name: token.card.name,
							address: {
								line1: token.card.address_line1,
								city: token.card.address_city,
								country: token.card.address_country,
								postal_code: token.card.address_zip,
							},
						},
					},
					{
						idempotencyKey,
					},
				)
				.then((result) => res.status(200).json(result))
				.catch((err) => console.log(err));
		})
		.catch(console.log("FAILED"));
};