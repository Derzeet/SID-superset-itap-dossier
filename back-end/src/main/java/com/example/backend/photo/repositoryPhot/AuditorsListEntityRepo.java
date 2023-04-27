package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.AdvocateListEntity;
import com.example.backend.photo.modelsPhot.AuditorsListEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AuditorsListEntityRepo extends JpaRepository<AuditorsListEntity, Long> {
    @Query(value = "select * from imp_notary.auditors_list  where iin = ?1", nativeQuery = true)
    List<AuditorsListEntity> getUsersByLike(String iin);
}