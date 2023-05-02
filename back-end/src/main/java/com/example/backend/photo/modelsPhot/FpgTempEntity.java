package com.example.backend.photo.modelsPhot;

import javax.annotation.Nullable;
import javax.persistence.*;

@Entity
@Table(name = "imp_kfm_fl.fpg_temp")
public class FpgTempEntity {
    @Id
    @Nullable
    private Long id;

    @Nullable
    @Column(name = "bin")
    private String bin;

    @Nullable
    @Column(name = "beneficiary")
    private String beneficiary;

    @Nullable
    public Long getId() {
        return id;
    }
    @Nullable

    public void setId(Long id) {
        this.id = id;
    }
    @Nullable

    public String getBin() {
        return bin;
    }

    @Nullable
    public void setBin(String bin) {
        this.bin = bin;
    }

    @Nullable
    public String getBeneficiary() {
        return beneficiary;
    }
    @Nullable

    public void setBeneficiary(String beneficiary) {
        this.beneficiary = beneficiary;
    }
}