package com.example.backend.controller;
//import com.yupaits.yutool.plugin.jwt.support.JwtHelper;
//import io.jsonwebtokentoken.Jwt;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties;
import org.springframework.security.jwt.Jwt;
import org.springframework.security.jwt.JwtHelper;
import org.springframework.security.jwt.crypto.sign.MacSigner;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", maxAge = 3000)
@RequestMapping("/dashboard")
public class MetabaseController {
    private final String METABASE_SITE_URL = "http://192.168.122.98:3000"; //The IP address of your metabase, metabase default port number 3000
    private final String METABASE_SECRET_KEY = "7e093d839fd5c8801d664d5b55906cbf8bfc229c435a37eb24e72ef3fb56becf";

    @GetMapping("/dashurl")
    public DashboardParams dashAction() {
        int round = Math.round(System.currentTimeMillis() / 1000)+10*60; // 10 minute expiration
        String pyload = "{\n" +
                "  \"resource\": {\"dashboard\": 2},\n" +  //This place should write the number you share
                "  \"params\": {\n" +
                "    \n" +
                "  },\n" +
                "  \"exp\":"+ round + "\n" +   //If no expiration time is required, this line can be commented out
                "}";

        Jwt token = JwtHelper.encode(pyload, new MacSigner(METABASE_SECRET_KEY));
        //Note the difference between the sharing dashboard and question in the address below
        String url = METABASE_SITE_URL + "/embed/dashboard/" + token.getEncoded() + "#theme=night&bordered=true&titled=true";
        return new DashboardParams(url);
    }
    @GetMapping("/dashurl1")
    public DashboardParams dashAction1() {
        int round = Math.round(System.currentTimeMillis() / 1000)+10*60; // 10 minute expiration
        String pyload = "{\n" +
                "  \"resource\": {\"dashboard\": 3},\n" +  //This place should write the number you share
                "  \"params\": {\n" +
                "    \n" +
                "  },\n" +
                "  \"exp\":"+ round + "\n" +   //If no expiration time is required, this line can be commented out
                "}";

        Jwt token = JwtHelper.encode(pyload, new MacSigner(METABASE_SECRET_KEY));
        //Note the difference between the sharing dashboard and question in the address below
        String url = METABASE_SITE_URL + "/embed/dashboard/" + token.getEncoded() + "#theme=night&bordered=true&titled=true";
        return new DashboardParams(url);
    }

    @GetMapping("/questionurl")
    public DashboardParams questionAction() {
        //Because the problem is shared, the question in the resource below is the question, not the dashboard, and pay attention to the change of the number
        Jwt token = JwtHelper.encode("{\"resource\": {\"question\": 65}, \"params\": {}}", new MacSigner(METABASE_SECRET_KEY));
        String url = METABASE_SITE_URL + "/embed/question/" + token.getEncoded() + "#bordered=true&titled=true";
        return new DashboardParams(url);
    }


    class DashboardParams {
        private String url;

        public DashboardParams(String url) {
            this.url = url;
        }

        public String getUrl() {
            return url;
        }

        public void setUrl(String url) {
            this.url = url;
        }
    }
}
