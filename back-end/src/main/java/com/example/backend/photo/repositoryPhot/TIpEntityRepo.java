package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.IpgoEmailEntity;
import com.example.backend.photo.modelsPhot.TIpEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TIpEntityRepo extends JpaRepository<TIpEntity, Long> {
    @Query(value= "select * from imp_kfm_fl.t_ip where iin = ?1 ", nativeQuery = true)
    List<TIpEntity> getUsersByLike(String iin);
}