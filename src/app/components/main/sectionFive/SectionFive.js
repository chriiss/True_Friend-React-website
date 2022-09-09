import Styles from "../../../styles/App.module.scss";
import DataJson from "../../../data/DataJson.json";

const SectionFive = () => {
    const dataSectionFive = DataJson.sectionFiveComponent;
    const dataGlobal = DataJson.global;
    return(
        <section data-aos="fade-down" data-aos-offset="800">
            <div data-aos-easing="ease-in-sine" className={`${Styles.margin_section} ${Styles.d_flex} ${Styles.fd_column} ${Styles.sectionFive}`}>
                <div className={Styles.sectionFive_textBloc}>
                    <h5 className={Styles.uppercase}>{dataSectionFive.title.primary}</h5>
                    <h2>{dataSectionFive.title.secondary}</h2>
                </div>
                <div className={Styles.sectionFive_imgBloc}>
                    <div className={Styles.imgHoverZoom}>
                        <img className={Styles.img} src={dataSectionFive.img.link} alt={dataSectionFive.img.name} />
                    </div>
                </div>
                <div data-aos-easing="ease-in-sine" className={`${Styles.d_flex} ${Styles.sectionFive_textBloc}`}>
                    <div>
                        <p>{dataSectionFive.text}</p>
                    </div>
                    <div className={`${Styles.d_flex} ${Styles.sectionFive_snBloc}`}>
                        {dataGlobal.snIcon.map((data, index) => {
                            return(
                                <img key={index} src={data.link} alt={data.name}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionFive;