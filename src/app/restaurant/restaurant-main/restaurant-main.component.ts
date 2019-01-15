import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "../service/restaurant.service";
import { Restaurant } from "../model/restaurant.model";

@Component({
  selector: "dr-restaurant-main",
  templateUrl: "./restaurant-main.component.html",
  styleUrls: ["./restaurant-main.component.css"]
})
export class RestaurantMainComponent implements OnInit {
  restaurantList:Restaurant[];
  restaurantCount:number;
  params = {
    page: '1',
    pageSize: '12'
  }

  constructor(private service: RestaurantService) {}

  ngOnInit() {
    this.refresh(null);
  }

  refresh(newPage){
    if(newPage){
      this.params.page = newPage;
    }else{
      this.params.page = '1';
    }
    this.service.getRestaurants(this.params).subscribe(
      data => {
        this.restaurantList = data.restaurants;
        this.restaurantCount = data.count;
      }
    )
  }
}
