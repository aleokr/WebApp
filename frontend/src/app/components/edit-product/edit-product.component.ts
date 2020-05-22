import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Product} from "../../interfaces/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;
  productId: number;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });
    this.productService.getProduct(this.productId).subscribe(
      (res: Product) => {
        this.product = res;
      }
    );
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  save() : void{
    this.productService.updateProduct(this.product);
    this.router.navigate(['/products/'+this.product.deviceId]);
  }
}
