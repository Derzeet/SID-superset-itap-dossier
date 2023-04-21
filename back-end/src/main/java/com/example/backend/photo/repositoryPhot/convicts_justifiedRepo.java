package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.convicts_justified;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface convicts_justifiedRepo extends JpaRepository<convicts_justified, Long> {
    @Query(value= "select * from imp_risk.convicts_justified where iin = ?1", nativeQuery = true)
    List<convicts_justified> getconvicts_justifiedByByIIN(String IIN);
}