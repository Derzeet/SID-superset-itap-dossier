package com.example.backend.modelsDossier;

import com.example.backend.photo.modelsPhot.*;
import com.example.backend.repositoryDossier.TaxOutEntityRepo;

import java.util.List;

public class NodesUL {
    private List<mv_ul> mvUls;
    private List<mv_ul_founder_fl> mvUlFounderFls;
    private List<AccountantListEntity> accountantListEntities;


    private List<omn> omns; //risk
    private List<equipment> equipment;
    private List<dormant> dormants;
    private List<bankrot> bankrots; //risk
    private List<OpgEntity> opgEntities;

    private List<adm> adms;

    public List<mv_ul_founder_fl> getMvUlFounderFls() {
        return mvUlFounderFls;
    }
    private List<msh> mshes;
    private List<criminals> criminals;
    private List<block_esf> blockEsfs;
    private List<NdsEntity> ndsEntities;
    private List<mv_rn_old> mvRnOlds;
    private List<TaxOutEntity> taxOutEntities;
    private List<FpgTempEntity> fpgTempEntities; //Risk
    private List<pdl> pdls;
    private List<QoldauSubsidy> QoldauSubsidy;
    private List<CommodityProducer> commodityProducers;

    public List<CommodityProducer> getCommodityProducers() {
        return commodityProducers;
    }

    public void setCommodityProducers(List<CommodityProducer> commodityProducers) {
        this.commodityProducers = commodityProducers;
    }

    public List<com.example.backend.photo.modelsPhot.QoldauSubsidy> getQoldauSubsidy() {
        return QoldauSubsidy;
    }

    public void setQoldauSubsidy(List<com.example.backend.photo.modelsPhot.QoldauSubsidy> qoldauSubsidy) {
        QoldauSubsidy = qoldauSubsidy;
    }

    public List<pdl> getPdls() {
        return pdls;
    }

    public void setPdls(List<pdl> pdls) {
        this.pdls = pdls;
    }

    public List<FpgTempEntity> getFpgTempEntities() {
        return fpgTempEntities;
    }

    public void setFpgTempEntities(List<FpgTempEntity> fpgTempEntities) {
        this.fpgTempEntities = fpgTempEntities;
    }

    public List<TaxOutEntity> getTaxOutEntities() {
        return taxOutEntities;
    }

    public void setTaxOutEntities(List<TaxOutEntity> taxOutEntities) {
        this.taxOutEntities = taxOutEntities;
    }

    public List<mv_rn_old> getMvRnOlds() {
        return mvRnOlds;
    }

    public void setMvRnOlds(List<mv_rn_old> mvRnOlds) {
        this.mvRnOlds = mvRnOlds;
    }

    public List<NdsEntity> getNdsEntities() {
        return ndsEntities;
    }

    public void setNdsEntities(List<NdsEntity> ndsEntities) {
        this.ndsEntities = ndsEntities;
    }

    public List<block_esf> getBlockEsfs() {
        return blockEsfs;
    }

    public void setBlockEsfs(List<block_esf> blockEsfs) {
        this.blockEsfs = blockEsfs;
    }

    public List<OpgEntity> getOpgEntities() {
        return opgEntities;
    }

    public void setOpgEntities(List<OpgEntity> opgEntities) {
        this.opgEntities = opgEntities;
    }

    public List<com.example.backend.photo.modelsPhot.criminals> getCriminals() {
        return criminals;
    }

    public void setCriminals(List<com.example.backend.photo.modelsPhot.criminals> criminals) {
        this.criminals = criminals;
    }

    public List<msh> getMshes() {
        return mshes;
    }

    public void setMshes(List<msh> mshes) {
        this.mshes = mshes;
    }

    public List<AccountantListEntity> getAccountantListEntities() {
        return accountantListEntities;
    }

    public void setAccountantListEntities(List<AccountantListEntity> accountantListEntities) {
        this.accountantListEntities = accountantListEntities;
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
