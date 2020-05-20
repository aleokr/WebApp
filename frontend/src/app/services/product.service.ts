import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  public getProductsList(deviceId: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:8443/product/getProductsByDeviceId/' + deviceId);
  }

  public getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:8443/product/getProduct/' + productId);
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:8443/device/updateProduct', product);
  }
}
