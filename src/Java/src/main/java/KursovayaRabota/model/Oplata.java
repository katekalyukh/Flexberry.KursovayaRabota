package KursovayaRabota.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KursovayaRabota.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Оплата
 */
@Entity(name = "IISKursovayaRabotaОплата")
@Table(schema = "public", name = "Оплата")
public class Oplata {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаОплаты")
    private Date датаоплаты;

    @Column(name = "ВремяОплаты")
    private String времяоплаты;

    @Column(name = "ВидОплаты")
    private String видоплаты;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PechatFoto")
    @Convert("PechatFoto")
    @Column(name = "ПечатьФото", length = 16, unique = true, nullable = false)
    private UUID _pechatfotoid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PechatFoto", insertable = false, updatable = false)
    private PechatFoto pechatfoto;


    public Oplata() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаОплаты() {
      return датаоплаты;
    }

    public void setДатаОплаты(Date датаоплаты) {
      this.датаоплаты = датаоплаты;
    }

    public String getВремяОплаты() {
      return времяоплаты;
    }

    public void setВремяОплаты(String времяоплаты) {
      this.времяоплаты = времяоплаты;
    }

    public String getВидОплаты() {
      return видоплаты;
    }

    public void setВидОплаты(String видоплаты) {
      this.видоплаты = видоплаты;
    }


}