package com.webApp.webApp.controller;

import com.webApp.webApp.dto.ProductDTO;
import com.webApp.webApp.model.Product;
import com.webApp.webApp.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/product")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping(path = "/getListOfProducts")
    public List<Product> getProductInfo() {
        return productService.getProductInfo();
    }

    @GetMapping(path = "/getProduct/{id}")
    public Product getProductById(@PathVariable Integer id) {
        return productService.getProductInfoById(id);
    }

    @GetMapping(path = "/getProductsByDeviceId/{deviceId}")
    public List<Product> getProductsByDeviceId(@PathVariable Integer deviceId) {
        return productService.getProductsByDeviceId(deviceId);
    }

    @PostMapping(path = "/updateProduct")
    public Product updateProduct(@RequestBody ProductDTO dto) {
        return productService.updateProduct(dto);
    }

    @DeleteMapping(path = "/deleteProduct/{id}")
    public void deleteProduct(@PathVariable Integer id) {
        productService.deleteProduct(id);
    }

    @PostMapping(path = "/addProduct")
    public void addProduct(@RequestBody ProductDTO dto) {
        productService.addProduct(dto);
    }
}
