import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  public getProductsList(deviceId: number) {
    return this.http.get('http://localhost:8443/product/getProductsByDeviceId/' + deviceId);
  }

  public getProduct(productId: number) {
    return this.http.get('http://localhost:8443/product/getProduct/' + productId);
  }

  public deleteProduct(productId: number) {
    return this.http.delete('http://localhost:8443/product/deleteProduct/' + productId);
  }

  public updateProduct(product: Product) {
    return this.http.post('http://localhost:8443/product/updateProduct', product, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }).subscribe();
  }

  public addProduct(name: string, description: string, price: number, expireDate: string, deviceId: number) {
    return this.http.post('http://localhost:8443/product/addProduct', {
      "name": name,
      "description": description,
      "price": price,
      "expireDate": expireDate + 'T00:00:00.000+0000',
      "deviceId": deviceId
    }, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }).subscribe();
  }
}
