document.addEventListener('DOMContentLoaded', function (qualifiedName, value) {
  let data = {
    sectionMain: {
      class: '.container-benefits-main',
      contentImg: '.content-img',
      classActive: 'active',
      breakpoint: 1240
    },
    sectionMainAlt: {
      class: '.container-benefits-main__alt',
      contentImg: '.content-img',
      classActive: 'active',
      breakpoint: 1240
    },
    sectionSource: {
      class: '.container-benefits-source',
      content: '.tab-content',
      buttons: '.nav-link',
      breakpoint: 600,
      tabContent: '.tab-pane'
    },
    sectionSourceAlt: {
      class: '.container-benefits-source__alt',
      content: '.content-info',
      navClass: '.nav-mobile-tabs',
      classActive: 'active',
      classOpen: 'open',
      breakpoint: {
        sm: 600,
        lg: 1240
      },
      tabContent: '.tab-info'
    },
  }

  init();

  function init() {
    initSectionMain();
    initSectionMainAlt();
    initSectionSource();
    initSectionSourceAlt();
  }

  function initSectionSourceAlt() {
    let sections = document.querySelectorAll(data.sectionSourceAlt.class);
    listenClickSourceAlt(sections);
    listenResizeSourceAlt(sections);
  }

  function initSectionSource() {
    let sections = document.querySelectorAll(data.sectionSource.class);
    if (window.innerWidth <= data.sectionSource.breakpoint) {
      initMobileSource(sections);
    }
    initTabsSource(sections)
    listenResizeSource(sections);
  }

  function initMobileSource(sections) {
    sections.forEach(section => {
      let navTabs = section.querySelector(".nav");
      let buttons = section.querySelectorAll(data.sectionSource.buttons);
      let tabContent = section.querySelector(data.sectionSource.content);

      buttons.forEach((el, index) => {
        if (el.classList.contains('active')) {
          navTabs.insertBefore(tabContent, buttons[index+1]);
        }
        el.onclick = function () {
          if (window.innerWidth <= data.sectionSource.breakpoint) {
            navTabs.insertBefore(tabContent, buttons[index+1]);
          }
        };
      });
    });
  }

  function initSectionMainAlt() {
    let sections = document.querySelectorAll(data.sectionMainAlt.class);
    listenResizeMain(sections, data.sectionMainAlt.breakpoint, data.sectionMainAlt.classActive);
    listenClickMain(sections, data.sectionMainAlt.breakpoint, data.sectionMainAlt.classActive);
  }

  function initSectionMain() {
    let sections = document.querySelectorAll(data.sectionMain.class);
    listenResizeMain(sections, data.sectionMain.breakpoint, data.sectionMain.classActive);
    listenClickMain(sections, data.sectionMain.breakpoint, data.sectionMain.classActive);
  }

  function listenClickSourceAlt(sections) {
    sections.forEach(section => {
      let containers = section.querySelector('.row').querySelectorAll('.col');
      let tabs = section.querySelector(data.sectionSourceAlt.navClass);
      let onlyNext = true;

      if (window.innerWidth <= data.sectionSourceAlt.breakpoint.lg) {
        initMobileSourceAlt(section, containers, tabs);
      }

      containers.forEach((el, index) => {
        if (el.classList.contains(data.sectionSourceAlt.classActive)) {
          setContentSource(section, el, data.sectionSourceAlt.content, data.sectionSourceAlt.tabContent);
          if (window.innerWidth <= data.sectionSourceAlt.breakpoint.lg) {
            if (window.innerWidth > data.sectionSourceAlt.breakpoint.sm && containers[index+1] && onlyNext) {
              containers[index+1].classList.add(data.sectionSourceAlt.classActive);
              onlyNext = false;
            }
          }
        }
        el.onclick = function () {
          if (window.innerWidth > data.sectionSourceAlt.breakpoint.lg) {
            setSimpleActiveClass(containers, el, data.sectionSourceAlt.classActive);
            setContentSource(section, el, data.sectionSourceAlt.content, data.sectionSourceAlt.tabContent);
          }
        };
        if (window.innerWidth <= data.sectionSourceAlt.breakpoint.lg) {
          listenSwipeSourceAlt(containers, section, el, index);
          initScrollBlock(el, data.sectionSourceAlt.content, data.sectionSourceAlt.classOpen);
        }
      });
    });
  }

  function initMobileSourceAlt(section, containers, tabs) {
    initNavButtons(tabs, containers.length);
    initMobileTabSourceAlt(section, containers, tabs, 0);
    setSimpleActiveClass(containers, containers[0], data.sectionSourceAlt.classActive);
    listenButtonNext(section, containers, tabs, data.sectionSourceAlt.classActive);
  }

  function listenButtonNext(section, containers, tabs, classActive) {
    section.querySelector('button').onclick = function () {
      for (let index in containers) {
        if (containers[index].classList.contains(classActive)) {
          let buttons = tabs.querySelectorAll('div');
          let number;

          if (window.innerWidth > data.sectionSourceAlt.breakpoint.sm) {
            number =parseInt(index) + 2;

            if (containers[number]) {
              setSimpleActiveClass(containers, containers[number], classActive);
            }
            if (containers[number+1]) {
              containers[number+1].classList.add(classActive);
            }
            setSimpleActiveClass(buttons, buttons[number/2], classActive);
            section.querySelector('button').hidden = number > buttons.length;
          } else {
            number = parseInt(index) + 1;
            if (containers[number]) {
              setSimpleActiveClass(containers, containers[number], classActive);
              setSimpleActiveClass(buttons, buttons[number], classActive);
            }
            section.querySelector('button').hidden = number >= buttons.length - 1;
          }
          setPrevNextClasses(containers);
          break;
        }
      }
    }
  }

  function listenSwipeSourceAlt(containers, section, el, index) {
    let numItem, numSlide;
    setPrevNextClasses(containers);

    $(el).swipe({
      swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
        let buttons = section.querySelector(data.sectionSourceAlt.navClass).querySelectorAll('div');

        if (direction === 'right') {
          if (window.innerWidth > data.sectionSourceAlt.breakpoint.sm) {

            if (index % 2 !== 0) {
              numItem = index - 3;
              numSlide = numItem / 2;
            } else {
              numItem = index - 2;
              numSlide = numItem / 2;
            }
          } else {
            numSlide = numItem = index - 1;
          }
          if (containers.length > numItem && numItem >= 0) {
            setSlideSourceAlt(containers, buttons, data.sectionSourceAlt.classActive, numItem, numSlide);
            section.querySelector('button').hidden = false;
          }
        }
        if (direction === 'left') {

          if (window.innerWidth > data.sectionSourceAlt.breakpoint.sm) {
            if (index === 0) {
              numSlide = 1;
              numItem = 2;
            } else if (index % 2 !== 0) {
              numItem = index + 1;
              numSlide = numItem / 2;
            } else {
              numItem = index + 2;
              numSlide = numItem / 2;
            }
          } else {
            numSlide = numItem = (index !== 0) ? index + 1 : 1;
          }

          if (containers.length > numItem) {
            setSlideSourceAlt(containers, buttons, data.sectionSourceAlt.classActive, numItem, numSlide);
          }
          if (numItem >= containers.length - 1) {
            section.querySelector('button').hidden = true;
          }
        }
        setPrevNextClasses(containers);
      },
      fingers:'all',
    });
  }

  function setPrevNextClasses(containers) {
    let className = 'prev';

    containers.forEach(el => {
      if (el.classList.contains('prev')) {
        el.classList.remove('prev');
      }
      if (el.classList.contains('next')) {
        el.classList.remove('next');
      }
      if (el.classList.contains('active')) {
        className = 'next';
      }
      el.classList.add(className);
    });
  }

  function setSlideSourceAlt(containers, statusItems, className, numItem, numSlide) {
    if (window.innerWidth > data.sectionSourceAlt.breakpoint.sm) {
      setSimpleActiveClass(containers, containers[numItem], className);
      if (containers[numItem + 1]) {
        containers[numItem + 1].classList.add(className);
      }
    } else {
      setSimpleActiveClass(containers, containers[numItem], className);
    }
    setSimpleActiveClass(statusItems, statusItems[numSlide], className);
  }

  function listenResizeSourceAlt(sections) {
    window.addEventListener(`resize`, event => {
      sections.forEach(section => {
        let containers = section.querySelector('.row').querySelectorAll('.col');
        let defaultIndex = 0;

        if (window.innerWidth <= data.sectionSourceAlt.breakpoint.lg) {
          let tabs = section.querySelector(data.sectionSourceAlt.navClass);
          initMobileSourceAlt(section, containers, tabs);
          containers.forEach((el, index) => {
            listenSwipeSourceAlt(containers, section, el, index);
            initScrollBlock(el, data.sectionSourceAlt.content, data.sectionSourceAlt.classOpen);
          });
        } else {
          containers.forEach((el, index) => {
            if (el.classList.contains(data.sectionSourceAlt.classActive)) {
              defaultIndex = index;
            }
            el.classList.remove(data.sectionSourceAlt.classActive);
          });
          if (containers[defaultIndex]) {
            containers[defaultIndex].classList.add(data.sectionSourceAlt.classActive);
            setContentSource(section, containers[defaultIndex], data.sectionSourceAlt.content, data.sectionSourceAlt.tabContent);
          }
        }

        if (window.innerWidth <= data.sectionSourceAlt.breakpoint.lg && window.innerWidth > data.sectionSourceAlt.breakpoint.sm) {
          if (containers[1]) {
            containers[1].classList.add(data.sectionSourceAlt.classActive);
          }
        }
      });
    });
  }

  function initMobileTabSourceAlt(section, containers, tabs, numItem) {
    let buttons = tabs.querySelectorAll('div');
    setSimpleActiveClass(buttons, buttons[numItem], data.sectionSourceAlt.classActive);

    buttons.forEach((button, index) => {
      button.onclick = function () {
        if (window.innerWidth > data.sectionSourceAlt.breakpoint.sm) {
          let num = (index === 0) ? index : index * 2;

          if (containers[num]) {
            setSimpleActiveClass(containers, containers[num], data.sectionSourceAlt.classActive);
          }
          if (containers[num+1]) {
            containers[num+1].classList.add(data.sectionSourceAlt.classActive);
          }
        } else {
          setSimpleActiveClass(containers, containers[index], data.sectionSourceAlt.classActive);
        }
        setSimpleActiveClass(buttons, button, data.sectionSourceAlt.classActive);
        section.querySelector('button').hidden = index > buttons.length - 2;
      };
    });
  }

  function initNavButtons(container, num) {
    container.innerHTML = '';
    num = (window.innerWidth >= data.sectionSourceAlt.breakpoint.sm) ? num / 2 : num;

    for (let i = 0; i < num; i++) {
      container.innerHTML += '<div></div>';
    }
  }

  function initScrollBlock(el, classParent, className) {
    let parent = el.querySelector(classParent);
    let button = parent.querySelector('div');

    if (button) {
      button.onclick = function () {
        setClass(parent, className);
      };
    }
  }

  function initTabsSource(sections) {
    sections.forEach((section, index) => {
      let buttons = section.querySelectorAll(data.sectionSource.buttons);
      let contents = section.querySelectorAll(data.sectionSource.tabContent);

      for (let i = 0; i < buttons.length; i++) {
        let id = 'tab' + index + i;
        let tabName = 'nav-tab' + index + i;

        buttons[i].setAttribute('id', id);
        buttons[i].setAttribute('data-bs-target', '#' + tabName);
        buttons[i].setAttribute('aria-controls', tabName);

        if (contents[i]) {
          contents[i].setAttribute('id', tabName);
          contents[i].setAttribute('aria-labelledby', id);
        }
      }
    });
  }

  function listenClickMain(sections, breakpoint, className) {
    sections.forEach(section => {
      let contents = section.querySelectorAll('.col');
      setContent(contents, section, breakpoint, className);
    });
  }

  function listenResizeSource(sections) {
    window.addEventListener(`resize`, event => {
      sections.forEach(section => {
        if (window.innerWidth <= data.sectionSource.breakpoint) {
          initMobileSource(sections);
        } else {
          section.append(section.querySelector(data.sectionSource.content))
        }
      });
    }, false);
  }

  function listenResizeMain(sections, breakpoint, className) {
    window.addEventListener(`resize`, event => {
      if (window.innerWidth >= breakpoint) {
        sections.forEach(section => {
          section.querySelector('.content-img').hidden = true;
          let items = section.querySelectorAll('.col');

          items.forEach(el => {
            if (el.classList.contains(className)) {
              setContentMain(el, section);
            }
          });
        });
      }
    }, false);
  }

  function setContent(contents, section, breakpoint, className) {
    contents.forEach(el => {
      if (el.classList.contains(className)) {
        setContentMain(el, section)
      }

      el.onclick = function () {
        if (document.body.clientWidth < breakpoint) {
          setSimpleActiveClass(contents, el, data.sectionMain.classActive);
        } else {
          setDataForTabs(section, contents, el);
        }
      };
    });
  }

  function setClass(el, className) {
    if (el.classList.contains(className)) {
      el.classList.remove(className);
    } else {
      el.classList.add(className);
    }
  }

  function setDataForTabs(section, contents, element) {
    setSimpleActiveClass(contents, element, data.sectionMain.classActive);
    setContentMain(element, section);
  }

  function setSimpleActiveClass(contents, element, className) {
    contents.forEach(el => {
      el.classList.remove(className);
    });
    element.classList.add(className);
  }

  function setContentMain(element, section) {
    let img =  section.querySelector(data.sectionMain.contentImg);
    img.src = element.querySelector('img').src;
    img.hidden = false;
  }

  function setContentSource(section, element, classData, classInsert) {
    let data = element.querySelector(classData);
    let container = section.querySelector(classInsert);

    if (data && container) {
      container.innerHTML = data.innerHTML;
    }
  }
});
