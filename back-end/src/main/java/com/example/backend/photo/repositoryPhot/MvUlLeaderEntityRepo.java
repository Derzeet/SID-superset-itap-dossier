package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.MvUlLeaderEntity;
import com.example.backend.photo.modelsPhot.mv_ul;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MvUlLeaderEntityRepo extends JpaRepository<MvUlLeaderEntity, Long> {
    @Query(value= "select * from imp_kfm_ul.mv_ul_leader mv_ul0_ where mv_ul0_.bin_org = ?1 ", nativeQuery = true)
    List<MvUlLeaderEntity> getUsersByLike(String iin);
}