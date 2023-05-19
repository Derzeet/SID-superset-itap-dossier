package com.example.backend.service;

import com.example.backend.extractor.mv_fl_extractor;
import com.example.backend.modelsAuth.news;
import com.example.backend.modelsDossier.*;
import com.example.backend.photo.modelsPhot.*;
import com.example.backend.photo.repositoryPhot.fl_relativesRepository;
import com.example.backend.photo.repositoryPhot.mv_iin_docRepo;
import com.example.backend.photo.repositoryPhot.pdlReposotory;
import com.example.backend.photo.repositoryPhot.reg_address_fl_Repo;
import com.example.backend.photo.repositoryPhot.*;
import com.example.backend.repositoryAuth.NewsRepo;
import com.example.backend.repositoryDossier.*;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.lang.reflect.Field;
import java.time.LocalDateTime;
import java.util.*;

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
    @Autowired MvUlFounderUlRepo mvUlFounderUlRepo;
    @Autowired MvUlLeaderEntityRepo mvUlLeaderEntityRepo;
    @Autowired
    RegAddressUlEntityRepo RegAddressUlEntityRepo;
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
    @Autowired
    private mv_ul_leaderRepository mvUlLeaderRepository;
    @Autowired
    private RegAddressUlEntityRepo regAddressUlEntityRepo;
    @Autowired
    private NewsRepo newsRepo;
    public news createNews(news news , MultipartFile file){
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        if(fileName.contains(".."))
        {
            System.out.println("not a a valid file");
        }
        try {
            news.setImage(Base64.getEncoder().encodeToString(file.getBytes()));
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println(news.getId());
//        news.setCountry("LocalDateTime.now()");
        news.setDateOfCreated(LocalDateTime.now());
        return newsRepo.save(news);
    }

    public List<searchResultModelUl> searchUlByName(String name) {
        List<mv_ul> mvUls = mv_ul_repo.getUlsByName(name.replace("$", "%"));
        List<searchResultModelUl> list = new ArrayList<>();
        for (mv_ul l: mvUls) {
            searchResultModelUl res = new searchResultModelUl();
            res.setBin(l.getBin());
            res.setName(l.getFull_name_rus());
            list.add(res);
        }
        return list;
    }

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
            sql = sql + "AND gender = '" + req.get("gender") + "' ";
        }
        if (req.get("nation") != "") {
            sql = sql + "AND nationality_ru_name = '" + req.get("nation").toUpperCase() + "' ";
        }
        if (req.get("city") != "") {
            sql = sql + "AND district = '" + req.get("city").toUpperCase() + "' ";
        }
        if (req.get("country") != "") {
            sql = sql + "AND citizenship_ru_name = '" + req.get("country").toUpperCase() + "' ";
        }
        if (req.get("region") != "") {
            sql = sql + "AND region = '" + req.get("region").toUpperCase() + "' ";
        }
        if (req.get("region") != "") {
            sql = sql + "AND region = '" + req.get("region").toUpperCase() + "' ";
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
    }
    public List<searchResultModelFL> getByVinFl(String vin) {
        List<String> iin = mvAutoFlRepo.getByVin(vin);
        List<mv_fl> fls = new ArrayList<>();
        for (String ii: iin) {
            mv_fl person = mv_FlRepo.getUserByIin(ii);
            fls.add(person);
        }
        try {
            List<searchResultModelFL> result = findWithPhoto(fls);
            return result;

        }catch (Exception e){
            System.out.println(e);
        }
        return null;
    }
    public List<searchResultModelUl> getByVinUl(String vin) {
        String VIN_upper = vin.toUpperCase();
        List<String> iin = mvAutoFlRepo.getByVin(VIN_upper);
        List<searchResultModelUl> list = new ArrayList<>();
        if (iin.size() > 0) {
            List<mv_ul> mvUls = mv_ul_repo.getUsersByLike(iin.get(0));
            for (mv_ul l: mvUls) {
                searchResultModelUl res = new searchResultModelUl();
                res.setBin(l.getBin());
                res.setName(l.getFull_name_rus());
                list.add(res);
            }
            return list;
        } else {
            return list;
        }

    }

    public List<searchResultModelFL> getByDoc_photo(String IIN) {
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
        try {
            List<mv_ul_leader> mv_ul_leaders =  mvUlLeaderRepository.findAllByIin(IIN);
            myNode.setUl_leaderList(mv_ul_leaders);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<mv_auto_fl> myMv_auto_fl =  mvAutoFlRepo.getUsersByLike(IIN);
            myNode.setMvAutoFls(myMv_auto_fl);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<mv_fl> myMv_fl =  mv_FlRepo.getUsersByLike(IIN);
            myNode.setMvFls(myMv_fl);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<omn> myOmn =  omn_repos.getUsersByLike(IIN);
            omn myOmns =  omn_repos.getUsersByLikeIin_bins(IIN);
            myOmn.add(myOmns);
            myNode.setOmns(myOmn);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<orphans> myOrphans =  orphans_repo.getUsersByLike(IIN);
            myNode.setOrphans(myOrphans);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<bankrot> bankrots = bankrotRepo.getbankrotByByIIN(IIN);
            myNode.setBankrots(bankrots);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<convicts_justified> convictsJustifieds = convicts_justifiedRepo.getconvicts_justifiedByByIIN(IIN);
            myNode.setConvictsJustifieds(convictsJustifieds);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<convicts_terminated_by_rehab> convictsTerminatedByRehabs = convicts_terminated_by_rehabRepo.getconvicts_terminated_by_rehabByByIIN(IIN);
            myNode.setConvictsTerminatedByRehabs(convictsTerminatedByRehabs);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<criminals> criminals = criminalsRepo.getcriminalsByByIIN(IIN);
            myNode.setCriminals(criminals);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<adm> MyAdm =  admRepo.getUsersByLike(IIN);
            myNode.setAdms(MyAdm);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<dormant> myDormant =  dormantRepo.getUsersByLike(IIN);
            myNode.setDormants(myDormant);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<MilitaryAccounting2Entity> militaryAccounting2Entities = MilitaryAccounting2Repo.getUsersByLike(IIN);
            myNode.setMilitaryAccounting2Entities(militaryAccounting2Entities);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<mv_rn_old> mvRnOlds = mv_rn_oldRepo.getUsersByLike(IIN);
            myNode.setMvRnOlds(mvRnOlds);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<equipment> myEquipment =  equipment_repo.getUsersByLike(IIN);
            myNode.setEquipment(myEquipment);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<fl_relatives> relatives = fl_relativesRepository.findAllByIin(IIN);
            myNode.setFl_relatives(relatives);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<reg_address_fl> addressFls = regAddressFlRepo.getByIIN(IIN);
            myNode.setRegAddressFls(addressFls);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<String> flPensionContrs = flPensionContrRepo.getUsersByLikeCompany(IIN);
            System.out.println(flPensionContrs);

            List<FL_PENSION_FINAL> flPensionFinals = new ArrayList<>();
            for(String flPension : flPensionContrs){
                FL_PENSION_FINAL flPensionFinal = new FL_PENSION_FINAL();
                List<Map<String, Object>> fl_pension_contrss = new ArrayList<>();
                fl_pension_contrss = flPensionContrRepo.getAllByCompanies(IIN,flPension);
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
            myNode.setFlPensionContrs(flPensionFinals);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<msh> mshes = mshRepo.getUsersByLike(IIN);
            myNode.setMshes(mshes);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<IpgoEmailEntity> ipgoEmailEntities = IpgoEmailEntityRepo.getUsersByLike(IIN);
            myNode.setIpgoEmailEntities(ipgoEmailEntities);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<FirstCreditBureauEntity> firstCreditBureauEntities = FirstCreditBureauEntityRepo.getUsersByLike(IIN);
            myNode.setFirstCreditBureauEntities(firstCreditBureauEntities);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<TIpEntity> TIpEntity = TIpEntityRepo.getUsersByLike(IIN);
            myNode.setTIpEntity(TIpEntity);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<AccountantListEntity> accountantListEntities = accountantListEntityRepo.getUsersByLike(IIN);
            myNode.setAccountantListEntities(accountantListEntities);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<AdvocateListEntity> advocateListEntities = advocateListEntityRepo.getUsersByLike(IIN);
            myNode.setAdvocateListEntities(advocateListEntities);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<AuditorsListEntity> auditorsListEntities = auditorsListEntityRepo.getUsersByLike(IIN);
            myNode.setAuditorsListEntities(auditorsListEntities);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<BailiffListEntity> bailiffListEntities = bailiffListEntityRepo.getUsersByLike(IIN);
            myNode.setBailiffListEntities(bailiffListEntities);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<block_esf> blockEsfs = block_esfRepo.getblock_esfByIIN(IIN);
            myNode.setBlockEsfs(blockEsfs);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<mv_ul_founder_fl> mvUlFounderFls = mvUlFounderFlRepo.getUsersByLikeIIN(IIN);
            myNode.setMvUlFounderFls(mvUlFounderFls);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<NdsEntity> ndsEntities = ndsEntityRepo.getUsersByLike(IIN);
            myNode.setNdsEntities(ndsEntities);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<MzEntity> mzEntities = MzEntityRepo.getopgByIIN(IIN);
            myNode.setMzEntities(mzEntities);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<WantedListEntity> wantedListEntities =  wantedListRepo.getByIIN(IIN);
            myNode.setWantedListEntities(wantedListEntities);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            List<CommodityProducer> commodityProducers = commodityProducerRepo.getiin_binByIIN(IIN);
            myNode.setCommodityProducers(commodityProducers);
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            myNode.setContacts(flContactsRepo.findAllByIin(IIN));
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            myNode.setPdls(pdlReposotory.getByIIN(IIN));
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            myNode.setMvIinDocs(mvIinDocRepo.getByIIN(IIN));
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            myNode.setUniversities(uniRepo.getByIIN(IIN));
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            myNode.setSchools(schoolRepo.getByIIN(IIN));
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        try {
            myNode.setMillitaryAccounts(militaryAccountRepo.findAllByIin(IIN));
        } catch (Exception e){
            System.out.println("Error:" + e);
        }
        List<flPensionMini> flPensionContrs1 = new ArrayList<>();
//        List<String> CompanyNames = flPensionContrRepo.getUsersByLikeCompany(IIN);
        myNode = tryAddPhoto(myNode,IIN);
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
    public List<TaxOutEntity> taxOutEntities(String bin, PageRequest pageRequest){
        Page<TaxOutEntity> taxOutEntityPage = taxOutEntityRepo.getUsersByLike(bin,pageRequest);
        return taxOutEntityPage.getContent();
    }
    public List<Map<String, Object>> pensionEntityUl(String bin, String year, PageRequest pageRequest){
        Page<Map<String,Object>> pens = flPensionContrRepo.getPension(bin, year, pageRequest);
        return pens.getContent();
    }
    public List<Map<String,Object>> pensionEntityUl1(String bin, Double year, Integer page){
        Integer offset = page * 10;
        List<Map<String,Object>> pens = flPensionContrRepo.getPension1(bin, year, offset);
        return pens;
    }



    public NodesUL getNodeUL(String BIN) {
        NodesUL myNode = new NodesUL();
        try {
            List<mv_ul_founder_fl> mvUlFounderFls = mvUlFounderFlRepo.getUsersByLike(BIN);
            myNode.setMvUlFounderFls(mvUlFounderFls);
        } catch (Exception e) {
            System.out.println("Error6: " + e);
        }
        try {
            List<bankrot> bankrots = bankrotRepo.getbankrotByByIIN(BIN);
            myNode.setBankrots(bankrots);
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
        try {
            List<mv_ul> mvUls = mv_ul_repo.getUsersByLike(BIN);
            myNode.setMvUls(mvUls);
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
        try {
            myNode.setFl_contacts(flContactsRepo.findAllByIin(BIN));
        } catch (Exception e) {
            System.out.println("Error:" + e);
        }
        try {
            List<adm> MyAdm = admRepo.getUsersByLikeBin(BIN);
            myNode.setAdms(MyAdm);
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
        try {
            List<dormant> myDormant = dormantRepo.getUsersByLike(BIN);
            myNode.setDormants(myDormant);
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
        try {
            RegAddressUlEntity address = regAddressUlEntityRepo.findByBin(BIN);
            myNode.setRegAddressUlEntities(address);
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
        try {
            List<equipment> myEquipment = equipment_repo.getUsersByLike(BIN);
            myNode.setEquipment(myEquipment);
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
        try {
            List<omn> myOmns = omn_repos.getUsersByLikeIin_bin(BIN);
            myNode.setOmns(myOmns);
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
        try {
            List<msh> mshes = mshRepo.getUsersByLike(BIN);
            myNode.setMshes(mshes);
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
        try {
            List<criminals> criminals = criminalsRepo.getcriminalsByByIIN(BIN);
            myNode.setCriminals(criminals);
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
        try {
            List<block_esf> blockEsfs = block_esfRepo.getblock_esfByIIN(BIN);
            myNode.setBlockEsfs(blockEsfs);
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
        try {
            List<OpgEntity> opgEntities = opgRepo.getopgByIIN(BIN);
            myNode.setOpgEntities(opgEntities);
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
        try {
            List<AccountantListEntity> accountantListEntities = accountantListEntityRepo.getUsersByLikeBIN(BIN);
            myNode.setAccountantListEntities(accountantListEntities);
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
        try {
            List<NdsEntity> ndsEntities = ndsEntityRepo.getUsersByLike(BIN);
            myNode.setNdsEntities(ndsEntities);
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
        try {
            List<FpgTempEntity> fpgTempEntities = fpgTempEntityRepo.getUsersByLike(BIN);
            myNode.setFpgTempEntities(fpgTempEntities);
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
        try {
            List<pdl> pdls = pdlReposotory.getByBin(BIN);
            myNode.setPdls(pdls);
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
        try {
            List<QoldauSubsidy> q = QoldauRepo.getByIIN(BIN);
            myNode.setQoldauSubsidy(q);
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
        try {
            List<CommodityProducer> commodityProducers = commodityProducerRepo.getiin_binByIIN(BIN);
            myNode.setCommodityProducers(commodityProducers);
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
        try {
            List<mv_rn_old> mvRnOlds = mv_rn_oldRepo.getUsersByLike(BIN);
            myNode.setMvRnOlds(mvRnOlds);
        } catch (Exception e) {
            System.out.println("Error: " + e);}
            try {
                RegAddressUlEntity address = regAddressUlEntityRepo.findByBin(BIN);
                RegAddressUlEntity setRegUlNaOdnom = regAddressUlEntityRepo.regAddressNaOdnomMeste(address.getRegAddrRegionRu(), address.getRegAddrDistrictRu()
                        , address.getRegAddrLocalityRu(), address.getRegAddrStreetRu(), address.getRegAddrBuildingNum(), BIN);
                myNode.setRegUlNaOdnomMeste(setRegUlNaOdnom);
                System.out.println(address.getRegAddrRegionKz() + " " + address.getRegAddrDistrictKz() + " " + address.getRegAddrBuildingNum() );
            } catch (Exception e) {
                System.out.println("Error: " + e);

//         }try {
//             List<TaxOutEntity> taxOutEntitiest = taxOutEntityRepo.getUsersByLike(BIN);
//             myNode.setTaxOutEntities(taxOutEntitiest);
//         } catch (Exception e) {
//             System.out.println("Error: " + e);
            }
            try {
                List<mv_auto_fl> mvAutoFls = mvAutoFlRepo.getUsersByLike(BIN);
                myNode.setMvAutoFls(mvAutoFls);
            } catch (Exception e) {
                System.out.println("Error: " + e);
            }
            List<MvUlFounderUl> mvUlFounderUls = mvUlFounderUlRepo.getUsersByLike(BIN);
            List<SvedenyaObUchastnikovUlEntity> svedenyaObUchastnikovUlEntities = new ArrayList<>();
            for (MvUlFounderUl mvUlFUl : mvUlFounderUls) {
                SvedenyaObUchastnikovUlEntity svedenyaObUchastnikovUlEntity = new SvedenyaObUchastnikovUlEntity();
                svedenyaObUchastnikovUlEntity.setIin_bin(mvUlFUl.getFounderBin());
                svedenyaObUchastnikovUlEntity.setFIOorUlName(mvUlFUl.getFounderNameRu());
                svedenyaObUchastnikovUlEntity.setReg_date(mvUlFUl.getRegDate());
                if (mvUlFUl.isCurrent()) {
                    svedenyaObUchastnikovUlEntity.setIdentificator("Учредитель ЮЛ");
                } else {
                    svedenyaObUchastnikovUlEntity.setIdentificator("Учредитель ЮЛ (исторический)");
                }
                svedenyaObUchastnikovUlEntities.add(svedenyaObUchastnikovUlEntity);
            }
            List<MvUlLeaderEntity> mvUlLeaderEntities = mvUlLeaderEntityRepo.getUsersByLike(BIN);
            for (MvUlLeaderEntity mvUlFUl : mvUlLeaderEntities) {
                SvedenyaObUchastnikovUlEntity svedenyaObUchastnikovUlEntity = new SvedenyaObUchastnikovUlEntity();
                svedenyaObUchastnikovUlEntity.setIin_bin(mvUlFUl.getIin());
                svedenyaObUchastnikovUlEntity.setFIOorUlName(mvUlFUl.getLastName() + " " + mvUlFUl.getFirstName() + " " + mvUlFUl.getPatronymic());
                svedenyaObUchastnikovUlEntity.setReg_date(mvUlFUl.getRegDate());
                if (mvUlFUl.getCurrent() == true) {
                    svedenyaObUchastnikovUlEntity.setIdentificator("Директор");
                } else {
                    svedenyaObUchastnikovUlEntity.setIdentificator("Директор (исторический)");
                }
                svedenyaObUchastnikovUlEntities.add(svedenyaObUchastnikovUlEntity);

            }
            List<Map<String, Object>> r = flPensionContrRepo.findAmountOfEmployeesOfEveryYear(BIN);
            myNode.setPensionYearAndEmpNum(r);
            myNode.setSvedenyaObUchastnikovUlEntities(svedenyaObUchastnikovUlEntities);
            if (myNode.getOmns().size() == 0
                    & myNode.getBankrots().size() == 0
                    & myNode.getAdms().size() == 0
                    & myNode.getOpgEntities().size() == 0
                    & myNode.getCriminals().size() == 0
                    & myNode.getBlockEsfs().size() == 0
                    & myNode.getFpgTempEntities().size() == 0) {
                myNode.setPerson_with_risk(false);
            } else {
                myNode.setPerson_with_risk(true);
            }
//         List<FL_PENSION_FINAL> flPensionFinals = new ArrayList<>();
//         FL_PENSION_FINAL flPensionFinal = new FL_PENSION_FINAL();
//         flPensionFinal.setNakoplenya(flPensionContrRepo.findAmountOfEmployeesOfEveryYear(BIN));
//         flPensionFinals.add(flPensionFinal);
//         myNode.setFlPensionContrs(flPensionFinals);

//         for(String flPension : flPensionContrs){
//             List<flPensionMini> fl_pension_contrss = new ArrayList<>();
//             fl_pension_contrss = flPensionMiniRepo.getAllByCompanies(IIN,flPension);
//             List<String> fff = flPensionMiniRepo.getAllByCompaniesYear(IIN,flPension);
////            System.out.println(flPensionContrRepo.findAmountOfAmountByKNP(IIN,flPension));
////            Object findAmountOfAmountByKNPf = flPensionContrRepo.findAmountOfAmountByKNP(IIN,flPension);
////            System.out.printf(String.valueOf(findAmountOfAmountByKNPf.getClass().getName()));
//             flPensionFinal.setFlPensionMinis(fl_pension_contrss);
//             flPensionFinal.setNakoplenya(r);
//             flPensionFinal.setYears(fff);
//             flPensionFinal.setCompanyBin(flPension);
//             flPensionFinals.add(flPensionFinal);
////            System.out.println(findAmountOfAmountByKNPf);
//         }
//         myNode.setFlPensionContrs(flPensionFinals);
//         List<TaxOutEntity> taxOutEntities = taxOutEntityRepo.getUsersByLike(BIN);
            //     myNode.setTaxOutEntities(taxOutEntities);
//         List<FL_PENSION_FINAL> flPensionFinals = new ArrayList<>();
//         List<Integer> adad = flPensionContrRepo.amountOfYears(BIN);
//         for(Integer add : adad){
//             FL_PENSION_FINAL flPensionFinal = new FL_PENSION_FINAL();
//             System.out.println(add);
//             flPensionFinal.setAmountOfEmp(flPensionContrRepo.amountOfEmp(BIN,add));

//             flPensionFinal.setNakoplenya(r);
//             flPensionFinal.setYear(add);
//             flPensionFinals.add(flPensionFinal);
//         }
//         myNode.setFlPensionContrs(flPensionFinals);
        try {
            Integer number = taxOutEntityRepo.getTaxAmount(BIN);
            myNode.setTaxCount(number);
        } catch (Exception e) {
            System.out.println("Tax error: " + e);
        }
            return myNode;
        }

    }
