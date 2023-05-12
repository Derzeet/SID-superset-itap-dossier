package com.example.backend.tools;

import com.example.backend.modelsDossier.FL_PENSION_FINAL;
import com.example.backend.modelsDossier.NodesFL;
import com.example.backend.modelsDossier.mv_auto_fl;
import com.example.backend.photo.modelsPhot.*;
import com.example.backend.photo.repositoryPhot.fl_pension_MiniRepo;
import com.example.backend.photo.repositoryPhot.mv_ul_repo;
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
    private mv_ul_repo mvUlRepo;
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

        // ОСНОВНАЯ ИНФА ОБ ФЛ
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
        // АДДРЕСА ФЛ
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
        // ДОКУМЕНТЫ ФЛ
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
        //ШКОЛЫ ФЛ
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
        //УНИВЕРСИТЕТЫ ФЛ
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
        //ТРАНСПОРТ ФЛ
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
                if (r != null) {
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
                    try {
                        autoTable.addCell(r.getReg_number());
                    } catch (Exception e) {
                        autoTable.addCell("");
                    }
                    try {
                        autoTable.addCell(r.getBrand_model());
                    } catch (Exception e) {
                        autoTable.addCell("");
                    }
                    try {
                        autoTable.addCell(r.getDate_certificate().toString());
                    } catch (Exception e) {
                        autoTable.addCell("");
                    }
                    try {
                        autoTable.addCell(r.getEnd_date().toString());
                    } catch (Exception e) {
                        autoTable.addCell("");
                    }
                    autoTable.addCell(r.getRelease_year_tc());
                    autoTable.addCell(r.getOwner_category());
                    autoTable.addCell(r.getVin_kuzov_shassi());
                    autoTable.addCell(r.getSeries_reg_number());
                    number++;
                }
            }
            document.add(autoTable);
        }
        //ПЕНСИОННЫЕ НАКОПЛЕНИЯ НЕДОДЕЛАННАЯ
        List<FL_PENSION_FINAL> pensions = result.getFlPensionContrs();
        for (FL_PENSION_FINAL r: pensions) {
            System.out.println(r.getCompanyBin());
            for (Map<String, Object> e: r.getNakoplenya()) {
                System.out.println(e);
            }
        }
        //РОДСТВЕННЫЕ СВЯЗИ
        List<fl_relatives> fl_relatives = result.getFl_relatives();
        if (fl_relatives.size()!=0 && fl_relatives != null) {
            PdfPTable relatives = new PdfPTable(7);
            relatives.setWidthPercentage(100f);
            relatives.setWidths(new float[] {0.15f, 1, 1, 1, 1, 1, 1});
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
                    relatives.addCell(r.getParent_birth_date().substring(0, 10));
                } else {
                    relatives.addCell("");
                }
                relatives.addCell(r.getMarriage_reg_date());
                relatives.addCell(r.getMarriage_divorce_date());
                number++;
            }
            document.add(relatives);
        }
        //КОНТАКТНЫЕ ДАННЫЕ ФЛ
        List<fl_contacts> contacts = result.getContacts();
        if (contacts.size()!= 0 && contacts != null) {
            PdfPTable contactsTable = new PdfPTable(4);
            contactsTable.setWidthPercentage(100f);
            contactsTable.setWidths(new float[] {0.15f, 1, 1, 1});
            contactsTable.setSpacingBefore(5);
            heading.setColspan(4);
            heading.setPhrase(new Phrase("Контактные данные ФЛ", font));
            contactsTable.addCell(heading);
            cell.setPhrase(new Phrase("№", font));
            contactsTable.addCell(cell);
            cell.setPhrase(new Phrase("Телефон", font));
            contactsTable.addCell(cell);
            cell.setPhrase(new Phrase("Почта", font));
            contactsTable.addCell(cell);
            cell.setPhrase(new Phrase("Источник", font));
            contactsTable.addCell(cell);
            int number = 1;
            for (fl_contacts r: contacts) {
                contactsTable.addCell(number+"");
                contactsTable.addCell(r.getPhone());
                contactsTable.addCell(r.getEmail());
                contactsTable.addCell(r.getSource());
                number++;
            }
            document.add(contactsTable);
        }
        //ВОЕННЫЙ УЧЕТ
        List<MillitaryAccount> millitaryAccounts = result.getMillitaryAccounts();
        if (millitaryAccounts.size() != 0 && millitaryAccounts != null) {
            PdfPTable MATable = new PdfPTable(4);
            MATable.setWidthPercentage(100f);
            MATable.setWidths(new float[] {0.4f, 1, 1, 1});
            MATable.setSpacingBefore(5);
            heading.setColspan(4);
            heading.setPhrase(new Phrase("Войнский учет", font));
            MATable.addCell(heading);
            cell.setPhrase(new Phrase("№", font));
            MATable.addCell(cell);
            cell.setPhrase(new Phrase("БИН воинской части", font));
            MATable.addCell(cell);
            cell.setPhrase(new Phrase("Дата службы с", font));
            MATable.addCell(cell);
            cell.setPhrase(new Phrase("Дата службы по", font));
            MATable.addCell(cell);
            int number = 1;
            for (MillitaryAccount r: millitaryAccounts) {
                MATable.addCell(number+"");
                MATable.addCell(r.getBin());
                MATable.addCell(r.getDate_start());
                MATable.addCell(r.getDate_end());
                number++;
            }
            document.add(MATable);
        }
        //ОПРАВДАННЫЕ ПРЕСТУПЛЕНИЯ
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
        //ЕЩЕ КАКИЕТО ПРЕСТУЛПЛЕНИЯ
        List<convicts_terminated_by_rehab> convictsTerminatedByRehabs = result.getConvictsTerminatedByRehabs();
        if (convictsTerminatedByRehabs.size()!=0 && convictsTerminatedByRehabs != null) {
            PdfPTable ctbrTable = new PdfPTable(6);
            ctbrTable.setWidthPercentage(100f);
            ctbrTable.setWidths(new float[] {0.4f, 1, 1, 1, 1, 1});
            ctbrTable.setSpacingBefore(5);
            heading.setColspan(6);
            heading.setPhrase(new Phrase("Административные штрафы", font));
            ctbrTable.addCell(heading);
            cell.setPhrase(new Phrase("№", font));
            ctbrTable.addCell(cell);
            cell.setPhrase(new Phrase("Орган выявивший правонарушение", font));
            ctbrTable.addCell(cell);
            cell.setPhrase(new Phrase("Дата заведения", font));
            ctbrTable.addCell(cell);
            cell.setPhrase(new Phrase("Квалификация", font));
            ctbrTable.addCell(cell);
            cell.setPhrase(new Phrase("Решение", font));
            ctbrTable.addCell(cell);
            cell.setPhrase(new Phrase("Уровень тяжести", font));
            ctbrTable.addCell(cell);
            int number = 1;
            for (convicts_terminated_by_rehab r: convictsTerminatedByRehabs) {
                ctbrTable.addCell(number+"");
                ctbrTable.addCell(r.getInvestigative_authority());
                ctbrTable.addCell(r.getLast_solution_date());
                ctbrTable.addCell(r.getQualification_desc());
                ctbrTable.addCell(r.getLast_solution());
                ctbrTable.addCell(r.getQualification_by_11());
                number++;
            }
            document.add(ctbrTable);
        }
        //БЛОКИРОВКА ЭСФ
        List<block_esf> blockEsfs = result.getBlockEsfs();
        if (blockEsfs.size()!=0 && blockEsfs != null) {
            PdfPTable blockesfTable = new PdfPTable(4);
            blockesfTable.setWidthPercentage(100f);
            blockesfTable.setWidths(new float[] {0.4f, 1, 1, 1, 1, 1});
            blockesfTable.setSpacingBefore(5);
            heading.setColspan(6);
            heading.setPhrase(new Phrase("Административные штрафы", font));
            blockesfTable.addCell(heading);
            cell.setPhrase(new Phrase("№", font));
            blockesfTable.addCell(cell);
            cell.setPhrase(new Phrase("Дата блокировки", font));
            blockesfTable.addCell(cell);
            cell.setPhrase(new Phrase("Дата востановления", font));
            blockesfTable.addCell(cell);
            cell.setPhrase(new Phrase("Дата обновления", font));
            blockesfTable.addCell(cell);
            int number = 1;
            for (block_esf r: blockEsfs) {
                blockesfTable.addCell(number+"");
                if (r.getStart_dt() != null) {
                    blockesfTable.addCell(r.getStart_dt().toString());
                } else {
                    blockesfTable.addCell("");
                }
                if (r.getEnd_dt() != null) {
                    blockesfTable.addCell(r.getEnd_dt().toString());
                } else {
                    blockesfTable.addCell("");
                }
                if (r.getUpdate_dt() != null) {
                    blockesfTable.addCell(r.getUpdate_dt().toString());
                } else {
                    blockesfTable.addCell("");
                }
                number++;
            }
            document.add(blockesfTable);
        }
        //СВЯЗИ С ЮЛ
        List<mv_ul_founder_fl> mvUlFounderFls = result.getMvUlFounderFls();
        if (mvUlFounderFls.size()!=0 && mvUlFounderFls!=null) {
            PdfPTable foundersTable = new PdfPTable(4);
            foundersTable.setWidthPercentage(100f);
            foundersTable.setWidths(new float[] {0.15f, 1, 1, 1});
            foundersTable.setSpacingBefore(5);
            heading.setColspan(4);
            heading.setPhrase(new Phrase("Сведения об участниках ЮЛ", font));
            foundersTable.addCell(heading);
            cell.setPhrase(new Phrase("№", font));
            foundersTable.addCell(cell);
            cell.setPhrase(new Phrase("БИН", font));
            foundersTable.addCell(cell);
            cell.setPhrase(new Phrase("Наименование ЮЛ", font));
            foundersTable.addCell(cell);
            cell.setPhrase(new Phrase("Дата регистрации", font));
            foundersTable.addCell(cell);
            int number = 1;
            for (mv_ul_founder_fl r: mvUlFounderFls) {
                foundersTable.addCell(number+"");
                if (r.getBin_org() != null) {
                    foundersTable.addCell(r.getBin_org());
                } else {
                    foundersTable.addCell("");
                }
                try {
                    foundersTable.addCell(mvUlRepo.getNameByBin(r.getBin_org()));
                } catch (Exception e){
                    foundersTable.addCell("");
                }
                if (r.getReg_date() != null) {
                    foundersTable.addCell(r.getReg_date().toString());
                } else {
                    foundersTable.addCell("");
                }
                number++;
            }
            document.add(foundersTable);
        }
        //НДС
        List<NdsEntity> ndsEntities = result.getNdsEntities();
        if (ndsEntities.size()!=0 && ndsEntities != null) {
            PdfPTable ndsTable = new PdfPTable(5);
            ndsTable.setWidthPercentage(100f);
            ndsTable.setWidths(new float[] {0.15f, 1, 1, 1, 1});
            ndsTable.setSpacingBefore(5);
            heading.setColspan(5);
            heading.setPhrase(new Phrase("НДС", font));
            ndsTable.addCell(heading);
            cell.setPhrase(new Phrase("№", font));
            ndsTable.addCell(cell);
            cell.setPhrase(new Phrase("Дата начала", font));
            ndsTable.addCell(cell);
            cell.setPhrase(new Phrase("Дата конца", font));
            ndsTable.addCell(cell);
            cell.setPhrase(new Phrase("Дата обновления", font));
            ndsTable.addCell(cell);
            cell.setPhrase(new Phrase("Причина", font));
            ndsTable.addCell(cell);
            int number = 1;
            for (NdsEntity r: ndsEntities) {
                ndsTable.addCell(number+"");
                if (r.getStartDt() != null) {
                    ndsTable.addCell(r.getStartDt().toString());
                } else {
                    ndsTable.addCell("");
                }
                try {
                    ndsTable.addCell(r.getEndDt().toString());
                } catch (Exception e){
                    ndsTable.addCell("");
                }
                if (r.getUpdateDt() != null) {
                    ndsTable.addCell(r.getUpdateDt().toString());
                } else {
                    ndsTable.addCell("");
                }
                try {
                    ndsTable.addCell(r.getReason());
                } catch (Exception e){
                    ndsTable.addCell("");
                }
                number++;
            }
            document.add(ndsTable);
        }
        //СВЕДЕНИЯ ИПГО
        List<IpgoEmailEntity> ipgoEmailEntities = result.getIpgoEmailEntities();
        if (ipgoEmailEntities.size() != 0 && ipgoEmailEntities != null) {
            PdfPTable ipgoTable = new PdfPTable(4);
            ipgoTable.setWidthPercentage(100f);
            ipgoTable.setWidths(new float[] {0.15f, 1, 1, 1});
            ipgoTable.setSpacingBefore(5);
            heading.setColspan(4);
            heading.setPhrase(new Phrase("Сведения по ИПГО", font));
            ipgoTable.addCell(heading);
            cell.setPhrase(new Phrase("№", font));
            ipgoTable.addCell(cell);
            cell.setPhrase(new Phrase("Департамент", font));
            ipgoTable.addCell(cell);
            cell.setPhrase(new Phrase("Должность", font));
            ipgoTable.addCell(cell);
            cell.setPhrase(new Phrase("ИПГО почта", font));
            ipgoTable.addCell(cell);
            int number = 1;
            for (IpgoEmailEntity r: ipgoEmailEntities) {
                ipgoTable.addCell(number+"");
                if (r.getOrgan() != null) {
                    ipgoTable.addCell(r.getOrgan().toString());
                } else {
                    ipgoTable.addCell("");
                }
                try {
                    ipgoTable.addCell(r.getPosition());
                } catch (Exception e){
                    ipgoTable.addCell("");
                }
                if (r.getEmail() != null) {
                    ipgoTable.addCell(r.getEmail().toString());
                } else {
                    ipgoTable.addCell("");
                }
                number++;
            }
            document.add(ipgoTable);
        }

        document.close();
        return document;
    }

}
