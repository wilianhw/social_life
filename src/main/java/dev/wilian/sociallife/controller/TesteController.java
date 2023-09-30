package dev.wilian.sociallife.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TesteController {

    @GetMapping
    public String hello() {
        return "hello";
    }

    @PostMapping
    public String teste() {
        return "teste";
    }
}
