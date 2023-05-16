package com.example.backend.controller;


import com.example.backend.modelsDossier.*;
import com.example.backend.photo.modelsPhot.fl_pension_contr;
import com.example.backend.photo.modelsPhot.photoDb;
import com.example.backend.photo.repositoryPhot.newPhotoRepo;
import com.example.backend.repositoryDossier.esf_all2Repo;
import com.example.backend.repositoryDossier.mv_auto_fl_repo;
import com.example.backend.service.MyService;
import com.example.backend.tools.PdfGenerator;
//import com.lowagie.text.DocumentException;
import com.lowagie.text.*;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*", maxAge = 3000)
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
    public NodesUL getChfc(@RequestParam String bin) {
        NodesUL ss = myService.getNodeUL(bin);
        return ss;
    }
    @GetMapping("/taxpage")
    public List<TaxOutEntity> getTax(@RequestParam String bin, @RequestParam(required = false,defaultValue = "0") int page, @RequestParam(required = false,defaultValue = "10") int size) {
        return myService.taxOutEntities(bin,PageRequest.of(page,size));
    }
    @GetMapping("/pensionUl")
    public List<Map<String, Object>> pensionUl(@RequestParam Integer year,@RequestParam String bin, @RequestParam(required = false,defaultValue = "0") int page, @RequestParam(required = false,defaultValue = "10") int size) {
//        return myService.taxOutEntities(bin,PageRequest.of(page,size));
        return myService.pensionEntityUl(year,bin,PageRequest.of(page,size));
    }

    @GetMapping("/iin")
    public List<searchResultModelFL> getByIIN(@RequestParam String iin) {
        return myService.getByIIN_photo(iin);
    }
    @GetMapping("/nomer_doc")
    public List<searchResultModelFL> getByDoc(@RequestParam String doc) {
        return myService.getByDoc_photo(doc);
    }
    @GetMapping("/bydoc_number")
    public List<searchResultModelFL> getByDocNumber(@RequestParam String doc_number) {
        return myService.getByDocNumber_photo(doc_number);
    }

    @GetMapping("/additionalfio")
    public List<searchResultModelFL> getByAdditions(@RequestParam HashMap<String, String> req) {
        System.out.println(req);
        return myService.getWIthAddFields(req);
    }

    @GetMapping("/byphone")
    public List<searchResultModelFL> getByPhone(@RequestParam String phone) {
        return myService.getByPhone(phone);
    }

    @GetMapping("/fio")
    public List<searchResultModelFL> findByFIO(@RequestParam String i, @RequestParam String o, @RequestParam String f) {
        return myService.getByFIO_photo(i.replace('$', '%'), o.replace('$', '%'), f.replace('$', '%'));
    }

    @GetMapping("/bin")
    public List<searchResultModelUl> findByBin(@RequestParam String bin) {
        return myService.searchResultUl(bin);
    }

    @GetMapping("/binname")
    public List<searchResultModelUl> findBinByName(@RequestParam String name) {
        return myService.searchUlByName(name.replace('$', '%'));
    }

    @GetMapping("/sex")
    public List<Map<String,Object>> get(){
        return myService.findAmountOfAmountByKNP("gr","gd");
    }

//    @GetMapping("/ulpension")
//    public List<fl_pension_contr> getPension(@RequestParam String bin) {
//
//    }

    @GetMapping(value = "/download/{iin}", produces = MediaType.APPLICATION_PDF_VALUE)
    public @ResponseBody byte[] generatePdfFile(HttpServletResponse response, @PathVariable("iin")String iin) throws IOException, DocumentException {
        response.setContentType("application/pdf");
        String headerkey = "Content-Disposition";
        String headervalue = "attachment; filename=doc" + ".pdf";
        response.setHeader(headerkey, headervalue);
        NodesFL r =  myService.getNode(iin);
        PdfGenerator generator = new PdfGenerator();
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        generator.generate(r, baos);
        return baos.toByteArray();
    }
}
