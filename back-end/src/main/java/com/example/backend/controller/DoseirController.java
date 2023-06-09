package com.example.backend.controller;


import com.example.backend.modelsAuth.events;
import com.example.backend.modelsAuth.news;
import com.example.backend.modelsDossier.*;
import com.example.backend.photo.modelsPhot.photoDb;
import com.example.backend.photo.repositoryPhot.newPhotoRepo;
import com.example.backend.repositoryDossier.esf_all2Repo;
import com.example.backend.repositoryDossier.mv_auto_fl_repo;
import com.example.backend.service.MyService;
import com.example.backend.tools.PdfGenerator;
//import com.lowagie.text.DocumentException;
import com.lowagie.text.*;
import lombok.AllArgsConstructor;
import org.apache.tomcat.util.http.fileupload.FileItem;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItem;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItemFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.apache.tomcat.util.http.fileupload.FileItem;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.nio.file.Files;
import java.util.Base64;
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

    @PostMapping(value = "/events")
    public events createEvent(@RequestBody events event) {
        return myService.createEvent(event);
    }

    @GetMapping(value="/events")
    public List<events> getAllEvents() {
        return myService.getAllEvents();
    }

    @DeleteMapping(value="/event")
    public void deleteEvent(@RequestParam Long id) {
        myService.deleteEvent(id);
    }

    @PostMapping(value="/news")
    public ResponseEntity<String> createNews(@RequestBody news news) {
        return myService.createNews(news);
    }

    @GetMapping(value = "/news")
    public List<news> getAllNews() {
        return myService.getAllNews();
    }
    @GetMapping(value = "/new")
    public List<news> getAllNews(@RequestParam Long id) {
//        System.out.println(id);
        return myService.getNewsById(id);
    }
//    @PostMapping(value = "/news/create", consumes = {"multipart/form-data"})
//    public news createVacancy(@RequestParam("file") MultipartFile file, @RequestParam news news){
//        return myService.createNews(news,file);
//    }

    @GetMapping("/ch")
    public List<photoDb> getCh() {
        return newPhotoRepo.findAllByIinv("040502651337");
    }
//    @GetMapping("/allnews")
//    public List<news> getNewsAll() {
//        return myService.allNews();
//    }
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
    public List<Map<String, Object>> pensionUl(@RequestParam String bin, @RequestParam String year, @RequestParam(required = false,defaultValue = "0") int page, @RequestParam(required = false,defaultValue = "10") int size) {
//        return myService.taxOutEntities(bin,PageRequest.of(page,size));
        return myService.pensionEntityUl(bin, year, PageRequest.of(page,size));
    }
    @GetMapping("/pensionsbyyear")
    public List<Map<String,Object>> pensionUl1(@RequestParam String bin, @RequestParam Double year, @RequestParam Integer page) {
//        return myService.taxOutEntities(bin,PageRequest.of(page,size));
        return myService.pensionEntityUl1(bin, year, page);
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
    }   @GetMapping("/byvinkuzov")
    public List<searchResultModelFL> getByVinKuzov(@RequestParam String vin) {
        return myService.getByVinFl(vin.toUpperCase());
    }
     @GetMapping("/byvinkuzovul")
    public List<searchResultModelUl> getByVinKuzovUl(@RequestParam String vin) {
        return myService.getByVinUl(vin.toUpperCase());
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
