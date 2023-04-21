package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.fl_contacts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface flContactsRepo extends JpaRepository<fl_contacts, Long> {
    List<fl_contacts> findAllByIin(String iin);
}
