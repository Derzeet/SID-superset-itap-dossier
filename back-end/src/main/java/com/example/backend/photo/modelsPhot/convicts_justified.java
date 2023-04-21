package com.example.backend.photo.modelsPhot;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "convicts_justified", schema = "imp_risk")
public class convicts_justified {
    private String iin;

    private String last_name;
    @Id

    private String first_name;
    private String patronomyc;
    private String birth_date;
    private String reg_date;
    private String qualification;
    private String severity_code_crime;
    private String qualification_code;
    private String measure_punishment;
    private String code_desicion_by_person;
    private String decision_on_person;
    private String court_of_first_instance;
    private String erdr_number;
    private String consider_date_first_instance;
    private String code_started_investiogation;
    private String investigative_authority;
    private boolean is_iin_upd;
    private boolean is_rab;
    private Long id;

    public String getIin() {
        return iin;
    }

    public void setIin(String iin) {
        this.iin = iin;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getPatronomyc() {
        return patronomyc;
    }

    public void setPatronomyc(String patronomyc) {
        this.patronomyc = patronomyc;
    }

    public String getBirth_date() {
        return birth_date;
    }

    public void setBirth_date(String birth_date) {
        this.birth_date = birth_date;
    }

    public String getReg_date() {
        return reg_date;
    }

    public void setReg_date(String reg_date) {
        this.reg_date = reg_date;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public String getSeverity_code_crime() {
        return severity_code_crime;
    }

    public void setSeverity_code_crime(String severity_code_crime) {
        this.severity_code_crime = severity_code_crime;
    }

    public String getQualification_code() {
        return qualification_code;
    }

    public void setQualification_code(String qualification_code) {
        this.qualification_code = qualification_code;
    }

    public String getMeasure_punishment() {
        return measure_punishment;
    }

    public void setMeasure_punishment(String measure_punishment) {
        this.measure_punishment = measure_punishment;
    }

    public String getCode_desicion_by_person() {
        return code_desicion_by_person;
    }

    public void setCode_desicion_by_person(String code_desicion_by_person) {
        this.code_desicion_by_person = code_desicion_by_person;
    }

    public String getDecision_on_person() {
        return decision_on_person;
    }

    public void setDecision_on_person(String decision_on_person) {
        this.decision_on_person = decision_on_person;
    }

    public String getCourt_of_first_instance() {
        return court_of_first_instance;
    }

    public void setCourt_of_first_instance(String court_of_first_instance) {
        this.court_of_first_instance = court_of_first_instance;
    }

    public String getErdr_number() {
        return erdr_number;
    }

    public void setErdr_number(String erdr_number) {
        this.erdr_number = erdr_number;
    }

    public String getConsider_date_first_instance() {
        return consider_date_first_instance;
    }

    public void setConsider_date_first_instance(String consider_date_first_instance) {
        this.consider_date_first_instance = consider_date_first_instance;
    }

    public String getCode_started_investiogation() {
        return code_started_investiogation;
    }

    public void setCode_started_investiogation(String code_started_investiogation) {
        this.code_started_investiogation = code_started_investiogation;
    }

    public String getInvestigative_authority() {
        return investigative_authority;
    }

    public void setInvestigative_authority(String investigative_authority) {
        this.investigative_authority = investigative_authority;
    }

    public boolean isIs_iin_upd() {
        return is_iin_upd;
    }

    public void setIs_iin_upd(boolean is_iin_upd) {
        this.is_iin_upd = is_iin_upd;
    }

    public boolean isIs_rab() {
        return is_rab;
    }

    public void setIs_rab(boolean is_rab) {
        this.is_rab = is_rab;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
