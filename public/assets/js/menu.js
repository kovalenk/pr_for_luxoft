(function () {
    //root links
    const links = document.querySelectorAll('.lux-menu ul li.has-children > a.root-link'),
        //submenu links
        submenuLinks = document.querySelectorAll('.lux-menu__submenuLvlTwo ul li.has-children > a.sub-root-link'),
        //mobile back btns
        backMobileToLvlOne = document.querySelectorAll('.back-mobileLvlOne'),
        backMobileToLvlTwo = document.querySelectorAll('.back-mobileLvlTwo'),
        //level two
        submenuLvlTwo = document.querySelectorAll('.lux-menu__submenuLvlTwo'),
        //level three
        submenuLvlThree = document.querySelectorAll('.lux-menu__submenuLvlThree'),
        //items with submenu lvl2
        itemsHasSubmenuLvlThree = document.querySelectorAll('.lux-menu ul li.has-children'),
        //items with submenu lvl3
        itemsHasSubmenuLvlTwo = document.querySelectorAll('.lux-menu__submenuLvlTwo ul li.has-children'),
        //close menu
        luxMenu = document.querySelector('.lux-menu'),
        menuSwitcher = document.querySelector('#menu-switcher')

    const menu = {
        init: function () {
            this.openLvlTwo()
            this.openLvlThree()
            this.mobileBackBtns()
            this.closeOutside()
            this.closeBtn()
        },
        addClickEvents: function (arr, removeActive, setWidthClass) {
            const that = this
            arr.map((element) => {
                element.addEventListener("click", function (event) {
                    event.stopPropagation()

                    removeActive.map((item) => {
                        that.removeActives(item)
                    })

                    this.nextElementSibling.classList.add('active')
                    this.parentNode.classList.add('active')
                    that.setWidth(setWidthClass)
                }, true)
            })

        },
        openLvlTwo: function () {
            const removeActive = [submenuLvlTwo, submenuLvlThree, itemsHasSubmenuLvlThree],
                setWidthClass = 'lux-menu--levelOne'
            this.addClickEvents([...links], removeActive, setWidthClass)
        },

        openLvlThree: function () {
            const removeActive = [submenuLvlThree, itemsHasSubmenuLvlTwo],
                setWidthClass = 'lux-menu--levelTwo'
            this.addClickEvents([...submenuLinks], removeActive, setWidthClass)
        },
        mobileBackBtns: function () {
            const removeActiveOne = [submenuLvlTwo, submenuLvlThree, itemsHasSubmenuLvlThree],
                removeActiveTwo = [submenuLvlThree, itemsHasSubmenuLvlTwo],
                setWidthClassOne = 'lux-menu--levelOne',
                setWidthClassTwo = 'lux-menu--levelTwo'
            this.addClickEvents([...backMobileToLvlOne], removeActiveOne, setWidthClassOne)
            this.addClickEvents([...backMobileToLvlTwo], removeActiveTwo, setWidthClassTwo)
        },
        closeOutside: function () {
            const that = this
            document.addEventListener('click', function (event) {
                const header = document.querySelector('header'),
                    isClickInsideOne = luxMenu.contains(event.target),
                    isClickInsideTwo = menuSwitcher.contains(event.target)

                if (isClickInsideOne || isClickInsideTwo) {
                    if (event.target.nodeName === "A") {
                        location.href = event.target.href
                    }
                }
                else {
                    if (header.classList.contains('active')) {
                        header.classList.remove('active')
                        that.setWidth('')
                        that.removeActives(submenuLvlTwo)
                        that.removeActives(submenuLvlThree)
                        that.removeActives(itemsHasSubmenuLvlThree)
                    }
                }
            }, false)
        },
        closeBtn: function () {
            const that = this
            menuSwitcher.addEventListener('click', function (event) {
                const header = document.querySelector('header')
                if (header.classList.contains('active')) {
                    header.classList.remove('active')
                    that.setWidth('')
                    that.removeActives(submenuLvlTwo)
                    that.removeActives(submenuLvlThree)
                    that.removeActives(itemsHasSubmenuLvlThree)
                } else {
                    header.classList.add('active')
                }
            }, true)
        },
        removeActives: function (submenu) {
            [...submenu].map((item) => {
                item.classList.remove('active')
            })
        },
        setWidth: function (levelClass) {
            luxMenu.classList.remove("lux-menu--levelOne", "lux-menu--levelTwo")
            levelClass !== '' && luxMenu.classList.add(levelClass)
        }
    }
    menu.init()
}())

const nav = document.querySelector('.header'),
        topOfNav = nav.offsetTop
// Sticky nav
function fixNav() {
    if (window.pageYOffset > topOfNav) {
        nav.classList.add('fixed')
    } else {
        nav.classList.remove('fixed')
    }
}
window.addEventListener('scroll', fixNav)
fixNav()