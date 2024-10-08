package crud_app.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crud_app.demo.model.Product;
import crud_app.demo.repository.ProductsRepository;

@Service
public class ProductService {
    @Autowired
    private ProductsRepository productsRepository;

    public Product createProduct(Product product) {
        return productsRepository.save(product);
    }

     // Read
    //  public List<Product> getAllProducts() {
    //     return productsRepository.findAll();
    // }

    public Product getProductById(Long id) {
        return productsRepository.findById(id).orElse(null);
    }

    // Update
    public Product updateProduct(Product product) {
        return productsRepository.save(product);
    }

    // Delete
    public void deleteProduct(Long id) {
        productsRepository.deleteById(id);
    }

}
