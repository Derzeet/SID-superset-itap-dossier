package com.example.backend.photo.modelsPhot;

import javax.annotation.Nullable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "mv_rn_old", schema = "imp_rn")
public class mv_rn_old {
    @Nullable

    private String cadastral_number;
    @Nullable

    @Id
    private String address_rus;
    @Nullable

    private String owner_iin_bin;

    @Nullable
    public String getCadastral_number() {
        return cadastral_number;
    }

    public void setCadastral_number(@Nullable String cadastral_number) {
        this.cadastral_number = cadastral_number;
    }

    @Nullable
    public String getAddress_rus() {
        return address_rus;
    }

    public void setAddress_rus(@Nullable String address_rus) {
        this.address_rus = address_rus;
    }

    @Nullable
    public String getOwner_iin_bin() {
        return owner_iin_bin;
    }

    public void setOwner_iin_bin(@Nullable String owner_iin_bin) {
        this.owner_iin_bin = owner_iin_bin;
    }
}
