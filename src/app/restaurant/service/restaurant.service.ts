import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { RestaurantSearchResult } from "../model/restaurantSearch";
import { MenuList } from "../model/menuSearch";

const baseUrl: string = "http://localhost:3000/api/restaurants";
@Injectable({
  providedIn: "root"
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getRestaurants(params?): Observable<RestaurantSearchResult> {
    let queryParams = {};

    if (params) {
      queryParams = {
        params: new HttpParams()
          .set("page", params.page || "1")
          .set("pageSize", params.pageSize || "12")
          .set("filter", JSON.stringify(params.filter))
      };
    }
    return this.http.get(baseUrl, queryParams).pipe(
      map(data => {
        return new RestaurantSearchResult(data);
      })
    );
  }

  getMenu(restaurantId:number):Observable<MenuList>{
    return this.http.get(baseUrl+ '/' + restaurantId + "/menus").pipe(map(
      res => { return new MenuList(res) }
    ))
  }
}
