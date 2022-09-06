package com.tradedepot.tracking.controllers;


import com.tradedepot.tracking.requests.UserLoginRequest;
import com.tradedepot.tracking.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLoginRequest user){

        ResponseEntity<?> submit = userService.submit(user.getUsername(), user.getPassword());

        if(submit.getHeaders().containsKey("authorization")){
            return ResponseEntity.status(HttpStatus.OK).body(submit.getHeaders().get("authorization"));

        }else{
            String message="Bad Request";
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(message);
        }

    }
}
