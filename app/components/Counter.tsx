import React from 'react';

const Counter = () => {
  return (
    <div className="tp-counter-area pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-counter-wrap">
              <div className="tp-counter-wrap-box bounce_animation">
                <div className="tp-counter-item bounce__anim">
                  <h3 className="fw-500 fs-70 fs-md-50 text-uppercase"><span data-purecounter-duration="1" data-purecounter-end="34" className="purecounter">0</span>K</h3>
                  <span className="fw-500 fs-18 fs-md-15 lh-22 tp-text-grey-1">Project Completed</span>
                </div>
                <div className="tp-counter-item bounce__anim">
                  <h3 className="fw-500 fs-70 fs-md-50 text-uppercase"><span data-purecounter-duration="1" data-purecounter-end="16" className="purecounter">0</span></h3>
                  <span className="fw-500 fs-18 fs-md-15 lh-22 tp-text-grey-1">Country Office</span>
                </div>
                <div className="tp-counter-item bounce__anim">
                  <h3 className="fw-500 fs-70 fs-md-50 text-uppercase"><span data-purecounter-duration="1" data-purecounter-end="12" className="purecounter">0</span>+</h3>
                  <span className="fw-500 fs-18 fs-md-15 lh-22 tp-text-grey-1">Year of Experience</span>
                </div>
                <div className="tp-counter-item bounce__anim">
                  <h3 className="fw-500 fs-70 fs-md-50 text-uppercase"><span data-purecounter-duration="1" data-purecounter-end="98" className="purecounter">0</span>%</h3>
                  <span className="fw-500 fs-18 fs-md-15 lh-22 tp-text-grey-1">Happy Customer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
