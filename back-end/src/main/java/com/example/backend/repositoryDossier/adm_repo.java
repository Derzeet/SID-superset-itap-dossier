package com.example.backend.repositoryDossier;

import com.example.backend.modelsDossier.adm;
import com.example.backend.modelsDossier.orphans;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface adm_repo extends JpaRepository<adm, Long> {
    @Query(value= "select * from ser.adm adm0_ where adm0_.iin = ?1 ", nativeQuery = true)
    List<adm> getUsersByLike(String iin);
    @Query(value= "select * from ser.adm adm0_ where adm0_.bin = ?1 ", nativeQuery = true)
    List<adm> getUsersByLikeBin(String iin);

}
