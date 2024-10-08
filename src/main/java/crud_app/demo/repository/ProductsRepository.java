package crud_app.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import crud_app.demo.model.Product;

public interface ProductsRepository extends JpaRepository<Product,Long>{
    
}
