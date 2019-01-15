import { Restaurant } from "./restaurant.model";

export class RestaurantSearchResult {
  restaurants: Restaurant[];
  count: number;

  constructor(obj?: any) {
    this.restaurants =
      (obj &&
        obj.results.map(elem => {
          return new Restaurant(elem);
        })) ||
      [];
    this.count = obj && obj.count;
  }
}
