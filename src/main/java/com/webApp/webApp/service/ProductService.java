package com.webApp.webApp.service;

import com.webApp.webApp.model.Product;
import com.webApp.webApp.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getProductInfo(){
        return productRepository.findAll();
    }

    public Product getProductInfoById(Integer id){
        return productRepository.findById(id).get();
    }

    public List<Product> getAllProducts(){
        return productRepository.getProductsList();
    }
}
