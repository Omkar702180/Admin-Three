"use strict";

let mainContent;
(function () {
  let html = document.querySelector("html");
  mainContent = document.querySelector(".main-content");

  localStorageBackup();
  if (document.querySelector("#hs-overlay-switcher")) {
    switcherClick();
    checkOptions();
    setTimeout(() => {
      checkOptions();
    }, 1000);
  }
})();

function switcherClick() {
  let ltrBtn,
    rtlBtn,
    verticalBtn,
    horiBtn,
    lightBtn,
    darkBtn,
    boxedBtn,
    fullwidthBtn,
    scrollHeaderBtn,
    scrollMenuBtn,
    fixedHeaderBtn,
    fixedMenuBtn,
    lightHeaderBtn,
    darkHeaderBtn,
    colorHeaderBtn,
    gradientHeaderBtn,
    lightMenuBtn,
    darkMenuBtn,
    colorMenuBtn,
    gradientMenuBtn,
    transparentMenuBtn,
    transparentHeaderBtn,
    regular,
    classic,
    defaultBtn,
    closedBtn,
    iconTextBtn,
    detachedBtn,
    overlayBtn,
    doubleBtn,
    resetBtn,
    menuClickBtn,
    menuHoverBtn,
    iconClickBtn,
    iconHoverBtn,
    primaryDefaultColor1Btn,
    primaryDefaultColor2Btn,
    primaryDefaultColor3Btn,
    primaryDefaultColor4Btn,
    primaryDefaultColor5Btn,
    bgDefaultColor1Btn,
    bgDefaultColor2Btn,
    bgDefaultColor3Btn,
    bgDefaultColor4Btn,
    bgDefaultColor5Btn,
    bgImage1Btn,
    bgImage2Btn,
    bgImage3Btn,
    bgImage4Btn,
    bgImage5Btn,
    ResetAll;
  let html = document.querySelector("html");
  lightBtn = document.querySelector("#switcher-light-theme");
  darkBtn = document.querySelector("#switcher-dark-theme");
  ltrBtn = document.querySelector("#switcher-ltr");
  rtlBtn = document.querySelector("#switcher-rtl");
  verticalBtn = document.querySelector("#switcher-vertical");
  horiBtn = document.querySelector("#switcher-horizontal");
  boxedBtn = document.querySelector("#switcher-boxed");
  fullwidthBtn = document.querySelector("#switcher-full-width");
  fixedMenuBtn = document.querySelector("#switcher-menu-fixed");
  scrollMenuBtn = document.querySelector("#switcher-menu-scroll");
  fixedHeaderBtn = document.querySelector("#switcher-header-fixed");
  scrollHeaderBtn = document.querySelector("#switcher-header-scroll");
  lightHeaderBtn = document.querySelector("#switcher-header-light");
  darkHeaderBtn = document.querySelector("#switcher-header-dark");
  colorHeaderBtn = document.querySelector("#switcher-header-primary");
  gradientHeaderBtn = document.querySelector("#switcher-header-gradient");
  transparentHeaderBtn = document.querySelector("#switcher-header-transparent");
  lightMenuBtn = document.querySelector("#switcher-menu-light");
  darkMenuBtn = document.querySelector("#switcher-menu-dark");
  colorMenuBtn = document.querySelector("#switcher-menu-primary");
  gradientMenuBtn = document.querySelector("#switcher-menu-gradient");
  transparentMenuBtn = document.querySelector("#switcher-menu-transparent");
  regular = document.querySelector("#switcher-regular");
  classic = document.querySelector("#switcher-classic");
  defaultBtn = document.querySelector("#switcher-default-menu");
  menuClickBtn = document.querySelector("#switcher-menu-click");
  menuHoverBtn = document.querySelector("#switcher-menu-hover");
  iconClickBtn = document.querySelector("#switcher-icon-click");
  iconHoverBtn = document.querySelector("#switcher-icon-hover");
  closedBtn = document.querySelector("#switcher-closed-menu");
  iconTextBtn = document.querySelector("#switcher-icontext-menu");
  overlayBtn = document.querySelector("#switcher-icon-overlay");
  doubleBtn = document.querySelector("#switcher-double-menu");
  detachedBtn = document.querySelector("#switcher-detached");
  resetBtn = document.querySelector("#resetbtn");
  primaryDefaultColor1Btn = document.querySelector("#switcher-primary");
  primaryDefaultColor2Btn = document.querySelector("#switcher-primary1");
  primaryDefaultColor3Btn = document.querySelector("#switcher-primary2");
  primaryDefaultColor4Btn = document.querySelector("#switcher-primary3");
  primaryDefaultColor5Btn = document.querySelector("#switcher-primary4");
  bgDefaultColor1Btn = document.querySelector("#switcher-background");
  bgDefaultColor2Btn = document.querySelector("#switcher-background1");
  bgDefaultColor3Btn = document.querySelector("#switcher-background2");
  bgDefaultColor4Btn = document.querySelector("#switcher-background3");
  bgDefaultColor5Btn = document.querySelector("#switcher-background4");
  bgImage1Btn = document.querySelector("#switcher-bg-img");
  bgImage2Btn = document.querySelector("#switcher-bg-img1");
  bgImage3Btn = document.querySelector("#switcher-bg-img2");
  bgImage4Btn = document.querySelector("#switcher-bg-img3");
  bgImage5Btn = document.querySelector("#switcher-bg-img4");
  ResetAll = document.querySelector("#reset-all");

  // primary theme
  let primaryColor1Var = primaryDefaultColor1Btn.addEventListener(
    "click",
    () => {
      localStorage.setItem("primaryRGB", "58, 88, 146");
      localStorage.setItem("primaryRGB1", "58 88 146");
      html.style.setProperty("--color-primary-rgb", `58, 88, 146`);
      html.style.setProperty("--color-primary", `58 88 146`);
      updateColors();
    }
  );
  let primaryColor2Var = primaryDefaultColor2Btn.addEventListener(
    "click",
    () => {
      localStorage.setItem("primaryRGB", "92, 144, 163");
      localStorage.setItem("primaryRGB1", "92 144 163");
      html.style.setProperty("--color-primary-rgb", `92, 144, 163`);
      html.style.setProperty("--color-primary", `92 144 163`);
      updateColors();
    }
  );
  let primaryColor3Var = primaryDefaultColor3Btn.addEventListener(
    "click",
    () => {
      localStorage.setItem("primaryRGB", "172, 172, 80");
      localStorage.setItem("primaryRGB1", "172 172 80");
      html.style.setProperty("--color-primary-rgb", `172, 172, 80`);
      html.style.setProperty("--color-primary", `172 172 80`);
      updateColors();
    }
  );
  let primaryColor4Var = primaryDefaultColor4Btn.addEventListener(
    "click",
    () => {
      localStorage.setItem("primaryRGB", "165, 94, 131");
      localStorage.setItem("primaryRGB1", "165 94 131");
      html.style.setProperty("--color-primary-rgb", `165, 94, 131`);
      html.style.setProperty("--color-primary", `165 94 131`);
      updateColors();
    }
  );
  let primaryColor5Var = primaryDefaultColor5Btn.addEventListener(
    "click",
    () => {
      localStorage.setItem("primaryRGB", "87, 68, 117");
      localStorage.setItem("primaryRGB1", "87 68 117");
      html.style.setProperty("--color-primary-rgb", `87, 68, 117`);
      html.style.setProperty("--color-primary", `87 68 117`);
      updateColors();
    }
  );

  // Background theme
  let backgroundColor1Var = bgDefaultColor1Btn.addEventListener("click", () => {
    localStorage.setItem("bodyBgRGB", `${50 + 14} ${62 + 14} ${93 + 14}`);
    localStorage.setItem("darkBgRGB", "50 62 93");
    localStorage.removeItem("WebDevelopersHeader");
    localStorage.removeItem("WebDevelopersMenu");
    html.classList.add("dark");
    html.classList.remove("light");
    html.setAttribute("data-menu-styles", "dark");
    html.setAttribute("data-header-styles", "dark");
    document
      .querySelector("html")
      .style.setProperty("--body-bg", localStorage.bodyBgRGB);
    document
      .querySelector("html")
      .style.setProperty("--dark-bg", localStorage.darkBgRGB);
    document.querySelector("#switcher-dark-theme").checked = true;
  });
  let backgroundColor2Var = bgDefaultColor2Btn.addEventListener("click", () => {
    localStorage.setItem("bodyBgRGB", `${81 + 14} ${93 + 14} ${50 + 14}`);
    localStorage.setItem("darkBgRGB", "81 93 50");
    localStorage.removeItem("WebDevelopersHeader");
    localStorage.removeItem("WebDevelopersMenu");
    html.classList.add("dark");
    html.classList.remove("light");
    html.setAttribute("data-menu-styles", "dark");
    html.setAttribute("data-header-styles", "dark");
    document
      .querySelector("html")
      .style.setProperty("--body-bg", localStorage.bodyBgRGB);
    document
      .querySelector("html")
      .style.setProperty("--dark-bg", localStorage.darkBgRGB);
    document.querySelector("#switcher-dark-theme").checked = true;
  });
  let backgroundColor3Var = bgDefaultColor3Btn.addEventListener("click", () => {
    localStorage.setItem("bodyBgRGB", `${79 + 14} ${50 + 14} ${93 + 14}`);
    localStorage.setItem("darkBgRGB", "79 50 93");
    localStorage.removeItem("WebDevelopersHeader");
    localStorage.removeItem("WebDevelopersMenu");
    html.classList.add("dark");
    html.classList.remove("light");
    html.setAttribute("data-menu-styles", "dark");
    html.setAttribute("data-header-styles", "dark");
    document
      .querySelector("html")
      .style.setProperty("--body-bg", localStorage.bodyBgRGB);
    document
      .querySelector("html")
      .style.setProperty("--dark-bg", localStorage.darkBgRGB);
    document.querySelector("#switcher-dark-theme").checked = true;
  });
  let backgroundColor4Var = bgDefaultColor4Btn.addEventListener("click", () => {
    localStorage.setItem("bodyBgRGB", `${50 + 14} ${87 + 14} ${93 + 14}`);
    localStorage.setItem("darkBgRGB", "50 87 93");
    localStorage.removeItem("WebDevelopersHeader");
    localStorage.removeItem("WebDevelopersMenu");
    html.classList.add("dark");
    html.classList.remove("light");
    html.setAttribute("data-menu-styles", "dark");
    html.setAttribute("data-header-styles", "dark");
    document
      .querySelector("html")
      .style.setProperty("--body-bg", localStorage.bodyBgRGB);
    document
      .querySelector("html")
      .style.setProperty("--dark-bg", localStorage.darkBgRGB);
    document.querySelector("#switcher-dark-theme").checked = true;
  });
  let backgroundColor5Var = bgDefaultColor5Btn.addEventListener("click", () => {
    localStorage.setItem("bodyBgRGB", `${93 + 14} ${50 + 14} ${50 + 14}`);
    localStorage.setItem("darkBgRGB", "93 50 50");
    localStorage.removeItem("WebDevelopersHeader");
    localStorage.removeItem("WebDevelopersMenu");
    html.classList.add("dark");
    html.classList.remove("light");
    html.setAttribute("data-menu-styles", "dark");
    html.setAttribute("data-header-styles", "dark");
    document
      .querySelector("html")
      .style.setProperty("--body-bg", localStorage.bodyBgRGB);
    document
      .querySelector("html")
      .style.setProperty("--dark-bg", localStorage.darkBgRGB);
    document.querySelector("#switcher-dark-theme").checked = true;
  });

  // Bg image
  let bgImg1Var = bgImage1Btn.addEventListener("click", () => {
    html.setAttribute("bg-img", "bgimg1");
    localStorage.setItem("bgimg", "bgimg1");
  });
  let bgImg2Var = bgImage2Btn.addEventListener("click", () => {
    html.setAttribute("bg-img", "bgimg2");
    localStorage.setItem("bgimg", "bgimg2");
  });
  let bgImg3Var = bgImage3Btn.addEventListener("click", () => {
    html.setAttribute("bg-img", "bgimg3");
    localStorage.setItem("bgimg", "bgimg3");
  });
  let bgImg4Var = bgImage4Btn.addEventListener("click", () => {
    html.setAttribute("bg-img", "bgimg4");
    localStorage.setItem("bgimg", "bgimg4");
  });
  let bgImg5Var = bgImage5Btn.addEventListener("click", () => {
    html.setAttribute("bg-img", "bgimg5");
    localStorage.setItem("bgimg", "bgimg5");
  });

  /* Light Layout Start */
  let lightThemeVar = lightBtn.addEventListener("click", () => {
    lightFn();
    localStorage.setItem("WebDevelopersHeader", "light");
    // localStorage.setItem("WebDevelopersMenu", "light");
  });
  /* Light Layout End */

  /* Dark Layout Start */
  let darkThemeVar = darkBtn.addEventListener("click", () => {
    darkFn();
    localStorage.setItem("WebDevelopersMenu", "dark");
    localStorage.setItem("WebDevelopersHeader", "dark");
  });
  /* Dark Layout End */

  /* Light Menu Start */
  let lightMenuVar = lightMenuBtn.addEventListener("click", () => {
    html.setAttribute("data-menu-styles", "light");
    localStorage.setItem("WebDevelopersMenu", "light");
  });
  /* Light Menu End */

  /* Color Menu Start */
  let colorMenuVar = colorMenuBtn.addEventListener("click", () => {
    html.setAttribute("data-menu-styles", "color");
    localStorage.setItem("WebDevelopersMenu", "color");
  });
  /* Color Menu End */

  /* Dark Menu Start */
  let darkMenuVar = darkMenuBtn.addEventListener("click", () => {
    html.setAttribute("data-menu-styles", "dark");
    localStorage.setItem("WebDevelopersMenu", "dark");
  });
  /* Dark Menu End */

  /* Gradient Menu Start */
  let gradientMenuVar = gradientMenuBtn.addEventListener("click", () => {
    html.setAttribute("data-menu-styles", "gradient");
    localStorage.setItem("WebDevelopersMenu", "gradient");
  });
  /* Gradient Menu End */

  /* Transparent Menu Start */
  let transparentMenuVar = transparentMenuBtn.addEventListener("click", () => {
    html.setAttribute("data-menu-styles", "transparent");
    localStorage.setItem("WebDevelopersMenu", "transparent");
  });
  /* Transparent Menu End */

  /* Light Header Start */
  let lightHeaderVar = lightHeaderBtn.addEventListener("click", () => {
    html.setAttribute("data-header-styles", "light");
    localStorage.setItem("WebDevelopersHeader", "light");
  });
  /* Light Header End */

  /* Color Header Start */
  let colorHeaderVar = colorHeaderBtn.addEventListener("click", () => {
    html.setAttribute("data-header-styles", "color");
    localStorage.setItem("WebDevelopersHeader", "color");
  });
  /* Color Header End */

  /* Dark Header Start */
  let darkHeaderVar = darkHeaderBtn.addEventListener("click", () => {
    html.setAttribute("data-header-styles", "dark");
    localStorage.setItem("WebDevelopersHeader", "dark");
  });
  /* Dark Header End */

  /* Gradient Header Start */
  let gradientHeaderVar = gradientHeaderBtn.addEventListener("click", () => {
    html.setAttribute("data-header-styles", "gradient");
    localStorage.setItem("WebDevelopersHeader", "gradient");
  });
  /* Gradient Header End */

  /* Transparent Header Start */
  let transparentHeaderVar = transparentHeaderBtn.addEventListener(
    "click",
    () => {
      html.setAttribute("data-header-styles", "transparent");
      localStorage.setItem("WebDevelopersHeader", "transparent");
    }
  );
  /* Transparent Header End */

  /* Full Width Layout Start */
  let fullwidthVar = fullwidthBtn.addEventListener("click", () => {
    html.setAttribute("data-width", "fullwidth");
    localStorage.setItem("WebDevelopersfullwidth", true);
    localStorage.removeItem("WebDevelopersboxed");
  });
  /* Full Width Layout End */

  /* Boxed Layout Start */
  let boxedVar = boxedBtn.addEventListener("click", () => {
    html.setAttribute("data-width", "boxed");
    localStorage.setItem("WebDevelopersboxed", true);
    localStorage.removeItem("WebDevelopersfullwidth");
    checkHoriMenu();
  });
  /* Boxed Layout End */

  /* Regular page style Start */
  let shadowVar = regular.addEventListener("click", () => {
    html.setAttribute("data-page-style", "regular");
    localStorage.setItem("WebDevelopersregular", true);
    localStorage.removeItem("WebDevelopersclassic");
  });
  /* Regular page style End */

  /* Classic page style Start */
  let noShadowVar = classic.addEventListener("click", () => {
    html.setAttribute("data-page-style", "classic");
    localStorage.setItem("WebDevelopersclassic", true);
    localStorage.removeItem("WebDevelopersregular");
  });
  /* Classic page style End */

  /* Header-Position Styles Start */
  let fixedHeaderVar = fixedHeaderBtn.addEventListener("click", () => {
    html.setAttribute("data-header-position", "fixed");
    localStorage.setItem("WebDevelopersheaderfixed", true);
    localStorage.removeItem("WebDevelopersheaderscrollable");
  });

  let scrollHeaderVar = scrollHeaderBtn.addEventListener("click", () => {
    html.setAttribute("data-header-position", "scrollable");
    localStorage.setItem("WebDevelopersheaderscrollable", true);
    localStorage.removeItem("WebDevelopersheaderfixed");
  });
  /* Header-Position Styles End */

  /* Menu-Position Styles Start */
  let fixedMenuVar = fixedMenuBtn.addEventListener("click", () => {
    html.setAttribute("data-menu-position", "fixed");
    localStorage.setItem("WebDevelopersmenufixed", true);
    localStorage.removeItem("WebDevelopersmenuscrollable");
  });

  let scrollMenuVar = scrollMenuBtn.addEventListener("click", () => {
    html.setAttribute("data-menu-position", "scrollable");
    localStorage.setItem("WebDevelopersmenuscrollable", true);
    localStorage.removeItem("WebDevelopersmenufixed");
  });
  /* Menu-Position Styles End */

  /* Default Sidemenu Start */
  let defaultVar = defaultBtn.addEventListener("click", () => {
    html.setAttribute("data-vertical-style", "default");
    html.setAttribute("data-nav-layout", "vertical");
    toggleSidemenu();
    localStorage.removeItem("WebDevelopersverticalstyles");
  });
  /* Default Sidemenu End */

  /* Closed Sidemenu Start */
  let closedVar = closedBtn.addEventListener("click", () => {
    closedSidemenuFn();
    localStorage.setItem("WebDevelopersverticalstyles", "closed");
  });
  /* Closed Sidemenu End */

  /* Hover Submenu Start */
  let detachedVar = detachedBtn.addEventListener("click", () => {
    detachedFn();
    localStorage.setItem("WebDevelopersverticalstyles", "detached");
  });
  /* Hover Submenu End */

  /* Icon Text Sidemenu Start */
  let iconTextVar = iconTextBtn.addEventListener("click", () => {
    iconTextFn();
    localStorage.setItem("WebDevelopersverticalstyles", "icontext");
  });
  /* Icon Text Sidemenu End */

  /* Icon Overlay Sidemenu Start */
  let overlayVar = overlayBtn.addEventListener("click", () => {
    iconOverayFn();
    localStorage.setItem("WebDevelopersverticalstyles", "overlay");
  });
  /* Icon Overlay Sidemenu End */

  /* doublemenu Sidemenu Start */
  let doubleVar = doubleBtn.addEventListener("click", () => {
    doubletFn();
    localStorage.setItem("WebDevelopersverticalstyles", "doublemenu");
  });
  /* doublemenu Sidemenu End */

  /* Menu Click Sidemenu Start */
  let menuClickVar = menuClickBtn.addEventListener("click", () => {
    html.removeAttribute("data-vertical-style");
    menuClickFn();
    localStorage.setItem("WebDevelopersnavstyles", "menu-click");
    localStorage.removeItem("WebDevelopersverticalstyles");
  });
  /* Menu Click Sidemenu End */

  /* Menu Hover Sidemenu Start */
  let menuhoverVar = menuHoverBtn.addEventListener("click", () => {
    html.removeAttribute("data-vertical-style");
    menuhoverFn();
    localStorage.setItem("WebDevelopersnavstyles", "menu-hover");
    localStorage.removeItem("WebDevelopersverticalstyles");
  });
  /* Menu Hover Sidemenu End */

  /* icon Click Sidemenu Start */
  let iconClickVar = iconClickBtn.addEventListener("click", () => {
    html.removeAttribute("data-vertical-style");
    iconClickFn();
    localStorage.setItem("WebDevelopersnavstyles", "icon-click");
    localStorage.removeItem("WebDevelopersverticalstyles");

    document.querySelector(".main-menu").style.marginLeft = "0px";
    document.querySelector(".main-menu").style.marginRight = "0px";
  });
  /* icon Click Sidemenu End */

  /* icon hover Sidemenu Start */
  let iconhoverVar = iconHoverBtn.addEventListener("click", () => {
    html.removeAttribute("data-vertical-style");
    iconHoverFn();
    localStorage.setItem("WebDevelopersnavstyles", "icon-hover");
    localStorage.removeItem("WebDevelopersverticalstyles");

    document.querySelector(".main-menu").style.marginLeft = "0px";
    document.querySelector(".main-menu").style.marginRight = "0px";
  });
  /* icon hover Sidemenu End */

  /* Sidemenu start*/
  let verticalVar = verticalBtn.addEventListener("click", () => {
    let mainContent = document.querySelector(".main-content");
    // local storage
    localStorage.setItem("WebDeveloperslayout", "vertical");
    // localStorage.removeItem("WebDeveloperslayout");
    // localStorage.setItem("WebDevelopersverticalstyles", 'default');
    verticalFn();
    setNavActive();
    mainContent.removeEventListener("click", clearNavDropdown);
    document.querySelectorAll(".slide").forEach((element) => {
      if (
        element.classList.contains("open") &&
        !element.classList.contains("active")
      ) {
        element.querySelector("ul").style.display = "none";
      }
    });
  });
  /* Sidemenu end */

  /* horizontal start*/
  let horiVar = horiBtn.addEventListener("click", () => {
    let mainContent = document.querySelector(".main-content");
    html.removeAttribute("data-vertical-style");
    //    local storage
    localStorage.setItem("WebDeveloperslayout", "horizontal");
    localStorage.removeItem("WebDevelopersverticalstyles");

    horizontalClickFn();
    clearNavDropdown();
    mainContent.addEventListener("click", clearNavDropdown);
  });
  /* horizontal end*/

  /* rtl start */
  let rtlVar = rtlBtn.addEventListener("click", () => {
    localStorage.setItem("WebDevelopersrtl", true);
    localStorage.removeItem("WebDevelopersltr");
    rtlFn();
    if (document.querySelector("#color-slider")) {
      document.querySelectorAll(".noUi-origin").forEach((e) => {
        e.classList.add("!transform-none");
      });
    }
  });
  /* rtl end */

  /* ltr start */
  let ltrVar = ltrBtn.addEventListener("click", () => {
    //    local storage
    localStorage.setItem("WebDevelopersltr", true);
    localStorage.removeItem("WebDevelopersrtl");
    ltrFn();
    if (document.querySelector("#color-slider")) {
      document.querySelectorAll(".noUi-origin").forEach((e) => {
        e.classList.remove("!transform-none");
      });
    }
  });
  /* ltr end */

  // reset all start
  let resetVar = ResetAll.addEventListener("click", () => {
    ResetAllFn();
    setNavActive();
    document.querySelectorAll(".slide").forEach((element) => {
      if (
        element.classList.contains("open") &&
        !element.classList.contains("active")
      ) {
        console.log(element);
        element.querySelector("ul").style.display = "none";
      }
    });
  });
  // reset all start
}

function ltrFn() {
  let html = document.querySelector("html");
  html.setAttribute("dir", "ltr");
  document.querySelector("#switcher-ltr").checked = true;
  checkOptions();
}

function rtlFn() {
  let html = document.querySelector("html");
  html.setAttribute("dir", "rtl");
  checkOptions();
}

function lightFn() {
  let html = document.querySelector("html");
  html.classList.remove("dark");
  html.classList.add("light");
  html.setAttribute("data-header-styles", "light");
  html.setAttribute("data-menu-styles", "dark");
  document.querySelector("#switcher-light-theme").checked = true;
  document.querySelector("#switcher-menu-dark").checked = true;
  document.querySelector("#switcher-header-light").checked = true;
  updateColors();
  localStorage.setItem("WebDeveloperslighttheme", true);
  localStorage.removeItem("WebDevelopersdarktheme");
  localStorage.removeItem("WebDevelopersbgColor");
  localStorage.removeItem("WebDevelopersheaderbg");
  localStorage.removeItem("WebDevelopersbgwhite");
  localStorage.removeItem("WebDevelopersmenubg");
  localStorage.removeItem("darkBgRGB");
  localStorage.removeItem("bodyBgRGB");
  localStorage.removeItem("WebDevelopersMenu");
  checkOptions();
  html.style.removeProperty("--body-bg");
  html.style.removeProperty("--dark-bg");
  if (document.querySelector("html").getAttribute("data-nav-layout") =="horizontal") {
    document.querySelector("html").setAttribute("data-menu-styles", "light");
    document.querySelector("#switcher-menu-light").checked = true;
  }

  // localStorage.removeItem("WebDevelopersMenu")
}

function darkFn() {
  let html = document.querySelector("html");
  html.classList.add("dark");
  html.classList.remove("light");
  html.setAttribute("data-header-styles", "dark");
  html.setAttribute("data-menu-styles", "dark");
  document.querySelector("#switcher-menu-dark").checked = true;
  document.querySelector("#switcher-header-dark").checked = true;
  document
    .querySelector("html")
    .style.removeProperty("--body-bg", localStorage.bodyBgRGB);
  document
    .querySelector("html")
    .style.removeProperty("--dark-bg", localStorage.darkBgRGB);
  updateColors();
  localStorage.setItem("WebDevelopersdarktheme", true);
  localStorage.removeItem("WebDeveloperslighttheme");
  localStorage.removeItem("bodyBgRGB");
  localStorage.removeItem("WebDevelopersbgColor");
  localStorage.removeItem("WebDevelopersheaderbg");
  localStorage.removeItem("WebDevelopersbgwhite");
  localStorage.removeItem("WebDevelopersmenubg");
  checkOptions();
}

function verticalFn() {
  let html = document.querySelector("html");
  html.setAttribute("data-nav-layout", "vertical");
  html.setAttribute("data-vertical-style", "overlay");
  html.removeAttribute("data-nav-style");
  localStorage.removeItem("WebDevelopersnavstyles");
  html.removeAttribute("toggled");
  document.querySelector("#switcher-vertical").checked = true;
  document.querySelector("#switcher-default-menu").checked = true;

  document.querySelector("#switcher-menu-click").checked = false;
  document.querySelector("#switcher-menu-hover").checked = false;
  document.querySelector("#switcher-icon-click").checked = false;
  document.querySelector("#switcher-icon-hover").checked = false;
  checkOptions();
  document.querySelector(".main-menu").style.marginLeft = "0px";
  document.querySelector(".main-menu").style.marginRight = "0px";
  html.setAttribute("data-menu-styles", "dark");
}

function horizontalClickFn() {
  if (document.querySelector("#switcher-horizontal")) {
    document.querySelector("#switcher-horizontal").checked = true;
  }
  let html = document.querySelector("html");
  html.setAttribute("data-nav-layout", "horizontal");
  if (!html.getAttribute("data-nav-style")) {
    html.setAttribute("data-nav-style", "menu-click");
  }
  if (!localStorage.WebDevelopersMenu && !localStorage.bodyBgRGB) {
    html.setAttribute("data-menu-styles", "light");
  }
  checkOptions();
}

function ResetAllFn() {
  let html = document.querySelector("html");
  checkOptions();

  // clearing localstorage
  localStorage.clear();

  // reseting to light
  lightFn();

  //rangeslider
  if (document.querySelector("#color-slider")) {
    document.querySelectorAll(".noUi-origin").forEach((e) => {
      e.classList.remove("!transform-none");
    });
  }

  // clearing attibutes
  // removing header, menu, pageStyle & boxed
  html.removeAttribute("data-nav-style");
  html.removeAttribute("data-menu-position");
  html.removeAttribute("data-header-position");
  html.removeAttribute("data-width");
  html.removeAttribute("data-page-style");

  // removing theme styles
  html.removeAttribute("bg-img");

  // clear primary & bg color
  html.style.removeProperty(`--color-primary`);
  html.style.removeProperty(`--color-primary-rgb`);
  html.style.removeProperty(`--body-bg`);
  html.style.removeProperty(`--dark-bg`);

  // reseting to ltr
  ltrFn();

  // reseting to vertical
  verticalFn();
  mainContent.removeEventListener("click", clearNavDropdown);

  // reseting page style
  document.querySelector("#switcher-classic").checked = false;
  document.querySelector("#switcher-regular").checked = true;

  // reseting layout width styles
  document.querySelector("#switcher-full-width").checked = true;
  document.querySelector("#switcher-boxed").checked = false;

  // reseting menu position styles
  document.querySelector("#switcher-menu-fixed").checked = true;
  document.querySelector("#switcher-menu-scroll").checked = false;

  // reseting header position styles
  document.querySelector("#switcher-header-fixed").checked = true;
  document.querySelector("#switcher-header-scroll").checked = false;

  // reseting sidemenu layout styles
  document.querySelector("#switcher-default-menu").checked = true;
  document.querySelector("#switcher-closed-menu").checked = false;
  document.querySelector("#switcher-icontext-menu").checked = false;
  document.querySelector("#switcher-icon-overlay").checked = false;
  document.querySelector("#switcher-detached").checked = false;
  document.querySelector("#switcher-double-menu").checked = false;

  // reseting chart colors
  updateColors();
  document.querySelector(".main-menu").style.marginLeft = "0px";
  document.querySelector(".main-menu").style.marginRight = "0px";

  document.querySelector("#switcher-primary").checked = true;
  document.querySelector("#switcher-background").checked = true;
  document.querySelectorAll(".has-sub").forEach((element) => {
    if (
      element.classList.contains("open") &&
      !element.classList.contains("active")
    ) {
      element.classList.remove("open");
      element.querySelector("ul").style = "";
    }
  });
}

function checkOptions() {
  // dark
  if (localStorage.getItem("WebDevelopersdarktheme")) {
    document.querySelector("#switcher-dark-theme").checked = true;
  } else {
    document.querySelector("#switcher-light-theme").checked = true;
  }

  // horizontal
  if (localStorage.getItem("WebDeveloperslayout") === "horizontal") {
    document.querySelector("#switcher-horizontal").checked = true;
  } else {
    document.querySelector("#switcher-vertical").checked = true;
  }

  //RTL
  if (localStorage.getItem("WebDevelopersrtl")) {
    document.querySelector("#switcher-rtl").checked = true;
  } else {
    document.querySelector("#switcher-ltr").checked = true;
  }

  // light header
  if (localStorage.getItem("WebDevelopersHeader") === "light") {
    document.querySelector("#switcher-header-light").checked = true;
  }

  // color header
  if (localStorage.getItem("WebDevelopersHeader") === "color") {
    document.querySelector("#switcher-header-primary").checked = true;
  }

  // gradient header
  if (localStorage.getItem("WebDevelopersHeader") === "gradient") {
    document.querySelector("#switcher-header-gradient").checked = true;
  }

  // dark header
  if (localStorage.getItem("WebDevelopersHeader") === "dark") {
    document.querySelector("#switcher-header-dark").checked = true;
  }
  // transparent header
  if (localStorage.getItem("WebDevelopersHeader") === "transparent") {
    document.querySelector("#switcher-header-transparent").checked = true;
  }

  // light menu
  if (localStorage.getItem("WebDevelopersMenu") === "light") {
    document.querySelector("#switcher-menu-light").checked = true;
  }

  // color menu
  if (localStorage.getItem("WebDevelopersMenu") === "color") {
    document.querySelector("#switcher-menu-primary").checked = true;
  }

  // gradient menu
  if (localStorage.getItem("WebDevelopersMenu") === "gradient") {
    document.querySelector("#switcher-menu-gradient").checked = true;
  }

  // dark menu
  if (localStorage.getItem("WebDevelopersMenu") === "dark") {
    document.querySelector("#switcher-menu-dark").checked = true;
  }
  // transparent menu
  if (localStorage.getItem("WebDevelopersMenu") === "transparent") {
    document.querySelector("#switcher-menu-transparent").checked = true;
  }

  //boxed
  if (localStorage.getItem("WebDevelopersboxed")) {
    document.querySelector("#switcher-boxed").checked = true;
  }

  //scrollable
  if (localStorage.getItem("WebDevelopersheaderscrollable")) {
    document.querySelector("#switcher-header-scroll").checked = true;
  }
  if (localStorage.getItem("WebDevelopersmenuscrollable")) {
    document.querySelector("#switcher-menu-scroll").checked = true;
  }

  //fixed
  if (localStorage.getItem("WebDevelopersheaderfixed")) {
    document.querySelector("#switcher-header-fixed").checked = true;
  }
  if (localStorage.getItem("WebDevelopersmenufixed")) {
    document.querySelector("#switcher-menu-fixed").checked = true;
  }

  //classic
  if (localStorage.getItem("WebDevelopersclassic")) {
    document.querySelector("#switcher-classic").checked = true;
  }

  // sidemenu layout style
  if (localStorage.WebDevelopersverticalstyles) {
    let verticalStyles = localStorage.getItem("WebDevelopersverticalstyles");
    switch (verticalStyles) {
      case "default":
        document.querySelector("#switcher-default-menu").checked = true;
        break;
      case "closed":
        document.querySelector("#switcher-closed-menu").checked = true;
        break;
      case "icontext":
        document.querySelector("#switcher-icontext-menu").checked = true;
        break;
      case "overlay":
        document.querySelector("#switcher-icon-overlay").checked = true;
        break;
      case "detached":
        document.querySelector("#switcher-detached").checked = true;
        break;
      case "doublemenu":
        document.querySelector("#switcher-double-menu").checked = true;
        break;
      default:
        document.querySelector("#switcher-default-menu").checked = true;
        break;
    }
  }
  // navigation menu style
  if (localStorage.WebDevelopersnavstyles) {
    let navStyles = localStorage.getItem("WebDevelopersnavstyles");
    switch (navStyles) {
      case "menu-click":
        document.querySelector("#switcher-menu-click").checked = true;
        break;
      case "menu-hover":
        document.querySelector("#switcher-menu-hover").checked = true;
        break;
      case "icon-click":
        document.querySelector("#switcher-icon-click").checked = true;
        break;
      case "icon-hover":
        document.querySelector("#switcher-icon-hover").checked = true;
        break;
    }
  }
}

// chart colors
let myVarVal, primaryRGB1;
function updateColors() {
  "use strict";
  primaryRGB1 = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-primary-rgb")
    .trim();

  //get variable
  myVarVal = localStorage.getItem("primaryRGB") || primaryRGB1;

  //index
  if (document.querySelector("#salesOverview") !== null) {
    setTimeout(() => {
      salesOverview();
    }, 100);
  }
  if (document.querySelector("#visitors") !== null) {
    visitorschart();
  }
  if (document.querySelector("#sales-donut") !== null) {
    salesdonut();
  }

  //index-2
  if (document.querySelector("#earnings") !== null) {
    Earnings();
  }

  //index-3
  if (document.querySelector("#crypto") !== null) {
    cryptoCurrency();
  }

  //index-4
  if (document.querySelector("#subscriptionOverview") !== null) {
    subOverview();
  }
  if (document.querySelector("#candidates-chart") !== null) {
    Candidates();
  }

  //index-5
  if (document.querySelector("#nft-statistics") !== null) {
    nftStatistics();
  }

  //index-6
  if (document.querySelector("#audienceReport") !== null) {
    audience();
  }
  if (document.querySelector("#sessions") !== null) {
    Sessions();
  }
  if (document.querySelector("#audience") !== null) {
    audienceOverview();
  }
  if (document.querySelector("#session2") !== null) {
    session2();
  }

  //index-7
  if (document.querySelector("#projectAnalysis") !== null) {
    projectAnalysis();
  }

  //index-8
  if (document.querySelector("#performanceReport") !== null) {
    performanceReport();
  }

  //index-9
  if (document.querySelector("#revenue") !== null) {
    revenueOverview();
  }
  if (document.querySelector("#leads") !== null) {
    leads();
  }

  //index-10
  if (document.querySelector("#statistics") !== null) {
    statistics();
  }

  //index-11
  if (document.querySelector("#totalInvested") !== null) {
    totalInvested();
  }
  if (document.querySelector("#totalInvestmentsStats") !== null) {
    totalInvestmentsStats();
  }

  //index-12
  if (document.querySelector("#earningsReport") !== null) {
    earningsReport();
  }

  //widgets
  if (document.querySelector("#report") !== null) {
    targetReport();
  }
  if (document.querySelector("#views") !== null) {
    pageviews();
  }
}
updateColors();

function localStorageBackup() {
  // if there is a value stored, update color picker and background color
  // Used to retrive the data from local storage
  if (localStorage.primaryRGB) {
    if (document.querySelector(".theme-container-primary")) {
      document.querySelector(".theme-container-primary").value =
        localStorage.primaryRGB;
    }
    document
      .querySelector("html")
      .style.setProperty("--color-primary", localStorage.primaryRGB1);
    document
      .querySelector("html")
      .style.setProperty("--color-primary-rgb", localStorage.primaryRGB);

    if (localStorage.primaryRGB == "172, 172, 80") {
      if (document.querySelector("#switcher-primary2")) {
        document.querySelector("#switcher-primary2").checked = true;
      }
    }
    if (localStorage.primaryRGB == "58, 88, 146") {
      if (document.querySelector("#switcher-primary")) {
        document.querySelector("#switcher-primary").checked = true;
      }
    }
    if (localStorage.primaryRGB == "92, 144, 163") {
      if (document.querySelector("#switcher-primary1")) {
        document.querySelector("#switcher-primary1").checked = true;
      }
    }
    if (localStorage.primaryRGB == "165, 94, 131") {
      if (document.querySelector("#switcher-primary3")) {
        document.querySelector("#switcher-primary3").checked = true;
      }
    }
    if (localStorage.primaryRGB == "87, 68, 117") {
      if (document.querySelector("#switcher-primary4")) {
        document.querySelector("#switcher-primary4").checked = true;
      }
    }
  }
  if (localStorage.bodyBgRGB) {
    if (document.querySelector(".theme-container-background")) {
      document.querySelector(".theme-container-background").value =
        localStorage.bodyBgRGB;
    }
    document.querySelector("html").style.setProperty("--body-bg", localStorage.bodyBgRGB);
    document.querySelector("html").style.setProperty("--dark-bg", localStorage.darkBgRGB);
    let html = document.querySelector("html");
    html.classList.add("dark");
    html.classList.remove("light");
    localStorage.removeItem("WebDeveloperslighttheme");
    html.setAttribute("data-menu-styles", "dark");
    html.setAttribute("data-header-styles", "dark");
    if (!document.querySelector(".authentication-page") && !document.querySelector(".cover1")) {
      document.querySelector("#switcher-dark-theme").checked = true;
    }
    if (localStorage.bodyBgRGB == "64 76 107") {
      if (document.querySelector("#switcher-background")) {
        document.querySelector("#switcher-background").checked = true;
      }
    }
    if (localStorage.bodyBgRGB == "95 107 64") {
      if (document.querySelector("#switcher-background1")) {
        document.querySelector("#switcher-background1").checked = true;
      }
    }
    if (localStorage.bodyBgRGB == "93 64 107") {
      if (document.querySelector("#switcher-background2")) {
        document.querySelector("#switcher-background2").checked = true;
      }
    }
    if (localStorage.bodyBgRGB == "64 101 107") {
      if (document.querySelector("#switcher-background3")) {
        document.querySelector("#switcher-background3").checked = true;
      }
    }
    if (localStorage.bodyBgRGB == "107 64 64") {
      if (document.querySelector("#switcher-background4")) {
        document.querySelector("#switcher-background4").checked = true;
      }
    }
  }
  if (localStorage.WebDevelopersdarktheme) {
    let html = document.querySelector("html");
    html.classList.add("dark");
    html.classList.remove("light");
  }
  if (localStorage.WebDeveloperslighttheme) {
    let html = document.querySelector("html");
    html.classList.add("light");
    html.classList.remove("dark");
    if (document.querySelector("html").getAttribute("data-nav-layout") == "horizontal") {
      document.querySelector("html").setAttribute("data-menu-styles", "light");
    }
  }
  if (localStorage.WebDevelopersrtl) {
    let html = document.querySelector("html");
    html.setAttribute("dir", "rtl");
  }
  if (localStorage.WebDeveloperslayout) {
    let html = document.querySelector("html");
    let layoutValue = localStorage.getItem("WebDeveloperslayout");
    switch (layoutValue) {
      case "vertical":
        html.setAttribute("data-nav-layout", "vertical");
        break;
      case "horizontal":
        html.setAttribute("data-nav-layout", "horizontal");
        let menuNav = document.querySelector(".main-menu");
        let mainContainer1 = document.querySelector(".main-sidebar");
        setTimeout(() => {
          if (
            !document.querySelector(".authentication-page") &&
            !document.querySelector(".cover1")
          ) {
            if (menuNav.scrollWidth < mainContainer1.offsetWidth) {
              document.getElementById("slide-right").classList.add("hidden");
              document.getElementById("slide-left").classList.add("hidden");
            }
          }
        }, 500);
        break;
    }
  }
  if (localStorage.WebDevelopersverticalstyles) {
    let html = document.querySelector("html");
    let verticalStyles = localStorage.getItem("WebDevelopersverticalstyles");
    switch (verticalStyles) {
      case "closed":
        html.setAttribute("data-vertical-style", "closed");
        html.removeAttribute("data-nav-style");
        localStorage.removeItem("WebDevelopersnavstyles");
        break;
      case "icontext":
        html.setAttribute("data-vertical-style", "icontext");
        html.removeAttribute("data-nav-style");
        localStorage.removeItem("WebDevelopersnavstyles");
        break;
      case "overlay":
        html.setAttribute("data-vertical-style", "overlay");
        html.removeAttribute("data-nav-style");
        localStorage.removeItem("WebDevelopersnavstyles");
        break;
      case "detached":
        html.setAttribute("data-vertical-style", "detached");
        html.removeAttribute("data-nav-style");
        localStorage.removeItem("WebDevelopersnavstyles");
        break;
      case "doublemenu":
        html.setAttribute("data-vertical-style", "doublemenu");
        html.removeAttribute("data-nav-style");
        localStorage.removeItem("WebDevelopersnavstyles"); // Select the menu slide item
        const menuSlideItem = document.querySelectorAll(
          ".main-menu > li > .side-menu__item"
        );

        // Create the tooltip element
        const tooltip = document.createElement("div");
        tooltip.className = "custome-tooltip";
        // tooltip.textContent = "This is a tooltip";

        // Set the CSS properties of the tooltip element
        tooltip.style.setProperty("position", "fixed");
        tooltip.style.setProperty("display", "none");
        tooltip.style.setProperty("padding", "0.5rem");
        tooltip.style.setProperty("font-weight", "500");
        tooltip.style.setProperty("font-size", "0.75rem");
        tooltip.style.setProperty("background-color", "rgb(15, 23 ,42)");
        tooltip.style.setProperty("color", "rgb(255, 255 ,255)");
        tooltip.style.setProperty("margin-inline-start", "45px");
        tooltip.style.setProperty("border-radius", "0.25rem");
        tooltip.style.setProperty("z-index", "99");

        menuSlideItem.forEach((e) => {
          // Add an event listener to the menu slide item to show the tooltip
          e.addEventListener("mouseenter", () => {
            tooltip.style.setProperty("display", "block");
            tooltip.textContent =
              e.querySelector(".side-menu__label").textContent;
            if (
              document
                .querySelector("html")
                .getAttribute("data-vertical-style") == "doublemenu"
            ) {
              e.appendChild(tooltip);
            }
          });

          // Add an event listener to hide the tooltip
          e.addEventListener("mouseleave", () => {
            tooltip.style.setProperty("display", "none");
            tooltip.textContent =
              e.querySelector(".side-menu__label").textContent;
            if (
              document
                .querySelector("html")
                .getAttribute("data-vertical-style") == "doublemenu"
            ) {
              e.removeChild(tooltip);
            }
          });
        });
        break;
    }
  }
  if (localStorage.WebDevelopersnavstyles) {
    let html = document.querySelector("html");
    let navStyles = localStorage.getItem("WebDevelopersnavstyles");
    switch (navStyles) {
      case "menu-click":
        html.setAttribute("data-nav-style", "menu-click");
        localStorage.removeItem("WebDevelopersverticalstyles");
        if (
          !document.querySelector(".authentication-page") &&
          !document.querySelector(".cover1")
        ) {
          menuClickFn();
        }
        html.removeAttribute("data-vertical-style");
        break;
      case "menu-hover":
        html.setAttribute("data-nav-style", "menu-hover");
        localStorage.removeItem("WebDevelopersverticalstyles");
        if (
          !document.querySelector(".authentication-page") &&
          !document.querySelector(".cover1")
        ) {
          menuhoverFn();
        }
        html.removeAttribute("data-vertical-style");
        break;
      case "icon-click":
        html.setAttribute("data-nav-style", "icon-click");
        localStorage.removeItem("WebDevelopersverticalstyles");
        if (
          !document.querySelector(".authentication-page") &&
          !document.querySelector(".cover1")
        ) {
          iconClickFn();
        }
        html.removeAttribute("data-vertical-style");
        break;
      case "icon-hover":
        html.setAttribute("data-nav-style", "icon-hover");
        localStorage.removeItem("WebDevelopersverticalstyles");
        if (
          !document.querySelector(".authentication-page") &&
          !document.querySelector(".cover1")
        ) {
          iconHoverFn();
        }
        html.removeAttribute("data-vertical-style");
        break;
    }
  }
  if (localStorage.WebDevelopersclassic) {
    let html = document.querySelector("html");
    html.setAttribute("data-page-style", "classic");
  }
  if (localStorage.WebDevelopersboxed) {
    let html = document.querySelector("html");
    html.setAttribute("data-width", "boxed");
  }
  if (localStorage.WebDevelopersheaderfixed) {
    let html = document.querySelector("html");
    html.setAttribute("data-header-position", "fixed");
  }
  if (localStorage.WebDevelopersheaderscrollable) {
    let html = document.querySelector("html");
    html.setAttribute("data-header-position", "scrollable");
  }
  if (localStorage.WebDevelopersmenufixed) {
    let html = document.querySelector("html");
    html.setAttribute("data-menu-position", "fixed");
  }
  if (localStorage.WebDevelopersmenuscrollable) {
    let html = document.querySelector("html");
    html.setAttribute("data-menu-position", "scrollable");
  }
  if (localStorage.WebDevelopersMenu) {
    let html = document.querySelector("html");
    let menuValue = localStorage.getItem("WebDevelopersMenu");
    switch (menuValue) {
      case "light":
        html.setAttribute("data-menu-styles", "light");
        break;
      case "dark":
        html.setAttribute("data-menu-styles", "dark");
        break;
      case "color":
        html.setAttribute("data-menu-styles", "color");
        break;
      case "gradient":
        html.setAttribute("data-menu-styles", "gradient");
        break;
      case "transparent":
        html.setAttribute("data-menu-styles", "transparent");
        break;
      default:
        break;
    }
  }
  if (localStorage.WebDevelopersHeader) {
    let html = document.querySelector("html");
    let headerValue = localStorage.getItem("WebDevelopersHeader");
    switch (headerValue) {
      case "light":
        html.setAttribute("data-header-styles", "light");
        break;
      case "dark":
        html.setAttribute("data-header-styles", "dark");
        break;
      case "color":
        html.setAttribute("data-header-styles", "color");
        break;
      case "gradient":
        html.setAttribute("data-header-styles", "gradient");
        break;
      case "transparent":
        html.setAttribute("data-header-styles", "transparent");
        break;

      default:
        break;
    }
  }
  if (localStorage.bgimg) {
    let html = document.querySelector("html");
    let value = localStorage.getItem("bgimg");
    html.setAttribute("bg-img", value);
    if (document.querySelector("#hs-overlay-switcher")) {
      switch (value) {
        case "bgimg1":
          document.querySelector("#switcher-bg-img").checked = true;
          break;
        case "bgimg2":
          document.querySelector("#switcher-bg-img1").checked = true;
          break;
        case "bgimg3":
          document.querySelector("#switcher-bg-img2").checked = true;
          break;
        case "bgimg4":
          document.querySelector("#switcher-bg-img3").checked = true;
          break;
        case "bgimg5":
          document.querySelector("#switcher-bg-img4").checked = true;
          break;
        default:
          break;
      }
    }
  }
}

if (document.querySelector("#hs-overlay-switcher")) {
  /* Horizontal Start */
  if (
    document.querySelector("html").getAttribute("data-nav-layout") ===
      "horizontal" &&
    !document.querySelector(".landing-body") == true
  ) {
    horizontalClickFn();
  }
  /* Horizontal Start */
}
/* RTL Start */
if (document.querySelector("html").getAttribute("dir") === "rtl") {
  if (document.querySelector("#hs-overlay-switcher")) {
    rtlFn();
  }
}
