package com.example.backend.photo.modelsPhot;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "criminals", schema = "imp_risk")
public class criminals {
    private String courtName;
    private String courtDt;
    private String iinBin;
    private String decision;
    private String crimeName;
    private String crimeCode;
    private String sentence;
    private String addInfo;
    private String treatment;
    private String erdr;
    private Date updateDt;
    @Id
    private long id;
}
