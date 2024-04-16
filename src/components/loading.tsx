"use client";

import React from "react";

export function Loading() {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    function updateStep() {
      setStep((step) => {
        if (step < 3) return step + 1;
        else return 0;
      });
    }
    const interval = setInterval(updateStep, 300);
    return () => clearInterval(interval);
  }, []);

  function displayStep(i: number) {
    return {
      display: step === i ? "block" : "none",
    };
  }

  return (
    <div className="absolute left-0 top-0 z-[1000] flex h-screen w-full animate-fade-in">
      <div className="m-auto flex aspect-square w-20 items-center justify-center rounded-full bg-primary pl-[5px]">
        <svg
          width="46"
          height="31"
          viewBox="0 0 46 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="carregando" clipPath="url(#clip0_115_267)">
            <g style={displayStep(0)} id="1">
              <path
                id="Vector"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.3414 18C29.6129 18 30.7462 18.8015 31.1699 20.0003C31.5832 21.1695 32.6985 22 34 22C35.6569 22 37 20.6569 37 19C37 18.2297 36.7136 17.5335 36.2368 17.0007C35.2173 15.8617 35.2173 14.1383 36.2368 12.9993C36.7136 12.4665 37 11.7703 37 11C37 9.34315 35.6569 8 34 8C32.6985 8 31.5832 8.8305 31.1699 9.99974C30.7462 11.1985 29.6129 12 28.3414 12H11.6586C10.3871 12 9.25377 11.1985 8.83007 9.99974C8.4168 8.8305 7.30153 8 6 8C4.34314 8 3 9.34314 3 11C3 11.7703 3.28637 12.4665 3.76319 12.9993C4.78265 14.1383 4.78265 15.8617 3.76319 17.0007C3.28637 17.5335 3 18.2297 3 19C3 20.6569 4.34314 22 6 22C7.30153 22 8.4168 21.1695 8.83007 20.0003C9.25377 18.8015 10.3871 18 11.6586 18H28.3414ZM11.6586 21C10.8349 23.3304 8.61244 25 6 25C2.68629 25 -1.44847e-07 22.3137 0 19C6.7171e-08 17.4633 0.577706 16.0615 1.52779 15C0.577706 13.9385 2.82519e-07 12.5367 3.49691e-07 11C4.94537e-07 7.68629 2.68629 5 6 5C8.61244 5 10.8349 6.66961 11.6586 9H28.3414C29.1651 6.66961 31.3876 5 34 5C37.3137 5 40 7.68629 40 11C40 12.5367 39.4223 13.9385 38.4722 15C39.4223 16.0615 40 17.4633 40 19C40 22.3137 37.3137 25 34 25C31.3876 25 29.1651 23.3304 28.3414 21H11.6586Z"
                fill="#764701"
              />
            </g>
            <g style={displayStep(1)} id="2">
              <path
                id="Vector_2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.4683 16.5271C39.8098 17.2811 40 18.1184 40 19C40 22.3137 37.3137 25 34 25C31.3876 25 29.1651 23.3304 28.3414 21H11.6586C10.8349 23.3304 8.61244 25 6 25C2.68629 25 0 22.3137 0 19C0 17.4633 0.577705 16.0615 1.52779 15C0.577705 13.9385 0 12.5367 0 11C0 7.68629 2.68629 5 6 5C8.61244 5 10.8349 6.66961 11.6586 9H27.1178C27.2875 10.07 27.6358 11.0805 28.1313 12H11.6586C10.3871 12 9.25377 11.1985 8.83007 9.99974C8.4168 8.8305 7.30153 8 6 8C4.34314 8 3 9.34314 3 11C3 11.7703 3.28637 12.4665 3.76319 12.9993C4.78265 14.1383 4.78265 15.8617 3.76319 17.0007C3.28637 17.5335 3 18.2297 3 19C3 20.6569 4.34314 22 6 22C7.30153 22 8.4168 21.1695 8.83007 20.0003C9.25377 18.8015 10.3871 18 11.6586 18H28.3414C29.6129 18 30.7462 18.8015 31.1699 20.0003C31.5832 21.1695 32.6985 22 34 22C35.6569 22 37 20.6569 37 19C37 18.2297 36.7136 17.5335 36.2368 17.0007L36.2329 16.9963C36.3216 16.9988 36.4107 17 36.5 17C37.5366 17 38.5344 16.834 39.4683 16.5271Z"
                fill="#764701"
              />
              <path
                id="Vector_3"
                d="M29.353 2.75224C29.1581 1.94707 29.6528 1.13633 30.4579 0.941391C31.2631 0.746455 32.0738 1.24114 32.2688 2.04631L32.9747 4.96207C33.1696 5.76724 32.6749 6.57798 31.8698 6.77291C31.0646 6.96785 30.2539 6.47316 30.0589 5.668L29.353 2.75224Z"
                fill="#764701"
              />
              <path
                id="Vector_4"
                d="M38.174 3.06414C38.6055 2.35696 39.5286 2.13348 40.2357 2.56497C40.9429 2.99647 41.1664 3.91955 40.7349 4.62673L39.1723 7.18765C38.7408 7.89483 37.8177 8.11831 37.1105 7.68681C36.4034 7.25532 36.1799 6.33224 36.6114 5.62506L38.174 3.06414Z"
                fill="#764701"
              />
              <path
                id="Vector_5"
                d="M43.737 9.04417C44.5421 8.84924 45.3529 9.34392 45.5478 10.1491C45.7427 10.9543 45.248 11.765 44.4429 11.96L41.5271 12.6659C40.722 12.8608 39.9112 12.3662 39.7163 11.561C39.5213 10.7558 40.016 9.94503 40.8212 9.7501L43.737 9.04417Z"
                fill="#764701"
              />
            </g>
            <g style={displayStep(2)} id="3">
              <path
                id="Vector_6"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.0129 21H11.6586C10.8349 23.3304 8.61244 25 6 25C2.68629 25 0 22.3137 0 19C0 17.4633 0.577705 16.0615 1.52779 15C0.577705 13.9385 0 12.5367 0 11C0 7.68629 2.68629 5 6 5C8.61244 5 10.8349 6.66961 11.6586 9H27.1178C27.2875 10.07 27.6358 11.0805 28.1313 12H11.6586C10.3871 12 9.25377 11.1985 8.83007 9.99974C8.4168 8.8305 7.30153 8 6 8C4.34314 8 3 9.34314 3 11C3 11.7703 3.28637 12.4665 3.76319 12.9993C4.78265 14.1383 4.78265 15.8617 3.76319 17.0007C3.28637 17.5335 3 18.2297 3 19C3 20.6569 4.34314 22 6 22C7.30153 22 8.4168 21.1695 8.83007 20.0003C9.25377 18.8015 10.3871 18 11.6586 18H22.6655C22.2943 18.9361 22.0676 19.9453 22.0129 21Z"
                fill="#764701"
              />
              <path
                id="Vector_7"
                d="M34.2594 13.207C35.0287 12.8997 35.9016 13.2743 36.2088 14.0437C36.5161 14.813 36.1415 15.6858 35.3721 15.993L32.5861 17.1057C31.8167 17.4129 30.9439 17.0383 30.6366 16.2689C30.3294 15.4996 30.7041 14.6269 31.4734 14.3196L34.2594 13.207Z"
                fill="#764701"
              />
              <path
                id="Vector_8"
                d="M35.2024 21.983C35.9636 22.3098 36.3159 23.1918 35.9891 23.953C35.6623 24.7143 34.7803 25.0665 34.0191 24.7398L31.2623 23.5565C30.501 23.2297 30.1488 22.3477 30.4755 21.5865C30.8023 20.8252 31.6843 20.473 32.4456 20.7997L35.2024 21.983Z"
                fill="#764701"
              />
              <path
                id="Vector_9"
                d="M30.0724 28.3387C30.3797 29.1081 30.0051 29.9808 29.2357 30.2881C28.4664 30.5953 27.5936 30.2207 27.2864 29.4514L26.1738 26.6653C25.8665 25.896 26.2411 25.0233 27.0105 24.7161C27.7798 24.4088 28.6526 24.7833 28.9598 25.5527L30.0724 28.3387Z"
                fill="#764701"
              />
            </g>
            <g style={displayStep(3)} id="4">
              <path
                id="Vector_10"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.71327 11.2838C9.31961 10.9487 9.0105 10.5102 8.83007 9.99974C8.4168 8.8305 7.30153 8 6 8C4.34314 8 3 9.34314 3 11C3 11.7703 3.28637 12.4665 3.76319 12.9993C4.78265 14.1383 4.78265 15.8617 3.76319 17.0007C3.28637 17.5335 3 18.2297 3 19C3 20.6569 4.34314 22 6 22C7.30153 22 8.4168 21.1695 8.83007 20.0003C9.0105 19.4898 9.31961 19.0513 9.71327 18.7162C10.1296 19.7556 10.7154 20.709 11.4365 21.5419C10.4796 23.5849 8.40507 25 6 25C2.68629 25 0 22.3137 0 19C0 17.4633 0.577705 16.0615 1.52779 15C0.577705 13.9385 0 12.5367 0 11C0 7.68629 2.68629 5 6 5C8.40508 5 10.4796 6.41508 11.4365 8.45807C10.7154 9.29104 10.1296 10.2444 9.71327 11.2838ZM27.1532 9.20856C27.1406 9.1393 27.1288 9.06978 27.1178 9H27.0007C27.0524 9.06884 27.1033 9.13836 27.1532 9.20856Z"
                fill="#764701"
              />
              <path
                id="Vector_11"
                d="M16.839 6.06068C17.4248 5.47489 18.3745 5.47489 18.9603 6.06068C19.5461 6.64646 19.5461 7.59621 18.9603 8.182L16.839 10.3033C16.2532 10.8891 15.3034 10.8891 14.7177 10.3033C14.1319 9.71753 14.1319 8.76778 14.7177 8.182L16.839 6.06068Z"
                fill="#764701"
              />
              <path
                id="Vector_12"
                d="M21.167 13.7532C21.9954 13.7532 22.667 14.4247 22.667 15.2532C22.667 16.0816 21.9954 16.7532 21.167 16.7532H18.167C17.3385 16.7532 16.667 16.0816 16.667 15.2532C16.667 14.4247 17.3385 13.7532 18.167 13.7532H21.167Z"
                fill="#764701"
              />
              <path
                id="Vector_13"
                d="M18.9603 21.617C19.5461 22.2028 19.5461 23.1526 18.9603 23.7383C18.3745 24.3241 17.4248 24.3241 16.839 23.7383L14.7177 21.617C14.1319 21.0312 14.1319 20.0815 14.7177 19.4957C15.3034 18.9099 16.2532 18.9099 16.839 19.4957L18.9603 21.617Z"
                fill="#764701"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_115_267">
              <rect width="46" height="31" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
