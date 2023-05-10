package com.example.backend.tools;

import com.example.backend.modelsDossier.NodesFL;
import com.example.backend.photo.modelsPhot.mv_iin_doc;
import com.example.backend.photo.modelsPhot.reg_address_fl;
import com.example.backend.photo.modelsPhot.school;
import com.example.backend.photo.modelsPhot.universities;
import com.lowagie.text.*;
import com.lowagie.text.pdf.*;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.URL;
import java.util.HashMap;
import java.util.List;

public class PdfGenerator {

    private PdfPTable tryAddCell(PdfPTable table, String add, String string) {
        if (string != null) {
            table.addCell(add + string);
        } else {
            table.addCell(add);
        }
        return table;
    }

    public Document generate(NodesFL result, ByteArrayOutputStream response) throws DocumentException, IOException {
        // Creating the Object of Document
        Document document = new Document(PageSize.A4.rotate());
        // Getting instance of PdfWriter
        PdfWriter.getInstance(document, response);
        // Opening the created document to change it
        document.open();
        // Creating font
        // Setting font style and size
        Font fontTiltle = new Font();
        fontTiltle.setSize(16);
        // Creating paragraph
//        Paragraph paragraph1 = new Paragraph("Данные формы ФМ", fontTiltle);
        // Aligning the paragraph in the document
//        paragraph1.setAlignment(Paragraph.ALIGN_CENTER);
        // Adding the created paragraph in the document
//        document.add(paragraph1);
        // Creating a table of the 4 columns
        PdfPTable table = new PdfPTable(6);
        // Setting width of the table, its columns and spacing
        table.setWidthPercentage(100f);
        table.setWidths(new float[] {1, 1, 1, 1, 1, 1});
        table.setSpacingBefore(5);
        // Create Table Cells for the table header
        PdfPCell cell = new PdfPCell();
        // Setting the background color and padding of the table cell
        cell.setBackgroundColor(CMYKColor.WHITE);
        cell.setPadding(5);
        Font font = new Font();
        font.setColor(CMYKColor.WHITE);
        PdfPCell heading = new PdfPCell();
        heading.setBackgroundColor(CMYKColor.GRAY);
        heading.setPadding(4);
        heading.setColspan(6);
        heading.setHorizontalAlignment(Element.ALIGN_CENTER);
        heading.setPhrase(new Phrase("Сведения о физическом лице", font));
        table.addCell(heading);
        font.setColor(CMYKColor.BLACK);

        cell.setPhrase(new Phrase("Фото", font));
        table.addCell(cell);
        cell.setPhrase(new Phrase("ИИН", font));
        table.addCell(cell);
        cell.setPhrase(new Phrase("ФИО", font));
        table.addCell(cell);
        cell.setPhrase(new Phrase("Резидент", font));
        table.addCell(cell);
        cell.setPhrase(new Phrase("Национальность", font));
        table.addCell(cell);
        cell.setPhrase(new Phrase("Дата смерти", font));
        table.addCell(cell);

        table.addCell(Image.getInstance(result.getPhotoDbf().get(0).getPhoto()));
        table.addCell(result.getMvFls().get(0).getIin());
        table.addCell(result.getMvFls().get(0).getLast_name() + "\n" + result.getMvFls().get(0).getFirst_name() + "\n" + result.getMvFls().get(0).getPatronymic());
        if (result.getMvFls().get(0).isIs_resident()) {
            table.addCell("ДА");
        } else {
            table.addCell("НЕТ");
        }
        table.addCell(result.getMvFls().get(0).getNationality_ru_name());
        if (result.getMvFls().get(0).getDeath_date()==null || result.getMvFls().get(0).getDeath_date()=="") {
            table.addCell("Отсутсвует");
        } else {
            table.addCell(result.getMvFls().get(0).getDeath_date());
        }
        document.add(table);
        List<reg_address_fl> addressFls = result.getRegAddressFls();
        if (addressFls.size()!=0 && addressFls != null) {

            PdfPTable addresses = new PdfPTable(5);
            addresses.setWidthPercentage(100f);
            addresses.setWidths(new float[] {1, 1, 1, 1, 1});
            addresses.setSpacingBefore(5);
            heading.setColspan(5);
            heading.setPhrase(new Phrase("Адресы прописки", font));
            addresses.addCell(heading);
            cell.setPhrase(new Phrase("Страна", font));
            table.addCell(cell);
            cell.setPhrase(new Phrase("Город", font));
            table.addCell(cell);
            cell.setPhrase(new Phrase("Улица, дом, квартира", font));
            table.addCell(cell);
            cell.setPhrase(new Phrase("Район", font));
            table.addCell(cell);
            cell.setPhrase(new Phrase("Дата регистрации", font));
            table.addCell(cell);
            for (reg_address_fl ar: addressFls) {
                addresses.addCell(ar.getCountry());
                addresses.addCell(ar.getDistrict());
                addresses.addCell(ar.getStreet() + ", " + ar.getBuilding() + ", " + ar.getApartment_number());
                addresses.addCell(ar.getRegion());
                addresses.addCell(ar.getReg_date());
            }
            document.add(addresses);
        }
        List<mv_iin_doc> docs = result.getMvIinDocs();
        if (docs.size() != 0 && docs != null) {
            PdfPTable docTable = new PdfPTable(5);
            docTable.setWidthPercentage(100f);
            docTable.setWidths(new float[] {1, 1, 1, 1, 1});
            docTable.setSpacingBefore(5);
            heading.setColspan(5);
            heading.setPhrase(new Phrase("Документы", font));
            docTable.addCell(heading);
            cell.setPhrase(new Phrase("Типа Документа", font));
            docTable.addCell(cell);
            cell.setPhrase(new Phrase("Орган выдачи", font));
            docTable.addCell(cell);
            cell.setPhrase(new Phrase("Дата выдачи", font));
            docTable.addCell(cell);
            cell.setPhrase(new Phrase("Срок до", font));
            docTable.addCell(cell);
            cell.setPhrase(new Phrase("Номер документа", font));
            docTable.addCell(cell);
            for (mv_iin_doc r: docs) {
                docTable.addCell(r.getDoc_type_ru_name());
                docTable.addCell(r.getIssue_organization_ru_name());
                docTable.addCell(r.getIssue_date().toString());
                docTable.addCell(r.getExpiry_date().toString());
                docTable.addCell(r.getDoc_type_ru_name());
            }
            document.add(docTable);
        }
        List<school> schools = result.getSchools();
        if (schools.size() != 0 && schools != null) {
            PdfPTable schoolTable = new PdfPTable(5);
            schoolTable.setWidthPercentage(100f);
            schoolTable.setWidths(new float[] {1, 1, 1, 1, 1});
            schoolTable.setSpacingBefore(5);
            heading.setColspan(5);
            heading.setPhrase(new Phrase("Школы", font));
            schoolTable.addCell(heading);
            cell.setPhrase(new Phrase("БИН", font));
            schoolTable.addCell(cell);
            cell.setPhrase(new Phrase("Название школы", font));
            schoolTable.addCell(cell);
            cell.setPhrase(new Phrase("Класс", font));
            schoolTable.addCell(cell);
            cell.setPhrase(new Phrase("Дата поступления", font));
            schoolTable.addCell(cell);
            cell.setPhrase(new Phrase("Дата окончания", font));
            schoolTable.addCell(cell);
            for (school r: schools) {
                schoolTable.addCell(r.getSchool_code());
                schoolTable.addCell(r.getSchool_name());
                schoolTable.addCell(r.getGrade());
                schoolTable.addCell(r.getStart_date().toString());
                schoolTable.addCell(r.getEnd_date().toString());
            }
            document.add(schoolTable);
        }
        List<universities> universities = result.getUniversities();
        if (universities.size()!=0 && universities != null) {
            PdfPTable uniTable = new PdfPTable(7);
            uniTable.setWidthPercentage(100f);
            uniTable.setWidths(new float[] {1, 1, 1, 1, 1, 1, 1});
            uniTable.setSpacingBefore(5);
            heading.setColspan(7);
            heading.setPhrase(new Phrase("Вузы", font));
            uniTable.addCell(heading);
            cell.setPhrase(new Phrase("БИН", font));
            uniTable.addCell(cell);
            cell.setPhrase(new Phrase("Название вуза", font));
            uniTable.addCell(cell);
            cell.setPhrase(new Phrase("Специализация", font));
            uniTable.addCell(cell);
            cell.setPhrase(new Phrase("Дата поступления", font));
            uniTable.addCell(cell);
            cell.setPhrase(new Phrase("Дата окончания", font));
            uniTable.addCell(cell);
            cell.setPhrase(new Phrase("Длительность обучения", font));
            uniTable.addCell(cell);
            cell.setPhrase(new Phrase("Курс", font));
            uniTable.addCell(cell);
            for (universities r: universities) {
                uniTable.addCell(r.getStudy_code());
                uniTable.addCell(r.getStudy_name());
                uniTable.addCell(r.getSpec_name());
                if (r.getStart_date() != null) {
                    uniTable.addCell(r.getStart_date().toString());
                } else {
                    uniTable.addCell("");
                }
                if (r.getEnd_date() != null) {
                    uniTable.addCell(r.getEnd_date().toString());
                } else {
                    uniTable.addCell("");
                }
                uniTable.addCell(r.getDuration());
                uniTable.addCell(r.getCourse());
            }
            document.add(uniTable);
        }


        document.close();
        return document;
    }

}
