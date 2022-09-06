package com.tradedepot.tracking.services;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@FeignClient(name = "feignUserService",url="https://freight-api.tradedepottest.com")
public interface UserService {

    @PostMapping(path = "/login",  consumes = MediaType.MULTIPART_FORM_DATA_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> submit(@PathVariable String username, @PathVariable String password);

    private HttpHeaders getHeaders() {
        HttpHeaders headers = new HttpHeaders();

        headers.add("x-api-key", "dsq");
        headers.add("Accept", "application/json");
        headers.add("Content-Type", "application/json");
        return headers;
    }
}
