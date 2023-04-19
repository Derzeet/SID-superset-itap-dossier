package com.example.backend.service;

import com.example.backend.modelsDossier.*;
import com.example.backend.photo.modelsPhot.fl_relatives;
import com.example.backend.photo.modelsPhot.photoDb;
import com.example.backend.photo.modelsPhot.reg_address_fl;
import com.example.backend.photo.repositoryPhot.fl_relativesRepository;
import com.example.backend.photo.repositoryPhot.mv_iin_docRepo;
import com.example.backend.photo.repositoryPhot.pdlReposotory;
import com.example.backend.photo.repositoryPhot.reg_address_fl_Repo;
import com.example.backend.photo.repositoryPhot.*;
import com.example.backend.repositoryDossier.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MyService {
    @Autowired
    newPhotoService newPhotoService;
    @Autowired
    mv_auto_fl_repo mvAutoFlRepo;
    @Autowired
    mv_fl_repo mv_FlRepo;
    @Autowired
    omn_repo omn_repos;
    @Autowired
    orphans_repo orphans_repo;
    @Autowired
    adm_repo admRepo;
    @Autowired
    equipment_repo equipment_repo;
    @Autowired
    dormant_repo dormantRepo;
    @Autowired
    mv_ul_repo mv_ul_repo;
    @Autowired
    fl_relativesRepository fl_relativesRepository;
    @Autowired
    reg_address_fl_Repo regAddressFlRepo;
    @Autowired
    pdlReposotory pdlReposotory;
    @Autowired
    mv_iin_docRepo mvIinDocRepo;
    @Autowired
    universitiesRepo uniRepo;
    @Autowired
    schoolRepo schoolRepo;

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
        List<adm> MyAdm =  admRepo.getUsersByLike(IIN);
        List<dormant> myDormant =  dormantRepo.getUsersByLike(IIN);
        List<equipment> myEquipment =  equipment_repo.getUsersByLike(IIN);
        List<fl_relatives> relatives = fl_relativesRepository.getRelativesByFio(IIN);
        List<reg_address_fl> addressFls = regAddressFlRepo.getByIIN(IIN);
        omn myOmns =  omn_repos.getUsersByLikeIin_bins(IIN);
        myOmn.add(myOmns);
        myNode.setRegAddressFls(addressFls);
        myNode = tryAddPhoto(myNode,IIN);
        myNode.setMvFls(myMv_fl);
        myNode.setMvAutoFls(myMv_auto_fl);
        myNode.setOmns(myOmn);
        myNode.setOrphans(myOrphans);
        myNode.setAdms(MyAdm);
        myNode.setDormants(myDormant);
        myNode.setEquipment(myEquipment);
        myNode.setFl_relatives(relatives);
        myNode.setPdls(pdlReposotory.getByIIN(IIN));
        myNode.setMvIinDocs(mvIinDocRepo.getByIIN(IIN));
        myNode.setUniversities(uniRepo.getByIIN(IIN));
        myNode.setSchools(schoolRepo.getByIIN(IIN));
        return myNode;
    }
 public NodesUL getNodeUL(String BIN){
        NodesUL myNode = new NodesUL();
        List<mv_ul> myMv_ul =  mv_ul_repo.getUsersByLike(BIN);
        List<adm> MyAdm =  admRepo.getUsersByLikeBin(BIN);
        List<dormant> myDormant =  dormantRepo.getUsersByLike(BIN);
        List<equipment> myEquipment =  equipment_repo.getUsersByLike(BIN);
        List<omn> myOmns =  omn_repos.getUsersByLikeIin_bin(BIN);
        myNode.setMvUls(myMv_ul);
        myNode.setOmns(myOmns);
        myNode.setAdms(MyAdm);
        myNode.setDormants(myDormant);
        myNode.setEquipment(myEquipment);
        return myNode;
    }
}
