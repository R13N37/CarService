import { IFilterNavbar } from "./HeaderContent.model";
import { WiTime3 } from "react-icons/wi";
import { FiPhoneCall } from "react-icons/fi";
import { FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { CgArrowRightO } from "react-icons/cg";

import classes from "./HeaderContent.module.scss";
import NavBar from "../../components/Item/Item";
import logo from "../../Images/Logo/Logo.png";
import navItems from "./HeaderContent.map";
import Slider from "../../components/Slider/Slider";

const HeaderContentView = () => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["topBar"]}>
        <div className={classes["contactInfoContainer"]}>
          <div className={classes["contactInfo"]}>
            <WiTime3 className={classes["iconClock"]} /> Monday-Saturday 7:00AM
            - 6:00PM
          </div>
          <div className={classes["contactInfo"]}>
            <FiPhoneCall className={classes["icon"]} /> Schedule Your
            Appointment <a className={classes["phoneNumber"]}>+37367000000</a>
          </div>
          <div className={classes["contactInfo"]}>
            <FaMapMarkerAlt className={classes["icon"]} /> 2605 Caton Hill Road,
            Woodbridge, VA 221920
          </div>
        </div>
        <div className={classes["buttonContainer"]}>
          <div className={classes["figure"]}></div>
          <div className={classes["buttonTopBar"]}>
            <CgArrowRightO className={classes["buttonIcon"]} /> Appointment
          </div>
        </div>
      </div>
      <div className={classes["navigation"]}>
        <img className={classes["logo"]} src={logo} />
        <div className={classes["items"]}>
          {navItems.map((nav: IFilterNavbar) => {
            return <NavBar item={nav.item}></NavBar>;
          })}
        </div>
        <div className={classes["iconsWrapper"]}>
          <HiOutlineSearch className={classes["iconSearch"]} />
          <FaShoppingCart className={classes["iconCart"]} />
        </div>
      </div>
      <Slider></Slider>
    </div>
  );
};

export default HeaderContentView;
