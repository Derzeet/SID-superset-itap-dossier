package com.example.backend.photo.modelsPhot;


import javax.annotation.Nullable;
import javax.persistence.*;

@Entity
@Table(name = "imp_kfm_fl.MilitaryAccounting2Repo")
public class MilitaryAccounting2Entity {
    @Id
    @Nullable
    private Long id;

    @Column(name = "bin")
    @Nullable
    private String bin;

    @Column(name = "org_name")
    @Nullable
    private String orgName;

    @Column(name = "date_start")
    @Nullable
    private String dateStart;

    @Column(name = "iin")
    @Nullable
    private String iin;

    @Column(name = "lastname")
    @Nullable
    private String lastname;

    @Column(name = "firstname")
    @Nullable
    private String firstname;

    @Column(name = "patronomyc")
    @Nullable
    private String patronomyc;

    @Column(name = "sum")
    @Nullable
    private Float sum;

    @Column(name = "date_end")
    @Nullable
    private String dateEnd;

    @Nullable
    public Long getId() {
        return id;
    }

    public void setId(@Nullable Long id) {
        this.id = id;
    }

    @Nullable
    public String getBin() {
        return bin;
    }

    public void setBin(@Nullable String bin) {
        this.bin = bin;
    }

    @Nullable
    public String getOrgName() {
        return orgName;
    }

    public void setOrgName(@Nullable String orgName) {
        this.orgName = orgName;
    }

    @Nullable
    public String getDateStart() {
        return dateStart;
    }

    public void setDateStart(@Nullable String dateStart) {
        this.dateStart = dateStart;
    }

    @Nullable
    public String getIin() {
        return iin;
    }

    public void setIin(@Nullable String iin) {
        this.iin = iin;
    }

    @Nullable
    public String getLastname() {
        return lastname;
    }

    public void setLastname(@Nullable String lastname) {
        this.lastname = lastname;
    }

    @Nullable
    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(@Nullable String firstname) {
        this.firstname = firstname;
    }

    @Nullable
    public String getPatronomyc() {
        return patronomyc;
    }

    public void setPatronomyc(@Nullable String patronomyc) {
        this.patronomyc = patronomyc;
    }

    @Nullable
    public Float getSum() {
        return sum;
    }

    public void setSum(@Nullable Float sum) {
        this.sum = sum;
    }

    @Nullable
    public String getDateEnd() {
        return dateEnd;
    }

    public void setDateEnd(@Nullable String dateEnd) {
        this.dateEnd = dateEnd;
    }
}