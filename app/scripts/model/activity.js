/**
 * Created by TanghaoTsui on 14-7-16.
 */
function activity() {
    this.item_name = Person.get_chose_person_name();
    this.restaurant_name = Restaurant.get_chose_restaurant_name();
    var food_name = Food.get_chose_food_name();
    var food = $.grep(Food.get_all_foods()[Restaurant.get_chose_restaurant_name()], function (food) {
        return food.name == Food.get_chose_food_name()
    })[0];
    console.log(food, "food")
    this.food_name = food.name;
    this.food_price = food.price;
}