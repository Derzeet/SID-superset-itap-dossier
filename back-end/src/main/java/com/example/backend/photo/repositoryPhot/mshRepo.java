package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.msh;
import com.example.backend.photo.modelsPhot.mv_rn_old;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface mshRepo  extends JpaRepository<msh, Long> {
    @Query(value= "select * from imp_kfm_fl.msh where owner_iin_bin = ?1 ", nativeQuery = true)
    List<msh> getUsersByLike(String iin);
}