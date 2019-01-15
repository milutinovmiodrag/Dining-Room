import { Component, OnInit, Input } from "@angular/core";
import { Restaurant } from "../model/restaurant.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: "dr-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input() restaurant: Restaurant;

  constructor(private modal: NgbModal) {}

  ngOnInit() {}

  openModal(restaurant) {
    const modalRef = this.modal.open(ModalComponent);
    modalRef.componentInstance.restaurant = restaurant;
  }
}
