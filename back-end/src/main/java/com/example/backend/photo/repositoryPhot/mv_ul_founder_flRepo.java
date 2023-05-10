package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.mv_ul_founder_fl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface mv_ul_founder_flRepo extends JpaRepository<mv_ul_founder_fl, Long> {
    @Query(value= "select * from imp_kfm_ul.mv_ul_founder_fl_old where bin_org = ?1 ", nativeQuery = true)
    List<mv_ul_founder_fl> getUsersByLike(String iin);
    @Query(value= "select * from imp_kfm_ul.mv_ul_founder_fl_old where iin = ?1 ", nativeQuery = true)
    List<mv_ul_founder_fl> getUsersByLikeIIN(String iin);
}