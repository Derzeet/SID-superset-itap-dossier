package com.example.backend.service;

import com.example.backend.extractor.mv_fl_extractor;
import com.example.backend.modelsDossier.*;
import com.example.backend.photo.modelsPhot.*;
import com.example.backend.photo.repositoryPhot.fl_relativesRepository;
import com.example.backend.photo.repositoryPhot.mv_iin_docRepo;
import com.example.backend.photo.repositoryPhot.pdlReposotory;
import com.example.backend.photo.repositoryPhot.reg_address_fl_Repo;
import com.example.backend.photo.repositoryPhot.*;
import com.example.backend.repositoryDossier.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MyService {
    @Autowired
    QoldauRepo QoldauRepo;
    @Autowired
    JdbcTemplate jdbcTemplate;
    @Autowired
    CommodityProducerRepo commodityProducerRepo;
    @Autowired
    TIpEntityRepo TIpEntityRepo;
    @Autowired
    bankrotRepo bankrotRepo;
    @Autowired
    mshRepo mshRepo;
    @Autowired
    OpgRepo opgRepo;
    @Autowired
    block_esfRepo block_esfRepo;
    @Autowired
    convicts_terminated_by_rehabRepo convicts_terminated_by_rehabRepo;
    @Autowired
    TaxOutEntityRepo taxOutEntityRepo;
    @Autowired
    criminalsRepo criminalsRepo;
    @Autowired
    fl_pension_contrRepo flPensionContrRepo;
    @Autowired
    MzEntityRepo MzEntityRepo;
    @Autowired
    WantedListRepo wantedListRepo;
    @Autowired
    fl_pension_MiniRepo flPensionMiniRepo;
    @Autowired
    MilitaryAccounting2Repo MilitaryAccounting2Repo;
    @Autowired
    mv_ul_founder_flRepo mvUlFounderFlRepo;
    @Autowired
    convicts_justifiedRepo convicts_justifiedRepo;
    @Autowired
    IpgoEmailEntityRepo IpgoEmailEntityRepo;
    @Autowired
    AdvocateListEntityRepo advocateListEntityRepo;
    @Autowired
    AuditorsListEntityRepo auditorsListEntityRepo;
    @Autowired
    BailiffListEntityRepo bailiffListEntityRepo;
    @Autowired
    AccountantListEntityRepo accountantListEntityRepo;
    @Autowired
    FirstCreditBureauEntityRepo FirstCreditBureauEntityRepo;
    @Autowired
    private newPhotoService newPhotoService;
    @Autowired
    private mv_auto_fl_repo mvAutoFlRepo;
    @Autowired
    FpgTempEntityRepo fpgTempEntityRepo;
    @Autowired
    private mv_fl_repo mv_FlRepo;
    @Autowired
    private omn_repo omn_repos;
    @Autowired
    private orphans_repo orphans_repo;
    @Autowired
    private adm_repo admRepo;
    @Autowired
    private equipment_repo equipment_repo;
    @Autowired
    private mv_rn_oldRepo mv_rn_oldRepo;
    @Autowired
    private dormant_repo dormantRepo;

    @Autowired
    private fl_relativesRepository fl_relativesRepository;
    @Autowired
    private reg_address_fl_Repo regAddressFlRepo;
    @Autowired
    private pdlReposotory pdlReposotory;
    @Autowired
    mv_ul_repo mv_ul_repo;
    @Autowired
    private mv_iin_docRepo mvIinDocRepo;
    @Autowired
    private universitiesRepo uniRepo;
    @Autowired
    private NdsEntityRepo ndsEntityRepo;
    @Autowired
    private schoolRepo schoolRepo;
    @Autowired
    private flContactsRepo flContactsRepo;
    @Autowired
    private militaryAccountRepo militaryAccountRepo;
    @Autowired
    mv_iin_docRepo mv_iin_docRepo;


    public List<searchResultModelFL> getWIthAddFields(HashMap<String, String> req) {
        List<mv_auto_fl> list = new ArrayList<>();
        if (req.get("vin") != "") {
            list =  mvAutoFlRepo.findBYVIN(req.get("vin"));
        }
        if (list.size() < 1) {
            String sql = createAdditionSQL(req);
            List<mv_fl> fls = jdbcTemplate.query(sql, new mv_fl_extractor());
            System.out.println(sql);
            List<searchResultModelFL> result = findWithPhoto(fls);
            return result;
        } else {
            List<mv_fl> fls = new ArrayList<>();
            for (mv_auto_fl i: list) {
                try {
                    mv_fl r = mv_FlRepo.getUserByIin(i.getIin());
                    fls.add(r);
                } catch (Exception e) {
                }
            }
            List<searchResultModelFL> result = findWithPhoto(fls);
            return result;
        }
    }
    private String createAdditionSQL(HashMap<String, String> req) {
        String sql = "select * from ser.mv_fl where first_name like '" + req.get("i").replace('$', '%') + "' and  patronymic like '" + req.get("o").replace('$', '%') + "' and last_name like '" + req.get("f").replace('$', '%') + "' ";
        if (req.get("dateFrom") != "") {
            sql = sql + "AND toDate(birth_date, 'YYYY-MM-DD') > toDate('" + req.get("dateFrom") + "', 'YYYY-MM-DD') ";
        }
        if (req.get("dateTo") != "") {
            sql = sql + "AND toDate(birth_date, 'YYYY-MM-DD') < toDate('" + req.get("dateTo") + "', 'YYYY-MM-DD') ";
        }
        if (req.get("gender") != "") {
            sql = sql + "AND gender = " + req.get("gender") + " ";
        }
        if (req.get("nation") != "") {
            sql = sql + "AND nationality_ru_name = '" + req.get("nation") + "' ";
        }
        if (req.get("city") != "") {
            sql = sql + "AND district = '" + req.get("city") + "' ";
        }
        if (req.get("country") != "") {
            sql = sql + "AND citizenship_ru_name = '" + req.get("country") + "' ";
        }
        if (req.get("region") != "") {
            sql = sql + "AND region = '" + req.get("region") + "' ";
        }
        if (req.get("region") != "") {
            sql = sql + "AND region = '" + req.get("region") + "' ";
        }
        return sql;
    }
    public List<searchResultModelFL> getByIIN_photo(String IIN) {
        List<mv_fl> fls = mv_FlRepo.getUsersByLike(IIN);

        List<searchResultModelFL> result = findWithPhoto(fls);
        return result;
    }

    public List<searchResultModelFL> getByDocNumber_photo(String doc_number) {
        String iin = mvIinDocRepo.getIinByDoc_Number(doc_number);
        List<mv_fl> fls = mv_FlRepo.getUsersByLike(iin);

        List<searchResultModelFL> result = findWithPhoto(fls);
        return result;
    }

    public List<searchResultModelFL> getByPhone(String phone) {
        List<String> iin = flContactsRepo.getByPhoneNumber(phone);
        List<mv_fl> fls = new ArrayList<>();
        for (String ii: iin) {
            mv_fl person = mv_FlRepo.getUserByIin(ii);
            fls.add(person);
        }
        List<searchResultModelFL> result = findWithPhoto(fls);
        return result;
    } public List<searchResultModelFL> getByDoc_photo(String IIN) {
        List<mv_iin_doc> fls = mv_iin_docRepo.getByDoc_number(IIN);
        List<mv_fl> fls1 = new ArrayList<>();
        for(mv_iin_doc flss : fls){
            System.out.println(flss.getIin());
            fls1 = mv_FlRepo.getUsersByLike(flss.getIin());
        }
        List<searchResultModelFL> result = findWithPhoto(fls1);
        return result;
    }

    public List<searchResultModelFL> getByFIO_photo(String i, String o, String f) {
        List<mv_fl> fls = mv_FlRepo.getUsersByFIO(i, o, f);

        List<searchResultModelFL> result = findWithPhoto(fls);
        return result;
    }

    private List<searchResultModelFL> findWithPhoto(List<mv_fl> fls) {
        List<searchResultModelFL> result = new ArrayList<>();
        for (mv_fl  fl: fls) {
            searchResultModelFL person = new searchResultModelFL();
            person.setFirst_name(fl.getFirst_name());
            person.setLast_name(fl.getLast_name());
            person.setPatronymic(fl.getPatronymic());
            person.setIin(fl.getIin());
            tryAddPhoto(person, fl.getIin());

            result.add(person);
        }
        return result;
    }

    private searchResultModelFL tryAddPhoto(searchResultModelFL fl, String IIN) {
        try {
            photoDb photo = newPhotoService.getLastPhoto(IIN);
            fl.setPhoto(photo.getPhoto());
            return fl;
        } catch (Exception e) {
            System.out.println(e);
        }
        return fl;
    }
    private NodesFL tryAddPhoto(NodesFL node, String IIN) {
        try {
            List<photoDb> photos = new ArrayList<>();
            photos = newPhotoService.getPhotoByIIN(IIN);
            List<photoDb> photoDbs = new ArrayList<>();
            for(photoDb photoDb1: photos){
                photoDbs.add(photoDb1);
                node.setPhotoDbf(photoDbs);
            }
            return node;
        } catch (Exception e) {
            System.out.println(e);
        }
        return node;
    }
    private Map<String, Object> getPropertyMap(Object obj) {
        Map<String, Object> properties = new HashMap<>();

        Field[] fields = obj.getClass().getDeclaredFields();
        for (Field field: fields) {
            try {
                Object value = field.get(obj);
                properties.put(field.getName(), value);
            } catch (IllegalAccessException e){
//                e.printStackTrace();
            }
        }
        return properties;
    }

    public List<mv_fl> findByFIO(String i, String o, String f) {
        return mv_FlRepo.getUsersByFIO(i, o, f);
    }
    public List<mv_fl> searchByIIN(String IIN) {
        return mv_FlRepo.getUsersByLike(IIN);
    }


    public NodesFL getNode(String IIN){
        NodesFL myNode = new NodesFL();
        List<mv_auto_fl> myMv_auto_fl =  mvAutoFlRepo.getUsersByLike(IIN);
        List<mv_fl> myMv_fl =  mv_FlRepo.getUsersByLike(IIN);
        List<omn> myOmn =  omn_repos.getUsersByLike(IIN);
        List<orphans> myOrphans =  orphans_repo.getUsersByLike(IIN);
        List<bankrot> bankrots = bankrotRepo.getbankrotByByIIN(IIN);
        List<convicts_justified> convictsJustifieds = convicts_justifiedRepo.getconvicts_justifiedByByIIN(IIN);
        List<convicts_terminated_by_rehab> convictsTerminatedByRehabs = convicts_terminated_by_rehabRepo.getconvicts_terminated_by_rehabByByIIN(IIN);
        List<criminals> criminals = criminalsRepo.getcriminalsByByIIN(IIN);
        List<adm> MyAdm =  admRepo.getUsersByLike(IIN);
        List<dormant> myDormant =  dormantRepo.getUsersByLike(IIN);
        List<MilitaryAccounting2Entity> militaryAccounting2Entities = MilitaryAccounting2Repo.getUsersByLike(IIN);
        List<mv_rn_old> mvRnOlds = mv_rn_oldRepo.getUsersByLike(IIN);
        List<equipment> myEquipment =  equipment_repo.getUsersByLike(IIN);
        List<fl_relatives> relatives = fl_relativesRepository.findAllByIin(IIN);
        List<reg_address_fl> addressFls = regAddressFlRepo.getByIIN(IIN);
        List<String> flPensionContrs = flPensionContrRepo.getUsersByLikeCompany(IIN);
//        List<String> CompanyNames = flPensionContrRepo.getUsersByLikeCompany(IIN);
        System.out.println(flPensionContrs);
        List<flPensionMini> flPensionContrs1 = new ArrayList<>();
        omn myOmns =  omn_repos.getUsersByLikeIin_bins(IIN);
        List<msh> mshes = mshRepo.getUsersByLike(IIN);

        List<FL_PENSION_FINAL> flPensionFinals = new ArrayList<>();
        for(String flPension : flPensionContrs){
            FL_PENSION_FINAL flPensionFinal = new FL_PENSION_FINAL();
            List<flPensionMini> fl_pension_contrss = new ArrayList<>();
            fl_pension_contrss = flPensionMiniRepo.getAllByCompanies(IIN,flPension);
            List<Map<String, Object>> r = flPensionContrRepo.findAmountOfAmountByKNP(IIN,flPension);
            List<String> fff = flPensionMiniRepo.getAllByCompaniesYear(IIN,flPension);
//            System.out.println(flPensionContrRepo.findAmountOfAmountByKNP(IIN,flPension));
//            Object findAmountOfAmountByKNPf = flPensionContrRepo.findAmountOfAmountByKNP(IIN,flPension);
//            System.out.printf(String.valueOf(findAmountOfAmountByKNPf.getClass().getName()));
            flPensionFinal.setFlPensionMinis(fl_pension_contrss);
            flPensionFinal.setNakoplenya(r);
            flPensionFinal.setYears(fff);
            flPensionFinal.setCompanyBin(flPension);
            flPensionFinals.add(flPensionFinal);
//            System.out.println(findAmountOfAmountByKNPf);
        }
        List<IpgoEmailEntity> ipgoEmailEntities = IpgoEmailEntityRepo.getUsersByLike(IIN);
        List<FirstCreditBureauEntity> firstCreditBureauEntities = FirstCreditBureauEntityRepo.getUsersByLike(IIN);
        List<TIpEntity> TIpEntity = TIpEntityRepo.getUsersByLike(IIN);
        List<AccountantListEntity> accountantListEntities = accountantListEntityRepo.getUsersByLike(IIN);
        List<AdvocateListEntity> advocateListEntities = advocateListEntityRepo.getUsersByLike(IIN);
        List<AuditorsListEntity> auditorsListEntities = auditorsListEntityRepo.getUsersByLike(IIN);
        List<BailiffListEntity> bailiffListEntities = bailiffListEntityRepo.getUsersByLike(IIN);
        List<block_esf> blockEsfs = block_esfRepo.getblock_esfByIIN(IIN);
        List<mv_ul_founder_fl> mvUlFounderFls = mvUlFounderFlRepo.getUsersByLikeIIN(IIN);
        List<NdsEntity> ndsEntities = ndsEntityRepo.getUsersByLike(IIN);
        List<MzEntity> mzEntities = MzEntityRepo.getopgByIIN(IIN);
        List<WantedListEntity> wantedListEntities =  wantedListRepo.getByIIN(IIN);
        List<CommodityProducer> commodityProducers = commodityProducerRepo.getiin_binByIIN(IIN);
        myNode.setCommodityProducers(commodityProducers);
        myNode.setWantedListEntities(wantedListEntities);
        myNode.setMzEntities(mzEntities);
        myNode.setNdsEntities(ndsEntities);
        myNode.setMvUlFounderFls(mvUlFounderFls);
        myNode.setBlockEsfs(blockEsfs);
        myNode.setAccountantListEntities(accountantListEntities);
        myNode.setAdvocateListEntities(advocateListEntities);
        myNode.setAuditorsListEntities(auditorsListEntities);
        myNode.setBailiffListEntities(bailiffListEntities);
        myNode.setTIpEntity(TIpEntity);
        myNode.setFirstCreditBureauEntities(firstCreditBureauEntities);
        myNode.setIpgoEmailEntities(ipgoEmailEntities);
        myNode.setMilitaryAccounting2Entities(militaryAccounting2Entities);
        myNode.setConvictsJustifieds(convictsJustifieds);
        myNode.setMvRnOlds(mvRnOlds);
        myNode.setBankrots(bankrots);
        myNode.setCriminals(criminals);
        myNode.setConvictsTerminatedByRehabs(convictsTerminatedByRehabs);
        myOmn.add(myOmns);
        myNode.setRegAddressFls(addressFls);
        myNode.setMshes(mshes);
        myNode = tryAddPhoto(myNode,IIN);
        myNode.setFlPensionContrs(flPensionFinals);
        myNode.setMvFls(myMv_fl);
        myNode.setMvAutoFls(myMv_auto_fl);
        myNode.setOmns(myOmn);
        myNode.setOrphans(myOrphans);
        myNode.setAdms(MyAdm);
        myNode.setContacts(flContactsRepo.findAllByIin(IIN));
        myNode.setDormants(myDormant);
        myNode.setEquipment(myEquipment);
        myNode.setFl_relatives(relatives);
        myNode.setPdls(pdlReposotory.getByIIN(IIN));
        myNode.setMvIinDocs(mvIinDocRepo.getByIIN(IIN));
        myNode.setUniversities(uniRepo.getByIIN(IIN));
        myNode.setSchools(schoolRepo.getByIIN(IIN));
        myNode.setMillitaryAccounts(militaryAccountRepo.findAllByIin(IIN));
        return myNode;
    }
    public List<Map<String, Object>> findAmountOfAmountByKNP(String iin, String bin) {
        return flPensionContrRepo.findAmountOfAmountByKNP("810615301348", "951040000069");
    }

    public List<searchResultModelUl> searchResultUl(String bin) {
        List<mv_ul> mvUls = mv_ul_repo.getUsersByLike(bin);
        List<searchResultModelUl> list = new ArrayList<>();
        for (mv_ul l: mvUls) {
            searchResultModelUl res = new searchResultModelUl();
            res.setBin(l.getBin());
            res.setName(l.getFull_name_rus());
            list.add(res);
        }

        return list;
    }
 public NodesUL getNodeUL(String BIN){
        NodesUL myNode = new NodesUL();
        List<mv_ul_founder_fl> mvUlFounderFls = mvUlFounderFlRepo.getUsersByLike(BIN);
        List<bankrot> bankrots = bankrotRepo.getbankrotByByIIN(BIN);
        List<mv_ul> mvUls = mv_ul_repo.getUsersByLike(BIN);
        List<adm> MyAdm =  admRepo.getUsersByLikeBin(BIN);
        List<dormant> myDormant =  dormantRepo.getUsersByLike(BIN);
        List<equipment> myEquipment =  equipment_repo.getUsersByLike(BIN);
        List<omn> myOmns =  omn_repos.getUsersByLikeIin_bin(BIN);
        List<msh> mshes = mshRepo.getUsersByLike(BIN);
        List<criminals> criminals = criminalsRepo.getcriminalsByByIIN(BIN);
        List<block_esf> blockEsfs = block_esfRepo.getblock_esfByIIN(BIN);
        List<OpgEntity> opgEntities = opgRepo.getopgByIIN(BIN);
     List<AccountantListEntity> accountantListEntities = accountantListEntityRepo.getUsersByLikeBIN(BIN);
     List<NdsEntity> ndsEntities = ndsEntityRepo.getUsersByLike(BIN);
     List<mv_rn_old> mvRnOlds = mv_rn_oldRepo.getUsersByLike(BIN);
//     List<TaxOutEntity> taxOutEntities = taxOutEntityRepo.getUsersByLike(BIN);
     List<FpgTempEntity> fpgTempEntities = fpgTempEntityRepo.getUsersByLike(BIN);
     List<pdl> pdls = pdlReposotory.getByBin(BIN);
     List<QoldauSubsidy> q = QoldauRepo.getByIIN(BIN);
     List<CommodityProducer> commodityProducers = commodityProducerRepo.getiin_binByIIN(BIN);
     myNode.setCommodityProducers(commodityProducers);
     myNode.setQoldauSubsidy(q);
     myNode.setPdls(pdls);
     myNode.setFpgTempEntities(fpgTempEntities);
//     myNode.setTaxOutEntities(taxOutEntities);
     myNode.setMvRnOlds(mvRnOlds);
     myNode.setNdsEntities(ndsEntities);
     myNode.setAccountantListEntities(accountantListEntities);
     myNode.setMshes(mshes);
     myNode.setOpgEntities(opgEntities);
     myNode.setBlockEsfs(blockEsfs);
     myNode.setMvUls(mvUls);
     myNode.setCriminals(criminals);
        myNode.setBankrots(bankrots);
        myNode.setMvUlFounderFls(mvUlFounderFls);
        myNode.setOmns(myOmns);
        myNode.setAdms(MyAdm);
        myNode.setDormants(myDormant);
        myNode.setEquipment(myEquipment);
        return myNode;
    }
}
