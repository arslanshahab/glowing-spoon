export const Arrow = (
  <svg width='9' height='15' viewBox='0 0 9 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M8.57031 7.35938C8.57031 6.96875 8.42969 6.64844 8.10938 6.34375L2.20312 0.554688C1.96875 0.320312 1.67969 0.203125 1.33594 0.203125C0.648438 0.203125 0.0859375 0.765625 0.0859375 1.44531C0.0859375 1.78906 0.226562 2.10938 0.484375 2.35938L5.63281 7.35156L0.484375 12.3516C0.226562 12.6094 0.0859375 12.9219 0.0859375 13.2734C0.0859375 13.9609 0.648438 14.5156 1.33594 14.5156C1.67969 14.5156 1.96875 14.3984 2.20312 14.1641L8.10938 8.375C8.4375 8.0625 8.57031 7.74219 8.57031 7.35938Z'
      fill='#0033FF'
    />
  </svg>
)

export const Square = (
  <svg viewBox='0 0 360 316' fill='none' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
    <rect x='0.5' y='0.5' width='359' height='350' fill='white' fillOpacity='0.05' />
    <rect x='0.5' y='0.5' width='359' height='350' fill='url(#pattern0)' fillOpacity='0.2' />
    <rect x='0.5' y='0.5' width='359' height='350' stroke='#6FA777' />
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='0.025' height='0.025641'>
        <use xlinkHref='#image0_2_26' transform='scale(0.00138889)' />
      </pattern>
      <image
        id='image0_2_26'
        width='18'
        height='18'
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAC9JREFUOE9jZKAQ/P379z/ICEYKzWEYNYhwCI6G0WgYDfO8BkvihCMavwpGahkEANojR1+v/VqrAAAAAElFTkSuQmCC'
      />
    </defs>
  </svg>
)

export const Globe = props => (
  <svg width='1220' height='411' viewBox='0 0 1220 411' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.798793 397.041C0.978172 296.105 69.0462 204.668 179.152 138.417C289.396 72.0823 441.722 31.0406 609.998 31.0406C778.275 31.0406 930.601 72.0823 1040.84 138.417C1150.95 204.668 1219.02 296.105 1219.2 397.041H0.798793Z'
      fill='white'
      stroke='url(#paint0_linear_325_620)'
      strokeWidth='0.8'
    />
    <path
      d='M137.821 219.411L123.622 221.411C117.168 222.32 112.978 214.806 117.144 209.792C117.429 209.45 117.681 209.081 117.897 208.691L122.75 199.93C123.131 199.243 123.584 198.597 124.1 198.004L130.637 190.495C131.032 190.041 131.463 189.619 131.927 189.234L146.327 177.268L165.018 162.562L182.27 150.018L199.523 138.772L210.306 133.149L226.059 122.022C226.579 121.655 227.129 121.332 227.704 121.058L244.093 113.252L263.503 103.303L289.382 94.2194L334.223 80.5147C334.521 80.4236 334.825 80.356 335.134 80.3123L354.137 77.6219C355.421 77.4401 356.09 79.0998 355.038 79.8589C354.061 80.5644 354.56 82.1081 355.766 82.1081H359.112H372.052L405.12 80.3779L418.059 78.2152L418.775 77.9998C421.1 77.3003 423.108 75.8111 424.452 73.7891C424.98 72.9948 425.615 72.2768 426.338 71.6551L427.5 70.6558C429.306 69.1035 431.56 68.1672 433.934 67.9829L452.565 66.5364L476.287 64.8062L512.231 62.2109H534.167C536.274 62.2109 538.338 62.8052 540.122 63.9256L553.236 72.1592C553.695 72.4474 554.174 72.7019 554.67 72.9207L573.082 81.0449C574.666 81.7442 576.067 82.8015 577.174 84.1337L584.214 92.6053C585.101 93.6721 586.177 94.5649 587.39 95.2384L604.246 104.601L616.505 112.797C616.958 113.1 617.432 113.369 617.925 113.603L628.563 118.656C630.065 119.37 631.707 119.74 633.369 119.74H638.517C640.552 119.74 642.548 120.294 644.292 121.343L659.682 130.604C660.581 131.144 661.55 131.556 662.563 131.827L679.024 136.229C679.968 136.481 680.941 136.609 681.918 136.609H709.014C710.559 136.609 712.088 136.289 713.504 135.67L725.026 130.628C726.441 130.008 727.97 129.688 729.516 129.688H755.097C757.937 129.688 760.24 131.991 760.24 134.832C760.24 135.983 759.854 137.101 759.143 138.007L748.019 152.181L728.941 170.786C727.776 171.922 726.377 172.791 724.842 173.331L698.506 182.607C697.969 182.797 697.447 183.026 696.944 183.295L665.35 200.193L640.719 213.532C638.081 214.961 636.126 217.388 635.293 220.271L632.171 231.07C631.323 234.004 631.71 237.156 633.241 239.798L641.165 253.464C641.472 253.995 641.736 254.55 641.953 255.124L648.093 271.381C648.571 272.646 648.816 273.987 648.816 275.339V296.588C648.816 299.148 647.939 301.631 646.331 303.623L639.957 311.518C637.831 314.153 634.627 315.684 631.242 315.684H628.845C627.318 315.684 625.808 315.996 624.406 316.601L600.224 327.039C596.12 328.81 593.463 332.852 593.463 337.322V354.624C593.463 355.763 593.637 356.896 593.979 357.983L595.812 363.816C597.381 368.806 595.287 374.217 590.768 376.851L581.051 382.515C577.608 384.522 575.491 388.207 575.491 392.192V397.002C575.491 399.432 574.268 401.698 572.237 403.032L562.561 409.383C560.681 410.617 558.474 411.256 556.225 411.218L388.344 408.367C384.089 408.294 380.242 405.817 378.417 401.972L368.04 380.119C367.367 378.702 366.404 377.443 365.214 376.422L334.72 350.265C333.736 349.421 332.906 348.413 332.267 347.285L326.077 336.359C323.875 332.473 324.192 327.651 326.885 324.087L330.969 318.68C332.438 316.735 333.233 314.365 333.233 311.929V304.334C333.233 301.919 332.223 299.613 330.447 297.974L327.246 295.021C324.793 292.757 325.083 288.8 327.841 286.919C330.599 285.039 330.89 281.081 328.436 278.817L322.45 273.294L309.336 263.9C308.03 262.965 306.94 261.759 306.141 260.364L292.976 237.393L280.359 205.761C280.144 205.222 279.972 204.668 279.843 204.102L276.454 189.248C275.558 185.319 272.62 182.174 268.761 181.013L265.081 179.906C264.034 179.591 262.947 179.431 261.854 179.431H254.637C253.84 179.431 253.045 179.516 252.266 179.685L218.552 186.988C217.849 187.14 217.162 187.36 216.501 187.644L187.303 200.193L140.375 218.737C139.554 219.061 138.696 219.288 137.821 219.411Z'
      stroke='#083314'
      strokeWidth='0.8'
    />
    <path
      d='M895.39 73.0287L897.039 75.4097C898.307 77.2411 900.092 78.6527 902.167 79.4641L913.361 83.8424L932.475 89.182C933.15 89.3706 933.806 89.6222 934.434 89.9334L957.931 101.577L967.484 106.175C968.301 106.569 969.067 107.06 969.766 107.638L978.677 115.01C979.695 115.852 980.854 116.508 982.1 116.946L1012.98 127.808C1018.05 129.593 1018.38 136.648 1013.49 138.889V138.889C1012.42 139.38 1011.23 139.544 1010.06 139.361L981.119 134.818C979.576 134.576 978.1 134.013 976.787 133.167L968.714 127.962L960.939 122.114C960.373 121.688 959.849 121.21 959.373 120.685L955.188 116.069C952.902 113.547 949.392 112.524 946.109 113.422V113.422C944.441 113.878 942.677 113.846 941.026 113.33L926.599 108.816C925.923 108.604 925.268 108.329 924.643 107.993L905.454 97.6839L894.408 91.7757C893.157 91.1068 891.79 90.6815 890.381 90.5225L881.012 89.4655L824.941 83.8424L800.499 78.2193L787.965 73.6942C786.746 73.2539 785.459 73.0287 784.162 73.0287H778.933L765.275 71.7311L738.024 67.7318C736.557 67.5165 735.147 67.0119 733.876 66.2472L729.823 63.8086C728.549 63.0423 727.136 62.5371 725.665 62.3226L704.171 59.1872L672.541 55.7268L686.838 58.8551C687.845 59.0754 688.817 59.4338 689.726 59.9201L692.677 61.4986C694.088 62.2529 695.663 62.6476 697.262 62.6476V62.6476C698.502 62.6476 699.73 62.8848 700.881 63.3464L714.235 68.7032L721.303 70.8296C722.337 71.1406 723.32 71.5994 724.222 72.1917L729.408 75.5959C730.311 76.1883 731.294 76.647 732.328 76.958L742.13 79.9072C743.177 80.222 744.264 80.382 745.357 80.382H775.339H787.717C789.503 80.382 791.263 80.8092 792.851 81.6279L799.375 84.9928C800.12 85.3771 800.919 85.6466 801.745 85.792L816.989 88.4766C820.762 89.1411 821.325 94.3236 817.782 95.7821V95.7821C816.842 96.1689 816.095 96.9136 815.705 97.8519L815.055 99.4176C814.469 100.827 813.489 102.037 812.231 102.902L811.705 103.264C810.025 104.419 808.034 105.037 805.996 105.037H803.055C801.373 105.037 799.712 105.416 798.197 106.146L795.441 107.472C794.036 108.148 792.506 108.524 790.947 108.574L770.193 109.249C767.951 109.322 765.812 110.214 764.182 111.755V111.755C762.569 113.28 760.458 114.17 758.24 114.259L742.563 114.888C740.95 114.952 739.369 115.365 737.93 116.098L734.041 118.078C731.915 119.16 729.5 119.536 727.146 119.149L724.992 118.796C723.585 118.565 722.146 118.605 720.754 118.913L709.203 121.474L689.794 124.069L675.023 125.254C670.849 125.589 666.837 123.568 664.622 120.014L660.935 114.098C660.057 112.689 658.876 111.493 657.479 110.596L648.818 105.037L638.274 97.9876C636.702 96.9371 634.891 96.3014 633.008 96.1395L627.671 95.6808C626.442 95.5751 625.238 95.2669 624.109 94.7687L617.441 91.8263C615.856 91.1271 614.455 90.0698 613.348 88.7376L612.879 88.1728C612.398 87.5943 611.86 87.0656 611.274 86.5949L607.45 83.5274C606.286 82.5934 604.947 81.9015 603.511 81.4923L593.458 78.6269C592.509 78.3564 591.599 77.9615 590.753 77.4526L580.131 71.0609C578.966 70.3601 577.684 69.8771 576.346 69.6357L566.635 67.8828C564.898 67.5691 563.11 67.6708 561.419 68.1796L557.726 69.2906C556.223 69.7429 554.598 69.5393 553.253 68.7298V68.7298C548.733 66.0101 550.179 59.1144 555.411 58.4398L559.159 57.9566C559.505 57.912 559.847 57.8411 560.182 57.7447L575.95 53.2071C576.124 53.157 576.304 53.1315 576.486 53.1315V53.1315C578.661 53.1315 579.184 50.0985 577.135 49.3698L572.214 47.6204C572.005 47.546 571.788 47.4964 571.567 47.4727L551.771 45.3457L485.117 39.0391'
      stroke='#083314'
      strokeWidth='0.8'
    />
    <rect x='0.398438' y='250.641' width='1219.2' height='160.8' fill='url(#paint1_linear_325_620)' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M379.193 111.256L369.916 44.5862L418.263 91.2427L379.193 111.256Z'
      fill='url(#paint2_linear_325_620)'
      fillOpacity='0.198313'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M358.05 46.0172C357.973 46.2598 357.994 46.5377 358.114 46.7704L359.127 48.7412C359.366 49.2065 359.988 49.4038 360.453 49.1621L364.542 47.0385L366.02 45.4613L364.763 43.016L362.628 43.3159L358.539 45.4394C358.307 45.5603 358.128 45.7746 358.05 46.0172ZM365.549 40.248C365.321 40.9586 365.34 41.732 365.702 42.4346L367.887 46.6405C368.154 47.0192 368.669 47.1825 369.02 47L372.634 45.1229C373.072 44.9678 373.237 44.4514 372.997 43.986L370.848 39.7612C370.128 38.3606 368.353 37.7972 366.952 38.5248C366.249 38.8898 365.776 39.5375 365.549 40.248ZM373.133 41.767L371.876 39.3217L373.437 37.7708L377.499 35.7304C377.964 35.4887 378.586 35.686 378.825 36.1513L379.782 38.0127C380.021 38.478 379.822 39.1019 379.356 39.3436L375.268 41.4672L373.133 41.767Z'
      fill='#083314'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M837.04 60.1237L876.955 26.1953L866.548 77.1971L837.04 60.1237Z'
      fill='url(#paint3_linear_325_620)'
      fillOpacity='0.198313'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M871.02 19.0289C870.828 19.0799 870.655 19.2102 870.552 19.3856L869.683 20.871C869.477 21.2218 869.608 21.7096 869.962 21.9118L873.066 23.6879L874.72 23.9914L875.799 22.1483L874.709 20.882L871.604 19.1059C871.427 19.0048 871.212 18.9779 871.02 19.0289ZM877.946 21.5052C877.385 21.6545 876.885 21.9906 876.575 22.5201L874.729 25.7053C874.592 26.0379 874.7 26.4417 874.967 26.5943L877.711 28.1642C877.996 28.3846 878.404 28.2761 878.61 27.9254L880.483 24.7561C881.101 23.7004 880.728 22.3073 879.664 21.6987C879.131 21.3935 878.508 21.3559 877.946 21.5052ZM880.131 27.0856L881.21 25.2425L882.882 25.6111L885.92 27.4046C886.274 27.6068 886.404 28.0947 886.199 28.4454L885.378 29.8484C885.173 30.1991 884.68 30.3302 884.326 30.128L881.222 28.3519L880.131 27.0856Z'
      fill='#083314'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M486.732 280.697L535.36 189.759L553.197 290.706L486.732 280.697Z'
      fill='url(#paint4_linear_325_620)'
      fillOpacity='0.198313'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M519.249 180.902C518.935 181.133 518.711 181.497 518.65 181.892L518.132 185.241C518.009 186.031 518.602 186.831 519.397 186.947L526.375 187.965L529.626 187.329L530.27 183.174L527.354 181.639L520.376 180.622C519.978 180.564 519.564 180.67 519.249 180.902ZM533.754 180.445C532.833 181.123 532.16 182.099 531.975 183.292L530.898 190.459C530.888 191.167 531.379 191.829 531.978 191.917L538.146 192.816C538.828 193.015 539.498 192.522 539.62 191.731L540.76 184.573C541.129 182.194 539.435 179.91 537.045 179.561C535.845 179.386 534.675 179.766 533.754 180.445ZM541.766 189.108L542.409 184.954L545.74 184.425L552.61 185.522C553.404 185.637 553.997 186.437 553.875 187.228L553.385 190.391C553.263 191.181 552.454 191.777 551.66 191.661L544.682 190.643L541.766 189.108Z'
      fill='#083314'
    />
    <defs>
      <linearGradient
        id='paint0_linear_325_620'
        x1='609.999'
        y1='30.6406'
        x2='609.999'
        y2='299.441'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#52705B' />
        <stop offset='1' stopColor='#52705B' stopOpacity='0' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_325_620'
        x1='609.998'
        y1='250.641'
        x2='609.998'
        y2='411.441'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='white' stopOpacity='0' />
        <stop offset='1' stopColor='white' />
      </linearGradient>
      <linearGradient
        id='paint2_linear_325_620'
        x1='371.845'
        y1='47.5965'
        x2='397.056'
        y2='96.947'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#77C496' />
        <stop offset='1' stopColor='#49E1AA' stopOpacity='0' />
      </linearGradient>
      <linearGradient
        id='paint3_linear_325_620'
        x1='875.785'
        y1='28.711'
        x2='854.195'
        y2='65.931'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#77C496' />
        <stop offset='1' stopColor='#49E1AA' stopOpacity='0' />
      </linearGradient>
      <linearGradient
        id='paint4_linear_325_620'
        x1='535.036'
        y1='195.212'
        x2='522.331'
        y2='278.961'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#77C496' />
        <stop offset='1' stopColor='#49E1AA' stopOpacity='0' />
      </linearGradient>
    </defs>
  </svg>
)

export const Hamburger = props => (
  <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_d_230_233)'>
      <circle cx='28' cy='24' r='18' fill='white' />
    </g>
    <rect x='20' y='19' width='16' height='2' rx='1' fill='#083314' />
    <rect x='20' y='23' width='16' height='2' rx='1' fill='#083314' />
    <rect x='20' y='27' width='16' height='2' rx='1' fill='#083314' />
    <defs>
      <filter
        id='filter0_d_230_233'
        x='0'
        y='0'
        width='56'
        height='56'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'>
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='4' />
        <feGaussianBlur stdDeviation='5' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_230_233' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_230_233' result='shape' />
      </filter>
    </defs>
  </svg>
)

export const CloseIcon = props => (
  <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_d_230_233)'>
      <circle cx='28' cy='24' r='18' fill='white' />
    </g>
    <rect x='21.636' y='28.9497' width='16' height='2' rx='1' transform='rotate(-45 21.636 28.9497)' fill='#072910' />
    <rect
      width='16'
      height='2'
      rx='1'
      transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 34.3639 28.9497)'
      fill='#072910'
    />
    <defs>
      <filter
        id='filter0_d_230_233'
        x='0'
        y='0'
        width='56'
        height='56'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'>
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='4' />
        <feGaussianBlur stdDeviation='5' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_230_233' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_230_233' result='shape' />
      </filter>
    </defs>
  </svg>
)

export const Logo = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect width='23.7279' height='23.7279' rx='5.93197' fill='#3DBC4F' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.1875 5L9.51578 7.49893V9.99787L5.1875 7.49893V5ZM10.4375 9.25L17.7956 5.00181V7.50075L12.4375 10.5942V12.7203L17.7956 9.62681V12.1257L12.4375 15.2192V19.9959H10.4384V16.3734L10.4375 16.3739V13.875L10.4384 13.8745V11.7484L10.4375 11.7489V9.25ZM9.51578 12.1239L5.1875 9.625V12.1239L9.51578 14.6229V12.1239Z'
      fill='#0E5923'
    />
  </svg>
)

export const Scale = () => (
  <svg width='21' height='10' viewBox='0 0 21 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect width='1' height='10' fill='white' />
    <rect x='20' width='1' height='10' fill='white' />
    <line x1='4.37115e-08' y1='5.5' x2='21' y2='5.5' stroke='white' />
  </svg>
)
