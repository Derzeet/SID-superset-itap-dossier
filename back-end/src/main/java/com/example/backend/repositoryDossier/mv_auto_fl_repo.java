package com.example.backend.repositoryDossier;

import com.example.backend.modelsAuth.User;
import com.example.backend.modelsDossier.esf_all2;
import com.example.backend.modelsDossier.mv_auto_fl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface mv_auto_fl_repo extends JpaRepository<mv_auto_fl, Long> {
    @Query(value= "select * from ser.mv_auto_fl mv_auto_fl0_ where mv_auto_fl0_.iin = ?1 ", nativeQuery = true)
    List<mv_auto_fl> getUsersByLike(String iin);
}
