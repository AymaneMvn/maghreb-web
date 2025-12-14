import React from 'react';

export default function Blog() {
  return (
    <div className="tp-blog-area tp-blog-sa-border tp-fixed-title-wrap pb-75 pt-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="tp-blog-sa-title-wrap mb-40 tp-fixed-title">
              <h2 className="fs-70 fs-xs-45 lh-1 mb-30 tp_fade_anim" data-delay=".3">News & Insight</h2>
              <div className="tp_fade_anim" data-delay=".5">
                <p className="fs-18 tp-text-grey-1">Strategists dedicated to creating stunning, functional websites<br /> that align with your unique business goals.</p>
              </div>
              <div className="tp-rounded-btn-wrap tp-blog-sa-btn ml-110 tp-about-wd-btn tp-rounded-btn-wd mt-75 tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                <div className="btn_wrapper d-inline-block">
                  <a href="blog-grid-light.html" className="tp-btn-rounded tp-ff-teko  btn-item">
                    <span className="d-block mb-10">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.3791 3.0269C14.6431 2.80336 18.8916 1.42595 21.9998 0C20.5732 3.10763 19.1953 7.35556 18.9723 10.6196L16.8276 6.04382L1.05193 21.82C0.936264 21.9354 0.779526 22.0001 0.616152 22C0.494263 22 0.375118 21.9638 0.273781 21.8961C0.172441 21.8284 0.0934544 21.7321 0.046814 21.6195C0.000171661 21.5069 -0.0120335 21.383 0.0117397 21.2634C0.035511 21.1439 0.0941944 21.034 0.18037 20.9478L15.956 5.17221L11.3791 3.0269Z" fill="currentColor" />
                      </svg>
                    </span>
                    View All<br /> Insights
                    <i className="tp-btn-circle-dot"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="tp-blog-item tp--hover-item mb-60">
              <div className="tp-blog-thumb tp--hover-img mb-35  p-relative" data-displacement="assets/img/blog/sa/bg.jpg" data-intensity="0.6" data-speedin="1" data-speedout="1">
                <img className="w-100" src="/assets/img/blog/sa/bg.jpg" alt="" />
              </div>
              <div className="tp-blog-content text-center">
                <div className="tp-blog-meta mb-20">
                  <span>Web Design</span>
                  <span className="borders"></span>
                  <span>02 Feb, 2025</span>
                </div>
                <h3 className="fs-25 fw-500"><a className="underline-black" href="portfolio-details-light.html">Mastering customer <br />
                  journeys with marketing funnel<br /> analytics.</a></h3>
              </div>
            </div>
            <div className="tp-blog-item tp--hover-item mb-60">
              <div className="tp-blog-thumb tp--hover-img mb-35  p-relative" data-displacement="assets/img/blog/sa/bg-2.jpg" data-intensity="0.6" data-speedin="1" data-speedout="1">
                <img className="w-100" src="/assets/img/blog/sa/bg-2.jpg" alt="" />
              </div>
              <div className="tp-blog-content text-center">
                <div className="tp-blog-meta mb-20">
                  <span>Web Design</span>
                  <span className="borders"></span>
                  <span>02 Feb, 2025</span>
                </div>
                <h3 className="fs-25 fw-500"><a className="underline-black" href="blog-details-dark.html">How to Conduct<br /> Effective 
                  User Research for Better<br /> Product Decisions</a></h3>
              </div>
            </div>
            <div className="tp-blog-item tp--hover-item mb-60">
              <div className="tp-blog-thumb tp--hover-img mb-35  p-relative" data-displacement="assets/img/blog/sa/bg-2.jpg" data-intensity="0.6" data-speedin="1" data-speedout="1">
                <img className="w-100" src="/assets/img/blog/sa/bg-3.jpg" alt="" />
              </div>
              <div className="tp-blog-content text-center">
                <div className="tp-blog-meta mb-20">
                  <span>Web Design</span>
                  <span className="borders"></span>
                  <span>02 Feb, 2025</span>
                </div>
                <h3 className="fs-25 fw-500"><a className="underline-black" href="portfolio-details-light.html">Mastering customer <br />
                  journeys with marketing funnel<br /> analytics.</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
