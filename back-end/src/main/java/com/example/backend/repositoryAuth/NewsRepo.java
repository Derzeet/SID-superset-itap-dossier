package com.example.backend.repositoryAuth;

import com.example.backend.modelsAuth.news;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NewsRepo extends JpaRepository<news,Long> {
    @Query(value = "select * from public.news where id = ?1", nativeQuery = true)
    List<news> getListById(Long id);
}
