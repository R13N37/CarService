import Slider from "react-slick";
import classes from "./Slider.module.scss";

const SliderView = () => {
  var settings = {
    autoplay: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={classes["slider"]}>
      <Slider {...settings}>
        <div className={classes["sliderItem1"]}>
          <div className={classes["content"]}>
            <div className={classes["smallTitle"]}>Offer Fast</div>
            <div className={classes["title"]}>Reliable Service</div>
            <div className={classes["description"]}>
              Over 35 Years Of Quality Auto Service
            </div>
            <div className={classes["button"]}>SCHEDULE SERVICE</div>
          </div>
        </div>
        <div className={classes["sliderItem2"]}>
          <div className={classes["content"]}>
            <div className={classes["smallTitle"]}>Offer Fast</div>
            <div className={classes["title"]}>Reliable Service</div>
            <div className={classes["description"]}>
              Over 35 Years Of Quality Auto Service
            </div>
            <div className={classes["button"]}>SCHEDULE SERVICE</div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderView;
