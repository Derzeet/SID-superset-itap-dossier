package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.bankrot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface bankrotRepo extends JpaRepository<bankrot, Long> {
    @Query(value= "select * from imp_risk.bankrot where iin_bin = ?1", nativeQuery = true)
    List<bankrot> getbankrotByByIIN(String IIN);
}
