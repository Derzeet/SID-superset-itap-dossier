package com.example.backend.tools;

import com.example.backend.modelsDossier.FL_PENSION_FINAL;
import com.example.backend.modelsDossier.NodesFL;
import com.example.backend.modelsDossier.mv_auto_fl;
import com.example.backend.photo.modelsPhot.*;
import com.example.backend.photo.repositoryPhot.fl_pension_MiniRepo;
import com.lowagie.text.*;
import com.lowagie.text.pdf.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.URL;
import java.sql.Date;
import java.sql.Time;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PdfGenerator {
    fl_pension_MiniRepo flPensionMiniRepo;
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

        List<mv_auto_fl> autos = result.getMvAutoFls();
        if (autos.size()!=0 && autos != null) {
            PdfPTable autoTable = new PdfPTable(10);
            autoTable.setWidthPercentage(100f);
            autoTable.setWidths(new float[] {0.4f, 1, 1, 1, 1, 1, 1, 1, 1, 1});
            autoTable.setSpacingBefore(5);
            heading.setColspan(10);
            heading.setPhrase(new Phrase("Транспорт", font));
            autoTable.addCell(heading);
            cell.setPhrase(new Phrase("№", font));
            autoTable.addCell(cell);
            cell.setPhrase(new Phrase("Статус", font));
            autoTable.addCell(cell);
            cell.setPhrase(new Phrase("Регистрационный номер", font));
            autoTable.addCell(cell);
            cell.setPhrase(new Phrase("Марка модель", font));
            autoTable.addCell(cell);
            cell.setPhrase(new Phrase("Дата выдачи свидетельства", font));
            autoTable.addCell(cell);
            cell.setPhrase(new Phrase("Дата снятия", font));
            autoTable.addCell(cell);
            cell.setPhrase(new Phrase("Год выпуска", font));
            autoTable.addCell(cell);
            cell.setPhrase(new Phrase("Категория", font));
            autoTable.addCell(cell);
            cell.setPhrase(new Phrase("VIN/Кузов/Шосси", font));
            autoTable.addCell(cell);
            cell.setPhrase(new Phrase("Серия", font));
            autoTable.addCell(cell);
            int number = 1;
            for (mv_auto_fl r: autos) {
                autoTable.addCell(number+"");
                SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
                try {
                    if (formatter.format(r.getEnd_date()).compareTo(formatter.format(java.time.LocalDate.now())) > 0) {
                        autoTable.addCell("Действителен");
                    } else {
                        autoTable.addCell("Не действителен");
                    }
                } catch (Exception e){
                    autoTable.addCell("");
                }
                autoTable.addCell(r.getReg_number());
                autoTable.addCell(r.getBrand_model());
                if (r.getDate_certificate() != null) {
                    autoTable.addCell(r.getDate_certificate().toString());
                } else {
                    autoTable.addCell("");
                }
                if (r.getEnd_date() != null) {
                    autoTable.addCell(r.getEnd_date().toString());
                } else {
                    autoTable.addCell("");
                }
                autoTable.addCell(r.getRelease_year_tc());
                autoTable.addCell(r.getOwner_category());
                autoTable.addCell(r.getVin_kuzov_shassi());
                autoTable.addCell(r.getSeries_reg_number());
                number++;
            }
            document.add(autoTable);
        }
        List<FL_PENSION_FINAL> pensions = result.getFlPensionContrs();
        for (FL_PENSION_FINAL r: pensions) {
            System.out.println(r.getCompanyBin());
            for (Map<String, Object> e: r.getNakoplenya()) {
                System.out.println(e);
            }
        }
        List<convicts_justified> convictsJustifieds = result.getConvictsJustifieds();
        if (convictsJustifieds.size() != 0 && convictsJustifieds != null) {
            PdfPTable convicts = new PdfPTable(6);
            convicts.setWidthPercentage(100f);
            convicts.setWidths(new float[] {0.4f, 1, 1, 1, 1, 1});
            convicts.setSpacingBefore(5);
            heading.setColspan(6);
            heading.setPhrase(new Phrase("Наименование риска: \"Осужденные\" Количество найденных инф: " + convictsJustifieds.size(), font));
            convicts.addCell(heading);
            cell.setPhrase(new Phrase("№", font));
            convicts.addCell(cell);
            cell.setPhrase(new Phrase("Дата рассмотрения в суде 1 инстанции", font));
            convicts.addCell(cell);
            cell.setPhrase(new Phrase("Суд 1 инстанции", font));
            convicts.addCell(cell);
            cell.setPhrase(new Phrase("Решение по лицу", font));
            convicts.addCell(cell);
            cell.setPhrase(new Phrase("Мера наказания по договору", font));
            convicts.addCell(cell);
            cell.setPhrase(new Phrase("Квалификация", font));
            convicts.addCell(cell);
            int number = 1;
            for (convicts_justified r: convictsJustifieds) {
                convicts.addCell(number+"");
                convicts.addCell(r.getReg_date());
                convicts.addCell(r.getCourt_of_first_instance());
                if (r.getDecision_on_person() != null) {
                    convicts.addCell(r.getDecision_on_person());
                } else {
                    convicts.addCell("");
                }
                if (r.getMeasure_punishment() != null) {
                    convicts.addCell(r.getMeasure_punishment());
                } else {
                    convicts.addCell("");
                }
                convicts.addCell(r.getQualification());
                number++;
            }
            document.add(convicts);
        }
        List<fl_relatives> fl_relatives = result.getFl_relatives();
        if (fl_relatives.size()!=0 && fl_relatives != null) {
            PdfPTable relatives = new PdfPTable(7);
            relatives.setWidthPercentage(100f);
            relatives.setWidths(new float[] {0.4f, 1, 1, 1, 1, 1, 1});
            relatives.setSpacingBefore(5);
            heading.setColspan(7);
            heading.setPhrase(new Phrase("Родственные связи", font));
            relatives.addCell(heading);
            cell.setPhrase(new Phrase("№", font));
            relatives.addCell(cell);
            cell.setPhrase(new Phrase("Статус по отношению к родственнику", font));
            relatives.addCell(cell);
            cell.setPhrase(new Phrase("ФИО", font));
            relatives.addCell(cell);
            cell.setPhrase(new Phrase("ИИН", font));
            relatives.addCell(cell);
            cell.setPhrase(new Phrase("Дата рождения", font));
            relatives.addCell(cell);
            cell.setPhrase(new Phrase("Дата регистрации брака", font));
            relatives.addCell(cell);
            cell.setPhrase(new Phrase("Дата расторжения брака", font));
            relatives.addCell(cell);
            int number = 1;
            for (fl_relatives r: fl_relatives) {
                relatives.addCell(number+"");
                relatives.addCell(r.getRelative_type());
                relatives.addCell(r.getParent_fio());
                if (r.getParent_iin() != null) {
                    relatives.addCell(r.getParent_iin());
                } else {
                    relatives.addCell("");
                }
                if (r.getParent_birth_date() != null) {
                    relatives.addCell(r.getParent_birth_date().substring(0, 11));
                } else {
                    relatives.addCell("");
                }
                relatives.addCell(r.getMarriage_reg_date());
                relatives.addCell(r.getMarriage_divorce_date());
                number++;
            }
            document.add(relatives);
        }


        document.close();
        return document;
    }

}
