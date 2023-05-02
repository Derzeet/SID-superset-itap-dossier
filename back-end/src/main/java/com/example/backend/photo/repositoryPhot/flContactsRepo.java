package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.fl_contacts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface flContactsRepo extends JpaRepository<fl_contacts, Long> {
    @Query(value = "SELECT iin from imp_kfm_fl.contacts where phone = ?1", nativeQuery = true)
    List<String> getByPhoneNumber(String phone);

    List<fl_contacts> findAllByIin(String iin);

}
