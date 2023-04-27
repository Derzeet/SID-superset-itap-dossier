package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.FirstCreditBureauEntity;
import com.example.backend.photo.modelsPhot.fl_pension_contr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FirstCreditBureauEntityRepo extends JpaRepository<FirstCreditBureauEntity, Long> {
    @Query(value = "select * from imp_kfm_fl.first_credit_bureau  where iin = ?1", nativeQuery = true)
    List<FirstCreditBureauEntity> getUsersByLike(String iin);
}
