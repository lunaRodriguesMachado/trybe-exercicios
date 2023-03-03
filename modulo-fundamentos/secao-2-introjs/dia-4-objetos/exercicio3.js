let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
                toppings: 'marguerita',
            },
            pepperoni: {
                amount: 1,
                price: 20,
                toppings: 'pepperoni',
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

function customerInfo(order) {
//    console.log('Olá, ' + order.order.delivery.deliveryPerson + ', entrega para: ' + order.name + ', Telefone: ' + order.phoneNumber + ', R. ' + order.address.street + ', Nº: ' + order.address.number + ', AP: ' + order.address.apartment);
}

customerInfo(order);

function orderModifier(order) {
    order.name = 'Luiz Silva';
    order.payment.total = 50;
    console.log('Olá, ' + order.name + ', o valor total do seu pedido de ' + order.order.pizza.marguerita.toppings + ', ' + order.order.pizza.pepperoni.toppings + ' e ' + order.order.drinks.coke.type + ' é R$ 50,00')
}

orderModifier(order);