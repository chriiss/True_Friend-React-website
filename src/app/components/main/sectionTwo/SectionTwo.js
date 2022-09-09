import Styles from "../../../styles/App.module.scss";
import GridOne from "./gridOne/GridOne";
import GridTwo from "./gridTwo/GridTwo";

const SectionTwo = () => {
    return(
        <section>
            <div className={`${Styles.margin_section} ${Styles.sectionTwo}`}>
                <div className={`${Styles.d_flex} ${Styles.fd_column} ${Styles.sectionTwo_row}`}>
                    <GridOne/>
                </div>
                <div className={`${Styles.d_flex} ${Styles.fd_column} ${Styles.sectionTwo_row}`}>
                    <GridTwo/>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo;