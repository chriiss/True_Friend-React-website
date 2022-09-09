import Styles from "../../../styles/App.module.scss";
import DataJson from "../../../data/DataJson.json";

const SectionThree = () => {
    const dataSectionThree = DataJson.sectionThreeComponent;
    return(
        <section>
            <div className={`${Styles.margin_section} ${Styles.d_flex} ${Styles.sectionThree}`}>
                <div>
                    <h2 data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">{dataSectionThree.title} <br></br>{dataSectionThree.titleBis}</h2>
                    <h5 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className={Styles.uppercase}>{dataSectionThree.subTitle}</h5>
                </div>
            </div>
        </section>
    )
}

export default SectionThree;