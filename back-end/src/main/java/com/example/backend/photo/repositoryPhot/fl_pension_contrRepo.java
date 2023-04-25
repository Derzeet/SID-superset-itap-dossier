package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.fl_pension_contr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface fl_pension_contrRepo extends JpaRepository<fl_pension_contr, Long> {
    @Query(value= "select * from imp_kfm_fl.fl_pension_contr  where \"IIN\" = ?1", nativeQuery = true)
    List<fl_pension_contr> getUsersByLike(String iin);
    @Query(value= "select distinct(\"P_RNN\") from imp_kfm_fl.fl_pension_contr  where \"IIN\" = ?1 ", nativeQuery = true)
    List<String> getUsersByLikeCompany(String iin);

    List<fl_pension_contr> findAllByIin(String iin);



//    SELECT EXTRACT(YEAR FROM "PAY_DATE") AS year,
//       "P_NAME", "KNP",
//    SUM("AMOUNT") AS total_amount
//    FROM fl_pension_contr
//    WHERE "IIN" = '810615301348' and "P_RNN" = '061600005040'
//    GROUP BY EXTRACT(YEAR FROM "PAY_DATE"), "P_NAME", "KNP";
}
