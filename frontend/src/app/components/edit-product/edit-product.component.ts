import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product$: Observable<Product>;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
