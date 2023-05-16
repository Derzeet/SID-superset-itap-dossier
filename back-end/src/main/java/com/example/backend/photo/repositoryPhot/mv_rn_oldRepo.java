package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.mv_rn_old;
import com.example.backend.photo.modelsPhot.mv_ul_founder_fl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface mv_rn_oldRepo  extends JpaRepository<mv_rn_old, Long> {
    @Query(value= "select * from imp_rn.mv_rn where owner_iin_bin = ?1", nativeQuery = true)
    List<mv_rn_old> getUsersByLike(String iin);
}