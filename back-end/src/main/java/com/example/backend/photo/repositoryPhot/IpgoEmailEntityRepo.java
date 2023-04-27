package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.IpgoEmailEntity;
import com.example.backend.photo.modelsPhot.MilitaryAccounting2Entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IpgoEmailEntityRepo extends JpaRepository<IpgoEmailEntity, Long> {
    @Query(value= "select * from imp_kfm_fl.ipgo_email where iin = ?1 ", nativeQuery = true)
    List<IpgoEmailEntity> getUsersByLike(String iin);
}