package com.example.backend.modelsDossier;

import com.example.backend.photo.modelsPhot.*;

import java.util.List;

public class NodesUL {
    private List<mv_ul> mvUls;
    private List<mv_ul_founder_fl> mvUlFounderFls;


    private List<omn> omns; //risk
    private List<equipment> equipment;
    private List<dormant> dormants;
    private List<bankrot> bankrots; //risk

    private List<adm> adms;

    public List<mv_ul_founder_fl> getMvUlFounderFls() {
        return mvUlFounderFls;
    }

    public void setMvUlFounderFls(List<mv_ul_founder_fl> mvUlFounderFls) {
        this.mvUlFounderFls = mvUlFounderFls;
    }

    public List<bankrot> getBankrots() {
        return bankrots;
    }

    public void setBankrots(List<bankrot> bankrots) {
        this.bankrots = bankrots;
    }

    public List<mv_ul> getMvUls() {
        return mvUls;
    }

    public void setMvUls(List<mv_ul> mvUls) {
        this.mvUls = mvUls;
    }

    public List<omn> getOmns() {
        return omns;
    }

    public void setOmns(List<omn> omns) {
        this.omns = omns;
    }

    public List<com.example.backend.modelsDossier.equipment> getEquipment() {
        return equipment;
    }

    public void setEquipment(List<com.example.backend.modelsDossier.equipment> equipment) {
        this.equipment = equipment;
    }

    public List<dormant> getDormants() {
        return dormants;
    }

    public void setDormants(List<dormant> dormants) {
        this.dormants = dormants;
    }

    public List<adm> getAdms() {
        return adms;
    }

    public void setAdms(List<adm> adms) {
        this.adms = adms;
    }
}
