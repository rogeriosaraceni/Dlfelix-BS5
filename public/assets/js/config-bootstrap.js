"use strict";

/** --------------------------------------------------------------------
 * ConfigBootstrap JS
 *
 * - Enable tooltips
 * - navbarSideCollapse
 * -
 * -
 * -
 *
 * ------------------------------------------------------------------- */

export default function ConfigBootstrap() {
    /** --------------------------------------------------------------------
     * Enable tooltips
    --------------------------------------------------------------------- */
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

    /** --------------------------------------------------------------------
     * navbarSideCollapse
    --------------------------------------------------------------------- */
    (() => {
        document.querySelector("#navbarSideCollapse")?.addEventListener("click", () => {
            document.querySelector(".offcanvas-collapse").classList.toggle("open")
        })
    })()

    console.log('ConfigBootstrap');
}
