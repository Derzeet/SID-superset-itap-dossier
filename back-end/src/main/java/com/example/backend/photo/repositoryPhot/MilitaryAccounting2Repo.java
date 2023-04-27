package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.MilitaryAccounting2Entity;
import com.example.backend.photo.modelsPhot.MillitaryAccount;
import com.example.backend.photo.modelsPhot.adm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface MilitaryAccounting2Repo extends JpaRepository<MilitaryAccounting2Entity, Long> {
    @Query(value= "select * from imp_kfm_fl.military_accounting_2 where iin = ?1 ", nativeQuery = true)
    List<MilitaryAccounting2Entity> getUsersByLike(String iin);
}