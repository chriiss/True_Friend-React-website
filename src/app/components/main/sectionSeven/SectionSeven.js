import Styles from "../../../styles/App.module.scss";
import DataJson from "../../../data/DataJson.json";

const SectionSeven = () => {
    const dataSectionSeven = DataJson.sectionSevenComponent;
    return(
        <section>
            <div className={`${Styles.d_flex} ${Styles.sectionSeven}`}>
                <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className={Styles.sectionSeven_newsBloc}>
                    <h2>{dataSectionSeven.text.title}</h2>
                    <p>{dataSectionSeven.text.paragraph}</p>
                    <form action="/">
                        <input type="text" placeholder={dataSectionSeven.text.placeholder} required/>
                        <input className={Styles.uppercase} type="submit" value={dataSectionSeven.text.submit}/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SectionSeven;