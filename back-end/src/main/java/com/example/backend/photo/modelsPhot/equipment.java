package com.example.backend.photo.modelsPhot;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "equipment", schema = "imp_kfm_fl")

public class equipment {


    private String owner_iin_bin;
    private String owner_name;

    private String owner_address;
    private String proprietor_name;
    private String proprietor_name_iin_bin;
    private String proprietor_address;
    private String quipment_location;
    private String gov_number;
    private String reg_series_num;
    private String reg_date;
    private String reg_reason;
    @Id

    private String end_date;
    private String end_reason;
    private String vin;
    private String engine_num;
    private String equipment_spec;
    private String equipment_type;
    private String equipment_form;
    private String brand;
    private String equipment_model;
    private String manufacturer;
    private String dealer;

    private Integer id;
    private Integer issue_year;
    private Float power_kw;
    private Float power_hp;
    private boolean is_first_reg;
    private boolean is_pledge;
    private boolean is_arrest;

    public String getOwner_iin_bin() {
        return owner_iin_bin;
    }

    public void setOwner_iin_bin(String owner_iin_bin) {
        this.owner_iin_bin = owner_iin_bin;
    }

    public String getOwner_name() {
        return owner_name;
    }

    public void setOwner_name(String owner_name) {
        this.owner_name = owner_name;
    }

    public String getOwner_address() {
        return owner_address;
    }

    public void setOwner_address(String owner_address) {
        this.owner_address = owner_address;
    }

    public String getProprietor_name() {
        return proprietor_name;
    }

    public void setProprietor_name(String proprietor_name) {
        this.proprietor_name = proprietor_name;
    }

    public String getProprietor_name_iin_bin() {
        return proprietor_name_iin_bin;
    }

    public void setProprietor_name_iin_bin(String proprietor_name_iin_bin) {
        this.proprietor_name_iin_bin = proprietor_name_iin_bin;
    }

    public String getProprietor_address() {
        return proprietor_address;
    }

    public void setProprietor_address(String proprietor_address) {
        this.proprietor_address = proprietor_address;
    }

    public String getQuipment_location() {
        return quipment_location;
    }

    public void setQuipment_location(String quipment_location) {
        this.quipment_location = quipment_location;
    }

    public String getGov_number() {
        return gov_number;
    }

    public void setGov_number(String gov_number) {
        this.gov_number = gov_number;
    }

    public String getReg_series_num() {
        return reg_series_num;
    }

    public void setReg_series_num(String reg_series_num) {
        this.reg_series_num = reg_series_num;
    }

    public String getReg_date() {
        return reg_date;
    }

    public void setReg_date(String reg_date) {
        this.reg_date = reg_date;
    }

    public String getReg_reason() {
        return reg_reason;
    }

    public void setReg_reason(String reg_reason) {
        this.reg_reason = reg_reason;
    }

    public String getEnd_date() {
        return end_date;
    }

    public void setEnd_date(String end_date) {
        this.end_date = end_date;
    }

    public String getEnd_reason() {
        return end_reason;
    }

    public void setEnd_reason(String end_reason) {
        this.end_reason = end_reason;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public String getEngine_num() {
        return engine_num;
    }

    public void setEngine_num(String engine_num) {
        this.engine_num = engine_num;
    }

    public String getEquipment_spec() {
        return equipment_spec;
    }

    public void setEquipment_spec(String equipment_spec) {
        this.equipment_spec = equipment_spec;
    }

    public String getEquipment_type() {
        return equipment_type;
    }

    public void setEquipment_type(String equipment_type) {
        this.equipment_type = equipment_type;
    }

    public String getEquipment_form() {
        return equipment_form;
    }

    public void setEquipment_form(String equipment_form) {
        this.equipment_form = equipment_form;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getEquipment_model() {
        return equipment_model;
    }

    public void setEquipment_model(String equipment_model) {
        this.equipment_model = equipment_model;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getDealer() {
        return dealer;
    }

    public void setDealer(String dealer) {
        this.dealer = dealer;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIssue_year() {
        return issue_year;
    }

    public void setIssue_year(Integer issue_year) {
        this.issue_year = issue_year;
    }

    public Float getPower_kw() {
        return power_kw;
    }

    public void setPower_kw(Float power_kw) {
        this.power_kw = power_kw;
    }

    public Float getPower_hp() {
        return power_hp;
    }

    public void setPower_hp(Float power_hp) {
        this.power_hp = power_hp;
    }

    public boolean isIs_first_reg() {
        return is_first_reg;
    }

    public void setIs_first_reg(boolean is_first_reg) {
        this.is_first_reg = is_first_reg;
    }

    public boolean isIs_pledge() {
        return is_pledge;
    }

    public void setIs_pledge(boolean is_pledge) {
        this.is_pledge = is_pledge;
    }

    public boolean isIs_arrest() {
        return is_arrest;
    }

    public void setIs_arrest(boolean is_arrest) {
        this.is_arrest = is_arrest;
    }
}
