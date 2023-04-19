package com.example.backend.service;

import com.example.backend.photo.modelsPhot.photoDb;
import com.example.backend.photo.repositoryPhot.newPhotoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class newPhotoService {
    @Autowired
    com.example.backend.photo.repositoryPhot.newPhotoRepo newPhotoRepo;

    public List<photoDb> getPhotoByIIN(String iin){
        List<photoDb> all =  newPhotoRepo.findAllByIinv(iin);

        return all;
    }

    public photoDb getLastPhoto(String iin) {
        photoDb res = newPhotoRepo.findLastPhoto(iin);
        return res;
    }
}
