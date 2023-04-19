package com.example.backend.controller;

import com.example.backend.modelsDossier.NodesFL;
import com.example.backend.modelsDossier.NodesUL;
import com.example.backend.modelsDossier.mv_fl;
import com.example.backend.modelsDossier.searchResultModelFL;
import com.example.backend.photo.modelsPhot.photoDb;
import com.example.backend.photo.repositoryPhot.newPhotoRepo;
import com.example.backend.repositoryDossier.esf_all2Repo;
import com.example.backend.repositoryDossier.mv_auto_fl_repo;
import com.example.backend.service.MyService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*", maxAge = 5179)
public class DoseirController {
    @Autowired
    newPhotoRepo newPhotoRepo;
    @Autowired
    esf_all2Repo esfAll2Repo;
    @Autowired
    mv_auto_fl_repo mvAutoFlRepo;
    @Autowired
    MyService myService;

    @GetMapping("/ch")
    public List<photoDb> getCh() {
        return newPhotoRepo.findAllByIinv("040502651337");
    }
    @GetMapping("/chh")
    public NodesFL getChf() {
        NodesFL ss = myService.getNode("831013300660");
        return ss;
    }

    @GetMapping("/profile")
    public NodesFL getProfile(@RequestParam String iin) {
        return myService.getNode(iin);
    }
    @GetMapping("/cc")
    public NodesUL getChfc() {
        NodesUL ss = myService.getNodeUL("170740007045");
        return ss;
    }

    @GetMapping("/iin")
    public List<searchResultModelFL> getByIIN(@RequestParam String iin) {
        return myService.getByIIN_photo(iin);
    }

    @GetMapping("/fio")
    public List<searchResultModelFL> findByFIO(@RequestParam String i, @RequestParam String o, @RequestParam String f) {
        return myService.getByFIO_photo(i.replace('$', '%'), o.replace('$', '%'), f.replace('$', '%'));
    }
}
