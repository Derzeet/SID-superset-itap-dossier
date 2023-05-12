package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.mv_iin_doc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface mv_iin_docRepo  extends JpaRepository<mv_iin_doc, UUID> {
    @Query(value = "select * from imp_kfm_fl.mv_iin_doc where (iin = ?1 and expiry_date = (select max(expiry_date) from imp_kfm_fl.mv_iin_doc where " +
            "iin = ?1 and doc_type_ru_name = 'УДОСТОВЕРЕНИЕ РК')) or (iin = ?1 and doc_type_ru_name != 'УДОСТОВЕРЕНИЕ РК' and expiry_date=(select max(expiry_date)" +
            "from imp_kfm_fl.mv_iin_doc where iin = ?1 and doc_type_ru_name != 'УДОСТОВЕРЕНИЕ РК'))", nativeQuery = true)
    List<mv_iin_doc> getByIIN(String iin);

    @Query(value = "SELECT iin FROM imp_kfm_fl.mv_iin_doc WHERE doc_number = ?1 LIMIT 1", nativeQuery = true)
    String getIinByDoc_Number(String doc);
    @Query(value = "select * FROM imp_kfm_fl.mv_iin_doc where doc_number = ?1 ", nativeQuery = true)
    List<mv_iin_doc> getByDoc_number(String doc_number);
}
