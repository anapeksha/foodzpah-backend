// const braintree = require("braintree");

// const gateway = new braintree.BraintreeGateway({
//   environment: braintree.Environment.Sandbox,
//   merchantId: "xkg6t8c9jxw9q47z",
//   publicKey: "2t63tmqjdcc9hg5v",
//   privateKey: "9faf8b446cc87c42e1578d7a2b21cf40"
// });

// exports.getToken = (req, res) => {
//     gateway.clientToken.generate( {} ).then( response => {
//         res.send(response);
//     } ).catch( error => {
//         res.send( 'error processing payment', error );
//   })
// };

// exports.processPayment = (req, res) => {
//   let nonceFromTheClient = req.body.paymentMethodNonce;

//   let amountFromTheClient = req.body.amount;
//   gateway.transaction.sale(
//     {
//       amount: amountFromTheClient,
//       paymentMethodNonce: nonceFromTheClient,

//       options: {
//         submitForSettlement: true
//       }
//     },
//     function(err, result) {
//       if (err) {
//         res.status(500).json(error);
//       } else {
//         res.json(result);
//       }
//     }
//   );
// };
