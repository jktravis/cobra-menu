(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1097:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),l=t(32),c=t.n(l),o=(t(48),t(33)),i=t(34),u=t(41),C=t(20),m=t(35),s=t(5),d=t(26),f=t(4),h=t(6),b=t(1100),p=t(8),g=t(1105),L=t(1098),v=t(1099),E=t(1106),x=t(1108),w=t(1101),j=t(1102),O=t(1104),M={openSubMenus:[],expandMenu:!1},y=Object.freeze({TOGGLE_SUB_MENU:"TOGGLE_SUB_MENU",TOGGLE_MAIN_MENU:"TOGGLE_MAIN_MENU"}),k=g.a("openSubMenus"),N=g.a("expandMenu"),G=L.a(function(n,e){return v.a(b.a(n),E.a(n),x.a(n))(e)}),Z=function(n,e){var t=e.type,a=e.payload;switch(t){case y.TOGGLE_SUB_MENU:return w.a(k,G(a.id),n);case y.TOGGLE_MAIN_MENU:return w.a(N,j.a,n);default:return n}};function _(n){return{type:y.TOGGLE_SUB_MENU,payload:{id:n}}}function I(){return{type:y.TOGGLE_MAIN_MENU}}var z=t(37),U=t(1103),F=t(1107),T=Object(O.a)(Object(z.a)(U.a)(0),Object(F.a)(0,"length"));var A=function(n){var e=n.toggleFn,t=n.isActive,a=n.Icon,l=n.subMenuItems,c=n.disabled,o=n.label,i=Object(f.a)({disabled:c,active:t&&T(l)});return r.a.createElement("li",{className:i},r.a.createElement("a",{href:"#",onClick:e},r.a.createElement("span",{className:"menu-icon"},r.a.createElement(a,null)),r.a.createElement("span",{className:"menu-label"},o),T(l)&&r.a.createElement("span",{className:"menu-child-indicator"},t?r.a.createElement(h.b,null):r.a.createElement(h.a,null))),t&&T(l)&&r.a.createElement("ul",{className:"menu-list sub-menu"},l.map(function(n,e){var t=n.Icon,a=n.url,l=n.label;return r.a.createElement("li",{key:e},r.a.createElement("a",{href:"#".concat(a)},r.a.createElement("span",{className:"menu-icon"},r.a.createElement(t,null)),r.a.createElement("span",{className:"menu-label"},l)))})))};var S=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1023 1023",width:"100%",height:"100%",className:"logo"},r.a.createElement("rect",{width:"1023",height:"1023",className:"logo-background"}),r.a.createElement("path",{d:"M 801.874 1023 L 735.679 1023 L 743.355 1007.847 C 759.405 975.945 773.063 938.86 780.64 906.559 C 781.936 900.677 783.332 895.095 783.631 894.098 C 784.129 892.503 786.721 892.403 819.52 892.403 C 854.711 892.403 854.811 892.403 854.811 894.496 C 854.811 899.78 841.951 940.355 834.374 959.197 C 827.097 977.141 809.65 1011.934 803.769 1020.308 L 801.874 1023 L 801.874 1023 L 801.874 1023 Z M 705.783 1023 L 606.776 1023 L 606.079 1015.722 C 604.483 999.473 600.396 985.516 592.321 969.166 C 563.011 910.048 487.345 842.856 370.306 772.373 C 332.622 749.544 304.708 729.805 281.58 709.467 C 270.215 699.398 247.385 676.469 238.612 666.101 C 195.545 615.457 169.725 556.938 161.45 490.643 C 159.257 473.097 158.36 433.618 159.855 416.372 C 165.937 346.487 189.763 284.08 230.138 232.938 C 234.525 227.455 244.793 216.189 253.068 208.015 C 278.19 182.992 299.225 168.237 334.018 151.19 C 375.091 131.052 393.036 125.37 430.819 120.684 C 452.752 117.992 490.336 117.095 514.262 118.69 C 552.943 121.282 597.505 131.85 634.391 147.103 C 662.604 158.767 701.484 180.3 724.214 196.849 C 745.648 212.501 767.58 235.629 773.861 249.088 C 780.141 262.546 775.655 276.503 763.094 282.584 L 758.608 284.778 L 656.922 285.376 C 568.495 285.874 553.939 286.173 545.466 287.569 C 533.502 289.563 525.128 291.756 517.352 294.747 C 514.062 295.943 506.486 297.738 500.604 298.635 C 485.251 301.028 471.294 305.414 458.035 311.894 C 437.598 322.063 426.832 335.621 425.436 353.067 C 424.14 369.815 432.215 387.062 453.649 412.882 C 476.777 440.896 502.099 461.333 560.12 499.116 C 592.421 520.251 620.434 539.99 639.476 555.044 C 716.338 616.155 756.813 675.871 767.68 744.36 C 769.873 758.317 770.571 792.112 769.175 810.256 C 767.68 827.802 763.692 860.501 761.499 872.464 C 752.826 920.117 732.189 977.241 710.157 1015.224 C 707.964 1018.813 706.303 1022.331 706.269 1022.402 C 706.148 1022.656 705.953 1022.862 705.783 1023 L 705.783 1023 Z M 492.629 329.739 C 491.931 333.627 494.423 344.095 497.414 350.176 C 507.184 369.516 530.312 390.053 563.709 408.895 C 584.047 420.359 600.197 429.83 602.091 431.226 C 603.885 432.622 599.499 432.721 557.528 432.821 L 510.872 432.821 L 502.698 425.543 C 474.186 400.521 451.057 369.317 451.057 356.058 C 451.057 346.587 461.724 337.316 480.267 330.537 C 491.831 326.349 493.326 326.25 492.629 329.739 L 492.629 329.739 L 492.629 329.739 L 492.629 329.739 Z M 644.46 460.436 C 649.844 464.124 672.673 482.667 686.331 494.531 C 709.659 514.868 766.185 571.493 767.879 576.478 C 768.079 576.976 755.817 577.375 736.476 577.375 L 704.774 577.375 L 692.811 566.309 C 662.006 537.697 627.512 511.678 577.168 478.979 C 564.607 470.804 552.444 462.928 550.251 461.433 L 546.263 458.741 L 594.115 458.741 C 637.581 458.741 642.267 458.94 644.46 460.436 L 644.46 460.436 L 644.46 460.436 L 644.46 460.436 Z M 793.7 608.479 C 808.055 627.52 824.305 654.338 834.474 675.672 C 840.655 688.931 851.82 717.443 851.82 720.434 C 851.82 721.73 848.132 721.929 820.916 721.929 L 790.111 721.929 L 789.014 717.642 C 779.045 680.058 760.402 643.471 734.682 611.27 L 728.202 603.295 L 789.812 603.295 L 793.7 608.479 L 793.7 608.479 L 793.7 608.479 L 793.7 608.479 Z M 859.198 749.544 C 860.892 755.426 863.086 775.962 863.684 792.711 C 864.581 814.743 862.288 859.305 860.095 865.187 C 859.696 866.184 852.917 866.483 824.305 866.483 C 804.865 866.483 789.014 866.184 789.014 865.685 C 789.014 865.287 789.911 858.208 790.908 850.034 C 794.796 820.026 795.494 809.957 795.494 781.744 C 795.494 766.093 795.095 752.136 794.697 750.541 L 793.999 747.849 L 826.299 747.849 C 856.307 747.849 858.699 747.949 859.198 749.544 L 859.198 749.544 L 859.198 749.544 Z M 523.832 167.141 C 510.075 168.636 488.94 172.524 488.94 173.621 C 488.94 174.019 496.616 177.608 505.888 181.496 C 559.422 204.226 597.804 215.492 621.531 215.691 C 634.591 215.791 639.775 214.395 644.66 209.51 C 648.448 205.722 648.946 204.127 648.547 196.051 C 648.049 188.375 646.753 186.581 637.98 182.493 C 620.733 174.418 599.798 168.835 578.763 166.642 C 565.304 165.346 538.288 165.546 523.832 167.141 Z",fillRule:"evenodd",className:"logo-path"}))};var B=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 5115 1023",width:"100%",height:"100%"},r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"_clipPath_cWdssw61GHTL83Yptj4Wu8UFgj1CTDlc"},r.a.createElement("rect",{width:"5115",height:"1023"}))),r.a.createElement("g",{clipPath:"url(#_clipPath_cWdssw61GHTL83Yptj4Wu8UFgj1CTDlc)"},r.a.createElement("path",{d:"M 0 0 L 5115 0 L 5115 1023 L 0 1023 L 0 0 Z",fillRule:"evenodd",fill:"#1D2123"}),r.a.createElement("path",{d:"M 4606.366 287.439 C 4611.266 289.639 4615.066 293.839 4621.066 303.639 C 4623.566 307.739 4676.566 402.939 4738.866 515.339 C 4861.966 737.639 4856.066 726.139 4853.766 737.839 C 4851.466 750.239 4839.666 756.139 4827.166 751.039 C 4818.066 747.439 4814.866 742.339 4776.666 672.939 C 4757.066 637.239 4738.066 602.139 4734.566 595.039 C 4726.066 578.139 4600.066 348.139 4599.066 347.839 C 4598.266 347.639 4470.166 581.539 4462.366 597.539 C 4451.166 620.339 4385.166 739.039 4381.166 743.539 C 4375.966 749.339 4368.466 752.839 4361.166 752.839 C 4350.966 752.839 4344.966 746.039 4344.066 733.439 C 4343.666 727.239 4343.866 726.039 4347.066 719.339 C 4352.166 708.639 4577.466 302.039 4582.066 295.339 C 4584.166 292.139 4586.866 289.039 4588.066 288.439 C 4594.166 285.139 4600.666 284.839 4606.366 287.439 L 4606.366 287.439 Z M 3932.841 288.577 C 3909.341 287.477 3716.741 287.377 3711.941 288.477 C 3710.341 288.777 3708.141 290.377 3706.941 291.877 L 3704.841 294.677 L 3704.841 510.377 C 3704.841 713.777 3704.941 726.477 3706.641 732.477 C 3710.141 745.177 3715.041 749.577 3726.141 750.277 C 3731.841 750.577 3733.441 750.277 3736.841 748.377 C 3742.141 745.277 3746.041 737.577 3747.341 727.577 C 3747.841 723.377 3748.341 686.177 3748.341 643.277 L 3748.341 566.577 L 3821.641 566.577 L 3894.841 566.677 L 3978.441 655.977 C 4068.441 752.077 4065.341 749.077 4076.741 750.277 C 4087.141 751.377 4094.741 746.377 4097.241 737.077 C 4098.341 732.777 4097.541 728.077 4094.641 721.777 C 4093.741 719.977 4060.141 683.677 4019.841 641.277 L 3946.641 564.077 L 3960.741 562.877 C 3993.741 560.177 4021.941 552.777 4047.341 540.077 C 4073.341 527.177 4090.641 510.077 4102.341 485.377 C 4111.441 466.077 4114.641 444.577 4112.541 417.377 C 4109.741 380.577 4099.941 355.477 4080.441 335.277 C 4052.941 306.677 4006.441 291.977 3932.841 288.577 L 3932.841 288.577 Z M 3753.915 428.2 L 3753.915 325.6 L 3862.215 326 C 3955.515 326.3 3971.815 326.6 3980.915 328 C 4016.115 333.4 4034.315 341.3 4051.415 358.5 C 4060.115 367.1 4064.215 374 4068.515 386.5 C 4073.115 400.1 4075.015 413.1 4074.915 431.1 C 4074.815 456.4 4069.915 473.4 4058.815 487.1 C 4043.315 506.2 4022.015 517.6 3989.215 524.3 C 3963.715 529.4 3952.215 529.9 3849.215 530.4 L 3753.915 530.9 L 3753.915 428.2 L 3753.915 428.2 Z M 3277.64 289.876 C 3304.94 293.276 3331.94 299.676 3347.14 306.376 C 3390.84 325.776 3410.74 359.576 3408.64 410.476 C 3407.84 428.776 3405.34 440.176 3399.44 452.376 C 3393.84 464.076 3390.24 469.376 3382.14 477.776 C 3371.64 488.776 3354.24 498.776 3338.74 502.776 C 3336.04 503.376 3333.94 504.276 3333.94 504.676 C 3333.94 504.976 3336.74 505.876 3340.24 506.476 C 3356.94 509.776 3380.64 519.976 3393.14 529.476 C 3396.64 532.176 3402.74 537.776 3406.74 542.076 C 3425.84 562.476 3433.84 586.676 3432.54 620.076 C 3431.04 662.776 3418.24 690.276 3389.44 713.176 C 3370.84 727.976 3342.04 739.076 3307.84 744.476 C 3274.64 749.876 3271.64 749.976 3122.44 750.376 C 3024.84 750.576 2982.34 750.376 2979.74 749.676 C 2975.34 748.276 2970.44 742.976 2969.04 737.876 C 2967.54 732.476 2967.54 306.576 2969.04 301.276 C 2970.44 296.176 2975.44 290.876 2980.44 289.076 C 2986.74 286.776 3258.64 287.576 3277.64 289.876 L 3277.64 289.876 Z M 3011.915 621.8 L 3011.915 718.8 L 3117.415 718.8 C 3221.915 718.8 3243.215 718.3 3271.415 715.2 C 3333.515 708.4 3372.315 688.1 3384.215 656.1 C 3388.315 645.2 3389.415 638.3 3389.315 623.3 C 3389.215 591.9 3384.115 574.1 3371.315 559.9 C 3359.515 546.9 3336.015 535.5 3310.415 530.4 C 3284.715 525.3 3288.615 525.5 3145.715 525.1 L 3011.915 524.7 L 3011.915 621.8 Z M 3105.215 487.9 C 3206.915 488.2 3217.415 488.1 3241.915 486.6 C 3307.515 482.6 3346.215 467.9 3358.315 442.2 C 3364.115 430.1 3366.715 411.2 3364.915 395.1 C 3362.915 376.3 3358.215 364.4 3349.215 354.7 C 3336.215 340.6 3317.115 332 3288.415 327.2 C 3261.015 322.7 3230.315 321.7 3113.215 321.7 L 3011.915 321.7 L 3011.915 487.7 L 3105.215 487.9 Z M 2446.552 748.401 C 2506.452 743.401 2550.152 732.201 2588.852 711.901 C 2619.252 695.901 2642.152 675.201 2659.852 647.901 C 2673.052 627.701 2680.552 609.201 2686.852 581.901 C 2692.552 556.901 2693.852 544.201 2693.852 510.901 C 2693.852 470.501 2690.552 446.601 2680.752 416.401 C 2668.752 379.101 2642.052 343.301 2610.352 321.901 C 2558.352 286.901 2489.152 270.701 2390.852 270.701 C 2291.952 270.601 2222.652 286.801 2170.552 322.101 C 2145.852 338.901 2122.652 366.201 2109.252 394.401 C 2099.952 413.801 2093.152 439.001 2089.252 468.101 C 2086.152 491.001 2086.152 529.301 2089.152 552.401 C 2096.852 610.801 2116.352 651.701 2152.152 684.201 C 2180.752 710.201 2222.852 729.801 2272.052 739.901 C 2294.552 744.601 2334.552 749.101 2363.852 750.301 C 2380.852 751.001 2428.352 749.901 2446.552 748.401 Z M 2341.915 714.01 C 2288.815 709.91 2252.715 701.41 2220.415 685.21 C 2203.015 676.51 2192.015 668.71 2179.215 655.81 C 2145.115 621.61 2129.915 577.01 2129.915 511.01 C 2129.915 459.61 2139.315 421.11 2159.215 390.71 C 2182.015 355.91 2215.315 333.71 2264.915 320.11 C 2332.615 301.71 2455.215 302.31 2520.315 321.51 C 2555.215 331.81 2580.715 346.01 2601.015 366.51 C 2635.815 401.41 2650.315 444.11 2650.315 511.01 C 2650.315 572.51 2637.415 614.91 2608.615 648.01 C 2595.315 663.31 2583.815 672.31 2564.115 682.91 C 2531.515 700.51 2493.415 709.81 2435.915 714.01 C 2412.515 715.81 2365.215 715.71 2341.915 714.01 L 2341.915 714.01 Z M 1621.415 749.553 C 1683.315 746.153 1733.515 735.453 1789.915 713.453 C 1805.815 707.253 1811.015 703.253 1813.415 695.253 C 1816.715 684.253 1808.815 673.553 1797.515 673.553 C 1795.615 673.553 1785.215 676.853 1774.215 680.953 C 1712.615 704.053 1655.115 714.553 1589.915 714.553 C 1552.315 714.553 1510.815 710.853 1481.515 705.053 C 1440.315 696.853 1402.315 679.653 1380.215 659.153 C 1350.715 631.753 1334.915 597.353 1328.715 546.553 C 1326.815 531.253 1327.115 485.253 1329.215 470.053 C 1334.915 427.353 1346.115 399.653 1367.815 374.253 C 1400.715 335.453 1456.615 313.953 1540.415 307.553 C 1626.615 300.953 1704.615 311.853 1777.915 340.753 C 1792.015 346.353 1797.115 347.353 1802.315 345.553 C 1815.715 341.153 1818.915 326.453 1808.815 316.553 C 1805.715 313.553 1801.615 311.453 1791.615 307.553 C 1743.315 288.653 1701.315 278.353 1651.915 273.053 C 1592.415 266.753 1514.415 270.853 1459.415 283.153 C 1430.415 289.553 1397.615 302.553 1375.415 316.353 C 1361.415 325.053 1355.415 329.953 1341.915 343.453 C 1305.115 380.353 1288.215 424.153 1283.915 493.153 C 1281.615 528.853 1287.115 574.053 1297.415 605.753 C 1306.815 634.553 1328.615 666.753 1352.915 687.653 C 1378.315 709.453 1420.015 728.653 1462.415 737.853 C 1506.015 747.453 1571.415 752.253 1621.415 749.553 L 1621.415 749.553 Z",fill:"#FFF"}),r.a.createElement("rect",{width:"1023",height:"1023",fill:"#D83326"}),r.a.createElement("path",{d:"M 801.874 1023 L 735.679 1023 L 743.355 1007.847 C 759.405 975.945 773.063 938.86 780.64 906.559 C 781.936 900.677 783.332 895.095 783.631 894.098 C 784.129 892.503 786.721 892.403 819.52 892.403 C 854.711 892.403 854.811 892.403 854.811 894.496 C 854.811 899.78 841.951 940.355 834.374 959.197 C 827.097 977.141 809.65 1011.934 803.769 1020.308 L 801.874 1023 L 801.874 1023 L 801.874 1023 Z M 705.783 1023 L 606.776 1023 L 606.079 1015.722 C 604.483 999.473 600.396 985.516 592.321 969.166 C 563.011 910.048 487.345 842.856 370.306 772.373 C 332.622 749.544 304.708 729.805 281.58 709.467 C 270.215 699.398 247.385 676.469 238.612 666.101 C 195.545 615.457 169.725 556.938 161.45 490.643 C 159.257 473.097 158.36 433.618 159.855 416.372 C 165.937 346.487 189.763 284.08 230.138 232.938 C 234.525 227.455 244.793 216.189 253.068 208.015 C 278.19 182.992 299.225 168.237 334.018 151.19 C 375.091 131.052 393.036 125.37 430.819 120.684 C 452.752 117.992 490.336 117.095 514.262 118.69 C 552.943 121.282 597.505 131.85 634.391 147.103 C 662.604 158.767 701.484 180.3 724.214 196.849 C 745.648 212.501 767.58 235.629 773.861 249.088 C 780.141 262.546 775.655 276.503 763.094 282.584 L 758.608 284.778 L 656.922 285.376 C 568.495 285.874 553.939 286.173 545.466 287.569 C 533.502 289.563 525.128 291.756 517.352 294.747 C 514.062 295.943 506.486 297.738 500.604 298.635 C 485.251 301.028 471.294 305.414 458.035 311.894 C 437.598 322.063 426.832 335.621 425.436 353.067 C 424.14 369.815 432.215 387.062 453.649 412.882 C 476.777 440.896 502.099 461.333 560.12 499.116 C 592.421 520.251 620.434 539.99 639.476 555.044 C 716.338 616.155 756.813 675.871 767.68 744.36 C 769.873 758.317 770.571 792.112 769.175 810.256 C 767.68 827.802 763.692 860.501 761.499 872.464 C 752.826 920.117 732.189 977.241 710.157 1015.224 C 707.964 1018.813 706.303 1022.331 706.269 1022.402 C 706.148 1022.656 705.953 1022.862 705.783 1023 L 705.783 1023 Z M 492.629 329.739 C 491.931 333.627 494.423 344.095 497.414 350.176 C 507.184 369.516 530.312 390.053 563.709 408.895 C 584.047 420.359 600.197 429.83 602.091 431.226 C 603.885 432.622 599.499 432.721 557.528 432.821 L 510.872 432.821 L 502.698 425.543 C 474.186 400.521 451.057 369.317 451.057 356.058 C 451.057 346.587 461.724 337.316 480.267 330.537 C 491.831 326.349 493.326 326.25 492.629 329.739 L 492.629 329.739 L 492.629 329.739 L 492.629 329.739 Z M 644.46 460.436 C 649.844 464.124 672.673 482.667 686.331 494.531 C 709.659 514.868 766.185 571.493 767.879 576.478 C 768.079 576.976 755.817 577.375 736.476 577.375 L 704.774 577.375 L 692.811 566.309 C 662.006 537.697 627.512 511.678 577.168 478.979 C 564.607 470.804 552.444 462.928 550.251 461.433 L 546.263 458.741 L 594.115 458.741 C 637.581 458.741 642.267 458.94 644.46 460.436 L 644.46 460.436 L 644.46 460.436 L 644.46 460.436 Z M 793.7 608.479 C 808.055 627.52 824.305 654.338 834.474 675.672 C 840.655 688.931 851.82 717.443 851.82 720.434 C 851.82 721.73 848.132 721.929 820.916 721.929 L 790.111 721.929 L 789.014 717.642 C 779.045 680.058 760.402 643.471 734.682 611.27 L 728.202 603.295 L 789.812 603.295 L 793.7 608.479 L 793.7 608.479 L 793.7 608.479 L 793.7 608.479 Z M 859.198 749.544 C 860.892 755.426 863.086 775.962 863.684 792.711 C 864.581 814.743 862.288 859.305 860.095 865.187 C 859.696 866.184 852.917 866.483 824.305 866.483 C 804.865 866.483 789.014 866.184 789.014 865.685 C 789.014 865.287 789.911 858.208 790.908 850.034 C 794.796 820.026 795.494 809.957 795.494 781.744 C 795.494 766.093 795.095 752.136 794.697 750.541 L 793.999 747.849 L 826.299 747.849 C 856.307 747.849 858.699 747.949 859.198 749.544 L 859.198 749.544 L 859.198 749.544 Z M 523.832 167.141 C 510.075 168.636 488.94 172.524 488.94 173.621 C 488.94 174.019 496.616 177.608 505.888 181.496 C 559.422 204.226 597.804 215.492 621.531 215.691 C 634.591 215.791 639.775 214.395 644.66 209.51 C 648.448 205.722 648.946 204.127 648.547 196.051 C 648.049 188.375 646.753 186.581 637.98 182.493 C 620.733 174.418 599.798 168.835 578.763 166.642 C 565.304 165.346 538.288 165.546 523.832 167.141 Z",fillRule:"evenodd",fill:"#FFF"})))};function W(){var n=Object(s.a)(["\n  padding: 0;\n  margin: 0;\n  border: none;\n  border-bottom: 1px solid ",";\n  background-color: ",";\n  outline: transparent;\n  height: 62px;\n"]);return W=function(){return n},n}function P(){var n=Object(s.a)(["\n  background-color: ",";\n  max-width: 62px;\n  height: 100vh;\n  position: fixed;\n  z-index: 1;\n  transition: max-width 0.2s;\n\n  a {\n    color: ",';\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0.5rem;\n    text-decoration: none;\n  }\n\n  .bottom {\n    position: absolute;\n    bottom: 5px;\n    width: 100%;\n  }\n\n  .menu-list {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    position: relative;\n    transition: all 0.2s;\n\n    &:before {\n      content: "";\n      display: block;\n      background: ',";\n      position: absolute;\n      top: 50%;\n      left: 0;\n      width: 2px;\n      height: 0;\n      transform: translateY(-50%);\n      transition: all 0.2s;\n      z-index: 1;\n    }\n\n    &.active,\n    &:hover:not(.disabled) {\n      background: ",";\n\n      &:before {\n        height: 100%;\n      }\n    }\n\n    &.active {\n      background: ",";\n    }\n\n    &.disabled {\n      a {\n        color: ",";\n        cursor: default;\n      }\n    }\n  }\n\n  .sub-menu li {\n    background-color: ",";\n\n    &:hover {\n      background-color: ",";\n    }\n  }\n\n  .menu-child-indicator {\n    display: none;\n  }\n\n  .menu-label {\n    display: none;\n    flex-grow: 1;\n    margin-left: 0.5rem;\n  }\n\n  .menu-icon {\n    height: 1em;\n  }\n\n  .logo {\n    .logo-background {\n      fill: ",";\n    }\n    &:hover {\n      background: ",";\n      .logo-background {\n        fill: ",";\n      }\n    }\n    .logo-path {\n      fill: ",";\n    }\n  }\n\n  &.expand {\n    max-width: 306px;\n\n    .menu-child-indicator,\n    .menu-label {\n      display: block;\n    }\n\n    .logo {\n      background: ",";\n      .logo-background {\n        fill: ",";\n      }\n    }\n  }\n"]);return P=function(){return n},n}var D=Object(f.b)("nav")(P(),function(n){return n.theme.darkGray},function(n){return n.theme.white},function(n){return n.theme.accentColor},function(n){var e=n.theme;return Object(p.a)(.1,e.black)},function(n){var e=n.theme;return Object(p.a)(.1,e.black)},function(n){var e=n.theme;return Object(p.a)(.6,e.white)},function(n){return n.theme.black},function(n){return n.theme.darkGray},function(n){return n.theme.darkGray},function(n){return n.theme.accentColor},function(n){return n.theme.accentColor},function(n){return n.theme.white},function(n){var e=n.theme;return Object(p.a)(.2,e.black)},function(n){var e=n.theme;return Object(p.a)(.2,e.black)}),H=Object(f.b)("button")(W(),function(n){return n.theme.black},function(n){return n.theme.darkGray});var R=function(){var n=Object(a.useReducer)(Z,M),e=Object(d.a)(n,2),t=e[0],l=function(n){return{toggleSubMenu:O.a(n,_),toggleMainMenu:O.a(n,I)}}(e[1]),c=l.toggleSubMenu,o=l.toggleMainMenu,i=t.openSubMenus,u=t.expandMenu;return r.a.createElement(D,{className:Object(f.a)({expand:u})},r.a.createElement("header",null,r.a.createElement(H,{onClick:o},u?r.a.createElement(B,null):r.a.createElement(S,null))),r.a.createElement("ul",{className:"menu-list"},r.a.createElement(A,{isActive:b.a("home",i),toggleFn:function(){return c("home")},Icon:h.e,label:"Home",subMenuItems:[{Icon:h.g,url:"foo",label:"Foo"},{Icon:h.g,url:"bar",label:"Bar"},{Icon:h.g,url:"baz",label:"Baz"}]}),r.a.createElement(A,{isActive:b.a("list",i),toggleFn:function(){return c("list")},Icon:h.c,label:"List",disabled:!0}),r.a.createElement(A,{isActive:b.a("users",i),toggleFn:function(){return c("users")},label:"Users",Icon:h.l})),r.a.createElement("ul",{className:"menu-list bottom"},r.a.createElement(A,{isActive:b.a("admin",i),toggleFn:c,Icon:h.k,label:"Admin"})))};function Y(){var n=Object(s.a)(["\n  font-size: 0.8rem;\n  display: flex;\n  flex-direction: column;\n  height: 65px;\n  margin-left: .5rem;\n  margin-right: .5rem;\n"]);return Y=function(){return n},n}var J=Object(f.b)("div")(Y());var $=function(n){var e=n.data;return r.a.createElement(J,null,e.map(function(n){var e=Object(d.a)(n,2),t=e[0],a=e[1];return r.a.createElement("div",{key:"".concat(t,"-").concat(a)},r.a.createElement("strong",null,t,": "),r.a.createElement("span",null,a))}))},q=t(17),K=t.n(q);function Q(){var n=Object(s.a)(["\n  img {\n    border-radius: 50%;\n    margin-right: 1rem;\n  }\n"]);return Q=function(){return n},n}var V=Object(f.b)("div")(Q());var X=function(n){return r.a.createElement(V,null,r.a.createElement("img",{src:"https://source.unsplash.com/random/40x40"}))},nn=t(42);function en(){var n=Object(s.a)(["\n  position: relative;\n\n  .badge {\n    position: absolute;\n    top: -10px;\n    left: -10px;\n    //transform: translate(-7px, -7px);\n    //transform-origin: bottom right;\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(s.a)(["\n  background-color: ",";\n  border-radius: 50%;\n  height: 1rem;\n  min-width: 1rem;\n  font-size: 0.7rem;\n  color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.05rem;\n  border: 1px solid ",";\n"]);return tn=function(){return n},n}var an=Object(f.b)("div")(tn(),function(n){return n.theme.accentColor},function(n){return n.theme.white},function(n){var e=n.theme;return Object(p.b)(.1,e.accentColor)}),rn=Object(f.b)("span")(en());var ln=function(n){var e=n.children,t=n.className,a=n.value,l=Object(nn.a)(n,["children","className","value"]);return r.a.createElement(rn,null,r.a.createElement(an,Object.assign({},l,{className:"".concat(t," badge")}),a),e)};function cn(){var n=Object(s.a)(["\n  display: flex;\n  width: 7rem;\n  margin-top: 0.25rem;\n  justify-content: space-between;\n  font-size: 1.2rem;\n  color: ",";\n  a {\n    text-decoration: none;\n  }\n  a:visited {\n    color: currentColor;\n  }\n"]);return cn=function(){return n},n}var on=Object(f.b)("div")(cn(),function(n){return n.theme.darkGray});var un=function(){return r.a.createElement(on,null,r.a.createElement("a",{href:"#"},r.a.createElement(h.f,null)),r.a.createElement("a",{href:"#"},r.a.createElement(h.h,null)),r.a.createElement("a",{href:"#"},r.a.createElement(h.i,null)),r.a.createElement(ln,{value:5},r.a.createElement("a",{href:"#"},r.a.createElement(h.d,null))))};function Cn(){var n=Object(s.a)(["\n  border-radius: 20px;\n  background-color: ",";\n  padding: 0.5rem;\n    color: ",";\n\n  input {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    padding-left: 8px;\n    width: 150px;\n    height: 20px;\n    background-color: ",";\n    border: none;\n    outline: none;\n    color: ",";\n    font-size: 1.1rem;\n    transition: width 0.4s ease;\n  }\n\n  input::placeholder {\n    padding-top: 0.25rem;\n    font-size: 1rem;\n    color: ",";\n  }\n  input:focus {\n    width: 200px;\n  }\n\n  .search-bar__wrapper {\n    display: flex;\n    align-items: center;\n  }\n\n  svg {\n    margin-left: 8px;\n  }\n"]);return Cn=function(){return n},n}var mn=Object(f.b)("div")(Cn(),function(n){return n.theme.lightGray},function(n){return n.theme.white},function(n){return n.theme.lightGray},function(n){return n.theme.white},function(n){return n.theme.white});var sn=function(){return r.a.createElement(mn,null,r.a.createElement("div",{className:"search-bar__wrapper"},r.a.createElement(h.j,null),r.a.createElement("input",{type:"search",placeholder:"Search"})))};function dn(){var n=Object(s.a)(["\n  font-size: 1.5rem;\n  flex-basis: 300px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return dn=function(){return n},n}var fn=Object(f.b)("div")(dn());var hn=function(){var n=K.a.lorem.sentence();return r.a.createElement(fn,{title:n},n)};function bn(){var n=Object(s.a)(["\n  background: ",";\n  border-bottom: 1px solid ",";\n  box-shadow: 0 2px 5px 0 ",";\n  position: fixed;\n  width: 95vw;\n  height: 62px;\n  margin-left: 62px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  .customer-logo-wrapper {\n    padding: 0.5rem;\n\n    .customer-logo {\n      border-radius: 4px;\n      transition: all 0.2s;\n      cursor: pointer;\n      &:hover {\n        box-shadow: 0 1px 10px ",";\n        transform: scale(1.007);\n        z-index: 2;\n      }\n    }\n  }\n"]);return bn=function(){return n},n}var pn=Object(f.b)("header")(bn(),function(n){return n.theme.white},function(n){var e=n.theme;return Object(p.a)(.2,e.white)},function(n){var e=n.theme;return Object(p.a)(.1,e.white)},function(n){return n.theme.lightGray});var gn=function(){return r.a.createElement(pn,null,r.a.createElement("div",{className:"customer-logo-wrapper"},r.a.createElement("img",{src:"https://source.unsplash.com/random/300x50",className:"customer-logo"})),r.a.createElement($,{data:[["Position",K.a.name.jobTitle()],["Status","Open"],["Expired","".concat(K.a.random.boolean())],["Type","Actual"]]}),r.a.createElement(hn,null),r.a.createElement(un,null),r.a.createElement(sn,null),r.a.createElement(X,null))},Ln=t(38),vn=t(1109);function En(){var n=Object(s.a)(["\n  background: ",";\n  width: 400px;\n  height: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0.5rem;\n  font-size: 5rem;\n"]);return En=function(){return n},n}function xn(){var n=Object(s.a)(["\n  font-size: 24px;\n  color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]);return xn=function(){return n},n}function wn(){var n=Object(s.a)(["\n  position: relative;\n  left: 63px;\n  top: 65px;\n  z-index: -1;\n  padding: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% - 95px);\n"]);return wn=function(){return n},n}function jn(){var n=Object(s.a)(["\n  display: flex;\n"]);return jn=function(){return n},n}var On=Object(f.b)("div")(jn()),Mn=Object(f.b)("div")(wn()),yn=Object(f.b)("div")(xn(),function(n){return n.theme.lightGray}),kn=Object(f.b)("div")(En(),function(n){return n.theme.white}),Nn={white:"#f7f7f7",lightGray:"#9f9d9d",darkGray:"#343A40",black:"#2d2d2d",accentColor:"#d83326"},Gn=function(n){function e(){return Object(o.a)(this,e),Object(u.a)(this,Object(C.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(i.a)(e,[{key:"render",value:function(){return r.a.createElement(Ln.a,{theme:Nn},r.a.createElement(On,null,r.a.createElement(R,null),r.a.createElement("div",null,r.a.createElement(gn,null),r.a.createElement(Mn,null,r.a.createElement(yn,null,r.a.createElement("div",null,"Content Goes Here")),vn.a(1,100).map(function(n){return r.a.createElement(kn,null,n)})))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Gn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},43:function(n,e,t){n.exports=t(1097)},48:function(n,e,t){}},[[43,1,2]]]);
//# sourceMappingURL=main.da51efb1.chunk.js.map