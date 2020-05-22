import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  deviceId: number;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
    this.route.params.subscribe(params => {
      this.deviceId = params['deviceId'];
    });

  }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  save(name: string, description: string, price: number, expireDate: string): void {
    this.productService.addProduct(name, description, price, expireDate, this.deviceId);
    this.router.navigate(['products/'+this.deviceId]);
  }

}
