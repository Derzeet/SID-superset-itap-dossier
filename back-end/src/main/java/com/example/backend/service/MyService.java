package com.example.backend.service;

import com.example.backend.modelsDossier.*;
import com.example.backend.photo.modelsPhot.*;
import com.example.backend.photo.repositoryPhot.fl_relativesRepository;
import com.example.backend.photo.repositoryPhot.mv_iin_docRepo;
import com.example.backend.photo.repositoryPhot.pdlReposotory;
import com.example.backend.photo.repositoryPhot.reg_address_fl_Repo;
import com.example.backend.photo.repositoryPhot.*;
import com.example.backend.repositoryDossier.*;
import org.springframework.beans.factory.annotation.Autowired;
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
    JdbcTemplate jdbcTemplate;
    @Autowired
    bankrotRepo bankrotRepo;
    @Autowired
    convicts_terminated_by_rehabRepo convicts_terminated_by_rehabRepo;
    @Autowired
    criminalsRepo criminalsRepo;
    @Autowired
    fl_pension_contrRepo flPensionContrRepo;
    @Autowired
    fl_pension_MiniRepo flPensionMiniRepo;
    @Autowired
    mv_ul_founder_flRepo mvUlFounderFlRepo;
    @Autowired
    convicts_justifiedRepo convicts_justifiedRepo;

    @Autowired
    private newPhotoService newPhotoService;
    @Autowired
    private mv_auto_fl_repo mvAutoFlRepo;
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
    private schoolRepo schoolRepo;
    @Autowired
    private flContactsRepo flContactsRepo;
    @Autowired
    private militaryAccountRepo militaryAccountRepo;
    public List<searchResultModelFL> getByIIN_photo(String IIN) {
        List<mv_fl> fls = mv_FlRepo.getUsersByLike(IIN);

        List<searchResultModelFL> result = findWithPhoto(fls);
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
        List<mv_rn_old> mvRnOlds = mv_rn_oldRepo.getUsersByLike(IIN);
        List<equipment> myEquipment =  equipment_repo.getUsersByLike(IIN);
        List<fl_relatives> relatives = fl_relativesRepository.findAllByIin(IIN);
        List<reg_address_fl> addressFls = regAddressFlRepo.getByIIN(IIN);
        List<String> flPensionContrs = flPensionContrRepo.getUsersByLikeCompany(IIN);
//        List<String> CompanyNames = flPensionContrRepo.getUsersByLikeCompany(IIN);
        System.out.println(flPensionContrs);
        List<flPensionMini> flPensionContrs1 = new ArrayList<>();
        omn myOmns =  omn_repos.getUsersByLikeIin_bins(IIN);
        myNode.setConvictsJustifieds(convictsJustifieds);
        myNode.setMvRnOlds(mvRnOlds);
        myNode.setBankrots(bankrots);
        myNode.setCriminals(criminals);
        myNode.setConvictsTerminatedByRehabs(convictsTerminatedByRehabs);
        myOmn.add(myOmns);
        myNode.setRegAddressFls(addressFls);
        myNode = tryAddPhoto(myNode,IIN);
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
 public NodesUL getNodeUL(String BIN){
        NodesUL myNode = new NodesUL();
        List<mv_ul_founder_fl> mvUlFounderFls = mvUlFounderFlRepo.getUsersByLike(BIN);
        List<bankrot> bankrots = bankrotRepo.getbankrotByByIIN(BIN);
        List<mv_ul> mvUls = mv_ul_repo.getUsersByLike(BIN);
        List<adm> MyAdm =  admRepo.getUsersByLikeBin(BIN);
        List<dormant> myDormant =  dormantRepo.getUsersByLike(BIN);
        List<equipment> myEquipment =  equipment_repo.getUsersByLike(BIN);
        List<omn> myOmns =  omn_repos.getUsersByLikeIin_bin(BIN);
        myNode.setMvUls(mvUls);
        myNode.setBankrots(bankrots);
        myNode.setMvUlFounderFls(mvUlFounderFls);
        myNode.setOmns(myOmns);
        myNode.setAdms(MyAdm);
        myNode.setDormants(myDormant);
        myNode.setEquipment(myEquipment);
        return myNode;
    }
}
