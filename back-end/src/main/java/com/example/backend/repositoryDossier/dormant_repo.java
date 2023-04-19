package com.example.backend.repositoryDossier;

import com.example.backend.modelsDossier.dormant;
import com.example.backend.modelsDossier.orphans;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface dormant_repo extends JpaRepository<dormant, Long> {
    @Query(value= "select * from ser.dormant dormant0_ where dormant0_.iin_bin = ?1 ", nativeQuery = true)
    List<dormant> getUsersByLike(String iin);

}
