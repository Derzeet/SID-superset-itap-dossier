package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.fl_relatives;
import com.example.backend.photo.modelsPhot.pdl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface pdlReposotory extends JpaRepository<pdl, String> {
    @Query(value = "select * FROM imp_kfm_fl.pdl where iin = ?1", nativeQuery = true)
    List<pdl> getByIIN(String iin);
    @Query(value = "select * FROM imp_kfm_fl.pdl where bin = ?1", nativeQuery = true)
    List<pdl> getByBin(String iin);
}
