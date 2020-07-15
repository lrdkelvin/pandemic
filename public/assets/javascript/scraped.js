var deathsStuffs = [17,25,41,56,80,106,132,170,213,259,304,362,426,492,565,638,724,813,910,1018,1115,1261,1383,1526,1669,1775,1873,2009,2126,2247,2360,2460,2618,2699,2763,2800,2858,2923,2977,3050,3117,3202,3285,3387,3493,3598,3826,4023,4297,4627,4980,5428,5842,6533,7178,7997,8983,10083,11466,13114,14762,16699,19193,21785,24750,28226,31936,35315,39490,44226,49425,55724,61734,67886,72960,78597,86497,93295,100975,108378,114713,120391,126114,133558,141751,148789,157273,163960,168936,174496,181721,188374,195141,201545,207722,211566,216086,222840,229460,235280,240963,246275,249842,253946,259772,266614,272227,277728,282028,286070,289568,295110,300338,305622,310632,314991,318639,322117,326701,331337,336296,340960,345149,348343,351652,355438,360755,365448,370375,374516,377801,380879,385552,390482,396056,400965,405254,408698,411882,416653,421805,426806,431422,435686,438987,442427,449015,454225,459383,464500,468966,472327,476163,481622,486679,491861,496711,501279,504762,508203,513249,518108,523272,528460,532998,536606,540183,545707,551232,556649,562077,567096,571218,574936,580282];var gdailydeaths = [null,8,16,15,24,26,26,38,43,46,45,58,64,66,73,73,86,89,97,108,97,146,122,143,143,106,98,136,117,121,113,100,158,81,64,37,58,65,54,73,67,85,83,102,106,105,228,197,274,330,353,448,414,691,645,819,986,1100,1383,1648,1648,1937,2494,2592,2965,3476,3710,3379,4175,4736,5199,6299,6010,6152,5074,5637,7900,6798,7680,7403,6335,5678,5723,7444,8193,7038,8484,6687,4976,5560,7225,6653,6767,6404,6177,3844,4520,6754,6620,5820,5683,5312,3567,4104,5826,6842,5613,5501,4300,4042,3498,5542,5228,5284,5010,4359,3648,3478,4584,4636,4959,4664,4189,3194,3309,3786,5317,4693,4927,4141,3285,3078,4673,4930,5574,4909,4289,3444,3184,4771,5152,5001,4616,4264,3301,3440,6588,5210,5158,5117,4466,3361,3836,5459,5057,5182,4850,4568,3483,3441,5046,4859,5164,5188,4538,3608,3577,5524,5525,5417,5428,5019,4122,3718,5346];var usdailycases=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,0,0,0,0,0,20,0,0,18,4,3,0,3,5,7,25,24,34,63,98,116,106,163,290,307,330,554,589,848,989,1755,2967,4602,5673,4890,9448,10379,11254,13557,17532,18916,19666,20276,23296,25292,27111,30571,32963,34685,25901,31750,34071,32514,34086,34244,30488,27860,27094,27441,30676,30143,32496,29193,26197,28222,26238,30305,32073,39123,35523,26588,23267,25573,28595,31000,36161,29869,27438,24759,24909,25578,29643,29292,26235,20818,18706,23024,22390,28095,27624,24332,20201,23543,20801,22672,28844,24666,21939,19930,19920,19400,20754,23085,25697,23763,20755,22431,22287,20831,22850,25427,22862,18933,19069,19085,21040,23490,27405,25490,20181,20901,25634,26257,27964,33582,33431,26118,31538,36066,38434,40236,47365,43599,40563,44764,46075,52361,57323,58910,49818,45931,50584,55442,61848,61067,71787,61719,58349,65488,65594];var utahdeaths=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,2,2,2,4,5,7,7,7,8,8,13,13,13,13,17,18,18,18,19,20,21,23,25,27,28,32,34,35,39,41,41,41,45,45,46,46,49,50,50,56,58,61,61,66,67,68,73,75,75,77,78,80,80,88,90,92,93,97,97,98,101,105,106,107,112,113,113,113,117,117,120,121,121,124,127,128,131,139,139,139,143,145,149,152,155,155,158,158,163,163,164,166,167,167,168,172,173,176,181,181,184,190,194,201,205,207,212,215,216,226];var usdeaths=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,6,9,11,12,15,19,22,26,30,38,41,48,58,73,95,121,171,240,310,376,512,693,962,1269,1628,2129,2779,3280,4102,5201,6460,7671,8953,10530,11953,13476,15743,17953,20099,22379,24445,26201,27947,30573,33263,35516,38111,40031,41625,43605,46353,48762,51163,53154,55263,56433,57835,60371,62812,65085,67031,68761,69936,71274,73677,76251,78423,80136,81587,82802,83876,85788,87645,89435,91071,92309,93191,94209,95790,97222,98652,99974,101027,101653,102289,103072,104635,105873,107106,108139,108790,109485,110632,111736,112786,113773,114490,114874,115472,116576,117574,118490,119290,120004,120340,120772,121630,122449,123205,123934,124516,124786,125155,126026,126845,127498,128161,128673,128958,129324,130050,130726,131413,132039,132304,132566,132944,133936,134826,135785,136633,137364,137744,138208,139143];var utahcases=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,9,10,28,39,51,63,80,112,136,181,257,298,346,402,480,602,719,806,887,1012,1074,1246,1428,1605,1675,1738,1846,1976,2102,2206,2303,2363,2412,2542,2683,2805,2931,3069,3213,3296,3445,3612,3782,3948,4123,4233,4343,4495,4672,4828,4981,5175,5317,5449,5595,5724,5919,6103,6251,6362,6432,6620,6749,6913,7068,7238,7384,7518,7710,7874,8057,8260,8392,8521,8620,8706,8921,9264,9533,9797,9999,10202,10497,10813,11252,11798,12066,12322,12559,12864,13252,13577,13981,14313,14608,14937,15344,15839,16425,17068,17462,17906,18300,18784,19374,20050,20628,21100,21664,22217,22716,23270,23866,24542,24952,25469,26033,26755,27356,28223,28855,29484,30030,30478];var usdailydeaths=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,null,null,0,0,0,0,0,0,0,0,0,1,0,5,3,2,1,3,4,3,4,4,8,3,7,10,15,22,26,50,69,70,66,136,181,269,307,359,501,650,501,822,1099,1259,1211,1282,1577,1423,1523,2267,2210,2146,2280,2066,1756,1746,2626,2690,2253,2595,1920,1594,1980,2748,2409,2401,1991,2109,1170,1402,2536,2441,2273,1946,1730,1175,1338,2403,2574,2172,1713,1451,1215,1074,1912,1857,1790,1636,1238,882,1018,1581,1432,1430,1322,1053,626,636,783,1563,1238,1233,1033,651,695,1147,1104,1050,987,717,384,598,1104,998,916,800,714,336,432,858,819,756,729,582,270,369,871,819,653,663,512,285,366,726,676,687,626,265,262,378,992,890,959,848,731,380,464,935];var utahdailydeaths=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,null,null,null,null,null,null,0,1,0,0,0,0,1,0,0,2,1,2,0,0,1,0,5,0,0,0,4,1,0,0,1,1,1,2,2,2,1,4,2,1,4,2,0,0,4,0,1,0,3,1,0,6,2,3,0,5,1,1,5,2,0,2,1,2,0,8,2,2,1,4,0,1,3,4,1,1,5,1,0,0,4,0,3,1,0,3,3,1,3,8,0,0,4,2,4,3,3,0,3,0,5,0,1,2,1,0,1,4,1,3,5,0,3,6,4,7,4,2,5,3,1,10];var utahdailycases=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,4,1,18,11,12,12,17,32,24,45,76,41,48,56,78,122,117,87,81,125,62,172,182,177,70,63,108,130,126,104,97,60,49,130,141,122,126,138,144,83,149,167,170,166,175,110,110,152,177,156,153,194,142,132,146,129,195,184,148,111,70,188,129,164,155,170,146,134,192,164,183,203,132,129,99,86,215,343,269,264,202,203,295,316,439,546,268,256,237,305,388,325,404,332,295,329,407,495,586,643,394,444,394,484,590,676,578,472,564,553,499,554,596,676,410,517,564,722,601,867,632,629,546,448];var gdailycases = [null,265,472,698,785,1781,1477,1755,2010,2127,2603,2838,3239,3915,3721,3173,3437,2676,3001,2546,2035,14153,5151,2662,2097,2132,2003,1852,516,977,996,978,554,885,738,992,1288,1509,1989,1980,1862,2570,2306,3090,3637,4052,3894,4434,4644,7232,8258,10913,10960,13017,12934,15765,20688,26145,30668,29414,32442,41557,43804,48628,60967,64674,66788,60490,64269,74026,77162,80214,84105,81615,70483,73080,78384,84472,85250,91599,79269,71540,70078,73128,82788,80827,84981,80329,75208,73500,75472,80113,84901,101728,90294,73303,69378,75477,79893,85885,95020,82936,82217,79455,81475,95912,96363,96627,89364,80231,74677,85748,89783,97320,100415,96974,82586,90508,95873,103551,108429,108954,100509,97361,90924,93902,107555,117768,126947,125473,109927,105741,116428,121379,131443,131414,129641,114912,108649,122013,136912,139267,143408,135260,124528,126078,144134,146595,141612,182496,158041,131080,140079,164516,174308,181204,195410,178388,164649,162049,175351,198790,209551,213780,195789,178388,171738,208327,213688,223658,237236,216575,198198,195926,216806];var globalstuffs = [580,845,1317,2015,2800,4581,6058,7813,9823,11950,14553,17391,20630,24545,28266,31439,34876,37552,40553,43099,45134,59287,64438,67100,69197,71329,73332,75184,75700,76677,77673,78651,79205,80090,80828,81820,83108,84617,86606,88586,90448,93018,95324,98414,102051,106103,109997,114431,119075,126307,134565,145478,156438,169455,182389,198154,218842,244987,275655,305069,337511,379068,422872,471500,532467,597141,663929,724419,788688,862714,939876,1020090,1104195,1185810,1256293,1329373,1407757,1492229,1577479,1669078,1748347,1819887,1889965,1963093,2045881,2126708,2211689,2292018,2367226,2440726,2516198,2596311,2681212,2782940,2873234,2946537,3015915,3091392,3171285,3257170,3352190,3435126,3517343,3596798,3678273,3774185,3870548,3967175,4056539,4136770,4211447,4297195,4386978,4484298,4584713,4681687,4764273,4854781,4950654,5054205,5162634,5271588,5372097,5469458,5560382,5654284,5761839,5879607,6006554,6132027,6241954,6347695,6464123,6585502,6716945,6848359,6978000,7092912,7201561,7323574,7460486,7599753,7743161,7878421,8002949,8129027,8273161,8419756,8561368,8743864,8901905,9032985,9173064,9337580,9511888,9693092,9888502,10066890,10231539,10393588,10568939,10767729,10977280,11191060,11386849,11565237,11736975,11945302,12158990,12382648,12619884,12836459,13034657,13230583,13447389];var uscases=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,15,15,15,15,15,35,35,35,53,57,60,60,63,68,75,100,124,158,221,319,435,541,704,994,1301,1631,2185,2774,3622,4611,6366,9333,13935,19608,24498,33946,44325,55579,69136,86668,105584,125250,145526,168822,194114,221225,251796,284759,319444,345345,377095,411166,443680,477766,512010,542498,570358,597452,624893,655569,685712,718208,747401,773598,801820,828058,858363,890436,929559,965082,991670,1014937,1040510,1069105,1100105,1136266,1166135,1193573,1218332,1243241,1268819,1298462,1327754,1353989,1374807,1393513,1416537,1438927,1467022,1494646,1518978,1539179,1562722,1583523,1606195,1635039,1659705,1681644,1701574,1721494,1740894,1761648,1784733,1810430,1834193,1854948,1877379,1899666,1920497,1943347,1968774,1991636,2010569,2029638,2048723,2069763,2093253,2120658,2146148,2166329,2187230,2212864,2239121,2267085,2300667,2334098,2360216,2391754,2427820,2466254,2506490,2553855,2597454,2638017,2682781,2728856,2781217,2838540,2897450,2947268,2993199,3043783,3099225,3161073,3222140,3293927,3355646,3413995,3479483,3545077];