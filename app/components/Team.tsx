import React from 'react';

export default function Team() {
  return (
    <div className="tp-team-area pt-110 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-3 col-md-3 d-none d-md-block">
            <div className="tp-about-wd-shape tp-team-sa-shape tp-about-sa-shape">
              <span className="shape-1 d-inline-block mr-10" data-speed=".9">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 40C0 17.9086 17.9086 0 40 0V40H0Z" fill="#7D5DFF" />
                </svg>
              </span>
              <span className="shape-1 mb-15">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 40C40 17.9086 22.0914 0 0 0V40H40Z" fill="#030303" />
                </svg>
              </span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8 col-md-9">
            <div className="tp-team-sa-title-wrap">
              <h2 className="tp-team-sa-title mb-25 tp_fade_anim" data-delay=".3">Team</h2>
              <div className="tp-service-2-para tp-techonolgy-para tp-team-sa-para tp_fade_anim" data-delay=".5">
                <p className="fs-18">We’re a team of experienced startup strategists, designers, marketers, and growth hackers committed to helping founders turn ideas into high-growth businesses.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="tp-team-sa-item mb-90" data-speed=".9">
              <div className="tp-team-sa-thumb mb-20 tp--hover-item p-relative">
                <div className="tp--hover-img" data-displacement="assets/img/team/thumb.jpg" data-intensity="0.6" data-speedin="1" data-speedout="1">
                  <img className="w-100" src="/assets/img/team/thumb.jpg" alt="" />
                </div>
              </div>
              <div className="tp-team-sa-content text-center">
                <h5 className="tp-ff-heading fw-500 fs-25 mb-5"><a href="team-details-light.html" className="underline-black">Daniel Scoot</a></h5>
                <span className="fs-16 tp-text-grey-1">Product Designer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="tp-team-sa-item mb-90" data-speed=".-9">
              <div className="tp-team-sa-thumb mb-20 tp--hover-item p-relative">
                <div className="tp--hover-img" data-displacement="assets/img/team/thumb-2.jpg" data-intensity="0.6" data-speedin="1" data-speedout="1">
                  <img className="w-100" src="/assets/img/team/thumb-2.jpg" alt="" />
                </div>
              </div>
              <div className="tp-team-sa-content text-center">
                <h5 className="tp-ff-heading fw-500 fs-25 mb-5"><a href="team-details-light.html" className="underline-black">Katherine Victoria</a></h5>
                <span className="fs-16 tp-text-grey-1">WordPress Developer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="tp-team-sa-item mb-90" data-speed=".9">
              <div className="tp-team-sa-thumb mb-20 tp--hover-item p-relative">
                <div className="tp--hover-img" data-displacement="assets/img/team/thumb-3.jpg" data-intensity="0.6" data-speedin="1" data-speedout="1">
                  <img className="w-100" src="/assets/img/team/thumb-3.jpg" alt="" />
                </div>
              </div>
              <div className="tp-team-sa-content text-center">
                <h5 className="tp-ff-heading fw-500 fs-25 mb-5"><a href="team-details-light.html" className="underline-black">Robertson Crushe</a></h5>
                <span className="fs-16 tp-text-grey-1">React Developer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="tp-team-sa-item mb-90" data-speed=".-9">
              <div className="tp-team-sa-thumb mb-20 tp--hover-item p-relative">
                <div className="tp--hover-img" data-displacement="assets/img/team/thumb-4.jpg" data-intensity="0.6" data-speedin="1" data-speedout="1">
                  <img className="w-100" src="/assets/img/team/thumb-4.jpg" alt="" />
                </div>
              </div>
              <div className="tp-team-sa-content text-center">
                <h5 className="tp-ff-heading fw-500 fs-25 mb-5"><a href="team-details-light.html" className="underline-black">Zoey Harper</a></h5>
                <span className="fs-16 tp-text-grey-1">Senior Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
