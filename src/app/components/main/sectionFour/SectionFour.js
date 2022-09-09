import Styles from "../../../styles/App.module.scss";
import DataJson from "../../../data/DataJson.json";
import CarouselBullets from "./carouselBullets/CarouselBullets";

const SectionFour = () => {
    const dataSectionFour = DataJson.sectionFourComponent;
    return(
        <section className={Styles.section}>
            <div className={`${Styles.d_flex}  ${Styles.fd_column} ${Styles.sectionFour}`}>
                <div data-aos="zoom-in" data-aos-duration="800" className={Styles.sectionFour_textBloc}>
                    <h5 className={Styles.uppercase}>{dataSectionFour.title.primary}</h5>
                    <h2>{dataSectionFour.title.secondary}</h2>
                    <p>{dataSectionFour.text}</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="950" className={`${Styles.sectionFour_imgContainer} ${Styles.d_flex}`}>
                    {dataSectionFour.imgCarousel.map((data, index) => {
                        return(
                            <div key={index} className={Styles.sectionFour_imgContainer_bloc}>
                                <div>
                                    <img id={data.id} src={data.link} alt={data.name}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div data-aos="zoom-in" data-aos-duration="1100" className={`${Styles.sectionFour_page}`}>
                    {dataSectionFour.page.map((data, index) => {
                        return(
                            <div key={index}><a href={data.anchor}><CarouselBullets/></a></div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default SectionFour;