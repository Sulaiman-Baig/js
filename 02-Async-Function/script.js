let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

// stock.Fruits[]

// console.log(stocks.Fruits[2]);
let order = (Fruit_name, call_production) => {
  //   console.log(`Order placed, Please Call Production`);

  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);
    call_production();
  }, 2000);
};

let production = () => {
  //   console.log('Order Received, Starting Production');
  setTimeout(() => {
    console.log('Production Has Started');
    setTimeout(() => {
      console.log('The Fruit has been Chopped');
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was Added`);

        setTimeout(() => {
          console.log('The Machine Was Started');

          setTimeout(() => {
            console.log(`Ice cream was placed on${stocks.holder[0]}`);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]}was added as toppings`);

              setTimeout(() => {
                console.log('serve ice cream');
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0o00);
};

order(0, production);
