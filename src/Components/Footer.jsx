import React from "react";

function Footer() {
  return (
    <div className="w-full h-max mb-12 px-8 md:px-40">
      <div className="h-[2px] w-full bg-white/15 mb-6"></div>
      <div className="flex justify-between mx-8 xl:mx-40">
        <h1 className="text-[10px]">
          Copyright © 2024 QzSeeker
        </h1>
        <div className="flex w-max gap-2">
          <a href="https://www.linkedin.com/in/arpit-yadav-29b5a0257/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
          <svg
            className="h-4 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="white"
          >
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
          </a>
          <a href="https://twitter.com/arpityadv_?t=cHZVjiDOPwESuHtLPyT2Ag&s=09" target="_blank">
          <svg
            className="h-4 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="white"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
          </a>
          <a href="mailto:qzseeker@gmail.com" target="_blank">
          <svg
            className="h-4 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="white"
          >
            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
          </svg>
          </a>
          <a href="https://hashnode.com/@qzseeker" target="_blank">
          <svg
            className="h-4 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="white"
          >
            <path d="M35.2 171.1C-11.7 217.1-11.7 294 35.2 340.9L171.1 476.8C217.1 523.7 294 523.7 340.9 476.8L476.8 340.9C523.7 294 523.7 217.1 476.8 171.1L340.9 35.2C294-11.7 217.1-11.7 171.1 35.2L35.2 171.1zM315.5 315.5C282.6 348.3 229.4 348.3 196.6 315.5C163.7 282.6 163.7 229.4 196.6 196.6C229.4 163.7 282.6 163.7 315.5 196.6C348.3 229.4 348.3 282.6 315.5 315.5z" />
          </svg>
          </a>
        </div>
      </div>
      </div>
  );
}

export default Footer;
