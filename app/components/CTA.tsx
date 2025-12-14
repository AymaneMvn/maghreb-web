import React from 'react';

export default function CTA() {
  return (
    <div className="tp-cta-area bg-position p-relative pb-80 pt-100 tp-bg-common-white-2 fix" style={{backgroundImage: 'url(/assets/img/awards/grid-shape.png)'}}>
      <div className="tp-cta-wd-shape">
        <svg viewBox="0 0 733 448" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="line-1" d="M31.5 466.5L259 55.5L456 222L772.5 34" stroke="white" strokeWidth="71" />
        </svg>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="tp-cta-wd-content text-center p-relative mb-30">
              <span className="tp-footer-top-subtitle tp-text-common-black fw-500 fs-18 mb-10 d-inline-block tp_fade_anim" data-delay=".3">Get’s Started a Projects?</span>
              <h2 className="tp-footer-top-title tp-text-common-black text-uppercase fw-600 mb-40 rotate-text-anim">Let’s Talk</h2>
              <div className="tp_fade_anim" data-delay=".5">
                <a className="tp-cta-wd-email d-inline-block fs-35 fs-xs-25 fw-600 tp-text-common-white" href="#">infoexample@gmail.com</a>
              </div>
              <div className="tp-rounded-btn-wrap tp-cta-sa-btn text-lg-end mb-30 tp_fade_anim" data-delay=".7" data-fade-from="top" data-ease="bounce">
                <div className="btn_wrapper d-inline-block">
                  <a href="#" className="tp-btn-rounded btn-item">
                    <span className="d-block mb-10">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.3791 3.0269C14.6431 2.80336 18.8916 1.42595 21.9998 0C20.5732 3.10763 19.1953 7.35556 18.9723 10.6196L16.8276 6.04382L1.05193 21.82C0.936264 21.9354 0.779526 22.0001 0.616152 22C0.494263 22 0.375118 21.9638 0.273781 21.8961C0.172441 21.8284 0.0934544 21.7321 0.046814 21.6195C0.000171661 21.5069 -0.0120335 21.383 0.0117397 21.2634C0.035511 21.1439 0.0941944 21.034 0.18037 20.9478L15.956 5.17221L11.3791 3.0269Z" fill="currentColor" />
                      </svg>
                    </span>
                    Start the Journey
                    <i className="tp-btn-circle-dot"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
