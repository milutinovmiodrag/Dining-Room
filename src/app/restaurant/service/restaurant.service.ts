import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { RestaurantSearchResult } from "../model/restaurantSearch";

const baseUrl: string = "http://localhost:3000/api/restaurants";
@Injectable({
  providedIn: "root"
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<RestaurantSearchResult> {
    return this.http.get(baseUrl).pipe(
      map(data => {
        return new RestaurantSearchResult(data);
      })
    );
  }
}
