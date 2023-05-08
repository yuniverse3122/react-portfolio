import './index.scss'

const FishSVG = () => {
  return (
    <body>
      <svg
        width="120"
        height="280"
        viewBox="0 0 60 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <rect width="60" height="140" rx="30" fill="#90CDF9" />
          <path
            d="M0 0H42C42 22 21 22 21 44C21 66 42 66 42 88C42 110 19 110 19 132C19 154 42 154 42 176C42 198 17 198 17 220C17 242 42 242.5 42 264H0V0Z"
            fill="#7AC4F9"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="3s"
              values="0,-85;0,0"
              repeatCount="indefinite"
              ease-in="cubic-bezier(0.46,0.03,0.52,0.96)"
              ease-out="cubic-bezier(0.46,0.03,0.52,0.96)"
            />
          </path>

          <g id="fish">
            <g id="bottom">
              <path
                d="M30 90.5C25 90.5 12 110 20 106C28 102 32 102 40 106C48 110 35 90.5 30 90.5Z"
                fill="#F8ECCF"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="2s"
                  transform-origin="50% 50%"
                  values="-1.5 30 -10;1.5 30 -10;-1.5 30 -10"
                  repeatCount="indefinite"
                />
              </path>
              <g id="wing">
                <path
                  d="M46 73.5C46 66.5 40 58.5 40 58.5C40 58.5 33.4491 73.8935 37.5 71C41 68.5 46 76.9601 46 73.5Z"
                  fill="#F8ECCF"
                />
                <path
                  d="M14 70.5C14 63.5 20 58 20 58C20 58 26.0509 71.8935 22 69C18.5 66.5 14 73.9601 14 70.5Z"
                  fill="#F8ECCF"
                />
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="2s"
                  transform-origin="50% 50%"
                  values="-1 30 -10;1 30 -10;-1 30 -10"
                  repeatCount="indefinite"
                />
              </g>
              <g id="body">
                <path
                  d="M29.1265 94.8947C25.9953 87.2023 15.7406 60.667 20 53C25 44 34.5 44 40 53C44.6875 60.6705 34.1212 87.2266 30.8971 94.9052C30.5589 95.7106 29.4558 95.7037 29.1265 94.8947Z"
                  fill="#FC5FAB"
                />
                <path
                  d="M29.2281 95.1439C26.2248 87.7939 15.6933 60.7521 20 53C25 44 29.5 39 31 52C32.2734 63.0361 30.6641 87.7651 30.1488 94.9849C30.1116 95.506 29.4258 95.6275 29.2281 95.1439Z"
                  fill="#FF8585"
                />
              </g>
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="2s"
                transform-origin="50% 50%"
                values="-3 30 -20;3 30 -20;-3 30 -20"
                repeatCount="indefinite"
              />
            </g>
            <g id="head">
              <path
                d="M30 34C30 34 16.5 48 20 54C22 56.5 30 56.5 30 56.5C30 56.5 38 56.5 40 54C44 49 30 34 30 34Z"
                fill="#F8ECCF"
              />
              <path
                d="M30 34C30 34 16.5 48 20 54C22 56.5 30 56.5 30 56.5C30 56.5 31 51.5 31 47.5C31 43.5 30 34 30 34Z"
                fill="#FFFAEE"
              />
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="2s"
                transform-origin="50% 50%"
                values="-3 30 0;3 30 0;-3 30 0"
                repeatCount="indefinite"
              />
            </g>
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="2s"
              transform-origin="50% 50%"
              values="-2 30 0;2 30 0;-2 30 0"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="20s"
              values="-2,-10;2,10;-2,-10"
              repeatCount="indefinite"
              ease-in="cubic-bezier(0.46,0.03,0.52,0.96)"
              ease-out="cubic-bezier(0.46,0.03,0.52,0.96)"
            />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M56 110V30C56 15.6406 44.3594 4 30 4C15.6406 4 4 15.6406 4 30V110C4 124.359 15.6406 136 30 136C44.3594 136 56 124.359 56 110ZM30 0C13.4315 0 0 13.4315 0 30V110C0 126.569 13.4315 140 30 140C46.5685 140 60 126.569 60 110V30C60 13.4315 46.5685 0 30 0Z"
            fill="url(#paint0_linear)"
            fill-opacity="0.4"
          />
          <circle cx="19.5" cy="14.5" r="5.5" fill="white" fill-opacity="0.7" />
          <circle cx="24" cy="16" r="2" fill="white" fill-opacity="0.8" />
          <path
            d="M46 127C39 133.5 26.5 137 12 125.5C31 128.5 48 114.5 54 96C53.5 113.5 53 120.5 46 127Z"
            fill="white"
            fill-opacity="0.1"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0.500001"
            y1="0.999999"
            x2="60"
            y2="140"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.8" />
            <stop offset="1" stop-color="white" stop-opacity="0.5" />
          </linearGradient>
          <clipPath id="clip0">
            <rect width="60" height="140" rx="30" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </body>
  )
}

export default FishSVG
