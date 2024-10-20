package com.example.calculator.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CalculatorController {

    @GetMapping("")
    public String index() {
        return "calculator";  // Hiển thị giao diện calculator.html
    }

    @GetMapping("/calculate")
    public String calculate(@RequestParam double a,
                            @RequestParam double b,
                            @RequestParam String operation,
                            Model model) {
        double result = 0;
        switch (operation) {
            case "add":
                result = a + b;
                break;
            case "subtract":
                result = a - b;
                break;
            case "multiply":
                result = a * b;
                break;
            case "divide":
                if (b == 0) {
                    model.addAttribute("result", "Cannot divide by zero!");
                    return "calculator";
                }
                result = a / b;
                break;
        }
        model.addAttribute("result", result);
        return "calculator";
    }
}
