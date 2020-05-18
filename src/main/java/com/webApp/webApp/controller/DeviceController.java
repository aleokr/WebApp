package com.webApp.webApp.controller;

import com.webApp.webApp.dto.DeviceDTO;
import com.webApp.webApp.model.Device;
import com.webApp.webApp.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/device")
public class DeviceController {

    @Autowired
    private DeviceService deviceService;

    @GetMapping(path = "/getDevice/{id}")
    public Device getDeviceById(@PathVariable Integer id) {
        return deviceService.getDeviceInfoById(id);
    }

    @GetMapping(path = "/getDevicesByUserId/{userId}")
    public List<Device> getDevicesByUserId(@PathVariable Integer userId) {
        return deviceService.getDevicesByUserId(userId);
    }

    @DeleteMapping(path = "/deleteDevice/{id}")
    public void deleteDevice(@PathVariable Integer id) {
        deviceService.deleteDevice(id);
    }

    @PostMapping(path = "/addDevice")
    public void addDevice(@RequestBody DeviceDTO dto) {
        deviceService.addDevice(dto);
    }
}
