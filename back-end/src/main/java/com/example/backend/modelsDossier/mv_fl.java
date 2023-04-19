package com.example.backend.modelsDossier;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "mv_fl", schema = "ser")

public class mv_fl {
    private String iin;
    private String gender;
    @Id

    private String birth_date;
    private String last_name;
    private String first_name;
    private String patronymic;
    private String citizenship_id;
    private String citizenship_ru_name;
    private String nationality_id;
    private String nationality_ru_name;
    private boolean is_resident;
    private String life_status_id;
    private String life_status_ru_name;

    private String death_date;
    private String birth_region_id;
    private String birth_region_name;
    private String birth_district_id;
    private String birth_district_name;
    private String region;
    private String district;

    public String getIin() {
        return iin;
    }

    public void setIin(String iin) {
        this.iin = iin;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBirth_date() {
        return birth_date;
    }

    public void setBirth_date(String birth_date) {
        this.birth_date = birth_date;
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

    public String getPatronymic() {
        return patronymic;
    }

    public void setPatronymic(String patronymic) {
        this.patronymic = patronymic;
    }

    public String getCitizenship_id() {
        return citizenship_id;
    }

    public void setCitizenship_id(String citizenship_id) {
        this.citizenship_id = citizenship_id;
    }

    public String getCitizenship_ru_name() {
        return citizenship_ru_name;
    }

    public void setCitizenship_ru_name(String citizenship_ru_name) {
        this.citizenship_ru_name = citizenship_ru_name;
    }

    public String getNationality_id() {
        return nationality_id;
    }

    public void setNationality_id(String nationality_id) {
        this.nationality_id = nationality_id;
    }

    public String getNationality_ru_name() {
        return nationality_ru_name;
    }

    public void setNationality_ru_name(String nationality_ru_name) {
        this.nationality_ru_name = nationality_ru_name;
    }

    public boolean isIs_resident() {
        return is_resident;
    }

    public void setIs_resident(boolean is_resident) {
        this.is_resident = is_resident;
    }

    public String getLife_status_id() {
        return life_status_id;
    }

    public void setLife_status_id(String life_status_id) {
        this.life_status_id = life_status_id;
    }

    public String getLife_status_ru_name() {
        return life_status_ru_name;
    }

    public void setLife_status_ru_name(String life_status_ru_name) {
        this.life_status_ru_name = life_status_ru_name;
    }

    public String getDeath_date() {
        return death_date;
    }

    public void setDeath_date(String death_date) {
        this.death_date = death_date;
    }

    public String getBirth_region_id() {
        return birth_region_id;
    }

    public void setBirth_region_id(String birth_region_id) {
        this.birth_region_id = birth_region_id;
    }

    public String getBirth_region_name() {
        return birth_region_name;
    }

    public void setBirth_region_name(String birth_region_name) {
        this.birth_region_name = birth_region_name;
    }

    public String getBirth_district_id() {
        return birth_district_id;
    }

    public void setBirth_district_id(String birth_district_id) {
        this.birth_district_id = birth_district_id;
    }

    public String getBirth_district_name() {
        return birth_district_name;
    }

    public void setBirth_district_name(String birth_district_name) {
        this.birth_district_name = birth_district_name;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }
}
