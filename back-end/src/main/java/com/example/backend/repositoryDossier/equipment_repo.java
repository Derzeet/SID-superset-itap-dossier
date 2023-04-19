package com.example.backend.repositoryDossier;

import com.example.backend.modelsDossier.equipment;
import com.example.backend.modelsDossier.orphans;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface equipment_repo extends JpaRepository<equipment, Long> {
    @Query(value= "select * from ser.equipment equipment0_ where equipment0_.owner_iin_bin = ?1 ", nativeQuery = true)
    List<equipment> getUsersByLike(String iin);

}
