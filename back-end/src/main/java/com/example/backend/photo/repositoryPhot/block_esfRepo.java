package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.block_esf;
import com.example.backend.photo.modelsPhot.convicts_justified;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface block_esfRepo extends JpaRepository<block_esf, Long> {
    @Query(value= "select * from imp_risk.block_esf where iin_bin = ?1", nativeQuery = true)
    List<block_esf> getblock_esfByIIN(String IIN);
}