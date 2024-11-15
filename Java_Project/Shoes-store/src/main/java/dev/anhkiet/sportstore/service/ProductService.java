package dev.anhkiet.sportstore.service;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import dev.anhkiet.sportstore.domain.Product;
import dev.anhkiet.sportstore.repository.ProductRepository;
import jakarta.servlet.ServletContext;

@Service
public class ProductService {

    private ProductRepository productRepository;
    private ServletContext servletContext;

    public ProductService(ProductRepository productRepository, ServletContext servletContext) {
        this.productRepository = productRepository;
        this.servletContext = servletContext;
    }

    public List<Product> getAllProducts() {
        return this.productRepository.findAll();
    }

    public Optional<Product> getProductByID(long id) {
        return this.productRepository.findById(id);
    }

    public Product handleSaveProduct(Product product) {
        return this.productRepository.save(product);
    }

    public String handleSaveFileUploading(MultipartFile file, String targetFolder) {
        // relative path: absolute path
        if (file.isEmpty()) {
            return "";
        }
        String rootPath = this.servletContext.getRealPath("/resources/images");
        String finalName = "";
        try {
            byte[] bytes = file.getBytes();
            File dir = new File(rootPath + File.separator + targetFolder);
            if (!dir.exists())
                dir.mkdirs();

            // Create the file on server
            finalName = System.currentTimeMillis() + "-" + file.getOriginalFilename();
            File serverFile = new File(dir.getAbsolutePath() + File.separator + finalName);
            // uuid

            BufferedOutputStream stream = new BufferedOutputStream(
                    new FileOutputStream(serverFile));
            stream.write(bytes);
            stream.close();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return finalName;
    }

    public void DeleteByID(long id) {
        this.productRepository.deleteById(id);
    }
}
