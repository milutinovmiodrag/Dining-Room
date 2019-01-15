import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "../service/restaurant.service";
import { Restaurant } from "../model/restaurant.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "dr-restaurant-main",
  templateUrl: "./restaurant-main.component.html",
  styleUrls: ["./restaurant-main.component.css"]
})
export class RestaurantMainComponent implements OnInit {
  restaurantList: Restaurant[];
  restaurantCount: number;
  params = {
    page: 1,
    pageSize: 12,
    filter: {
      cuisine: "",
      priceFrom: 1,
      priceTo: 5
    }
  };

  constructor(
    private service: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let cuis = params["cuisine"];
      if (cuis == "all") {
        cuis = "";
      }
      this.params.filter.cuisine = cuis;
      this.refresh(null);
    });
  }

  refresh(newPage: number) {
    if (newPage) {
      this.params.page = newPage;
    } else {
      this.params.page = 1;
    }
    this.service.getRestaurants(this.params).subscribe(data => {
      this.restaurantList = data.restaurants;
      this.restaurantCount = data.count;
    });
  }
}
