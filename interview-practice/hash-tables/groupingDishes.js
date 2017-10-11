function groupingDishes(dishes) {
  var resArr = [];
  var res = {};
  dishes.forEach(list => {
    var dish = list.shift();
    list.forEach(ingredient => {
      if (!res[ingredient]) {
        res[ingredient] = [];
      }
      res[ingredient].push(dish);
    });
  });
  for (var key in res) {
    if (res[key].length > 1) {
      var list = [];
      res[key].forEach(dish => list.push(dish));
      list.sort();
      list.unshift(key);
      resArr.push(list);
    }
  }
  return resArr.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    return 0;
  });
}

var dishes1 = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
            ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
            ["Quesadilla", "Chicken", "Cheese", "Sauce"],
            ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]];

var expect1 = [["Cheese", "Quesadilla", "Sandwich"],
                            ["Salad", "Salad", "Sandwich"],
                            ["Sauce", "Pizza", "Quesadilla", "Salad"],
                            ["Tomato", "Pizza", "Salad", "Sandwich"]]
console.log('test1', JSON.stringify(groupingDishes(dishes1)) === JSON.stringify(expect1));