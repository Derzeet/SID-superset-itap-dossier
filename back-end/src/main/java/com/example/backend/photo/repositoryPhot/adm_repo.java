package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.adm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface adm_repo extends JpaRepository<adm, Long> {
    @Query(value= "select * from imp_kfm_fl.adm where iin = ?1 ", nativeQuery = true)
    List<adm> getUsersByLike(String iin);
    @Query(value= "select * from imp_kfm_fl.adm  where bin = ?1 ", nativeQuery = true)
    List<adm> getUsersByLikeBin(String iin);

}
