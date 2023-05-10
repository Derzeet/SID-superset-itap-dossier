package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.mv_ul_leader;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface mv_ul_leaderRepository extends JpaRepository<mv_ul_leader, UUID> {
    List<mv_ul_leader> findAllByIin(String iin);
}
