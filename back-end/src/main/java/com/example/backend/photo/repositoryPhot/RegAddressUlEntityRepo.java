package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.MvUlLeaderEntity;
import com.example.backend.photo.modelsPhot.RegAddressUlEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RegAddressUlEntityRepo extends JpaRepository<RegAddressUlEntity, Long> {
    @Query(value= "select * from imp_kfm_ul.mv_reg_address_ul mv_ul0_ where mv_ul0_.bin = ?1 ORDER BY reg_date desc limit 1", nativeQuery = true)
    List<RegAddressUlEntity> getUsersByLike(String iin);
}