import React from "react";

function Footer() {
  return (
    <div className="w-full px-8 xl:px-40 mb-10">
      <div className="h-[2px] w-full bg-white/15 mb-6"></div>
      <div className="flex items-center justify-between w-full">
        <h1 className="text-[10px]">
          Copyright © 2024 QzSeeker
        </h1>
        <div className="flex w-max gap-2">
          <a href="https://www.linkedin.com/in/arpit-yadav-29b5a0257/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
          <svg
            className="h-4 cursor-pointer fill-current hover:text-white/25 ease-in transition-all"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
          </a>
          <a href="https://twitter.com/arpityadv_?t=cHZVjiDOPwESuHtLPyT2Ag&s=09" target="_blank">
          <svg
            className="h-4 cursor-pointer fill-current hover:text-white/25 ease-in transition-all"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
          </a>
          <a href="mailto:qzseeker@gmail.com" target="_blank">
          <svg
            className="h-4 cursor-pointer fill-current hover:text-white/25 ease-in transition-all"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
          </svg>
          </a>
          <a href="https://hashnode.com/@qzseeker" target="_blank">
          <svg
            className="h-4 cursor-pointer fill-current hover:text-white/25 ease-in transition-all"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M35.2 171.1C-11.7 217.1-11.7 294 35.2 340.9L171.1 476.8C217.1 523.7 294 523.7 340.9 476.8L476.8 340.9C523.7 294 523.7 217.1 476.8 171.1L340.9 35.2C294-11.7 217.1-11.7 171.1 35.2L35.2 171.1zM315.5 315.5C282.6 348.3 229.4 348.3 196.6 315.5C163.7 282.6 163.7 229.4 196.6 196.6C229.4 163.7 282.6 163.7 315.5 196.6C348.3 229.4 348.3 282.6 315.5 315.5z" />
          </svg>
          </a>
          <a href="https://instagram.com/qzseeker">
          <svg 
            className="h-4 cursor-pointer fill-current hover:text-white/25 ease-in transition-all"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </a>
        </div>
      </div>
      </div>
  );
}

export default Footer;
