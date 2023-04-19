package com.example.backend.modelsDossier;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "adm", schema = "ser")
public class adm {
    @Id
    @Column(name = "2")
    private String two;
    private String org_identify_crime;
    private String authority_detected;
    private String divisions_ovd;
    private String material_num;
    private String language_prod;
    private String reg_date;
    private String protocol_num;
    private String protocol_date;
    private String kui_number;
    private String kui_date;
    private Integer erdr_number;
    private String erdr_date;
    @Column(name = "15")

    private String fifteen;
    @Column(name = "16")

    private String sixteen;
    @Column(name = "17")

    private String seventeen;
    @Column(name = "18")

    private String eighteen;
    @Column(name = "19")

    private String nineteen;
    @Column(name = "20")

    private String twenty;
    @Column(name = "21")

    private String twenty_one;

    private String surname;
    private String firstname;
    private String secondname;
    private String birth_date;
    private String citizenship;
    private String nationality;
    private String iin;
    private String work_place;
    private String phone_num;
    private String email;
    private String ul_org_name;
    private String ul_adress;
    private String bin;
    private String vehicle_brand;
    private String state_auto_num;
    private String qualification;
    private Integer enforcement;
    private Integer id;
    private String maim_measure;
    private String end_date;
    private String fine_amount;
    private String teminate_reason;
    private String source;
    @Column(name = "37")

    private String thirty_seven;
    @Column(name = "38")

    private String thirty_eight;
    @Column(name = "39")

    private String thirty_nine;
    @Column(name = "40")

    private String fourty;
    @Column(name = "42")

    private String fourty_two;
    @Column(name = "43")

    private String fourty_three;
    @Column(name = "44")

    private String fourty_four;
    @Column(name = "49")

    private String fourty_nine;
    @Column(name = "51")

    private String fifty_one;
    @Column(name = "52")

    private String fifty_two;
    @Column(name = "53")

    private String fifty_three;
    @Column(name = "54")

    private String fifty_four;
    @Column(name = "55")

    private String fifty_five;
    @Column(name = "56")

    private String fifty_six;

    public String getTwo() {
        return two;
    }

    public void setTwo(String two) {
        this.two = two;
    }

    public String getOrg_identify_crime() {
        return org_identify_crime;
    }

    public void setOrg_identify_crime(String org_identify_crime) {
        this.org_identify_crime = org_identify_crime;
    }

    public String getAuthority_detected() {
        return authority_detected;
    }

    public void setAuthority_detected(String authority_detected) {
        this.authority_detected = authority_detected;
    }

    public String getDivisions_ovd() {
        return divisions_ovd;
    }

    public void setDivisions_ovd(String divisions_ovd) {
        this.divisions_ovd = divisions_ovd;
    }

    public String getMaterial_num() {
        return material_num;
    }

    public void setMaterial_num(String material_num) {
        this.material_num = material_num;
    }

    public String getLanguage_prod() {
        return language_prod;
    }

    public void setLanguage_prod(String language_prod) {
        this.language_prod = language_prod;
    }

    public String getReg_date() {
        return reg_date;
    }

    public void setReg_date(String reg_date) {
        this.reg_date = reg_date;
    }

    public String getProtocol_num() {
        return protocol_num;
    }

    public void setProtocol_num(String protocol_num) {
        this.protocol_num = protocol_num;
    }

    public String getProtocol_date() {
        return protocol_date;
    }

    public void setProtocol_date(String protocol_date) {
        this.protocol_date = protocol_date;
    }

    public String getKui_number() {
        return kui_number;
    }

    public void setKui_number(String kui_number) {
        this.kui_number = kui_number;
    }

    public String getKui_date() {
        return kui_date;
    }

    public void setKui_date(String kui_date) {
        this.kui_date = kui_date;
    }

    public Integer getErdr_number() {
        return erdr_number;
    }

    public void setErdr_number(Integer erdr_number) {
        this.erdr_number = erdr_number;
    }

    public String getErdr_date() {
        return erdr_date;
    }

    public void setErdr_date(String erdr_date) {
        this.erdr_date = erdr_date;
    }

    public String getFifteen() {
        return fifteen;
    }

    public void setFifteen(String fifteen) {
        this.fifteen = fifteen;
    }

    public String getSixteen() {
        return sixteen;
    }

    public void setSixteen(String sixteen) {
        this.sixteen = sixteen;
    }

    public String getSeventeen() {
        return seventeen;
    }

    public void setSeventeen(String seventeen) {
        this.seventeen = seventeen;
    }

    public String getEighteen() {
        return eighteen;
    }

    public void setEighteen(String eighteen) {
        this.eighteen = eighteen;
    }

    public String getNineteen() {
        return nineteen;
    }

    public void setNineteen(String nineteen) {
        this.nineteen = nineteen;
    }

    public String getTwenty() {
        return twenty;
    }

    public void setTwenty(String twenty) {
        this.twenty = twenty;
    }

    public String getTwenty_one() {
        return twenty_one;
    }

    public void setTwenty_one(String twenty_one) {
        this.twenty_one = twenty_one;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getSecondname() {
        return secondname;
    }

    public void setSecondname(String secondname) {
        this.secondname = secondname;
    }

    public String getBirth_date() {
        return birth_date;
    }

    public void setBirth_date(String birth_date) {
        this.birth_date = birth_date;
    }

    public String getCitizenship() {
        return citizenship;
    }

    public void setCitizenship(String citizenship) {
        this.citizenship = citizenship;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getIin() {
        return iin;
    }

    public void setIin(String iin) {
        this.iin = iin;
    }

    public String getWork_place() {
        return work_place;
    }

    public void setWork_place(String work_place) {
        this.work_place = work_place;
    }

    public String getPhone_num() {
        return phone_num;
    }

    public void setPhone_num(String phone_num) {
        this.phone_num = phone_num;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUl_org_name() {
        return ul_org_name;
    }

    public void setUl_org_name(String ul_org_name) {
        this.ul_org_name = ul_org_name;
    }

    public String getUl_adress() {
        return ul_adress;
    }

    public void setUl_adress(String ul_adress) {
        this.ul_adress = ul_adress;
    }

    public String getBin() {
        return bin;
    }

    public void setBin(String bin) {
        this.bin = bin;
    }

    public String getVehicle_brand() {
        return vehicle_brand;
    }

    public void setVehicle_brand(String vehicle_brand) {
        this.vehicle_brand = vehicle_brand;
    }

    public String getState_auto_num() {
        return state_auto_num;
    }

    public void setState_auto_num(String state_auto_num) {
        this.state_auto_num = state_auto_num;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public Integer getEnforcement() {
        return enforcement;
    }

    public void setEnforcement(Integer enforcement) {
        this.enforcement = enforcement;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMaim_measure() {
        return maim_measure;
    }

    public void setMaim_measure(String maim_measure) {
        this.maim_measure = maim_measure;
    }

    public String getEnd_date() {
        return end_date;
    }

    public void setEnd_date(String end_date) {
        this.end_date = end_date;
    }

    public String getFine_amount() {
        return fine_amount;
    }

    public void setFine_amount(String fine_amount) {
        this.fine_amount = fine_amount;
    }

    public String getTeminate_reason() {
        return teminate_reason;
    }

    public void setTeminate_reason(String teminate_reason) {
        this.teminate_reason = teminate_reason;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getThirty_seven() {
        return thirty_seven;
    }

    public void setThirty_seven(String thirty_seven) {
        this.thirty_seven = thirty_seven;
    }

    public String getThirty_eight() {
        return thirty_eight;
    }

    public void setThirty_eight(String thirty_eight) {
        this.thirty_eight = thirty_eight;
    }

    public String getThirty_nine() {
        return thirty_nine;
    }

    public void setThirty_nine(String thirty_nine) {
        this.thirty_nine = thirty_nine;
    }

    public String getFourty() {
        return fourty;
    }

    public void setFourty(String fourty) {
        this.fourty = fourty;
    }

    public String getFourty_two() {
        return fourty_two;
    }

    public void setFourty_two(String fourty_two) {
        this.fourty_two = fourty_two;
    }

    public String getFourty_three() {
        return fourty_three;
    }

    public void setFourty_three(String fourty_three) {
        this.fourty_three = fourty_three;
    }

    public String getFourty_four() {
        return fourty_four;
    }

    public void setFourty_four(String fourty_four) {
        this.fourty_four = fourty_four;
    }

    public String getFourty_nine() {
        return fourty_nine;
    }

    public void setFourty_nine(String fourty_nine) {
        this.fourty_nine = fourty_nine;
    }

    public String getFifty_one() {
        return fifty_one;
    }

    public void setFifty_one(String fifty_one) {
        this.fifty_one = fifty_one;
    }

    public String getFifty_two() {
        return fifty_two;
    }

    public void setFifty_two(String fifty_two) {
        this.fifty_two = fifty_two;
    }

    public String getFifty_three() {
        return fifty_three;
    }

    public void setFifty_three(String fifty_three) {
        this.fifty_three = fifty_three;
    }

    public String getFifty_four() {
        return fifty_four;
    }

    public void setFifty_four(String fifty_four) {
        this.fifty_four = fifty_four;
    }

    public String getFifty_five() {
        return fifty_five;
    }

    public void setFifty_five(String fifty_five) {
        this.fifty_five = fifty_five;
    }

    public String getFifty_six() {
        return fifty_six;
    }

    public void setFifty_six(String fifty_six) {
        this.fifty_six = fifty_six;
    }
}
