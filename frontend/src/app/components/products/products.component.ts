import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../../interfaces/product";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allProducts$: Observable<Product>;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  edit(): void {
    this.router.navigate(['/edit/product']);
  }
}
