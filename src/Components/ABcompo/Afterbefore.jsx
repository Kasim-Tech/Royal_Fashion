import React from 'react';
import css from '../ABcompo/Afterbefore.module.css';
import shade from '../../assets/shade.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Before from '../../assets/before.png';
import ReactCompareImage from 'react-compare-image';
import After from '../../assets/after.png';

function Afterbefore() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className={css.vcantainer}>
            <div className={css.left}>
              <span>Try Our Jacket's</span>
              <span>Never Buy The Wrong Outfit Again!</span>
              <span>Try Now!</span>
              <img src={shade} id="shade" alt="shade_img" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className={css.right}>
                <div className={css.wrapper}>
                  <ReactCompareImage leftImage={Before} rightImage={After} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Afterbefore;
