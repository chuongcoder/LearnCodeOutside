package com.example.demo;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class DummyControler {
    @RequestMapping("/")
    String displaString() {
        return "Hello Spring boot!";
    }

    
}
