package com.example.backend.photo.modelsPhot;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "pdl", schema = "imp_kfm_fl")
public class pdl {

    @Id
    private String id;
    private String bin;
    private String iin;
    private String organization_fullname;
    private String fio;
    private String organ;
    private String oblast;
    private String position;
    private String spouse_fio;
    private String spouse_organ;
    private String spouse_position;
    private String spouse_iin;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBin() {
        return bin;
    }

    public void setBin(String bin) {
        this.bin = bin;
    }

    public String getIin() {
        return iin;
    }

    public void setIin(String iin) {
        this.iin = iin;
    }

    public String getOrganization_fullname() {
        return organization_fullname;
    }

    public void setOrganization_fullname(String organization_fullname) {
        this.organization_fullname = organization_fullname;
    }

    public String getFio() {
        return fio;
    }

    public void setFio(String fio) {
        this.fio = fio;
    }

    public String getOrgan() {
        return organ;
    }

    public void setOrgan(String organ) {
        this.organ = organ;
    }

    public String getOblast() {
        return oblast;
    }

    public void setOblast(String oblast) {
        this.oblast = oblast;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getSpouse_fio() {
        return spouse_fio;
    }

    public void setSpouse_fio(String spouse_fio) {
        this.spouse_fio = spouse_fio;
    }

    public String getSpouse_organ() {
        return spouse_organ;
    }

    public void setSpouse_organ(String spouse_organ) {
        this.spouse_organ = spouse_organ;
    }

    public String getSpouse_position() {
        return spouse_position;
    }

    public void setSpouse_position(String spouse_position) {
        this.spouse_position = spouse_position;
    }

    public String getSpouse_iin() {
        return spouse_iin;
    }

    public void setSpouse_iin(String spouse_iin) {
        this.spouse_iin = spouse_iin;
    }
}
