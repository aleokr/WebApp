package com.webApp.webApp.service;

import com.webApp.webApp.dto.DeviceDTO;
import com.webApp.webApp.model.Device;
import com.webApp.webApp.model.Product;
import com.webApp.webApp.repository.DeviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class DeviceService {

    @Autowired
    private DeviceRepository deviceRepository;

    public Device getDeviceInfoById(Integer id) {
        return deviceRepository.findById(id).get();
    }
    public List<Device> getDevicesByUserId(Integer userId) {
        return deviceRepository.getDevicesByUserId(userId);
    }

    public void deleteDevice(Integer deviceId){
        deviceRepository.deleteById(deviceId);
    }

    public void addDevice(DeviceDTO dto){
        Device device = new Device();
        device.setAddress(dto.getAddress());
        device.setIsActive(dto.getIsActive());
        device.setCapacity(dto.getCapacity());
        device.setMaxCapacity(dto.getMaxCapacity());
        device.setUserId(dto.getUserId());

        deviceRepository.save(device);
    }
}
