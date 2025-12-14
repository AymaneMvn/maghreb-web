import React from 'react';

export default function Portfolio() {
  return (
    <div className="tp-portfolio-area portfolio__area pt-110 pb-135 p-relative">
      <img className="tp-portfolio-sa-shape" src="/assets/img/portfolio/sa/shape.png" alt="" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-portfolio-sa-title-wrap pb-70 d-lg-flex align-items-end justify-content-center text-center">
              <span className="fw-500 fs-35 text-uppercase mb-40 mr-35 tp-text-common-black d-inline-block text-end">
                <svg className="mb-30" width="110" height="12" viewBox="0 0 110 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="10" width="110" height="2" rx="1" fill="#030303" />
                  <rect x="60" width="50" height="2" rx="1" fill="#999999" />
                </svg>
                <span className="d-block">Selected</span>
              </span>
              <h2 className="tp-portfolio-sa-title text-uppercase portfolio__text tp-text-common-black">Work</h2>
              <span className="tp-ff-heading fw-500 fs-35 tp-text-grey-1 mb-40 ml-35">(2025)</span>
            </div>
          </div>
        </div>
        <div className="row gx-50 justify-content-center">
          <div className="col-lg-6">
            <div className="tp-portfolio-sa-item mb-50 not-hide-cursor portfolio__item" data-cursor="View<br>Demo">
              <div className="tp-portfolio-sa-thumb mb-25">
                <a href="#" className="cursor-hide">
                  <img className="w-100 mover" src="/assets/img/portfolio/sa/thumb.jpg" alt="" />
                </a>
              </div>
              <div className="tp-portfolio-sa-content">
                <h4 className="tp-portfolio-sa-item-title fs-25 lh-1 mb-15"><a className="underline-black" href="#">Aymane Jeddad Portfolio</a></h4>
                <span className="tp-portfolio-sa-item-tag fw-700 fs-16 tp-text-grey-1 tp-ff-heading tp-bg-common-white-2 d-inline-block">Personal Portfolio</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tp-rounded-btn-wrap mt-30 text-center tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
              <div className="btn_wrapper d-inline-block">
                <a href="#" className="tp-btn-rounded tp-ff-teko  btn-item">
                  <span className="d-block mb-10">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.3791 3.0269C14.6431 2.80336 18.8916 1.42595 21.9998 0C20.5732 3.10763 19.1953 7.35556 18.9723 10.6196L16.8276 6.04382L1.05193 21.82C0.936264 21.9354 0.779526 22.0001 0.616152 22C0.494263 22 0.375118 21.9638 0.273781 21.8961C0.172441 21.8284 0.0934544 21.7321 0.046814 21.6195C0.000171661 21.5069 -0.0120335 21.383 0.0117397 21.2634C0.035511 21.1439 0.0941944 21.034 0.18037 20.9478L15.956 5.17221L11.3791 3.0269Z" fill="currentColor" />
                    </svg>
                  </span>
                  View All<br /> Works
                  <i className="tp-btn-circle-dot"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
