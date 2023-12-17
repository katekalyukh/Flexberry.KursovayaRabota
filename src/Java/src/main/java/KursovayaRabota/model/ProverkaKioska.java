package KursovayaRabota.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KursovayaRabota.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ПроверкаКиоска
 */
@Entity(name = "IISKursovayaRabotaПроверкаКиоска")
@Table(schema = "public", name = "ПроверкаКиоска")
public class ProverkaKioska {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КартЗаправ")
    private Boolean картзаправ;

    @Column(name = "Бумага")
    private Boolean бумага;

    @Column(name = "ДатаПроверки")
    private Date датапроверки;

    @Column(name = "ВремяПроверки")
    private String времяпроверки;

    @Column(name = "ГотовКРаботе")
    private Boolean готовкработе;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Operator")
    @Convert("Operator")
    @Column(name = "Оператор", length = 16, unique = true, nullable = false)
    private UUID _operatorid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Operator", insertable = false, updatable = false)
    private Operator operator;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Fotokiosk")
    @Convert("Fotokiosk")
    @Column(name = "Фотокиоск", length = 16, unique = true, nullable = false)
    private UUID _fotokioskid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Fotokiosk", insertable = false, updatable = false)
    private Fotokiosk fotokiosk;


    public ProverkaKioska() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Boolean getКартЗаправ() {
      return картзаправ;
    }

    public void setКартЗаправ(Boolean картзаправ) {
      this.картзаправ = картзаправ;
    }

    public Boolean getБумага() {
      return бумага;
    }

    public void setБумага(Boolean бумага) {
      this.бумага = бумага;
    }

    public Date getДатаПроверки() {
      return датапроверки;
    }

    public void setДатаПроверки(Date датапроверки) {
      this.датапроверки = датапроверки;
    }

    public String getВремяПроверки() {
      return времяпроверки;
    }

    public void setВремяПроверки(String времяпроверки) {
      this.времяпроверки = времяпроверки;
    }

    public Boolean getГотовКРаботе() {
      return готовкработе;
    }

    public void setГотовКРаботе(Boolean готовкработе) {
      this.готовкработе = готовкработе;
    }


}