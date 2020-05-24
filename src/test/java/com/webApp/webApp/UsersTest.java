package com.webApp.webApp;

import com.webApp.webApp.model.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class UsersTest {
    @Test
    public void addUserTest(){
        User user = new User();
        Assertions.assertNotNull(user);
    }
    @Test
    public void changeValuesOfUserTest(){
        User user = new User(1, "login", "password", "name", "surname");

        Assertions.assertEquals(user.getLogin(), "login");
        user.setLogin("newLogin");
        Assertions.assertNotEquals(user.getLogin(), "login");
        Assertions.assertEquals(user.getLogin(), "newLogin");

        Assertions.assertEquals(user.getPassword(), "password");
        user.setPassword("newPassword");
        Assertions.assertNotEquals(user.getPassword(), "password");
        Assertions.assertEquals(user.getPassword(), "newPassword");

        Assertions.assertEquals(user.getName(), "name");
        user.setName("newName");
        Assertions.assertNotEquals(user.getName(), "name");
        Assertions.assertEquals(user.getName(), "newName");

        Assertions.assertEquals(user.getSurname(), "surname");
        user.setSurname("newSurname");
        Assertions.assertNotEquals(user.getSurname(), "surname");
        Assertions.assertEquals(user.getSurname(), "newSurname");
    }
}
