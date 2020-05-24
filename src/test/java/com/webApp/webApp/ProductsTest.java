package com.webApp.webApp;

import com.webApp.webApp.model.Product;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.sql.Timestamp;

public class ProductsTest {

    @Test
    public void addProductTest(){
        Product product = new Product();
        Assertions.assertNotNull(product);
    }
    @Test
    public void changeValuesOfProductTest(){
        Timestamp expireDate = new Timestamp(0);
        Product product = new Product(1, "name", "description", 2.3, expireDate, 2 );

        Assertions.assertEquals(product.getName(), "name");
        product.setName("newName");
        Assertions.assertNotEquals(product.getName(), "name");
        Assertions.assertEquals(product.getName(), "newName");

        Assertions.assertEquals(product.getDescription(), "description");
        product.setDescription("newDescription");
        Assertions.assertNotEquals(product.getDescription(), "description");
        Assertions.assertEquals(product.getDescription(), "newDescription");

        Assertions.assertEquals(product.getPrice(), 2.3);
        product.setPrice(3.0);
        Assertions.assertNotEquals(product.getPrice(), 2.3);
        Assertions.assertEquals(product.getPrice(), 3.0);

        Assertions.assertEquals(product.getExpireDate(), expireDate);
        Timestamp expireDate2 = new Timestamp(2);
        product.setExpireDate(expireDate2);
        Assertions.assertNotEquals(product.getExpireDate(), expireDate);
        Assertions.assertEquals(product.getExpireDate(), expireDate2);

        Assertions.assertEquals(product.getDeviceId(),2);
        product.setDeviceId(3);
        Assertions.assertNotEquals(product.getDeviceId(), 2);
        Assertions.assertEquals(product.getDeviceId(),3);
    }

}
