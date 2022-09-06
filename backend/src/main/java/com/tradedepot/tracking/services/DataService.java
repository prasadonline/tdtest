package com.tradedepot.tracking.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "feignDataService",url="https://freight-api.tradedepottest.com")
public interface DataService {

    @Autowired
    UserService u = null;

    @PostMapping(path = "/fblog", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> submit(@RequestHeader HttpHeaders headers);
}
