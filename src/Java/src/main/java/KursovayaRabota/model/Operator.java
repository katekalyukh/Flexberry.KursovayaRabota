package KursovayaRabota.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KursovayaRabota.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Оператор
 */
@Entity(name = "IISKursovayaRabotaОператор")
@Table(schema = "public", name = "Оператор")
public class Operator {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "СерияПаспорта")
    private Integer серияпаспорта;

    @Column(name = "НомерПаспорта")
    private Integer номерпаспорта;

    @Column(name = "КодВхода")
    private Integer кодвхода;


    public Operator() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Integer getСерияПаспорта() {
      return серияпаспорта;
    }

    public void setСерияПаспорта(Integer серияпаспорта) {
      this.серияпаспорта = серияпаспорта;
    }

    public Integer getНомерПаспорта() {
      return номерпаспорта;
    }

    public void setНомерПаспорта(Integer номерпаспорта) {
      this.номерпаспорта = номерпаспорта;
    }

    public Integer getКодВхода() {
      return кодвхода;
    }

    public void setКодВхода(Integer кодвхода) {
      this.кодвхода = кодвхода;
    }


}