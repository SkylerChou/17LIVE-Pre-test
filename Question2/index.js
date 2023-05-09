function solution(recipes) {
  // 當是個空陣列
  if (recipes.length === 0) {
    return [];
  }
  // 當只有一個食譜
  if (recipes.length === 1) {
    return recipes[0]
      .slice(1)
      .sort()
      .map((ingredient) => [ingredient, recipes[0][0]]);
  }

  const ingredientMap = {};

  // 用for loop 建立一個物件 ingredientMap 儲存所有原料出現過的食譜名稱。
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const dish = recipe[0];

    for (let j = 1; j < recipe.length; j++) {
      const ingredient = recipe[j];

      if (!ingredientMap[ingredient]) {
        ingredientMap[ingredient] = [dish];
      } else {
        ingredientMap[ingredient].push(dish);
      }
    }
  }

  // 取出所有原料並排序
  const ingredients = Object.keys(ingredientMap).sort();

  const result = [];

  // 把對應的菜名加到結果陣列中
  for (let i = 0; i < ingredients.length; i++) {
    const ingredient = ingredients[i];
    const dishes = ingredientMap[ingredient];

    // 把菜名排序並加到結果陣列中
    result.push([ingredient].concat(dishes.sort()));
  }

  return result;
}

const recipes = [
  ["Pasta", "Tomato Sauce", "Onions", "Garlic"],
  ["Chicken Curry", "Chicken", "Curry Sauce"],
  ["Fried Rice", "Rice", "Onions", "Nuts"],
  ["Salad", "Spinach", "Nuts"],
  ["Sandwich", "Cheese", "Bread"],
  ["Quesadilla", "Chicken", "Cheese"],
];

console.log(solution(recipes));
