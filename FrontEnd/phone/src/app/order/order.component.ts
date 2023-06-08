import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/model/order/Order';
import { Category } from 'src/model/phone/Category';
import { OrderService } from 'src/service/order/order.service';
import { CategoryService } from 'src/service/phone/category.service';
import { PhoneService } from 'src/service/phone/phone.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  idOrder: number = 0;
  phoneDetail: Order = {
  };

  orderList: Order[] = [];

  categoryList: Category[] = [];

  constructor(private orderService: OrderService,
    private categoryService: CategoryService,
    private router: Router, private activatedRoute: ActivatedRoute,
    private phoneService: PhoneService) {
  }

  ngOnInit(): void {
    this.getOrderList();
    this.getCategoryList();

  }

  getCategoryList() {
    this.categoryService.getCategoryList().subscribe(
      (data: any) => {
        this.categoryList = data;
        console.log(this.categoryList)
      }
    )
  }

  getOrderList() {
    this.orderService.getOrderList().subscribe(
      (data: any) => {
        this.orderList = data;
        console.log(this.orderList)
      }
    );
  }


}
