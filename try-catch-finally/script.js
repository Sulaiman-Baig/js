let stocks = {
  Fruits: ['strawberry', 'grapes', 'bananana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let is_shop_open = true;

// This is only use in Async/Await Function
// order().then().then().then().catch().finally();

async function order() {
  try {
    await order;
  } catch (error) {
    console.log("abc doesn't exits", error);
  } finally {
    console.log('runs code anyways');
  }
}

order().then(() => {
  console.log('poiuytrewafghjklkbbmnbvc');
});
