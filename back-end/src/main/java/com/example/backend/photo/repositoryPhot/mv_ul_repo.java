package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.mv_ul;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface mv_ul_repo extends JpaRepository<mv_ul, Long> {
    @Query(value= "select * from imp_kfm_ul.mv_ul_old mv_ul0_ where mv_ul0_.bin = ?1 limit 1 ", nativeQuery = true)
    List<mv_ul> getUsersByLike(String iin);
    @Query(value= "select DISTINCT ON (bin) * from imp_kfm_ul.mv_ul_old where UPPER (full_name_rus) like ?1 or UPPER (full_name_kaz) like ?1", nativeQuery = true)
    List<mv_ul> getUlsByName(String name);
    @Query(value="select short_name from imp_kfm_ul.mv_ul_old where bin = ?1 limit 1", nativeQuery = true)
    String getNameByBin(String bin);
}