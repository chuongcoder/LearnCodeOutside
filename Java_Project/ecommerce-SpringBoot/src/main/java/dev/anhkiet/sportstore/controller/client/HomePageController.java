package dev.anhkiet.sportstore.controller.client;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import dev.anhkiet.sportstore.domain.Cart;
import dev.anhkiet.sportstore.domain.CartDetail;
import dev.anhkiet.sportstore.domain.Order;
import dev.anhkiet.sportstore.domain.Product;
import dev.anhkiet.sportstore.domain.User;
import dev.anhkiet.sportstore.domain.dto.ProductCriteriaDTO;
import dev.anhkiet.sportstore.domain.dto.RegisterDTO;
import dev.anhkiet.sportstore.service.CartService;
import dev.anhkiet.sportstore.service.ProductService;
import dev.anhkiet.sportstore.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Controller
public class HomePageController {
    private ProductService productService;
    private UserService userService;
    private PasswordEncoder passwordEncoder;
    private CartService cartService;

    public HomePageController(CartService cartService, ProductService productService, UserService userService,
            PasswordEncoder passwordEncoder) {
        this.productService = productService;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.cartService = cartService;
    }

    // @GetMapping("/")
    // public String getMethodName(Model model, @RequestParam(value = "page",
    // defaultValue = "1") int page) {
    // Pageable pageable = PageRequest.of(page - 1, 3);
    // Page<Product> prs = this.productService.fetchProducts(pageable);
    // List<Product> products = prs.getContent();
    // model.addAttribute("Products", products);
    // model.addAttribute("totalPages", prs.getTotalPages());
    // model.addAttribute("currentPage", page);
    // return "client/homepage/show";
    // }

    @GetMapping("/")
    public String getProductsPage(Model model, @ModelAttribute ProductCriteriaDTO productCriteriaDTO) {
        int page = productCriteriaDTO.getPageAsInt();
        try {
            if (productCriteriaDTO.getPage().isPresent()) {
                page = Integer.parseInt(productCriteriaDTO.getPage().get());
            }
        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
        }

        Pageable pageable = PageRequest.of(page - 1, 5);
        Page<Product> prs = this.productService.fetchProducts(pageable, productCriteriaDTO);
        List<Product> products = prs.getContent();
        String url = this.productService.getQueryStringFilter(productCriteriaDTO);
        model.addAttribute("Products", products);
        model.addAttribute("totalPages", prs.getTotalPages());
        model.addAttribute("currentPage", page);
        model.addAttribute("queryfilter", url);
        return "client/homepage/show";
    }

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

    @GetMapping("/access-deny")
    public String getDenyAccesssPage() {
        return "client/auth/deny";
    }

    @GetMapping("/cart")
    public String getCartPage(Model model, HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        String username = (String) session.getAttribute("email");
        List<CartDetail> cartDetails = (this.cartService.getCartDetailByUser(username) != null)
                ? this.cartService.getCartDetailByUser(username)
                : new ArrayList<CartDetail>();
        double totalPrice = 0;
        for (CartDetail cartdetail : cartDetails) {
            totalPrice += cartdetail.getPrice();
        }
        User user = this.userService.getUserByEmail(username);
        Cart cart = this.cartService.getCartByUser(user) == null ? new Cart() : this.cartService.getCartByUser(user);

        model.addAttribute("cart", cart);
        model.addAttribute("cartDetails", cartDetails);
        model.addAttribute("checkoutPrice", totalPrice);
        model.addAttribute("sizelist", cartDetails.size());

        return "client/cart/show";
    }

}
