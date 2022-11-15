<template>
  <header class="header">
    <div class="container--wide">
      <div class="header__nav">
        <div class="switch" id="menu-switcher">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="text">
            <span>Menu</span>
          </div>
        </div>
        <div class="logo">
          <a href="/">
            <img src="~@/assets/images/logo/luxoft-new-white.svg" class="img img--white" alt="Luxoft - IT, Consulting, Software Company" style="width:110px">
            <img src="~@/assets/images/logo/luxoft-new-purple.svg" class="img img--blue" alt="Luxoft - IT, Consulting, Software Company" style="width:110px">
          </a>
        </div>
        <div class="lux-menu">
          <nav class="lux-menu__nav">
            <div class="lux-menu__line"></div>
            <ul>
              <li class="has-children firstLvl">
                <a href="javascript:" class="root-link">
                  Industry expertise
                  <span class="arrows">
                                        <i class="arr-right"></i>
                                        <i class="arr-right"></i>
                                        <i class="arr-right"></i>
                                    </span>
                </a>
                <div class="lux-menu__submenuLvlTwo">
                  <h4 class="lux-menu__desktop-label">Industry expertise</h4>
                  <ul>
                    <li><a href="javascript:" class="back-mobile back-mobileLvlOne"><i class="arr-left"></i>Industry expertise</a></li>
                    <li>
                      <a href="/automotive/">Automotive</a>
                    </li>
                    <li>
                      <a href="/banking-capital-markets/">Banking and Capital Markets</a>
                    </li>
                    <li>
                      <a href="/energy/">Energy and Utilities</a>
                    </li>
                    <li>
                      <a href="/healthcare/">Healthcare and Life Sciences</a>
                    </li>
                    <li>
                      <a href="/insurance/">Insurance</a>
                    </li>
                    <li>
                      <a href="/media/">Media</a>
                    </li>
                    <li>
                      <a href="/retail/">Retail and Logistics</a>
                    </li>
                    <li>
                      <a href="/telecommunications/">Telecommunications</a>
                    </li>
                    <li>
                      <a href="/travel/">Travel, Transportation and Hospitality</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="has-children firstLvl">
                <a href="javascript:" class="root-link">
                  Our services
                  <span class="arrows">
                                        <i class="arr-right"></i>
                                        <i class="arr-right"></i>
                                        <i class="arr-right"></i>
                                    </span>
                </a>
                <div class="lux-menu__submenuLvlTwo">
                  <h4 class="lux-menu__desktop-label">Our services</h4>
                  <ul>
                    <li><a href="javascript:" class="back-mobile back-mobileLvlOne"><i class="arr-left"></i>Our services</a></li>
                    <li>
                      <a href="/services/engineering/">Engineering</a>
                    </li>
                    <li>
                      <a href="/services/data-to-insights/">Data to Insights</a>
                    </li>
                    <li>
                      <a href="/services/design/">Design</a>
                    </li>
                    <li>
                      <a href="/services/intelligent-automation/">Intelligent Automation</a>
                    </li>
                    <li>
                      <a href="/services/legacy-modernization/">Legacy Modernization</a>
                    </li>
                    <li>
                      <a href="/services/qa-automation/">QA Automation</a>
                    </li>
                    <li>
                      <a href="/services/cloud-solutions/">Cloud Solutions</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="has-children firstLvl">
                <a href="javascript:" class="root-link">
                  Insights
                  <span class="arrows">
                                        <i class="arr-right"></i>
                                        <i class="arr-right"></i>
                                        <i class="arr-right"></i>
                                    </span>
                </a>
                <div class="lux-menu__submenuLvlTwo">
                  <h4 class="lux-menu__desktop-label">Insights</h4>
                  <ul>
                    <li><a href="javascript:" class="back-mobile back-mobileLvlOne"><i class="arr-left"></i>Insights</a></li>
                    <li>
                      <a href="/insights/">Overview</a>
                    </li>
                    <li>
                      <a href="/case-study/">Case studies</a>
                    </li>
                    <li>
                      <a href="/blog/">Blog</a>
                    </li>
                    <li>
                      <a href="/videos/">Videos</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="firstLvl">
                <a href="https://career.luxoft.com/?_fs=14c6856f-a0b8-4506-9802-6a646fe91ec9">Careers</a>
              </li>
              <li class="has-children firstLvl">
                <a href="javascript:" class="root-link">
                  About us
                  <span class="arrows">
                                        <i class="arr-right"></i>
                                        <i class="arr-right"></i>
                                        <i class="arr-right"></i>
                                    </span>
                </a>
                <div class="lux-menu__submenuLvlTwo">
                  <h4 class="lux-menu__desktop-label">About us</h4>
                  <ul>
                    <li><a href="javascript:" class="back-mobile back-mobileLvlOne"><i class="arr-left"></i>About us</a></li>
                    <li>
                      <a href="/about-us/">Overview</a>
                    </li>
                    <li>
                      <a href="/partners/">Partnerships</a>
                    </li>
                    <li>
                      <a href="/csr/">CSR</a>
                    </li>
                    <li>
                      <a href="/newsroom/">Newsroom</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div class="contact-us">
              <div class="button button--purple">
                <a href="/contact_form/">Contact us</a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div class="header__new-menu">
        <ul>
          <li>
            <a href="javascript:" class="element">Industry expertise</a>
            <div class="header__new-menu--sub-menu industry-expertise">
              <div class="header__new-menu--sub-menu--item">
                <div class="single">
                  <a href="/automotive/">Automotive</a>
                </div>
                <div class="single">
                  <a href="/banking-capital-markets/">Banking and Capital Markets</a>
                </div>
                <div class="single">
                  <a href="/energy/">Energy and Utilities</a>
                </div>
              </div>
              <div class="header__new-menu--sub-menu--item">
                <div class="single">
                  <a href="/healthcare/">Healthcare and Life Sciences</a>
                </div>
                <div class="single">
                  <a href="/insurance/">Insurance</a>
                </div>
                <div class="single">
                  <a href="/media/">Media</a>
                </div>
              </div>
              <div class="header__new-menu--sub-menu--item">
                <div class="single">
                  <a href="/technology-networking/">Networking and Technology</a>
                </div>
                <div class="single">
                  <a href="/retail/">Retail and Logistics</a>
                </div>
                <div class="single">
                  <a href="/telecommunications/">Telecommunications</a>
                </div>
              </div>
              <div class="header__new-menu--sub-menu--item">
                <div class="single bigger">
                  <a href="/travel/">Travel, Transportation and Hospitality</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="javascript:" class="element">Our services</a>
            <div class="header__new-menu--sub-menu our-services">
              <div class="header__new-menu--sub-menu--item">
                <div class="single">
                  <a href="/services/engineering/">Engineering</a>
                </div>
                <div class="single">
                  <a href="/services/intelligent-automation/">Intelligent Automation</a>
                </div>
                <div class="single">
                  <a href="/services/cloud-solutions/">Cloud Solutions</a>
                </div>
              </div>
              <div class="header__new-menu--sub-menu--item">
                <div class="single">
                  <a href="/services/data-to-insights/">Data to Insights</a>
                </div>
                <div class="single">
                  <a href="/services/legacy-modernization/">Legacy Modernization</a>
                </div>
              </div>
              <div class="header__new-menu--sub-menu--item">
                <div class="single">
                  <a href="/services/design/">Design</a>
                </div>
                <div class="single">
                  <a href="/services/qa-automation/">QA Automation</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="javascript:" class="element">Insights</a>
            <div class="header__new-menu--sub-menu insights-menu">
              <div class="header__new-menu--sub-menu--item">
                <div class="single">
                  <a href="/insights/">Overview</a>
                </div>
                <div class="single">
                  <a href="/blog/">Blog</a>
                </div>

              </div>
              <div class="header__new-menu--sub-menu--item">
                <div class="single">
                  <a href="/case-study/">Case studies</a>
                </div>
                <div class="single">
                  <a href="/videos/">Videos</a>
                </div>
              </div>
            </div>
          </li>
          <li><a href="https://career.luxoft.com/" class="element">Careers</a></li>
          <li>
            <a href="javascript:" class="element">About us</a>
            <div class="header__new-menu--sub-menu about-us">
              <div class="header__new-menu--sub-menu--item">
                <div class="single">
                  <a href="/about-us/">Overview</a>
                </div>
                <div class="single">
                  <a href="/csr/">CSR</a>
                </div>

              </div>
              <div class="header__new-menu--sub-menu--item">
                <div class="single">
                  <a href="/partners/">Partnerships</a>
                </div>
                <div class="single">
                  <a href="/newsroom/">Newsroom</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="header__contact">
        <ul>
          <li><a href="/contact_form/">Contact us</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>

  export default {
    name: 'header-name',
  }
</script>
