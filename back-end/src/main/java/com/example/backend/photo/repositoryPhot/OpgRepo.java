package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.OpgEntity;
import com.example.backend.photo.modelsPhot.block_esf;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OpgRepo extends JpaRepository<OpgEntity, Long> {
    @Query(value= "select * from imp_risk.opg where bin = ?1", nativeQuery = true)
    List<OpgEntity> getopgByIIN(String IIN);
}