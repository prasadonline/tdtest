package com.tradedepot.tracking.controllers;

import com.tradedepot.tracking.services.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class DataController {
    @Autowired
    DataService dataService;

    @CrossOrigin
    @GetMapping("/getall")
    public ResponseEntity<?> getAll(@RequestHeader Map<String, String> headers){
        String token = headers.get("authorization");
        ResponseEntity<?> submit = dataService.submit(getHeaders(token));
        return ResponseEntity.status(HttpStatus.OK).body(submit);

    }
    private HttpHeaders getHeaders(String token) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", token);
        return headers;
    }
}
