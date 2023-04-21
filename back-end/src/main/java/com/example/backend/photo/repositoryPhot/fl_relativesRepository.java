package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.fl_relatives;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface fl_relativesRepository extends JpaRepository<fl_relatives, Long>  {

    List<fl_relatives> findAllByIin(String iin);
    @Query(value= "select * from imp_zags.fl_relatives where parent_iin = ?1", nativeQuery = true)
    List<fl_relatives> getRelativesByFio(String IIN);
}
