package com.example.backend.repositoryDossier;

import com.example.backend.modelsDossier.TaxOutEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TaxOutEntityRepo extends JpaRepository<TaxOutEntity, Long> {
    @Query(value= "select * from ser.tax_out  where `бин` = ?1 limit 10", nativeQuery = true)
    List<TaxOutEntity> getUsersByLike(String iin);
    List<TaxOutEntity> findAllByBin(String iin);


}
