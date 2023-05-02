package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.MzEntity;
import com.example.backend.photo.modelsPhot.OpgEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MzEntityRepo extends JpaRepository<MzEntity, Long> {
    @Query(value= "select * from imp_risk.mz where iin = ?1", nativeQuery = true)
    List<MzEntity> getopgByIIN(String IIN);
}