package com.example.backend.modelsDossier;

import com.example.backend.photo.modelsPhot.photoDb;

import java.util.List;

public class NodesUL {
    private List<mv_ul> mvUls;

    private List<omn> omns;
    private List<equipment> equipment;
    private List<dormant> dormants;
    private List<adm> adms;

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
