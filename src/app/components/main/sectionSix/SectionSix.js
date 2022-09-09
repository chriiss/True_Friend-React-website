import Styles from "../../../styles/App.module.scss";
import DataJson from "../../../data/DataJson.json";

const SectionSix = () => {
    const dataSectionSix = DataJson.sectionSixComponent;
    const dataGlobal = DataJson.global;
    return(
        <section data-aos="fade-up" data-aos-offset="800" className={`${Styles.sectionBis}`}>
            <div className={`${Styles.d_flex} ${Styles.fd_column} ${Styles.sectionSix}`}>
                <div className={`${Styles.d_flex} ${Styles.sectionSix_blocText}`}>
                    <div className={Styles.sectionSix_blocText_title}>
                        <h2>{dataSectionSix.title.primary}</h2>
                        <h5 className={Styles.uppercase}>{dataSectionSix.title.secondary}</h5>
                    </div>
                    <div className={Styles.sectionSix_blocText_text}>
                        <p>{dataSectionSix.text.primary}</p>
                    </div>
                    <button type="button" className={Styles.uppercase}>{dataSectionSix.text.button}</button>
                </div>
                <div className={`${Styles.d_flex} ${Styles.sectionSix_blocImg}`}>
                    <img src="https://thumbs.dreamstime.com/b/lapin-avec-des-halt%C3%A8res-isol%C3%A9s-sur-un-blanc-isol%C3%A9-fond-194708579.jpg" alt ="bunny musculation"/>
                </div>
            </div>
            <div className={Styles.sectionSix_sn}>
                <div className={Styles.sectionSix_sn_text}>
                <p>{dataSectionSix.text.secondary}</p>
                </div>
                <div className={`${Styles.d_flex} ${Styles.sectionSix_sn_sn}`}>
                    {dataGlobal.snIcon.map((data, index) => {
                        return(
                            <img key={index} src={data.link} alt={data.name}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default SectionSix;