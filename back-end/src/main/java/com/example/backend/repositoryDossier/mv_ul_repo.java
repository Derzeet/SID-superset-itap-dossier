package com.example.backend.repositoryDossier;

import com.example.backend.modelsDossier.mv_ul;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface mv_ul_repo extends JpaRepository<mv_ul, Long> {
@Query(value= "select * from ser.mv_ul mv_ul0_ where mv_ul0_.bin = ?1 ", nativeQuery = true)
List<mv_ul> getUsersByLike(String iin);
}