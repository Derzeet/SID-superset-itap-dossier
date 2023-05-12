package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.dormant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface dormant_repo extends JpaRepository<dormant, Long> {
    @Query(value= "select * from imp_risk.dormant dormant0_ where dormant0_.iin_bin = ?1 ", nativeQuery = true)
    List<dormant> getUsersByLike(String iin);

}
