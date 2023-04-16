///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((a,c) => {
    return a + c.price
}, 0)

// console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

let calcFinalPrice = (cartTotal, couponValue, tax) => {
    const taxedCartTotal = cartTotal * (1 + tax)
    const finalPrice = taxedCartTotal - couponValue
    return finalPrice
}
// console.log(calcFinalPrice(summedPrice, 5, .07))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    let cusomterObj = {
        Name: String, A name to add to the order.
        id: number, a number to quickly grab from the database with,
        email: the email associated with the account. 
        total: Number, The total a customer needs to pay to cash out, 
        Order: {an object}, with item-price key value pairs. 
        creditCard: Number, the number of the card they want to use to pay. 
    }

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customerObj = {
    name: 'John Doe',
    id: 5827203451,
    email: 'johnDoe@gmail.com',
    total: 1500,
    order: {
        burger: 500,
        drink: 250,
        kidsMeal: 500,
        iceCream: 250
    },
    creditCard: 51378887623 // scrambled 
}

console.log(customerObj)
