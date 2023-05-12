package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.equipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface equipment_repo extends JpaRepository<equipment, Long> {
    @Query(value= "select * from imp_kfm_fl.equipment equipment0_ where equipment0_.owner_iin_bin = ?1 ", nativeQuery = true)
    List<equipment> getUsersByLike(String iin);

}
