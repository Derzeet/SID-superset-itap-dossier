package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.fl_pension_contr;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.awt.print.Pageable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface fl_pension_contrRepo extends JpaRepository<fl_pension_contr, Long> {
    @Query(value= "select * from imp_kfm_fl.fl_pension_contr  where \"IIN\" = ?1", nativeQuery = true)
    List<fl_pension_contr> getUsersByLike(String iin);
    @Query(value= "select distinct(\"P_RNN\") from imp_kfm_fl.fl_pension_contr  where \"IIN\" = ?1 ", nativeQuery = true)
    List<String> getUsersByLikeCompany(String iin);
//    SELECT  SUM("AMOUNT") AS AMOUNT, "KNP"
//    FROM imp_kfm_fl.fl_pension_contr
//    WHERE "IIN" = '810615301348' and "P_RNN" = '061600005040'
//    GROUP BY "KNP"
    @Query(value= "SELECT  cast(SUM(\"AMOUNT\") as text) AS AMOUNT, \"KNP\"\n" +
            "             FROM imp_kfm_fl.fl_pension_contr\n" +
            "            WHERE \"IIN\" = ?1 and \"P_RNN\" = ?2\n" +
            "                GROUP BY \"KNP\" ", nativeQuery = true)
    List<Map<String,Object>> findAmountOfAmountByKNP(String iin, String bin);
    @Query(value= "SELECT  DISTINCT \"IIN\",cast(SUM(\"AMOUNT\") as text) AS AMOUNT, \"KNP\" FROM imp_kfm_fl.fl_pension_contr \n" +
            "WHERE extract(year from \"PAY_DATE\") = ?1 and \"P_RNN\" = ?2 GROUP BY \"KNP\", \"IIN\" ", nativeQuery = true)
    Page<Map<String,Object>> findAmountOfAmountByKNPUL(Integer year, String bin, PageRequest pageRequest);
    @Query(value = "SELECT extract(year from \"PAY_DATE\"), COUNT(DISTINCT \"IIN\") AS iin_count\n" +
            "FROM imp_kfm_fl.fl_pension_contr\n" +
            "WHERE \"P_RNN\" = ?1 \n" +
            "GROUP BY extract(year from \"PAY_DATE\")", nativeQuery = true)
    List<Map<String,Object>> findAmountOfEmployeesOfEveryYear(String Bin);

    @Query(value = "SELECT distinct (extract(year from \"PAY_DATE\"))\n" +
            "FROM imp_kfm_fl.fl_pension_contr where \"P_RNN\" = '091040009041'  group by \"PAY_DATE\"", nativeQuery = true)
    List<Integer> amountOfYears(String BIN);
    @Query(value = "SELECT  COUNT(DISTINCT \"IIN\") AS iin_count\n" +
            "FROM imp_kfm_fl.fl_pension_contr\n" +
            "WHERE \"P_RNN\" = ?1 and extract(year from \"PAY_DATE\") = ?2 \n" +
            "GROUP BY extract(year from \"PAY_DATE\")", nativeQuery = true)
    Integer amountOfEmp(String BIN, Integer year);


    @Query(value = "SELECT EXTRACT(YEAR FROM \"PAY_DATE\") AS year,\n" +
            "       \"P_NAME\", \"KNP\",\n" +
            "    SUM(\"AMOUNT\") AS total_amount\n" +
            "    FROM imp_kfm_fl.fl_pension_contr\n" +
            "    WHERE \"IIN\" = ?1 and \"P_RNN\" = ?2 \n" +
            "    GROUP BY EXTRACT(YEAR FROM \"PAY_DATE\"), \"P_NAME\", \"KNP\"  ", nativeQuery = true)
    fl_pension_contr getAllByCompanies(String iin , String bin);

    @Query(value = "select distinct (extract (year from fpc.\"PAY_DATE\")) from imp_kfm_fl.fl_pension_contr fpc where \"P_RNN\" = ?1", nativeQuery = true)
    List<Integer> getYearThatExist(String bin);
}
