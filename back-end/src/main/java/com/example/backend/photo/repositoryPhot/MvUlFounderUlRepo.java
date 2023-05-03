package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.MvUlFounderUl;
import com.example.backend.photo.modelsPhot.MvUlLeaderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MvUlFounderUlRepo extends JpaRepository<MvUlFounderUl, Long> {
    @Query(value= "select * from imp_kfm_ul.mv_ul_founder_ul mv_ul0_ where mv_ul0_.bin_org = ?1  ", nativeQuery = true)
    List<MvUlFounderUl> getUsersByLike(String iin);
}