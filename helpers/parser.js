let products = window.document.querySelectorAll('.product_item');
let result = [];

for (let prod of products) {
  console.log(prod);
  result.push({
    name: prod.querySelector('p a').innerText,
    images: [prod.querySelector('a img') ? prod.querySelector('a img').src : ''],
    sizes: getSizes(prod),
    ingredients: getIngredients(prod)
  })
}

console.log(JSON.stringify(result));

function getSizes(prod) {
  let sizes = prod.querySelectorAll('.pizza_size_wrapper');
  let res = [];

  for (let size of sizes) {
    res.push({
      name: size.querySelector('.pizza_size').innerText,
      weight: getWeight(size),
      price: size.querySelector('.pizza_price span').innerText * 100,
    })
  }

  return res;
}

function getWeight(size) {
  let item = size.querySelector('.pizza_weight span');

  return item ? Number(item.innerText) : null
}

function getIngredients(prod) {
  let ing = prod.querySelector('.product_mix p');

  if (ing) {
    ing = ing.innerText.replace(/\n/g, '').split(',').filter(Boolean);
  }

  return ing || null;
}
