package com.webApp.webApp.controller;

import com.webApp.webApp.model.Product;
import com.webApp.webApp.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/product")
public class ProductController {

    @Autowired
    private ProductService productService;


    @GetMapping(path = "/getProducts")
    public List<Product> getProductInfo(){
        return productService.getProductInfo();
    }

    @GetMapping(path = "/getProduct/{id}")
    public Product getProductById(@PathVariable Integer id){
        return productService.getProductInfoById(id);
    }

    @GetMapping(path = "/getAllProducts")
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }
}
