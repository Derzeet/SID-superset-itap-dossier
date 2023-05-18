package com.example.backend.modelsDossier;

import com.example.backend.photo.modelsPhot.*;

import java.util.List;
import java.util.Map;

public class NodesUL {
    private List<mv_ul> mvUls;
    private List<mv_ul_founder_fl> mvUlFounderFls;
    private List<AccountantListEntity> accountantListEntities;


    private List<omn> omns; //risk
    private List<equipment> equipment;
    private List<dormant> dormants;
    private List<bankrot> bankrots; //risk
    private List<OpgEntity> opgEntities; //risk

    private List<adm> adms;  //risk

    public List<mv_ul_founder_fl> getMvUlFounderFls() {
        return mvUlFounderFls;
    }
    private List<msh> mshes;
    private List<criminals> criminals;  //risk
    private List<block_esf> blockEsfs;  //risk
    private List<NdsEntity> ndsEntities;
    private List<mv_rn_old> mvRnOlds;
    private List<TaxOutEntity> taxOutEntities;
    private List<FpgTempEntity> fpgTempEntities; //Risk
    private List<pdl> pdls;
    private List<QoldauSubsidy> QoldauSubsidy;
    private List<CommodityProducer> commodityProducers;
    private RegAddressUlEntity regAddressUlEntities;
    private List<SvedenyaObUchastnikovUlEntity> svedenyaObUchastnikovUlEntities;
    private List<fl_contacts> fl_contacts;

    private Integer taxCount;

    private List<mv_auto_fl> mvAutoFls;
    private List<FL_PENSION_FINAL> flPensionContrs;
    private List<Map<String, Object>> PensionYearAndEmpNum;
    private RegAddressUlEntity RegUlNaOdnomMeste;

    public RegAddressUlEntity getRegUlNaOdnomMeste() {
        return RegUlNaOdnomMeste;
    }

    public Integer getTaxCount() {
        return taxCount;
    }

    public void setTaxCount(Integer taxCount) {
        this.taxCount = taxCount;
    }

    public void setRegUlNaOdnomMeste(RegAddressUlEntity regUlNaOdnomMeste) {
        RegUlNaOdnomMeste = regUlNaOdnomMeste;
    }

    public List<Map<String, Object>> getPensionYearAndEmpNum() {
        return PensionYearAndEmpNum;
    }

    public void setPensionYearAndEmpNum(List<Map<String, Object>> pensionYearAndEmpNum) {
        PensionYearAndEmpNum = pensionYearAndEmpNum;
    }

    public List<FL_PENSION_FINAL> getFlPensionContrs() {
        return flPensionContrs;
    }

    public void setFlPensionContrs(List<FL_PENSION_FINAL> flPensionContrs) {
        this.flPensionContrs = flPensionContrs;
    }


    public List<com.example.backend.photo.modelsPhot.fl_contacts> getFl_contacts() {
        return fl_contacts;
    }

    public void setFl_contacts(List<com.example.backend.photo.modelsPhot.fl_contacts> fl_contacts) {
        this.fl_contacts = fl_contacts;
    }

    public List<mv_auto_fl> getMvAutoFls() {
        return mvAutoFls;
    }

    public void setMvAutoFls(List<mv_auto_fl> mvAutoFls) {
        this.mvAutoFls = mvAutoFls;
    }

    private boolean Person_with_risk;

    public boolean isPerson_with_risk() {
        return Person_with_risk;
    }

    public void setPerson_with_risk(boolean person_with_risk) {
        Person_with_risk = person_with_risk;
    }

    public List<SvedenyaObUchastnikovUlEntity> getSvedenyaObUchastnikovUlEntities() {
        return svedenyaObUchastnikovUlEntities;
    }

    public void setSvedenyaObUchastnikovUlEntities(List<SvedenyaObUchastnikovUlEntity> svedenyaObUchastnikovUlEntities) {
        this.svedenyaObUchastnikovUlEntities = svedenyaObUchastnikovUlEntities;
    }

    public RegAddressUlEntity getRegAddressUlEntities() {
        return regAddressUlEntities;
    }

    public void setRegAddressUlEntities(RegAddressUlEntity regAddressUlEntities) {
        this.regAddressUlEntities = regAddressUlEntities;
    }


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

    public List<com.example.backend.photo.modelsPhot.equipment> getEquipment() {
        return equipment;
    }

    public void setEquipment(List<com.example.backend.photo.modelsPhot.equipment> equipment) {
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
