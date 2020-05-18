package com.webApp.webApp.repository;

import com.webApp.webApp.model.Product;
import com.webApp.webApp.model.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SaleRepository extends JpaRepository<Sale, Integer> {

    @Query(value = "select * from sales where device_id = ?", nativeQuery = true)
    List<Sale> getSalesByDeviceId(Integer deviceId);
}
