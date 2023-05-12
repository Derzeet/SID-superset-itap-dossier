package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.omn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface omn_repo  extends JpaRepository<omn, Long> {
    @Query(value= "select * from imp_risk.omn omn0_ where omn0_.leader_iin = ?1 ", nativeQuery = true)
    List<omn> getUsersByLike(String iin);
    @Query(value= "select * from imp_risk.omn omn0_ where omn0_.iin_bin = ?1 ", nativeQuery = true)
    List<omn> getUsersByLikeIin_bin(String BIN);
    @Query(value= "select * from imp_risk.omn omn0_ where omn0_.iin_bin = ?1 ", nativeQuery = true)
    omn getUsersByLikeIin_bins(String BIN);
}
