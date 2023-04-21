package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.criminals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface criminalsRepo extends JpaRepository<criminals, Long> {
    @Query(value= "select * from imp_risk.criminals where iin_bin = ?1", nativeQuery = true)
    List<criminals> getcriminalsByByIIN(String IIN);
}