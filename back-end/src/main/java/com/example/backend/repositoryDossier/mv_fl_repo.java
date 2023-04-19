package com.example.backend.repositoryDossier;

import com.example.backend.modelsDossier.mv_auto_fl;
import com.example.backend.modelsDossier.mv_fl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface mv_fl_repo extends JpaRepository<mv_fl, Long> {
    @Query(value= "select * from ser.mv_fl mv_fl0_ where mv_fl0_.iin = ?1 ", nativeQuery = true)
    List<mv_fl> getUsersByLike(String iin);

    @Query(value= "select * from ser.mv_fl mv_fl0_ where first_name like ?1 and  patronymic like ?2 and last_name like ?3", nativeQuery = true)
    List<mv_fl> getUsersByFIO(String name, String patronimic, String last);
}
