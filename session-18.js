function calculateDeliveryCharge (distance) {
      return distance > 5 ? 50 : 20
}

const applyDiscount = (amount, discount = 0) => amount - amount * discount

function placeYourOrder (order, discountType, callbackFn) {
      let { customerName, distance, items } = order
      finalAmount = discountType(items.reduce((sum, { price, quantity = 1 }) => sum + price * quantity, 0)) + calculateDeliveryCharge(distance)
      callbackFn(customerName, finalAmount)
}

const order = {
    customerName: "Rahul",
    distance: 8,
    items: [
        { name: "Pizza", price: 300, quantity: 2 },
        { name: "Burger", price: 150 }
    ]
}

const festivalDiscount = (total) => applyDiscount(total, 0.10)

placeYourOrder(order, festivalDiscount, (name, finalAmount) => { 
    console.log(`Order confirmed for ${name} Pay Rs.${finalAmount}`);    
})