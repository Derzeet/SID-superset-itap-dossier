package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.universities;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface universitiesRepo  extends JpaRepository<universities, Integer> {
    @Query(value = "select * from public.study where iin = ?1", nativeQuery = true)
    List<universities> getByIIN(String iin);
}
