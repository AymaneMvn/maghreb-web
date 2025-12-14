import React from 'react';

export default function About() {
  return (
    <div className="tp-about-area pt-120 pb-110 p-relative z-index-1">
      <span className="tp-about-sa-shape3 d-none d-sm-inline-block">
        <svg width="388" height="328" viewBox="0 0 388 328" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_507_6" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="388" height="328">
            <rect x="0.5" y="0.5" width="387" height="327" fill="#D9D9D9" stroke="black" />
          </mask>
          <g mask="url(#mask0_507_6)">
            <path d="M-4.77832 60C-192.526 60 -344.753 212.245 -344.753 400.083C-344.753 587.921 -192.526 740.165 -4.77832 740.165C182.969 740.165 335.196 587.92 335.196 400.083C335.196 212.245 182.969 60 -4.77832 60Z" stroke="#F0F0F0" strokeWidth="120" />
          </g>
        </svg>
      </span>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-10 col-md-10">
            <div className="tp-about-wd-title-wrap mb-50">
              <h2 className="tp-about-wd-title fs-50 fs-sm-35 lh-120-per tp_text_invert invert-black-2">We adapt to market changes, ensuring your startup stays ahead.</h2>
            </div>
            <div className="tp-about-wd-para-wrap mb-35">
              <div className="row">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                  <div className="tp-about-wd-para mb-30 tp_fade_anim" data-delay=".3">
                    <p className="fs-18">We’re a team of passionate designers, developers, and strategists dedicated to creating stunning, functional websites that align with your unique business goals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-2 col-md-2">
            <div className="tp-about-wd-shape tp-about-sa-shape tp_fade_anim" data-delay=".4" data-fade-from="top" data-ease="bounce">
              <span className="shape-1 d-inline-block mr-10">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 40C0 17.9086 17.9086 0 40 0V40H0Z" fill="#7D5DFF" />
                </svg>
              </span>
              <span className="shape-1 mb-15" data-speed=".9">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 40C40 17.9086 22.0914 0 0 0V40H40Z" fill="#030303" />
                </svg>
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="tp-about-wd-thumb-wrap fix mb-30">
              <img data-speed=".9" className="my-img" src="/assets/img/about/sa/thumb.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="tp-rounded-btn-wrap tp-about-sa-btn tp-rounded-btn-wd mb-30">
              <div className="tp-about-expreance d-flex align-items-end mb-55 tp_fade_anim" data-delay=".5">
                <h2 className="fw-500 fs-100 p-relative d-inline-block mb-0 lh-1">100 <span className="plus fs-25">%</span></h2>
                <span className="fs-18 fw-500 lh-22 tp-text-common-black mb-15 ml-35">Dedicated<br /> Team</span>
              </div>
              <div className="btn_wrapper d-inline-block tp_fade_anim" data-delay=".6" data-fade-from="top" data-ease="bounce">
                <a href="#" className="tp-btn-rounded tp-ff-teko btn-item">
                  <span className="d-block mb-10">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.3791 3.0269C14.6431 2.80336 18.8916 1.42595 21.9998 0C20.5732 3.10763 19.1953 7.35556 18.9723 10.6196L16.8276 6.04382L1.05193 21.82C0.936264 21.9354 0.779526 22.0001 0.616152 22C0.494263 22 0.375118 21.9638 0.273781 21.8961C0.172441 21.8284 0.0934544 21.7321 0.046814 21.6195C0.000171661 21.5069 -0.0120335 21.383 0.0117397 21.2634C0.035511 21.1439 0.0941944 21.034 0.18037 20.9478L15.956 5.17221L11.3791 3.0269Z" fill="currentColor" />
                    </svg>
                  </span>
                  About more<br /> Maghreb Web
                  <i className="tp-btn-circle-dot"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8">
            <div className="tp-about-wd-thumb2 tp-about-sa-thumb2 p-relative mb-30">
              <div className="tp-about-wd-thumb3 z-index-1">
                <img className="myimg" src="/assets/img/about/sa/thumb-3.jpg" alt="" />
              </div>
              <div className="tp-about-wd-thumb4" data-speed=".9">
                <img className="myimg" src="/assets/img/about/sa/thumb-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
