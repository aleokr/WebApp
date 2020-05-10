package com.webApp.webApp.repository;

import com.webApp.webApp.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "select * from products where device_id = ?", nativeQuery = true)
    List<Product> getProductsByDeviceId(Integer deviceId);

    @Modifying
    @Query(value = "update products p set p.price = ?2 where p.id = ?1", nativeQuery = true)
    int changePriceOfProduct(Integer id, Float price);

    @Modifying
    @Query(value = "delete from products where id = ?", nativeQuery = true)
    int deleteProduct(Integer id);

}
