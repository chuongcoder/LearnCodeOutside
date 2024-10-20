package dev.anhkiet.sportstore.controller.client;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import dev.anhkiet.sportstore.domain.Product;
import dev.anhkiet.sportstore.domain.User;
import dev.anhkiet.sportstore.domain.dto.RegisterDTO;
import dev.anhkiet.sportstore.service.ProductService;
import dev.anhkiet.sportstore.service.UserService;
import jakarta.validation.Valid;

import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;

import java.util.List;

@Controller
public class HomePageController {
    private ProductService productService;
    private UserService userService;
    private PasswordEncoder passwordEncoder;

    public HomePageController(ProductService productService, UserService userService, PasswordEncoder passwordEncoder) {
        this.productService = productService;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping("/")
    public String getMethodName(Model model) {
        List<Product> products = this.productService.getAllProducts();
        model.addAttribute("Products", products);
        return "client/homepage/show";
    };

    @GetMapping("/register")
    public String getRegisterPage(Model model) {
        model.addAttribute("registerUser", new RegisterDTO());
        return "client/auth/register";
    }

    @PostMapping("/register")
    public String PostRegisterUser(Model model, @ModelAttribute("registerUser") @Valid RegisterDTO RegisterDTO,
            BindingResult BindingResult) {
        if (BindingResult.hasErrors()) {
            return "client/auth/register";
        }
        User user = this.userService.getUserRegister(RegisterDTO);
        String hashPassword = this.passwordEncoder.encode(RegisterDTO.getPassword());
        user.setpassWord(hashPassword);
        user.setRole(this.userService.getRoleByName("USER"));
        this.userService.HandleSaveUser(user);
        return "redirect:/login";
    }

    @GetMapping("/login")
    public String getLoginPage() {
        return "client/auth/login";
    }

}
