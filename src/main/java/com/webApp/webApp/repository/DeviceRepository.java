package com.webApp.webApp.repository;

import com.webApp.webApp.model.Device;
import com.webApp.webApp.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DeviceRepository extends JpaRepository<Device, Integer> {

    @Query(value = "select * from devices where user_id = ?", nativeQuery = true)
    List<Device> getDevicesByUserId(Integer userId);
}
