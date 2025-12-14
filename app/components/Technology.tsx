import React from 'react';

export default function Technology() {
  return (
    <div className="tp-techonolgy-area tp-bg-common-white-2 pt-100 tp-techonolgy-capsule-wrapper" data-tp-throwable-scene="true">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-8">
            <div className="tp-techonolgy-title-wrap">
              <h2 className="fs-50 fs-xs-40 lh-120-per mb-60 tp_fade_anim" data-delay=".3">We Use Awesome<br /> Technology.</h2>
              <div className="tp-service-2-para tp-techonolgy-para tp_fade_anim" data-delay=".5">
                <p className="fs-18">A high-growth startup agency relies on the best<br /> technologies to deliver branding, marketing, and<br /> product development.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="tp-techonolgy-ratings-inner mt-30 p-relative">
              <div className="tp-techonolgy-ratings-wrap tp_fade_anim" data-delay=".7" data-fade-from="top">
                <div className="mr-15">
                  <span className="fw-600 fs-12 tp-ff-heading d-block lh-1">REVIEWED</span>
                  <img src="/assets/img/techonolgy/logo.png" alt="" />
                </div>
                <div className="tp-techonolgy-ratings-right">
                  <span className="tp-techonolgy-ratings mb-5">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </span>
                  <span className="fw-600 fs-12 tp-text-grey-1 d-block">50 REVIEWS</span>
                </div>
              </div>
              <div className="tp-hero-sa-shape-2 tp-techonolgy-shape tp_fade_anim" data-delay=".7" data-fade-from="top" data-ease="bounce">
                <span className="shape-1 mb-5">
                  <svg width="41" height="20" viewBox="0 0 41 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.6087 -1.90735e-06C9.34689 -1.90735e-06 0.217392 8.70558 0.217392 19.4445H41C41 8.70558 31.8705 -1.90735e-06 20.6087 -1.90735e-06Z" fill="#030303" />
                  </svg>
                </span>
                <span className="shape-2">
                  <svg width="67" height="44" viewBox="0 0 67 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M67 0.25H0V44L67 0.25Z" fill="#7D5DFF" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-techonolgy-capsule-item-wrapper">
         {/* React JS */}
        <p data-tp-throwable-el="">
          <span className="tp-techonolgy-capsule-item">
             <img src="/assets/img/techonolgy/react.png" alt="React" style={{height: '50px', marginRight: '10px'}} />
             React Js
          </span>
        </p>
         {/* Adobe XD */}
        <p data-tp-throwable-el="">
          <span className="tp-techonolgy-capsule-item">
             <img src="/assets/img/techonolgy/xd.png" alt="Adobe XD" style={{height: '50px', marginRight: '10px'}} />
             Adobe XD
          </span>
        </p>
         {/* Figma */}
        <p data-tp-throwable-el="">
          <span className="tp-techonolgy-capsule-item sketch">
             <img src="/assets/img/techonolgy/figma.png" alt="Figma" style={{height: '50px', marginRight: '10px'}} />
             Figma
          </span>
        </p>
         {/* JavaScript */}
        <p data-tp-throwable-el="">
          <span className="tp-techonolgy-capsule-item vue">
             <img src="/assets/img/techonolgy/js.png" alt="JavaScript" style={{height: '50px', marginRight: '10px'}} />
             JavaScript
          </span>
        </p>
         {/* Tailwind */}
        <p data-tp-throwable-el="">
          <span className="tp-techonolgy-capsule-item sketch">
             <img src="/assets/img/techonolgy/tailwind.png" alt="Tailwind" style={{height: '50px', marginRight: '10px'}} />
             Tailwind
          </span>
        </p>
         {/* Node Js */}
        <p data-tp-throwable-el="">
          <span className="tp-techonolgy-capsule-item dc">
             <img src="/assets/img/techonolgy/node.png" alt="Node Js" style={{height: '50px', marginRight: '10px'}} />
             Node Js
          </span>
        </p>
         {/* Sketch */}
        <p data-tp-throwable-el="">
          <span className="tp-techonolgy-capsule-item sketch">
             <img src="/assets/img/techonolgy/sketch.png" alt="Sketch" style={{height: '50px', marginRight: '10px'}} />
             Sketch
          </span>
        </p>
         {/* D3 Js */}
        <p data-tp-throwable-el="">
          <span className="tp-techonolgy-capsule-item dc">
             <img src="/assets/img/techonolgy/d3.png" alt="D3 Js" style={{height: '50px', marginRight: '10px'}} />
             D3 Js
          </span>
        </p>
         {/* Vue Js */}
        <p data-tp-throwable-el="">
          <span className="tp-techonolgy-capsule-item vue">
             <img src="/assets/img/techonolgy/vue.png" alt="Vue Js" style={{height: '50px', marginRight: '10px'}} />
             Vue Js
          </span>
        </p>
      </div>
    </div>
  );
}
