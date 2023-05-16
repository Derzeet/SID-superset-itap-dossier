package com.example.backend.repositoryDossier;

import com.example.backend.modelsDossier.TaxOutEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface TaxOutEntityRepo extends JpaRepository<TaxOutEntity, Long>, PagingAndSortingRepository<TaxOutEntity,Long> {
    @Query(value= "select * from ser.tax_out  where \"бин\" = ?1", nativeQuery = true)
    Page<TaxOutEntity> getUsersByLike(String iin, PageRequest pageRequest);
    List<TaxOutEntity> getAllByBin(String iin);


}
