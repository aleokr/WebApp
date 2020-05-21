package com.webApp.webApp.controller;

import com.webApp.webApp.model.Sale;
import com.webApp.webApp.service.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/sale")
@CrossOrigin
public class SaleController {

    @Autowired
    private SaleService saleService;

    @GetMapping(path = "/getSales/{deviceId}")
    public List<Sale> getSales(@PathVariable Integer deviceId) {
        return saleService.getSalesByDeviceId(deviceId);
    }

}
