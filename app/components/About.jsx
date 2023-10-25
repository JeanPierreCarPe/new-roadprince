import { about1, about2, about3, about4 } from "@/public/assets";
import Image from "next/image";

const About = () => {
  return (
    <section id="discover" className="max-container h-fit px-4 lg:px-24 relative overflow-hidden">
      <div className="relative z-20">
        <svg
          width="6"
          height="564"
          viewBox="0 0 6 564"
          fill="none"
          className="absolute top-[-10%] lg:top-[-25%]"
        >
          <path
            d="M2.75 561.003L2.75 -41.0026"
            stroke="#3B3B3C"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex flex-col my-20 lg:my-40 gap-8">
          <h1 className="font-eb-garamond font-semibold text-5xl lg:text-8xl text-black ml-5 lg:ml-10 tracking-wide">
            Discover New Horizons
          </h1>
          <div className="flex flex-col lg:flex-row w-full gap-8">
            <div className="flex flex-col justify-between items-end gap-16 lg:gap-32 lg:min-w-[460px]">
              <p className="font-dosis font-medium text-xl text-black tracking-wide leading-9 ml-5 lg:ml-10">
                Immerse yourself in the beauty of the open road. Our curated
                collection of photographs will transport you to scenic routes
                that unveil the hidden gems of the world. From winding coastal
                highways to serene mountain passes, each image tells a story of
                adventure waiting to be embraced.
              </p>
              <div className="w-[110%] lg:w-full max-sm:h-[200px] h-[300px] max-sm:mr-5 relative rounded-xl box-shadow overflow-hidden">
                <Image src={about2} alt="" fill className="object-cover" />
              </div>
            </div>
            <div className="relative max-sm:h-[200px] w-[110%] lg:w-[1000px] lg:min-w-[1000px] max-sm:ml-5 box-shadow rounded-xl overflow-hidden">
              <Image src={about1} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <svg
          width="6"
          height="800"
          viewBox="0 0 6 564"
          fill="none"
          className="absolute top-[-15%] lg:top-[-30%] right-0"
        >
          <path
            d="M2.75 561.003L2.75 -41.0026"
            stroke="#3B3B3C"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex flex-col my-20 lg:my-40 gap-8">
          <h1 className="font-eb-garamond font-semibold text-5xl lg:text-8xl text-right text-black mr-5 lg:mr-10 tracking-wide">
          Fuel Your Wanderlust
          </h1>
          <div className="flex flex-col lg:flex-row-reverse w-full gap-8">
            <div className="flex flex-col justify-between items-end gap-16 lg:gap-32 lg:min-w-[460px]">
              <p className="font-dosis font-medium text-xl text-right text-black tracking-wide leading-9 mr-5 lg:mr-10">
                Let your wanderlust thrive as you explore our gallery of road
                travelers. Witness the joy of individuals and groups, united by
                a passion for exploration, as they traverse landscapes on
                motorcycles and in cars. These images capture the essence of the
                road trip experience - the camaraderie, the freedom, and the
                thrill of the unknown.
              </p>
              <div className="w-[110%] lg:w-full max-sm:h-[200px] h-[300px] max-sm:mr-5 relative rounded-xl box-shadow overflow-hidden">
                <Image src={about4} alt="" fill className="object-cover" />
              </div>
            </div>
            <div className="relative max-sm:h-[200px] w-[110%] lg:w-[1000px] lg:min-w-[1000px] max-sm:ml-5 box-shadow rounded-xl overflow-hidden">
              <Image src={about3} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1000 942"
        fill="none"
        className="absolute top-[5%] lg:top-[10%] left-[-500px] lg:-left-1/4 w-[1200px] lg:w-[1200px]"
      >
        <path
          d="M7.78098 476.214C0.837221 475.992 8.32269 495.174 11.4745 497.759C19.1323 504.014 37.8952 519.305 41.5887 526.076C49.7144 541.022 54.6883 560.278 64.0451 575.815C81.3061 604.427 137.595 602.236 130.626 643.529C129.124 652.443 123.658 662.686 123.215 671.427C122.402 687.555 127.696 679.971 138.506 687.728C162.169 704.669 140.648 722.102 120.95 724.712C100.882 727.371 73.0326 723.185 60.9426 743.844C52.2998 758.618 39.742 782.823 38.6093 800.65C36.6641 831.281 58.7019 832.439 84.2855 828.819C105.56 825.815 125.012 821.58 147.272 822.417C194.401 824.215 235.817 829.804 282.626 818.773C302.694 814.045 321.801 809.662 340.367 819.364C359.918 829.582 354.206 850.266 370.383 857.087C377.918 860.263 387.422 856.348 393.16 864.326C398.183 871.294 393.726 883.089 395.056 891.288C399.192 916.7 410.691 921.156 431.744 926.844C449.793 931.695 455.309 944.45 474.761 929.873C491.21 917.512 480.794 898.257 502.832 894.637C523.737 891.214 538.634 900.719 557.274 902.418C576.775 904.166 585.197 883.237 602.63 887.915C609.204 889.663 610.337 898.528 621.984 894.908C630.282 892.322 630.109 883.68 640.427 885.576C640.328 882.325 636.758 876.539 636.979 874.914C637.226 873.166 639.86 864.991 639.466 862.43C638.013 852.778 626.736 835.492 626.391 839.924C619.792 828.991 613.981 788.043 602.236 780.434C593.248 774.599 593.741 800.059 585 789.028C578.105 780.311 582.537 773.392 583.67 764.405C586.674 740.692 579.459 730.498 559.933 723.062C543.953 716.98 528.686 718.088 539.742 702.748C550.305 688.072 564.464 673.495 575.914 659.116C580.912 652.837 587.905 641.83 597.262 641.288C610.731 640.5 606.939 649.315 614.695 656.038C630.651 669.827 642.519 649.266 656.949 642.175C676.401 632.645 688.836 636.61 698.316 614.671C705.998 596.917 716.537 585.517 730.572 571.654C744.484 557.889 751.945 544.445 760.785 527.184C764.922 519.108 768.714 511.154 775.239 504.974C781.05 499.458 791.146 497.045 795.824 489.978C801.315 481.68 796.267 474.835 799.714 466.069C802.497 458.953 812.075 453.142 816.409 446.1C821.58 437.703 823.23 431.129 830.297 424.407C840.712 414.533 842.928 420.344 841.943 404.733C840.614 383.36 834.113 370.457 856.323 357.185C868.019 350.192 891.461 331.281 872.328 312.198C866.887 306.757 846.597 325.741 840.491 321.407C831.552 315.079 842.879 306.264 836.945 299.419C834.285 296.366 831.331 283.955 827.219 283.463C823.476 282.995 818.551 294.47 815.818 291.416C813.11 288.388 813.873 281.69 811.361 278.046C808.751 274.279 803.457 272.456 801.364 269.452C796.095 261.844 796.513 258.224 796.095 246.971C795.947 243.302 793.928 238.156 794.987 234.758C796.439 230.154 800.699 229.243 801.881 226.214C806.634 214.173 804.097 209.741 796.292 199.005C790.776 191.421 783.118 191.914 788.338 181.473C798.114 161.972 826.825 175.884 841.352 178.962C862.208 183.394 895.45 183.739 912.76 170.294C921.107 163.819 924.653 154.117 934.034 148.109C943.145 142.273 954.275 142.347 963.558 137.841C970.994 134.246 995.322 115.532 995.075 109.647C995.002 107.899 989.978 93.8639 988.526 93.2237C981.459 90.0473 968.014 101.005 964.912 99.5765C956.835 95.8091 949.572 91.1553 941.569 87.2648C922.092 77.8341 908.254 86.3538 901.606 62.6169C889.639 19.9448 885.453 34.374 865.902 17.975C856.102 9.75078 855.56 9.92315 841.623 6.84524C831.922 4.70301 821.506 4.28442 811.632 5.98342C792.327 9.30756 783.488 22.5056 762.755 22.6534C743.77 22.7765 722.447 23.2443 705.235 29.5725C690.042 35.1374 680.809 46.9812 667.192 54.5897C655.718 61.0164 617.404 40.3083 620.285 77.5633C621.467 92.7558 648.109 105.511 652.517 120.629C656.973 135.847 655.964 153.501 643.603 164.533C632.843 174.136 614.646 179.307 617.478 197.873C618.98 207.746 630.183 212.573 621.664 222.348C617.921 226.657 603.541 227.79 598.345 228.11C586.551 228.849 545.036 217.867 560.573 240.077C565.818 247.587 575.717 246.725 578.376 256.968C580.789 266.325 574.855 272.801 570.57 279.203C568.822 281.838 565.547 287.083 562.568 289.151C557.298 292.795 554.541 290.998 549.468 293.657C541.392 297.892 537.354 299.64 533.906 309.219C531.198 316.754 530.853 325.15 528.095 332.242C524.549 341.352 522.801 344.775 521.669 355.88C519.871 373.412 511.278 388.186 491.899 384.492C483.601 382.892 481.853 378.09 471.733 379.248C463.755 380.159 452.748 383.409 445.853 386.708C440.461 389.294 431.129 395.45 427.238 400.079C421.673 406.678 423.988 412.415 416.182 416.995C397.321 428.051 388.481 399.66 370.285 416.749C360.952 425.49 345.809 438.269 339.481 449.276C334.975 457.106 332.586 468.753 332.808 478.085C333.005 486.383 340.934 498.276 338.422 505.86C333.596 520.314 299.37 530.114 286.172 533.389C263.961 538.88 239.461 539.299 217.547 536.984C199.301 535.064 182.261 538.117 163.991 538.092C146.385 538.092 131.291 534.177 114.006 532.527C85.0242 529.77 35.2359 477.15 7.75636 476.239L7.78098 476.214Z"
          stroke="#D2D4C8"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </section>
  );
};

export default About;
