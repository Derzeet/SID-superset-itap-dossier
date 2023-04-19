package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.school;
import com.example.backend.photo.modelsPhot.universities;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface schoolRepo extends JpaRepository<school, Integer> {
    @Query(value = "select * from public.school where iin = ?1", nativeQuery = true)
    List<school> getByIIN(String iin);
}
