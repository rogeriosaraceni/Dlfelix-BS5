"use strict";

/** ////////////////////////////////////////////////////////////////////
 * Main JS
 *
 * - Imports
 * - mainAppMarginTop
 * - navigationActive
 * -
 * -
 * -
 *
 * - Active Functions
 *
--------------------------------------------------------------------- */

/** --------------------------------------------------------------------
 * Imports
--------------------------------------------------------------------- */
import ConfigBootstrap from "./config-bootstrap.js";
import ConfigVendors from "./config-vendors.js";

/** --------------------------------------------------------------------
 * mainAppMarginTop
--------------------------------------------------------------------- */
const mainAppMarginTop = () => {
    const header = document.querySelector('[data-el="top-fixed"]')
    const mainApp = document.querySelector('[data-el="main-app"]')

    if(header){
        const headerHeight = header.clientHeight + 'px'
        if(mainApp){
            mainApp.style.marginTop = headerHeight
        }
    }
}

/** --------------------------------------------------------------------
 * currentYear
--------------------------------------------------------------------- */
const showCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    const divCurrentYear = document.querySelectorAll('[data-js="currentYear"]')
    if (divCurrentYear) {
        divCurrentYear.forEach((item) => {
            item.textContent = currentYear
        })
    }
}

/** --------------------------------------------------------------------
 * navigationActive
--------------------------------------------------------------------- */
const navigationActive = () => {
    const currentUrl = window.location.pathname;
    const navLinks = document.querySelectorAll(`.navbar-nav .nav-item a[href$="${currentUrl}"]`)

    navLinks.forEach(function (link) {
        link.classList.add("active")

        const dropdownParent = link.closest(".nav-item.dropdown")
        dropdownParent?.classList.add("active")
    });
}

/** --------------------------------------------------------------------
 * Active Functions
--------------------------------------------------------------------- */
mainAppMarginTop()
showCurrentYear()
navigationActive()
ConfigBootstrap()
ConfigVendors()
