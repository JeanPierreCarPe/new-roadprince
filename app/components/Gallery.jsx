import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
} from "@/public/assets";
import ImageCard from "./ImageCard";

const Gallery = () => {
  return (
    <section id="gallery" className="max-container h-fit px-4 lg:px-24 py-20 lg:py-20 relative">
      <div className="relative w-full flex flex-col justify-center items-center gap-10 z-10">
        <div className="flex items-center justify-center gap-8">
          <svg
            width="194"
            height="6"
            viewBox="0 0 194 6"
            fill="none"
            className="max-sm:hidden"
          >
            <path
              d="M3 3L191 3"
              stroke="#3B3B3C"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
          <h1 className="font-eb-garamond font-semibold text-center text-5xl lg:text-8xl text-black">
            Scenic Routes Captured
          </h1>
          <svg
            width="194"
            height="6"
            viewBox="0 0 194 6"
            fill="none"
            className="max-sm:hidden"
          >
            <path
              d="M3 3L191 3"
              stroke="#3B3B3C"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex flex-col lg:flex-row justify-between w-full gap-10">
          <div className="flex flex-col w-full lg:w-[30%] gap-10">
            <ImageCard
              image={gallery1}
              author="Mehreen Iqbal"
              authorPicture={user6}
            ></ImageCard>
            <ImageCard
              image={gallery2}
              author="Amina Shahzad"
              authorPicture={user4}
            ></ImageCard>
          </div>
          <div className="flex flex-col w-full lg:w-[30%] gap-10 lg:mt-40">
            <ImageCard
              image={gallery3}
              author="Haroon Qureshi"
              authorPicture={user1}
            ></ImageCard>
            <ImageCard
              image={gallery4}
              author="Zara Akhtar"
              authorPicture={user3}
            ></ImageCard>
          </div>
          <div className="flex flex-col w-full lg:w-[30%] gap-10">
            <ImageCard
              image={gallery5}
              author="Saifullah Mirza"
              authorPicture={user2}
            ></ImageCard>
            <ImageCard
              image={gallery6}
              author="Zain Abbas"
              authorPicture={user5}
            ></ImageCard>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1500 1413"
        fill="none"
        className="absolute top-[-85%] lg:-top-[0%] left-[-1000px] lg:-left-[20%] w-[2000px] lg:w-[2000px] z-0"
      >
        <path
          d="M1488.33 714.321C1498.74 713.989 1487.52 742.761 1482.79 746.639C1471.3 756.021 1443.16 778.957 1437.62 789.114C1425.43 811.534 1417.97 840.417 1403.93 863.723C1378.04 906.641 1293.61 903.354 1304.06 965.294C1306.31 978.664 1314.51 994.029 1315.18 1007.14C1316.4 1031.33 1308.46 1019.96 1292.24 1031.59C1256.75 1057 1289.03 1083.15 1318.58 1087.07C1348.68 1091.06 1390.45 1084.78 1408.59 1115.77C1421.55 1137.93 1440.39 1174.23 1442.09 1200.98C1445 1246.92 1411.95 1248.66 1373.57 1243.23C1341.66 1238.72 1312.48 1232.37 1279.09 1233.63C1208.4 1236.32 1146.27 1244.71 1076.06 1228.16C1045.96 1221.07 1017.3 1214.49 989.449 1229.05C960.123 1244.37 968.692 1275.4 944.425 1285.63C933.123 1290.39 918.866 1284.52 910.26 1296.49C902.726 1306.94 909.411 1324.63 907.416 1336.93C901.211 1375.05 883.963 1381.73 852.384 1390.27C825.31 1397.54 817.037 1416.68 787.858 1394.81C763.186 1376.27 778.809 1347.39 745.752 1341.96C714.395 1336.82 692.049 1351.08 664.089 1353.63C634.837 1356.25 622.205 1324.85 596.055 1331.87C586.194 1334.49 584.495 1347.79 567.024 1342.36C554.577 1338.48 554.836 1325.52 539.36 1328.36C539.508 1323.49 544.864 1314.81 544.531 1312.37C544.162 1309.75 540.21 1297.49 540.801 1293.64C542.98 1279.17 559.896 1253.24 560.413 1259.89C570.312 1243.49 579.028 1182.06 596.646 1170.65C610.128 1161.9 609.389 1200.09 622.501 1183.54C632.842 1170.47 626.194 1160.09 624.495 1146.61C619.989 1111.04 630.811 1095.75 660.1 1084.59C684.071 1075.47 706.971 1077.13 690.387 1054.12C674.542 1032.11 653.304 1010.24 636.13 988.673C628.632 979.255 618.142 962.745 604.107 961.933C583.904 960.751 589.592 973.973 577.957 984.057C554.023 1004.74 536.221 973.899 514.577 963.262C485.398 948.968 466.746 954.915 452.526 922.006C441.003 895.376 425.194 878.275 404.142 857.481C383.273 836.834 372.082 816.668 358.822 790.776C352.617 778.662 346.929 766.732 337.142 757.461C328.425 749.188 313.282 745.568 306.264 734.968C298.028 722.521 305.599 712.253 300.428 699.104C296.255 688.43 281.887 679.713 275.387 669.15C267.63 656.555 265.156 646.693 254.555 636.61C238.932 621.799 235.608 630.516 237.085 607.099C239.08 575.04 248.83 555.686 215.515 535.778C197.971 525.288 162.809 496.922 191.507 468.298C199.67 460.135 230.104 488.612 239.264 482.111C252.672 472.619 235.682 459.396 244.583 449.129C248.572 444.549 253.004 425.933 259.172 425.195C264.786 424.493 272.173 441.705 276.273 437.125C280.336 432.582 279.191 422.535 282.958 417.069C286.873 411.418 294.814 408.685 297.954 404.179C305.858 392.766 305.23 387.336 305.858 370.457C306.079 364.954 309.108 357.234 307.52 352.137C305.341 345.231 298.951 343.864 297.178 339.321C290.05 321.26 293.854 314.612 305.562 298.508C313.836 287.132 325.322 287.871 317.492 272.21C302.829 242.958 259.763 263.826 237.971 268.443C206.688 275.091 156.826 275.608 130.86 255.442C118.339 245.728 113.021 231.176 98.9486 222.164C85.2827 213.41 68.588 213.521 54.6636 206.762C43.5092 201.369 7.01758 173.299 7.38693 164.471C7.49773 161.849 15.0325 140.796 17.2116 139.836C27.8119 135.071 47.9784 151.507 52.6322 149.365C64.7468 143.714 75.6425 136.733 87.6464 130.897C116.862 116.751 137.619 129.531 147.592 93.9256C165.542 29.9175 171.821 51.5613 201.147 26.9627C215.847 14.6264 216.66 14.885 237.565 10.2681C252.118 7.05476 267.741 6.42687 282.552 8.97538C311.509 13.9616 324.769 33.7587 355.868 33.9803C384.345 34.165 416.33 34.8667 442.148 44.359C464.936 52.7063 478.787 70.472 499.212 81.8849C516.424 91.5249 573.894 60.4626 569.573 116.345C567.8 139.134 527.837 158.266 521.225 180.944C514.54 203.77 516.054 230.252 534.596 246.799C550.736 261.204 578.031 268.96 573.784 296.809C571.531 311.62 554.725 318.859 567.505 333.522C573.119 339.986 594.689 341.685 602.482 342.165C620.174 343.273 682.446 326.8 659.14 360.115C651.273 371.381 636.425 370.088 632.436 385.453C628.817 399.488 637.718 409.202 644.145 418.805C646.767 422.757 651.679 430.624 656.148 433.727C664.052 439.193 668.189 436.497 675.798 440.486C687.912 446.839 693.97 449.461 699.141 463.829C703.203 475.131 703.721 487.725 707.857 498.363C713.176 512.029 715.798 517.163 717.497 533.82C720.194 560.118 733.084 582.279 762.152 576.739C774.599 574.338 777.221 567.136 792.401 568.871C804.368 570.238 820.878 575.113 831.22 580.063C839.309 583.941 853.307 593.175 859.143 600.118C867.49 610.017 864.018 618.623 875.726 625.493C904.018 642.076 917.278 599.49 944.573 625.123C958.571 638.235 981.286 657.404 990.779 673.914C997.538 685.66 1001.12 703.13 1000.79 717.128C1000.49 729.575 988.599 747.415 992.367 758.791C999.606 780.471 1050.95 795.172 1070.74 800.084C1104.06 808.32 1140.81 808.948 1173.68 805.476C1201.05 802.595 1226.61 807.175 1254.01 807.138C1280.42 807.138 1303.06 801.266 1328.99 798.791C1372.46 794.654 1447.15 715.725 1488.37 714.358L1488.33 714.321Z"
          stroke="#D2D4C8"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </section>
  );
};

export default Gallery;