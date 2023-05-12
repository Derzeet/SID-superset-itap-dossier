package com.example.backend.extractor;

import com.example.backend.photo.modelsPhot.mv_fl;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class mv_fl_extractor implements ResultSetExtractor<List<mv_fl>> {
    @Override
    public List<mv_fl> extractData(ResultSet rs) throws SQLException, DataAccessException {
        List<mv_fl> data = new ArrayList<>();
        while (rs.next()) {
            mv_fl res = new mv_fl();
            res.setIin(rs.getString("iin"));
            res.setFirst_name(rs.getString("first_name"));
            res.setLast_name(rs.getString("last_name"));
            res.setPatronymic(rs.getString("patronymic"));
            data.add(res);
        }
        return data;
    }
}
