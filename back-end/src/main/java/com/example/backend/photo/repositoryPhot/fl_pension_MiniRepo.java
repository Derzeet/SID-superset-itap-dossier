package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.flPensionMini;
import com.example.backend.photo.modelsPhot.fl_pension_contr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface fl_pension_MiniRepo extends JpaRepository<flPensionMini, Long> {


    @Query(value = "SELECT EXTRACT(YEAR FROM \"PAY_DATE\") AS PAY_DATE,\n" +
            "       \"P_NAME\", \"KNP\",\n" +
            "    SUM(\"AMOUNT\") AS \"AMOUNT\"\n" +
            "    FROM imp_kfm_fl.fl_pension_contr_old \n" +
            "    WHERE \"IIN\" = ?1 and \"P_RNN\" = ?2 \n" +
            "    GROUP BY EXTRACT(YEAR FROM \"PAY_DATE\"), \"P_NAME\", \"KNP\"  ", nativeQuery = true)
    List<flPensionMini> getAllByCompanies(String iin , String bin);
    @Query(value = "SELECT DISTINCT(EXTRACT(YEAR FROM \"PAY_DATE\")) \n" +
            "    FROM imp_kfm_fl.fl_pension_contr_old \n" +
            "    WHERE \"IIN\" = ?1 and \"P_RNN\" = ?2 \n", nativeQuery = true)
    List<String> getAllByCompaniesYear(String iin , String bin);
    @Query(value = "select distinct extract(year from \"PAY_DATE\")  from imp_kfm_fl.fl_pension_contr_old fpc where \"IIN\" = ?1", nativeQuery = true)
    List<String> getYears(String iin);
}
