package com.example.backend.photo.modelsPhot;
import javax.persistence.*;

@Entity
@Table(name = "imp_notary.auditors_list")
public class AuditorsListEntity {
    @Id

    @Column(name = "auditor_number")
    private String auditorNumber;

    @Column(name = "iin")
    private String iin;

    @Column(name = "status")
    private String status;

    public String getAuditorNumber() {
        return auditorNumber;
    }

    public void setAuditorNumber(String auditorNumber) {
        this.auditorNumber = auditorNumber;
    }

    public String getIin() {
        return iin;
    }

    public void setIin(String iin) {
        this.iin = iin;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}