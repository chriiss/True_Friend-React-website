import Styles from "../../../../styles/App.module.scss";
import DataJson from "../../../../data/DataJson.json";
import HeartIcon from "./heartIcon/HeartIcon";


const GridOne = () => {
    const gridOne = DataJson.sectionTwoComponent.gridOne;
    return(
        <>
            <div data-aos="zoom-in" data-aos-duration="800" className={`${Styles.d_flex} ${Styles.sectionTwo_row_bloc_one}`}>
                <div>
                    <h2>{gridOne.cardOne.title}</h2>
                    <HeartIcon/>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="950">
                <div className={`${Styles.d_flex} ${Styles.sectionTwo_row_img}`}>
                    <img className={Styles.icon} src={gridOne.cardTwo.icon.link} alt={gridOne.cardTwo.icon.name}/>
                </div>
                <div>
                    {gridOne.cardTwo.text}
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1100" className={Styles.imgHoverZoom}>
                <img className={Styles.img} src={gridOne.cardThree.img.link} alt={gridOne.cardThree.img.name}/>
            </div>
        </>
    )
}

export default GridOne;