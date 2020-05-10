package com.webApp.webApp.service;

import com.webApp.webApp.dto.ProductDTO;
import com.webApp.webApp.model.Product;
import com.webApp.webApp.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getProductInfo() {
        return productRepository.findAll();
    }

    public Product getProductInfoById(Integer id) {
        return productRepository.findById(id).get();
    }

    public List<Product> getProductsByDeviceId(Integer deviceId) {
        return productRepository.getProductsByDeviceId(deviceId);
    }

    public void changePriceOfProduct(Integer id, Float price) {
        productRepository.changePriceOfProduct(id, price);
    }

    public void deleteProduct(Integer id) {
        productRepository.deleteProduct(id);
    }

    public void addUser(ProductDTO dto){
        Product product = new Product();
        product.setName(dto.getName());
        product.setPrice(dto.getPrice());
        product.setDescription(dto.getDescription());
        product.setExpireDate(dto.getExpireDate());
        product.setDeviceId(dto.getDeviceId());

        productRepository.save(product);
    }
}
