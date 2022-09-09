import Styles from "../../../styles/App.module.scss";
import DataJson from "../../../data/DataJson.json";

const SectionOne = () => {
    const dataSectionOne = DataJson.sectionOneComponent.title;
    return(
        <section>
            <div className={`${Styles.backgroundSectionOne} ${Styles.uppercase} ${Styles.d_flex}`}>
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className={`${Styles.backgroundSectionOne_title}`}>
                    <h5>{dataSectionOne.sub}</h5>
                </div>
                <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className={`${Styles.backgroundSectionOne_title}`}>
                    <h1>{dataSectionOne.principal}</h1>
                </div>
            </div>
        </section>
    )
}

export default SectionOne;