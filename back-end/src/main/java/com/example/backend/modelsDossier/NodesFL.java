package com.example.backend.modelsDossier;

import com.example.backend.photo.modelsPhot.*;


import java.util.List;

public class NodesFL {
    private List<mv_fl> mvFls;
    private List<photoDb> photoDbf;
    private List<mv_auto_fl> mvAutoFls;
    private List<omn> omns; //risk
    private List<orphans> orphanss; //detdom
    private List<equipment> equipment;
    private List<dormant> dormants;
    private List<adm> adms; //risk
    private List<fl_relatives> fl_relatives;
    private List<reg_address_fl> regAddressFls;

    private List<criminals> criminals; //risk
    private List<pdl> pdls;
    private List<WantedListEntity> wantedListEntities; //risk
    private List<CommodityProducer> commodityProducers;

    private List<mv_iin_doc> mvIinDocs;
    private List<com.example.backend.photo.modelsPhot.universities> universities;

    private List<school> schools;
    private List<fl_contacts> contacts;

    private List<MillitaryAccount> millitaryAccounts;
    private List<MilitaryAccounting2Entity> militaryAccounting2Entities;
    private List<convicts_terminated_by_rehab> convictsTerminatedByRehabs; //risk
    private List<convicts_justified> convictsJustifieds;  //risk
    private List<bankrot> bankrots; //risk
    private List<FL_PENSION_FINAL> flPensionContrs;
    private List<msh> mshes;
    private List<block_esf> blockEsfs;  //risk
    private List<mv_ul_founder_fl> mvUlFounderFls;
    private List<NdsEntity> ndsEntities;
    private List<IpgoEmailEntity> ipgoEmailEntities;
    private List<TIpEntity>TIpEntity;
    private List<AccountantListEntity> accountantListEntities;
    private List<AdvocateListEntity> advocateListEntities;
    private List<AuditorsListEntity> auditorsListEntities;
    private List<BailiffListEntity> bailiffListEntities;
    private List<MzEntity> mzEntities ;
    private List<mv_rn_old> mvRnOlds;
    private List<mv_ul_leader> ul_leaderList; //Сведения об участии в ЮЛ

    public List<mv_ul_leader> getUl_leaderList() {
        return ul_leaderList;
    }

    public void setUl_leaderList(List<mv_ul_leader> ul_leaderList) {
        this.ul_leaderList = ul_leaderList;
    }

    public List<CommodityProducer> getCommodityProducers() {
        return commodityProducers;
    }
    public void setCommodityProducers(List<CommodityProducer> commodityProducers) {
        this.commodityProducers = commodityProducers;
    }

    public List<WantedListEntity> getWantedListEntities() {
        return wantedListEntities;
    }

    public void setWantedListEntities(List<WantedListEntity> wantedListEntities) {
        this.wantedListEntities = wantedListEntities;
    }

    public List<NdsEntity> getNdsEntities() {
        return ndsEntities;
    }

    public void setNdsEntities(List<NdsEntity> ndsEntities) {
        this.ndsEntities = ndsEntities;
    }

    public List<mv_ul_founder_fl> getMvUlFounderFls() {
        return mvUlFounderFls;
    }

    public void setMvUlFounderFls(List<mv_ul_founder_fl> mvUlFounderFls) {
        this.mvUlFounderFls = mvUlFounderFls;
    }

    public List<block_esf> getBlockEsfs() {
        return blockEsfs;
    }
    public void setBlockEsfs(List<block_esf> blockEsfs) {
        this.blockEsfs = blockEsfs;
    }

    private List<FirstCreditBureauEntity> FirstCreditBureauEntities;  //risk
    private boolean Person_with_risk;

    public boolean isPerson_with_risk() {
        return Person_with_risk;
    }

    public void setPerson_with_risk(boolean person_with_risk) {
        Person_with_risk = person_with_risk;
    }

    public List<MzEntity> getMzEntities() {
        return mzEntities;
    }

    public void setMzEntities(List<MzEntity> mzEntities) {
        this.mzEntities = mzEntities;
    }

    public List<AdvocateListEntity> getAdvocateListEntities() {
        return advocateListEntities;
    }

    public void setAdvocateListEntities(List<AdvocateListEntity> advocateListEntities) {
        this.advocateListEntities = advocateListEntities;
    }

    public List<AuditorsListEntity> getAuditorsListEntities() {
        return auditorsListEntities;
    }

    public void setAuditorsListEntities(List<AuditorsListEntity> auditorsListEntities) {
        this.auditorsListEntities = auditorsListEntities;
    }

    public List<BailiffListEntity> getBailiffListEntities() {
        return bailiffListEntities;
    }

    public void setBailiffListEntities(List<BailiffListEntity> bailiffListEntities) {
        this.bailiffListEntities = bailiffListEntities;
    }

    public List<AccountantListEntity> getAccountantListEntities() {
        return accountantListEntities;
    }

    public void setAccountantListEntities(List<AccountantListEntity> accountantListEntities) {
        this.accountantListEntities = accountantListEntities;
    }

    public List<com.example.backend.photo.modelsPhot.TIpEntity> getTIpEntity() {
        return TIpEntity;
    }

    public void setTIpEntity(List<com.example.backend.photo.modelsPhot.TIpEntity> TIpEntity) {
        this.TIpEntity = TIpEntity;
    }

    public List<IpgoEmailEntity> getIpgoEmailEntities() {
        return ipgoEmailEntities;
    }

    public void setIpgoEmailEntities(List<IpgoEmailEntity> ipgoEmailEntities) {
        this.ipgoEmailEntities = ipgoEmailEntities;
    }

    public List<FirstCreditBureauEntity> getFirstCreditBureauEntities() {
        return FirstCreditBureauEntities;
    }

    public void setFirstCreditBureauEntities(List<FirstCreditBureauEntity> firstCreditBureauEntities) {
        FirstCreditBureauEntities = firstCreditBureauEntities;
    }

    public List<msh> getMshes() {
        return mshes;
    }

    public void setMshes(List<msh> mshes) {
        this.mshes = mshes;
    }

    public List<MilitaryAccounting2Entity> getMilitaryAccounting2Entities() {
        return militaryAccounting2Entities;
    }

    public void setMilitaryAccounting2Entities(List<MilitaryAccounting2Entity> militaryAccounting2Entities) {
        this.militaryAccounting2Entities = militaryAccounting2Entities;
    }

    public List<FL_PENSION_FINAL> getFlPensionContrs() {
        return flPensionContrs;
    }

    public void setFlPensionContrs(List<FL_PENSION_FINAL> flPensionContrs) {
        this.flPensionContrs = flPensionContrs;
    }


    public List<mv_rn_old> getMvRnOlds() {
        return mvRnOlds;
    }

    public void setMvRnOlds(List<mv_rn_old> mvRnOlds) {
        this.mvRnOlds = mvRnOlds;
    }



    public List<convicts_terminated_by_rehab> getConvictsTerminatedByRehabs() {
        return convictsTerminatedByRehabs;
    }

    public void setConvictsTerminatedByRehabs(List<convicts_terminated_by_rehab> convictsTerminatedByRehabs) {
        this.convictsTerminatedByRehabs = convictsTerminatedByRehabs;
    }

    public List<convicts_justified> getConvictsJustifieds() {
        return convictsJustifieds;
    }

    public void setConvictsJustifieds(List<convicts_justified> convictsJustifieds) {
        this.convictsJustifieds = convictsJustifieds;
    }

    public List<bankrot> getBankrots() {
        return bankrots;
    }

    public void setBankrots(List<bankrot> bankrots) {
        this.bankrots = bankrots;
    }

    public List<MillitaryAccount> getMillitaryAccounts() {
        return millitaryAccounts;
    }

    public void setMillitaryAccounts(List<MillitaryAccount> millitaryAccounts) {
        this.millitaryAccounts = millitaryAccounts;
    }

    public List<fl_contacts> getContacts() {
        return contacts;
    }

    public void setContacts(List<fl_contacts> contacts) {
        this.contacts = contacts;
    }

    public List<com.example.backend.photo.modelsPhot.criminals> getCriminals() {
        return criminals;
    }

    public void setCriminals(List<com.example.backend.photo.modelsPhot.criminals> criminals) {
        this.criminals = criminals;
    }

    public List<school> getSchools() {
        return schools;
    }

    public void setSchools(List<school> schools) {
        this.schools = schools;
    }

    public List<com.example.backend.photo.modelsPhot.universities> getUniversities() {
        return universities;
    }

    public void setUniversities(List<com.example.backend.photo.modelsPhot.universities> universities) {
        this.universities = universities;
    }

    public List<mv_iin_doc> getMvIinDocs() {
        return mvIinDocs;
    }

    public void setMvIinDocs(List<mv_iin_doc> mvIinDocs) {
        this.mvIinDocs = mvIinDocs;
    }

    public List<pdl> getPdls() {
        return pdls;
    }

    public void setPdls(List<pdl> pdls) {
        this.pdls = pdls;
    }

    public List<reg_address_fl> getRegAddressFls() {
        return regAddressFls;
    }

    public void setRegAddressFls(List<reg_address_fl> regAddressFls) {
        this.regAddressFls = regAddressFls;
    }

    public List<com.example.backend.photo.modelsPhot.fl_relatives> getFl_relatives() {
        return fl_relatives;
    }

    public void setFl_relatives(List<com.example.backend.photo.modelsPhot.fl_relatives> fl_relatives) {
        this.fl_relatives = fl_relatives;
    }

    public List<orphans> getOrphanss() {
        return orphanss;
    }

    public void setOrphanss(List<orphans> orphanss) {
        this.orphanss = orphanss;
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

    public List<orphans> getOrphans() {
        return orphanss;
    }

    public void setOrphans(List<orphans> orphans) {
        this.orphanss = orphans;
    }

    public List<omn> getOmns() {
        return omns;
    }

    public void setOmns(List<omn> omns) {
        this.omns = omns;
    }

    public List<mv_fl> getMvFls() {
        return mvFls;
    }

    public void setMvFls(List<mv_fl> mvFls) {
        this.mvFls = mvFls;
    }

    public List<mv_auto_fl> getMvAutoFls() {
        return mvAutoFls;
    }

    public void setMvAutoFls(List<mv_auto_fl> mvAutoFls) {
        this.mvAutoFls = mvAutoFls;
    }

    public List<photoDb> getPhotoDbf() {
        return photoDbf;
    }

    public void setPhotoDbf(List<photoDb> photoDbf) {
        this.photoDbf = photoDbf;
    }



}
