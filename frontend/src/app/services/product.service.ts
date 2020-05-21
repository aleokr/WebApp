import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  public getProductsList(deviceId: number){
    return this.http.get('http://localhost:8443/product/getProductsByDeviceId/' + deviceId);
  }

  public getProduct(productId: number){
    return this.http.get('http://localhost:8443/product/getProduct/' + productId);
  }

  public updateProduct(product: Product){
    return this.http.post('http://localhost:8443/device/updateProduct', product);
  }
}
