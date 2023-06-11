let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

function Products(category, type, price) {
    this.category = category;
    this.type = type;
    this.price = price;
    this.render = function() {
      return `<tr>
        <td><img src="images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
        <td>${this.type}</td>
        <td>${this.price} USD</td>
      </tr>`;
    }
  }
  
  const kitchen = kitchenProducts.map(function(item) {
    return new Products('kitchen', item.type, item.price);
  });
  
  const devices = devicesProducts.map(function(item) {
    return new Products('devices', item.type, Array.isArray(item.price) ? item.price.join(' - ') : item.price);
  });
  
  const cosmetics = cosmeticsProducts.map(function(item) {
    return new Products('cosmetics', item.type, item.price);
  });

function mergeArrays() {
    let merged = [];
    for (let i = 0; i < arguments.length; i++) {
      merged.push(...arguments[i]);
    }
    return merged;
  }
  
  const mergedProducts = mergeArrays(kitchen, devices, cosmetics);
  
  document.write(`<table>
  <tr><th>Image</th><th>Type</th><th>Price</th></tr>`);
  mergedProducts.forEach(function(item) {
    document.write(item.render());
  });
  document.write('</table>');