import Styles from "../../../../styles/App.module.scss";
import IconMenu from './iconMenu/IconMenu';

const ButtonMenu = (props) => {
    const { toggleMenu } = props;
    return(
        <>
            <button type="button" onClick={toggleMenu} className={Styles.navbar_menu_mobile_button}><IconMenu/></button>
        </>
    )
}

export default ButtonMenu;