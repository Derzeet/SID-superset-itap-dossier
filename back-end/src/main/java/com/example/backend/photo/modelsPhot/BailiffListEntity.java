package com.example.backend.photo.modelsPhot;

import javax.persistence.*;

@Entity
@Table(name = "imp_notary.bailiff_list")
public class BailiffListEntity {
    @Id


    @Column(name = "iin")
    private String iin;

    @Column(name = "license_number")
    private String licenseNumber;

    @Column(name = "status")
    private String status;

    public String getIin() {
        return iin;
    }

    public void setIin(String iin) {
        this.iin = iin;
    }

    public String getLicenseNumber() {
        return licenseNumber;
    }

    public void setLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}