package com.webApp.webApp.service;

import com.webApp.webApp.model.Product;
import com.webApp.webApp.model.Sale;
import com.webApp.webApp.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
@Transactional
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    public List<Sale> getSalesByDeviceId( Integer deviceId){
        return saleRepository.getSalesByDeviceId(deviceId);
    }
}
