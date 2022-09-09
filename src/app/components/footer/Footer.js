import Styles from "../../styles/App.module.scss";
import DataJson from "../../data/DataJson.json";
import CopyrightIcon from "./copyrightIcon/CopyrightIcon";

const Footer = () => {
    const dataFooter = DataJson.footerComponent;
    return(
        <div className={`${Styles.d_flex} ${Styles.footer}`}>
            <p><CopyrightIcon/> {dataFooter.copyright.text}</p>
        </div>
    )
}

export default Footer;