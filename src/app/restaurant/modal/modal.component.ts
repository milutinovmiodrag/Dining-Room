import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../model/restaurant.model';
import { RestaurantService } from '../service/restaurant.service';
import { Menu } from '../model/menu.model';

@Component({
  selector: 'dr-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() restaurant:Restaurant;
  menu:Menu;

  constructor(private service:RestaurantService) { }

  ngOnInit() {
    this.service.getMenu(this.restaurant._id).subscribe(res => {
      this.menu = res.results[0];
    })
  }

}
