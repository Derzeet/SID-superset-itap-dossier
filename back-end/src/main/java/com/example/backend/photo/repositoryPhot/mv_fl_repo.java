package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.mv_fl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface mv_fl_repo extends JpaRepository<mv_fl, Long> {
    @Query(value= "select * from imp_kfm_fl.mv_fl_iin mv_fl0_ where mv_fl0_.iin = ?1 ", nativeQuery = true)
    List<mv_fl> getUsersByLike(String iin);


    @Query(value= "select * from imp_kfm_fl.mv_fl_iin mv_fl0_ where mv_fl0_.iin = ?1 limit 1", nativeQuery = true)
    mv_fl getUserByIin(String iin);

    @Query(value= "select * from imp_kfm_fl.mv_fl_iin mv_fl0_ where first_name like ?1 and  patronymic like ?2 and last_name like ?3", nativeQuery = true)
    List<mv_fl> getUsersByFIO(String name, String patronimic, String last);
}
