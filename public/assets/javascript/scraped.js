var deathsStuffs = [17,25,41,56,80,106,132,170,213,259,304,362,426,492,565,638,724,813,910,1018,1115,1261,1383,1526,1669,1775,1873,2009,2126,2247,2360,2460,2618,2699,2763,2800,2858,2923,2977,3050,3117,3202,3285,3387,3493,3598,3826,4023,4297,4627,4980,5428,5842,6533,7178,7997,8983,10083,11467,13115,14763,16700,19195,21788,24754,28232,31943,35324,39501,44241,49442,55746,61764,67920,73000,78652,86557,93361,101047,108464,114803,120485,126216,133668,141869,148914,157408,164111,169105,174685,181922,188590,195373,201797,207997,211852,216389,223164,229814,235668,241377,246714,250315,254439,260301,267177,272819,278350,282682,286747,290268,295840,301103,306421,311482,315886,319573,323093,327719,332392,337400,342098,346330,349555,352925,356763,362141,366874,371846,376035,379364,382487,387215,392204,397830,402798,407141,410716,413945,418769,424002,429087,433790,438143,441527,445023,451681,456987,462239,467451,472014,475459,479363,484880,490026,495292,500219,504896,508457,511974,517121,522070,527330,532630,537256,540976,544646,550274,555945,561468,567005,572135,576389,580280,585872,591789,597667,603347,608471,612893,617014,622852,630031,636397,642638,648379,652733,656924,662569,669567,675986,682415,688016,692420];var globalstuffs = [580,845,1317,2015,2800,4581,6058,7813,9823,11950,14553,17391,20630,24545,28266,31439,34876,37552,40553,43099,45134,59287,64438,67100,69197,71329,73332,75184,75700,76677,77673,78651,79205,80090,80828,81820,83108,84617,86606,88586,90447,93018,95322,98411,102052,106104,109998,114432,119076,126308,134566,145479,156439,169461,182429,198172,218885,245065,275721,305140,337573,379143,422997,471660,532616,597326,664026,724513,788791,862830,940002,1020223,1104353,1185986,1256478,1329627,1408030,1492546,1577814,1669435,1748748,1820324,1890449,1963620,2046401,2127252,2212260,2292658,2367862,2441390,2516885,2597035,2681958,2783714,2874021,2947344,3016739,3092230,3172144,3258051,3353088,3436040,3518279,3597771,3679260,3775198,3871588,3968229,4057619,4137914,4212605,4298398,4388169,4485525,4585969,4682954,4765563,4856142,4952040,5055618,5164085,5273074,5373598,5470994,5561947,5655882,5763479,5881310,6008315,6133840,6243791,6349594,6466048,6587450,6718918,6850364,6980039,7094979,7203650,7325683,7462626,7601955,7745365,7880661,8005255,8131408,8275625,8422292,8563985,8746588,8904786,9036005,9176292,9340905,9515385,9696774,9892392,10071033,10235877,10398148,10573730,10772857,10983043,11197930,11394166,11572890,11745060,11954168,12168626,12393156,12631393,12848742,13047866,13244564,13464784,13700378,13950046,14190981,14417999,14640732,14846367,15086044,15366398,15643302,15932911,16194797,16420092,16638667,16887099,17176155,17463560,17752888,18008699,18226600];var usdeaths=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,6,9,11,12,15,19,22,26,30,38,41,48,58,73,95,121,171,240,310,376,512,693,962,1269,1629,2131,2781,3283,4105,5206,6465,7677,8961,10539,11965,13490,15758,17970,20118,22400,24467,26223,27971,30601,33293,35548,38146,40069,41666,43646,46395,48806,51208,53201,55314,56486,57890,60426,62873,65150,67101,68833,70009,71350,73757,76336,78510,80228,81682,82899,83975,85889,87750,89544,91185,92427,93311,94330,95914,97348,98786,100110,101165,101792,102429,103215,104782,106023,107259,108295,108947,109644,110795,111902,112956,113946,114665,115050,115650,116757,117758,118677,119480,120197,120534,120968,121832,122656,123417,124150,124734,125005,125377,126253,127078,127737,128405,128923,129210,129580,130313,130996,131689,132320,132590,132858,133245,134250,135157,136132,136994,137737,138123,138599,139551,140572,141551,142517,143340,143760,144299,145484,146714,147906,149068,149994,150456,151053,152383,153848,155313,156775,157898,158365];var uscases=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,15,15,15,15,15,35,35,35,53,57,60,60,63,68,75,100,124,158,221,319,435,541,704,994,1301,1631,2185,2774,3622,4611,6366,9333,13935,19608,24498,33946,44325,55579,69136,86668,105584,125250,145526,168822,194114,221229,251802,284775,319463,345368,377129,411208,443731,477826,512077,542574,570439,597545,624991,655674,685827,718331,747531,773732,801970,828213,858537,890616,929746,965275,991869,1015142,1040718,1069317,1100325,1136495,1166369,1193807,1218574,1243487,1269068,1298718,1328016,1354256,1375079,1393787,1416816,1439211,1467311,1494940,1519277,1539484,1563033,1583837,1606514,1635360,1660030,1681972,1701906,1721830,1741234,1761988,1785075,1810774,1834539,1855296,1877732,1900021,1920853,1943704,1969133,1991998,2010932,2030002,2049088,2070129,2093620,2121027,2146520,2166702,2187604,2213239,2239497,2267462,2301044,2334476,2360594,2392132,2428199,2466633,2506870,2554236,2597836,2638400,2683165,2729240,2781601,2839123,2898742,2948741,2994777,3045548,3101404,3163702,3225276,3297554,3359558,3418179,3483968,3550016,3622021,3695409,3770396,3833655,3898934,3961813,4029292,4101259,4171146,4249553,4317768,4374273,4436048,4501116,4566416,4634985,4706068,4764609,4813647];var usdailydeaths=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,null,null,0,0,0,0,0,0,0,0,0,1,0,5,3,2,1,3,4,3,4,4,8,3,7,10,15,22,26,50,69,70,66,136,181,269,307,360,502,650,502,822,1101,1259,1212,1284,1578,1426,1525,2268,2212,2148,2282,2067,1756,1748,2630,2692,2255,2598,1923,1597,1980,2749,2411,2402,1993,2113,1172,1404,2536,2447,2277,1951,1732,1176,1341,2407,2579,2174,1718,1454,1217,1076,1914,1861,1794,1641,1242,884,1019,1584,1434,1438,1324,1055,627,637,786,1567,1241,1236,1036,652,697,1151,1107,1054,990,719,385,600,1107,1001,919,803,717,337,434,864,824,761,733,584,271,372,876,825,659,668,518,287,370,733,683,693,631,270,268,387,1005,907,975,862,743,386,476,952,1021,979,966,823,420,539,1185,1230,1192,1162,926,462,597,1330,1465,1465,1462,1123,467];var utahcases=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,9,10,28,39,51,63,80,112,136,181,257,298,346,402,480,602,719,806,887,1012,1074,1246,1428,1605,1675,1738,1846,1976,2102,2206,2303,2363,2412,2542,2683,2805,2931,3069,3213,3296,3445,3612,3782,3948,4123,4233,4343,4495,4672,4828,4981,5175,5317,5449,5595,5724,5919,6103,6251,6362,6432,6620,6749,6913,7068,7238,7384,7518,7710,7874,8057,8260,8392,8521,8620,8706,8921,9264,9533,9797,9999,10202,10497,10813,11252,11798,12066,12322,12559,12864,13252,13577,13981,14313,14608,14937,15344,15839,16425,17068,17462,17906,18300,18784,19374,20050,20628,21100,21664,22217,22716,23270,23866,24542,24952,25469,26033,26755,27356,28223,28855,29484,30030,30478,30891,31845,32572,33332,34117,34526,35012,35578,36099,36962,37623,37973,38409,38855,39194,39696,40196,40702,41175];var utahdeaths=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,2,2,2,4,5,7,7,7,8,8,13,13,13,13,17,18,18,18,19,20,21,23,25,27,28,32,34,35,39,41,41,41,45,45,46,46,49,50,50,56,58,61,61,66,67,68,73,75,75,77,78,80,80,88,90,92,93,97,97,98,101,105,106,107,112,113,113,113,117,117,120,121,121,124,127,128,131,139,139,139,143,145,149,152,155,155,158,158,163,163,164,166,167,167,168,172,173,176,181,181,184,190,194,201,205,207,212,215,216,226,233,234,235,243,243,247,251,260,267,273,274,274,281,286,292,300,304,310,311];var utahdailydeaths=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,null,null,null,null,null,null,0,1,0,0,0,0,1,0,0,2,1,2,0,0,1,0,5,0,0,0,4,1,0,0,1,1,1,2,2,2,1,4,2,1,4,2,0,0,4,0,1,0,3,1,0,6,2,3,0,5,1,1,5,2,0,2,1,2,0,8,2,2,1,4,0,1,3,4,1,1,5,1,0,0,4,0,3,1,0,3,3,1,3,8,0,0,4,2,4,3,3,0,3,0,5,0,1,2,1,0,1,4,1,3,5,0,3,6,4,7,4,2,5,3,1,10,7,1,1,8,0,4,4,9,7,6,1,0,7,5,6,8,4,6,1];var gdailycases = [null,265,472,698,785,1781,1477,1755,2010,2127,2603,2838,3239,3915,3721,3173,3437,2676,3001,2546,2035,14153,5151,2662,2097,2132,2003,1852,516,977,996,978,554,885,738,992,1288,1509,1989,1980,1861,2571,2304,3089,3641,4052,3894,4434,4644,7232,8258,10913,10960,13022,12968,15743,20713,26180,30656,29419,32433,41570,43854,48663,60956,64710,66700,60487,64278,74039,77172,80221,84130,81633,70492,73149,78403,84516,85268,91621,79313,71576,70125,73171,82781,80851,85008,80398,75204,73528,75495,80150,84923,101756,90307,73323,69395,75491,79914,85907,95037,82952,82239,79492,81489,95938,96390,96641,89390,80295,74691,85793,89771,97356,100444,96985,82609,90579,95898,103578,108467,108989,100524,97396,90953,93935,107597,117831,127005,125525,109951,105803,116454,121402,131468,131446,129675,114940,108671,122033,136943,139329,143410,135296,124594,126153,144217,146667,141693,182603,158198,131219,140287,164613,174480,181389,195618,178641,164844,162271,175582,199127,210186,214887,196236,178724,172170,209108,214458,224530,238237,217349,199124,196698,220220,235594,249668,240935,227018,222733,205635,239677,280354,276904,289609,261886,225295,218575,248432,289056,287405,289328,255811,217901];var usdailycases=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,0,0,0,0,0,20,0,0,18,4,3,0,3,5,7,25,24,34,63,98,116,106,163,290,307,330,554,589,848,989,1755,2967,4602,5673,4890,9448,10379,11254,13557,17532,18916,19666,20276,23296,25292,27115,30573,32973,34688,25905,31761,34079,32523,34095,34251,30497,27865,27106,27446,30683,30153,32504,29200,26201,28238,26243,30324,32079,39130,35529,26594,23273,25576,28599,31008,36170,29874,27438,24767,24913,25581,29650,29298,26240,20823,18708,23029,22395,28100,27629,24337,20207,23549,20804,22677,28846,24670,21942,19934,19924,19404,20754,23087,25699,23765,20757,22436,22289,20832,22851,25429,22865,18934,19070,19086,21041,23491,27407,25493,20182,20902,25635,26258,27965,33582,33432,26118,31538,36067,38434,40237,47366,43600,40564,44765,46075,52361,57522,59619,49999,46036,50771,55856,62298,61574,72278,62004,58621,65789,66048,72005,73388,74987,63259,65279,62879,67479,71967,69887,78407,68215,56505,61775,65068,65300,68569,71083,58541,49038];var utahdailycases=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,4,1,18,11,12,12,17,32,24,45,76,41,48,56,78,122,117,87,81,125,62,172,182,177,70,63,108,130,126,104,97,60,49,130,141,122,126,138,144,83,149,167,170,166,175,110,110,152,177,156,153,194,142,132,146,129,195,184,148,111,70,188,129,164,155,170,146,134,192,164,183,203,132,129,99,86,215,343,269,264,202,203,295,316,439,546,268,256,237,305,388,325,404,332,295,329,407,495,586,643,394,444,394,484,590,676,578,472,564,553,499,554,596,676,410,517,564,722,601,867,632,629,546,448,413,954,727,760,785,409,486,566,521,863,661,350,436,446,339,502,500,506,473];var gdailydeaths = [null,8,16,15,24,26,26,38,43,46,45,58,64,66,73,73,86,89,97,108,97,146,122,143,143,106,98,136,117,121,113,100,158,81,64,37,58,65,54,73,67,85,83,102,106,105,228,197,274,330,353,448,414,691,645,819,986,1100,1384,1648,1648,1937,2495,2593,2966,3478,3711,3381,4177,4740,5201,6304,6018,6156,5080,5652,7905,6804,7686,7417,6339,5682,5731,7452,8201,7045,8494,6703,4994,5580,7237,6668,6783,6424,6200,3855,4537,6775,6650,5854,5709,5337,3601,4124,5862,6876,5642,5531,4332,4065,3521,5572,5263,5318,5061,4404,3687,3520,4626,4673,5008,4698,4232,3225,3370,3838,5378,4733,4972,4189,3329,3123,4728,4989,5626,4968,4343,3575,3229,4824,5233,5085,4703,4353,3384,3496,6658,5306,5252,5212,4563,3445,3904,5517,5146,5266,4927,4677,3561,3517,5147,4949,5260,5300,4626,3720,3670,5628,5671,5523,5537,5130,4254,3891,5592,5917,5878,5680,5124,4422,4121,5838,7179,6366,6241,5741,4354,4191,5645,6998,6419,6429,5601,4404];