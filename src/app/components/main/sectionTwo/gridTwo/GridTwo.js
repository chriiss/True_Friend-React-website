import Styles from "../../../../styles/App.module.scss";
import DataJson from "../../../../data/DataJson.json";

const GridTwo = () => {
    const gridTwo = DataJson.sectionTwoComponent.gridTwo;
    return(
        <>
            <div data-aos="zoom-in" data-aos-duration="800">
                <div className={`${Styles.d_flex} ${Styles.sectionTwo_row_img}`}>
                    <img className={Styles.icon} src={gridTwo.cardOne.icon.link} alt={gridTwo.cardOne.icon.name}/>
                </div>
                <div>
                    {gridTwo.cardOne.text}
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="950" className={Styles.imgHoverZoom}>
                <img className={Styles.img} src={gridTwo.cardTwo.img.link} alt={gridTwo.cardTwo.img.name}/>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1100">
                <div className={`${Styles.d_flex} ${Styles.sectionTwo_row_img}`}>
                    <img className={Styles.icon} src={gridTwo.cardThree.icon.link} alt={gridTwo.cardThree.icon.name} />
                </div>
                <div>
                    {gridTwo.cardThree.text}
                </div>
            </div>
        </>
    )
}

export default GridTwo;