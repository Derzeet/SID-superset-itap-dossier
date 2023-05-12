package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.orphans;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface orphans_repo  extends JpaRepository<orphans, Long> {
    @Query(value= "select * from imp_risk.orphans orphans0_ where orphans0_.iin = ?1 ", nativeQuery = true)
    List<orphans> getUsersByLike(String iin);

}
