package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.convicts_terminated_by_rehab;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface convicts_terminated_by_rehabRepo extends JpaRepository<convicts_terminated_by_rehab, Long> {
    @Query(value= "select * from imp_risk.convicts_terminated_by_rehab where iin = ?1", nativeQuery = true)
    List<convicts_terminated_by_rehab> getconvicts_terminated_by_rehabByByIIN(String IIN);
}