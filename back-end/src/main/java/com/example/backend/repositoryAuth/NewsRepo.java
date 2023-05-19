package com.example.backend.repositoryAuth;

import com.example.backend.modelsAuth.news;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsRepo extends JpaRepository<news,Long> {
}
