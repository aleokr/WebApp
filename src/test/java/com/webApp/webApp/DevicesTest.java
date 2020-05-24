package com.webApp.webApp;

import com.webApp.webApp.model.Device;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;


public class DevicesTest {
    @Test
    public void addDeviceTest(){
        Device device = new Device();
        Assertions.assertNotNull(device);
    }
    @Test
    public void changeValuesOfDeviceTest(){
        Device device = new Device(1, "Polna 2", true, 120, 20, 2);

        Assertions.assertEquals(device.getAddress(), "Polna 2");
        device.setAddress("Prosta 2");
        Assertions.assertNotEquals(device.getAddress(), "Polna 2");
        Assertions.assertEquals(device.getAddress(), "Prosta 2");

        Assertions.assertEquals(device.getIsActive(), true);
        device.setIsActive(false);
        Assertions.assertNotEquals(device.getIsActive(), true);
        Assertions.assertEquals(device.getIsActive(), false);

        Assertions.assertEquals(device.getMaxCapacity(), 120);
        device.setMaxCapacity(122);
        Assertions.assertNotEquals(device.getMaxCapacity(), 120);
        Assertions.assertEquals(device.getMaxCapacity(), 122);

        Assertions.assertEquals(device.getCapacity(), 20);
        device.setCapacity(21);
        Assertions.assertNotEquals(device.getCapacity(), 20);
        Assertions.assertEquals(device.getCapacity(), 21);

        Assertions.assertEquals(device.getUserId(), 2);
        device.setUserId(3);
        Assertions.assertNotEquals(device.getUserId(), 2);
        Assertions.assertEquals(device.getUserId(), 3);
    }
}
