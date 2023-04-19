package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface newPhotoRepo extends JpaRepository<photoDb, Long> {
    @Query(value= "select distinct * from import_fl.photo where iin = ?1 ", nativeQuery = true)

    List<photoDb> findAllByIinv(String iin);

    @Query(value= "select distinct * from import_fl.photo where iin = ?1 and date = (select max(date) from  import_fl.photo where iin = ?1)", nativeQuery = true)
    photoDb findLastPhoto(String iin);
}
