import React from 'react';

const Header = () => {
  return (
    <header>
      <div id="header-sticky" className="tp-header-area pre-header sticky-white-bg tp-header-blur header-transparent tp-header-lg-spacing">
        <div className="container-fluid container-1800">
          <div className="row align-items-center">
            <div className="col-xl-3 col-6">
              <div className="tp-header-logo">
                <a href="/">
                  <img data-width="150" src="/assets/img/logo/logo.png" alt="Maghreb Web" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 d-none d-xl-block">
              <div className="tp-main-menu tp-header-dropdown dropdown-white-bg d-flex justify-content-center">
                <nav className="tp-mobile-menu-active">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-3 col-6">
              <div className="tp-header-right d-flex align-items-center justify-content-end">
                <div className="tp-header-btn tp-header-btn-spacing d-none d-md-inline-block ml-20">
                  <a href="#contact" className="tp-btn-lg d-inline-block lh-0 tp-round-26 fs-15 tp-bg-common-black text-uppercase ls-0 tp-btn-switch-animation tp-text-common-white hover-text-white tp-ff-heading fw-500">
                    <span className="d-flex align-items-center justify-content-center">
                      <span className="btn-text">Let’s Talk</span>
                      <span className="btn-icon">
                        <svg width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979851C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665L0.598757 4.26665C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335L19.633 5.73335L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z" fill="currentColor" />
                        </svg>
                      </span>
                      <span className="btn-icon">
                        <svg width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979851C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665L0.598757 4.26665C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335L19.633 5.73335L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z" fill="currentColor" />
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <button className="tp-menu-bar tp-header-sidebar-btn ml-20 d-xl-none">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
