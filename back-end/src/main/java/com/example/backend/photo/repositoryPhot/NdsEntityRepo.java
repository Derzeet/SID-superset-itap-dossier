package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.NdsEntity;
import com.example.backend.photo.modelsPhot.mv_ul_founder_fl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NdsEntityRepo extends JpaRepository<NdsEntity, Long> {
    @Query(value = "select * from imp_risk.nds where iin_bin = ?1 ", nativeQuery = true)
    List<NdsEntity> getUsersByLike(String iin);
}