package com.example.backend.repositoryDossier;

import com.example.backend.modelsDossier.dormant;
import com.example.backend.modelsDossier.fl_pension_contr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface fl_pension_contrRepo extends JpaRepository<fl_pension_contr, Long> {
    @Query(value= "select * from ser.fl_pension_contr  where IIN = ?1 order by PAY_DATE  desc", nativeQuery = true)
    List<fl_pension_contr> getUsersByLike(String iin);

    List<fl_pension_contr> findAllByIin(String iin);
}
