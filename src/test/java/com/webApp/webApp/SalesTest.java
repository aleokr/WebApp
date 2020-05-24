package com.webApp.webApp;

import com.webApp.webApp.model.Sale;
import com.webApp.webApp.model.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.sql.Timestamp;

public class SalesTest {
    @Test
    public void addSaleTest() {
        Sale sale = new Sale();
        Assertions.assertNotNull(sale);
    }

    @Test
    public void changeValuesOfSaleTest() {
        Timestamp date = new Timestamp(0);
        Sale sale = new Sale(1, 2, 12, 23.4, date);

        Assertions.assertEquals(sale.getDeviceId(), 2);
        sale.setDeviceId(3);
        Assertions.assertNotEquals(sale.getDeviceId(), 2);
        Assertions.assertEquals(sale.getDeviceId(), 3);

        Assertions.assertEquals(sale.getQuantity(), 12);
        sale.setQuantity(13);
        Assertions.assertNotEquals(sale.getQuantity(), 12);
        Assertions.assertEquals(sale.getQuantity(), 13);

        Assertions.assertEquals(sale.getAmount(), 23.4);
        sale.setAmount(23.2);
        Assertions.assertNotEquals(sale.getAmount(), 23.4);
        Assertions.assertEquals(sale.getAmount(), 23.2);

        Assertions.assertEquals(sale.getDate(), date);
        Timestamp newDate = new Timestamp(1);
        sale.setDate(newDate);
        Assertions.assertNotEquals(sale.getDate(), date);
        Assertions.assertEquals(sale.getDate(), newDate);
    }
}
