package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.QoldauSubsidy;
import com.example.backend.photo.modelsPhot.WantedListEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface WantedListRepo extends JpaRepository<WantedListEntity, String> {
    @Query(value = "SELECT * FROM imp_kfm_fl.wanted_list where iin = ?1", nativeQuery = true)
    List<WantedListEntity> getByIIN(String iin);
}