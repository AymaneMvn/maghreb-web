import React from 'react';

const Awards = () => {
  return (
    <div className="tp-awards-area tp-bg-common-black p-relative z-index-1 pt-110 pb-90">
      <img className="tp-awards-bg-shape" src="/assets/img/awards/grid-shape.png" alt="" />
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="tp-awards-left mb-30">
              <span className="tp-section-subtitle tp-section-subtitle-white tp-ff-heading fw-500 tp-text-common-white fs-16 mb-180"><span className="borders d-inline-block"></span>Our Achievement</span>
              <h5 className="fs-25 fw-500 tp-text-common-white lh-36">Our relentless pursuit of<br /> innovation and excellence has<br /> earned us recognition from top<br /> industry leaders.</h5>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="tp-awards-right mb-30">
              <h3 className="fs-50 fw-500 fs-xl-40 fs-lg-35 tp-text-common-white lh-120-per mb-55 tp_text_invert tp_text_invert ">We believe in delivering exceptional digital experiences that make an impact.</h3>
              <div className="tp-awards-wrap">
                <div className="tp-awards-item-top mb-35">
                  <span className="fw-400 fs-22 fs-xs-18 tp-text-grey-2 mr-30">Award</span>
                  <span className="fw-400 fs-22 fs-xs-18 tp-text-grey-2 mr-30">Year</span>
                </div>
                <div className="tp-awards-item borders">
                  <img className="mr-30" src="/assets/img/awards/icon.png" alt="" />
                  <div>
                    <span className="fw-600 fs-22 fs-xs-18 tp-text-common-white mr-30">Awwwards</span>
                  </div>
                  <span className="fw-600 fs-22 fs-xs-18 tp-text-common-white mr-30">2025</span>
                </div>
                <div className="tp-awards-item borders">
                  <img className="mr-30" src="/assets/img/awards/icon-2.png" alt="" />
                  <span className="fw-600 fs-22 fs-xs-18 tp-text-common-white mr-30">CSS Design Awards</span>
                  <span className="fw-600 fs-22 fs-xs-18 tp-text-common-white mr-30">2024</span>
                </div>
                <div className="tp-awards-item">
                  <img className="mr-30" src="/assets/img/awards/icon-3.png" alt="" />
                  <span className="fw-600 fs-22 fs-xs-18 tp-text-common-white mr-30">Webby Awards</span>
                  <span className="fw-600 fs-22 fs-xs-18 tp-text-common-white mr-30">2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
