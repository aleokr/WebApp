import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../interfaces/product";
import {Observable} from "rxjs";
import {Device} from "../../interfaces/device";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  deviceId: number;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
    this.route.params.subscribe(params => {
      this.deviceId = params['deviceId'];
    });
    this.productService.getProductsList(this.deviceId).subscribe(
      (res: Product[]) => {
        this.products = res;
      }
    );
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  edit(productId: number): void {
    this.router.navigate(['/edit/product/'+productId]);
  }

  addNew():void{
    this.router.navigate(['device/'+this.deviceId+'/addProduct']);
  }

  delete(productId: number): void {
    this.productService.deleteProduct(productId).subscribe();
    window.location.reload();
  }
}
