package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.reg_address_fl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface reg_address_fl_Repo extends JpaRepository<reg_address_fl, String> {
    @Query(value = "SELECT * FROM imp_kfm_db.reg_address_fl where iin = ?1", nativeQuery = true)
    List<reg_address_fl> getByIIN(String iin);
}