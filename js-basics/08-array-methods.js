const orders = [
    {dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2},
    {dish: "Dragon Ramen", price: 12, spicy: true, qty: 1},
    {dish: "Caesar Salad", price: 9, spicy: false, qty: 3},
    {dish: "Inferno Wings", price: 11, spicy: true, qty: 2},
    {dish: "Truffle Risotto", price: 18, spicy: false, qty: 1},
];
// Array of objects

const myData = orders.forEach((order, index) => {
    console.log(`#${index + 1}: ${order.qty} x ${order.dish}`)
});

console.log(myData); // undefined

// forEach doesn't return anything by default.

const receiptLines = orders.map((o) => `${o.dish}: $${o.price * o.qty}`);
console.log(receiptLines);
// [ 'Pasta Carbonara: $28', 'Dragon Ramen: $12', 'Caesar Salad: $27', 'Inferno Wings: $22', 
// 'Truffle Risotto: $18' ]


const spicyOrders = orders.filter(o => o.spicy);
console.log(spicyOrders); // returns array of objects which are spicy

// we give condition in filter and it returns array of condition true objects.
// returns of reduce method depends what we return in callback function.

//Reduce Method (imp)
// Eg. 1

const totalRevenue = orders.reduce((sum, order) => {
    return sum + (order.qty * order.price)
}, 0);
console.log(totalRevenue); // 107

// Eg. 2

const grouped = orders.reduce((acc, order) => {
    const category = order.spicy ? 'spicy' : 'mild';
    acc[category].push(order.dish)
    return acc;
}, {spicy: [], mild: []});

console.log(grouped); 
// { spicy: [ 'Dragon Ramen', 'Inferno Wings' ],
// mild: [ 'Pasta Carbonara', 'Caesar Salad', 'Truffle Risotto' ] }

// Gotcha's:

const ticketNumbers = [100, 25, 3, 42, 8];
const sortedW = [...ticketNumbers].sort();
console.log(sortedW); // [ 100, 25, 3, 42, 8 ] - not sorted

//So,
const sortedAsc = [...ticketNumbers].sort((a, b) => a - b);
console.log(sortedAsc); // [ 3, 8, 25, 42, 100 ] - sorted ascending

const sortedDes = [...ticketNumbers].sort((a, b) => b - a);
console.log(sortedDes); // [ 100, 42, 25, 8, 3 ] - sorted descending

// a - b -> ascending
// b - a -> descending

// There is no way to stop or break a forEach() loop other than by throwing an exception
// that is to crash the code

const kitchenOrders = [
    {dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2},
    {dish: "Dragon Ramen", price: 12, spicy: true, qty: 1},
    {dish: "Caesar Salad", price: 9, spicy: false, qty: 3},
    {dish: "Inferno Wings", price: 11, spicy: true, qty: 2},
    {dish: "Truffle Risotto", price: 18, spicy: false, qty: 1},
    {dish: "Ghost Pepper Soup", price: 15, spicy: true, qty: 1}
];

const mildReport = kitchenOrders
    .filter(order => !order.spicy)
    .map(order => ({
        dish: order.dish,
        total: order.price * order.qty
}));

console.log(mildReport);
// [
//   { dish: 'Pasta Carbonara', total: 28 },
//   { dish: 'Caesar Salad', total: 27 },
//   { dish: 'Truffle Risotto', total: 18 }
// ] --- all spicy = false objects mapped with their dish and price

// .toSorted ----> method to sort (pipelines)

//pipeline ----> returns a new array without mutating the original array

