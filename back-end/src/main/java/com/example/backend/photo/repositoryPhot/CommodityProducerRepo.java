package com.example.backend.photo.repositoryPhot;

import com.example.backend.photo.modelsPhot.CommodityProducer;
import com.example.backend.photo.modelsPhot.convicts_justified;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CommodityProducerRepo extends JpaRepository<CommodityProducer, Long> {
    @Query(value= "select * from imp_risk.commodity_producers where iin_bin = ?1", nativeQuery = true)
    List<CommodityProducer> getiin_binByIIN(String IIN);
}