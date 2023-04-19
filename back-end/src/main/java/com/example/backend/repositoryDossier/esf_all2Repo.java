package com.example.backend.repositoryDossier;

import com.example.backend.modelsDossier.esf_all2;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface esf_all2Repo extends JpaRepository<esf_all2, Long> {
//    @Query(value = "select * from esf_all2 limit 1", nativeQuery = true)
//    List<esf_all2> findRoleById(Long id);
}
