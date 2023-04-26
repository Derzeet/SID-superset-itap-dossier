package com.example.backend.modelsDossier;

import com.example.backend.photo.modelsPhot.flPensionMini;
import java.util.List;

import java.util.Map;

public class FL_PENSION_FINAL {
    private String CompanyBin;
    private List<String> years;
    private List<Map<String,Object>> nakoplenya;
    private List<flPensionMini> flPensionMinis;

    public String getCompanyBin() {
        return CompanyBin;
    }

    public void setCompanyBin(String companyBin) {
        CompanyBin = companyBin;
    }

    public List<String> getYears() {
        return years;
    }

    public void setYears(List<String> years) {
        this.years = years;
    }

    public List<Map<String, Object>> getNakoplenya() {
        return nakoplenya;
    }

    public void setNakoplenya(List<Map<String, Object>> nakoplenya) {
        this.nakoplenya = nakoplenya;
    }

    public List<flPensionMini> getFlPensionMinis() {
        return flPensionMinis;
    }

    public void setFlPensionMinis(List<flPensionMini> flPensionMinis) {
        this.flPensionMinis = flPensionMinis;
    }
}
