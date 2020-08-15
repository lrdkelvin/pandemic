var deathsStuffs = [17,25,41,56,80,106,132,170,213,259,304,362,426,492,565,638,724,813,910,1018,1115,1261,1383,1526,1669,1775,1873,2009,2126,2247,2360,2460,2618,2699,2763,2800,2858,2923,2977,3050,3117,3202,3285,3387,3493,3599,3827,4024,4299,4630,4984,5433,5848,6540,7187,8007,8994,10095,11474,13126,14768,16702,19193,21779,24795,28279,31996,35381,39566,44315,49520,55806,61855,68032,73146,78805,86723,93538,101265,108694,115074,120786,126558,134058,142316,149429,157992,164727,169758,175394,182693,189405,196265,202746,208999,212943,217557,224402,231086,236949,242721,248144,251816,256082,262003,268958,274673,280264,284636,288820,292464,298110,303371,308709,313790,318182,321851,325397,330063,334766,339832,344597,348859,352153,355565,359433,364715,369451,374374,378556,381924,385096,389812,394749,400411,405356,409703,413313,416610,421399,426604,431658,436317,440629,444058,447598,454191,459465,464694,469823,474363,477854,481789,487147,492263,497523,502378,507023,510617,514181,519248,524146,529332,534504,539052,542707,546326,551791,557337,562788,568250,573215,577425,581280,586750,592572,598368,603931,608977,613340,617409,623087,630186,636524,642685,648368,652681,656860,662388,669317,675675,682007,687582,692057,696417,702540,709358,715780,722165,727746,732583,737103,743571,750333,756872,762817];var gdailydeaths = [null,8,16,15,24,26,26,38,43,46,45,58,64,66,73,73,86,89,97,108,97,146,122,143,143,106,98,136,117,121,113,100,158,81,64,37,58,65,54,73,67,85,83,102,106,106,228,197,275,331,354,449,415,692,647,820,987,1101,1379,1652,1642,1934,2491,2586,3016,3484,3717,3385,4185,4749,5205,6286,6049,6177,5114,5659,7918,6815,7727,7429,6380,5712,5772,7500,8258,7113,8563,6735,5031,5636,7299,6712,6860,6481,6253,3944,4614,6845,6684,5863,5772,5423,3672,4266,5921,6955,5715,5591,4372,4184,3644,5646,5261,5338,5081,4392,3669,3546,4666,4703,5066,4765,4262,3294,3412,3868,5282,4736,4923,4182,3368,3172,4716,4937,5662,4945,4347,3610,3297,4789,5205,5054,4659,4312,3429,3540,6593,5274,5229,5129,4540,3491,3935,5358,5116,5260,4855,4645,3594,3564,5067,4898,5186,5172,4548,3655,3619,5465,5546,5451,5462,4965,4210,3855,5470,5822,5796,5563,5046,4363,4069,5678,7099,6338,6161,5683,4313,4179,5528,6929,6358,6332,5575,4475,4360,6123,6818,6422,6385,5581,4837,4520,6468,6762,6539,5945];var uscases=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,15,15,15,15,15,35,35,35,53,57,60,60,63,68,75,100,124,158,221,319,435,541,704,994,1301,1631,2185,2774,3622,4611,6366,9333,13935,19608,24498,33946,44325,55579,69136,86668,105584,125250,145526,168822,194114,221229,251802,284775,319463,345368,377129,411208,443731,477826,512077,542574,570439,597545,624991,655674,685827,718331,747531,773732,801970,828213,858537,890616,929746,965275,991869,1015123,1040699,1069297,1100305,1136474,1166346,1193782,1218549,1243461,1269042,1298691,1327988,1354228,1375050,1393758,1416787,1439182,1467281,1494909,1519245,1539452,1563000,1583804,1606480,1635325,1659995,1681937,1701871,1721795,1741199,1761953,1785039,1810737,1834514,1855278,1877723,1900020,1920860,1943718,1969155,1992030,2010969,2030044,2049139,2070187,2093684,2121099,2146616,2166803,2187716,2213355,2239507,2267588,2301283,2334613,2360730,2392268,2428361,2466808,2507055,2554443,2598031,2638619,2683392,2729470,2781867,2839412,2899048,2949042,2995116,3045905,3101790,3164115,3225714,3298034,3360076,3418717,3484533,3550546,3622584,3696011,3771037,3834279,3899591,3962531,4030038,4102038,4171958,4250404,4318608,4375189,4437009,4502078,4567401,4635986,4708422,4767039,4816738,4865450,4920098,4975246,5034140,5097553,5153667,5201638,5251438,5305957,5360302,5415666,5476266];var globalstuffs = [580,845,1317,2015,2800,4581,6058,7813,9823,11958,14581,17433,20690,24618,28354,31537,34990,37675,40680,43249,45299,59474,64659,67341,69473,71630,73669,75549,76087,77126,78185,79222,79849,80848,81723,82878,84350,86185,88403,91065,93709,97038,100244,104570,109743,115513,121476,128770,137625,149087,162506,179268,196593,216090,236812,259598,286432,318063,356076,389099,425173,468845,513094,561459,620567,683509,748131,806061,867842,938422,1013084,1089967,1171568,1250176,1318700,1390638,1467356,1549467,1633457,1723703,1801396,1871632,1941129,2013104,2092095,2171217,2252576,2331414,2403671,2477271,2550697,2628624,2710646,2807402,2894654,2965793,3033253,3107458,3183912,3268652,3361336,3442874,3524168,3603062,3682820,3776000,3869573,3963306,4050297,4128969,4200638,4285577,4374289,4470577,4569808,4664981,4746623,4837191,4932969,5036228,5144529,5252237,5352617,5449776,5541590,5635131,5742577,5859720,5986510,6111653,6221597,6327542,6444045,6565442,6696927,6828463,6958002,7072873,7181707,7303763,7440673,7579805,7723031,7858060,7982461,8108708,8252962,8399421,8540923,8723585,8881567,9012664,9153006,9317739,9492251,9673584,9869175,10047527,10212326,10374753,10550434,10749703,10959864,11174837,11371041,11549783,11722174,11931689,12146618,12371467,12609940,12827454,13026652,13223926,13444801,13681188,13931032,14172504,14399562,14622231,14828541,15069068,15350306,15626735,15916470,16178133,16403120,16622356,16871851,17161812,17449089,17740191,17999830,18224011,18424344,18679066,18950983,19233713,19515958,19786226,20010272,20225382,20489472,20773791,21059277,21345178];var usdailycases=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,0,0,0,0,0,20,0,0,18,4,3,0,3,5,7,25,24,34,63,98,116,106,163,290,307,330,554,589,848,989,1755,2967,4602,5673,4890,9448,10379,11254,13557,17532,18916,19666,20276,23296,25292,27115,30573,32973,34688,25905,31761,34079,32523,34095,34251,30497,27865,27106,27446,30683,30153,32504,29200,26201,28238,26243,30324,32079,39130,35529,26594,23254,25576,28598,31008,36169,29872,27436,24767,24912,25581,29649,29297,26240,20822,18708,23029,22395,28099,27628,24336,20207,23548,20804,22676,28845,24670,21942,19934,19924,19404,20754,23086,25698,23777,20764,22445,22297,20840,22858,25437,22875,18939,19075,19095,21048,23497,27415,25517,20187,20913,25639,26152,28081,33695,33330,26117,31538,36093,38447,40247,47388,43588,40588,44773,46078,52397,57545,59636,49994,46074,50789,55885,62325,61599,72320,62042,58641,65816,66013,72038,73427,75026,63242,65312,62940,67507,72000,69920,78446,68204,56581,61820,65069,65323,68585,72436,58617,49699,48712,54648,55148,58894,63413,56114,47971,49800,54519,54345,55364,60600];var utahcases=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,9,10,28,39,51,63,80,112,136,181,257,298,346,402,480,602,719,806,887,1012,1074,1246,1428,1605,1675,1738,1846,1976,2102,2206,2303,2363,2412,2542,2683,2805,2931,3069,3213,3296,3445,3612,3782,3948,4123,4233,4343,4495,4672,4828,4981,5175,5317,5449,5595,5724,5919,6103,6251,6362,6432,6620,6749,6913,7068,7238,7384,7518,7710,7874,8057,8260,8392,8521,8620,8706,8921,9264,9533,9797,9999,10202,10497,10813,11252,11798,12066,12322,12559,12864,13252,13577,13981,14313,14608,14937,15344,15839,16425,17068,17462,17906,18300,18784,19374,20050,20628,21100,21664,22217,22716,23270,23866,24542,24952,25469,26033,26755,27356,28223,28855,29484,30030,30478,30891,31845,32572,33332,34117,34526,35012,35578,36099,36962,37623,37973,38409,38855,39194,39696,40196,40702,41175,41529,41907,42328,42915,43375,43751,44127,44390,44752,45090,45424,45976];var utahdailycases=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,4,1,18,11,12,12,17,32,24,45,76,41,48,56,78,122,117,87,81,125,62,172,182,177,70,63,108,130,126,104,97,60,49,130,141,122,126,138,144,83,149,167,170,166,175,110,110,152,177,156,153,194,142,132,146,129,195,184,148,111,70,188,129,164,155,170,146,134,192,164,183,203,132,129,99,86,215,343,269,264,202,203,295,316,439,546,268,256,237,305,388,325,404,332,295,329,407,495,586,643,394,444,394,484,590,676,578,472,564,553,499,554,596,676,410,517,564,722,601,867,632,629,546,448,413,954,727,760,785,409,486,566,521,863,661,350,436,446,339,502,500,506,473,354,378,421,587,460,376,376,263,362,338,334,552];var utahdailydeaths=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,null,null,null,null,null,null,0,1,0,0,0,0,1,0,0,2,1,2,0,0,1,0,5,0,0,0,4,1,0,0,1,1,1,2,2,2,1,4,2,1,4,2,0,0,4,0,1,0,3,1,0,6,2,3,0,5,1,1,5,2,0,2,1,2,0,8,2,2,1,4,0,1,3,4,1,1,5,1,0,0,4,0,3,1,0,3,3,1,3,8,0,0,4,2,4,3,3,0,3,0,5,0,1,2,1,0,1,4,1,3,5,0,3,6,4,7,4,2,5,3,1,10,7,1,1,8,0,4,4,9,7,6,1,0,7,5,6,8,4,6,1,3,7,6,3,5,0,1,9,4,2,2,7];var utahdeaths=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,2,2,2,4,5,7,7,7,8,8,13,13,13,13,17,18,18,18,19,20,21,23,25,27,28,32,34,35,39,41,41,41,45,45,46,46,49,50,50,56,58,61,61,66,67,68,73,75,75,77,78,80,80,88,90,92,93,97,97,98,101,105,106,107,112,113,113,113,117,117,120,121,121,124,127,128,131,139,139,139,143,145,149,152,155,155,158,158,163,163,164,166,167,167,168,172,173,176,181,181,184,190,194,201,205,207,212,215,216,226,233,234,235,243,243,247,251,260,267,273,274,274,281,286,292,300,304,310,311,314,321,327,330,335,335,336,345,349,351,353,360];var usdailydeaths=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,null,null,0,0,0,0,0,0,0,0,0,1,0,5,3,2,1,3,4,3,4,4,8,3,7,10,15,22,26,50,69,70,66,136,181,269,307,360,502,650,502,822,1101,1259,1212,1284,1578,1426,1525,2268,2212,2148,2282,2067,1756,1748,2630,2692,2255,2598,1923,1597,1980,2749,2411,2402,1993,2113,1172,1404,2536,2447,2277,1951,1732,1176,1341,2407,2579,2174,1718,1454,1217,1076,1914,1861,1794,1641,1242,884,1019,1584,1434,1438,1324,1055,627,637,786,1567,1241,1236,1036,652,697,1151,1107,1054,990,719,385,600,1107,1001,919,803,717,337,434,864,824,761,733,584,271,372,876,825,659,668,518,287,370,733,683,693,631,270,268,388,1006,910,981,862,746,389,479,957,1023,982,970,825,422,540,1188,1233,1196,1166,926,462,597,1330,1465,1465,1460,1123,467,562,1360,1319,1203,1292,986,534,569,1504,1386,1284,1120];var usdeaths=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,6,9,11,12,15,19,22,26,30,38,41,48,58,73,95,121,171,240,310,376,512,693,962,1269,1629,2131,2781,3283,4105,5206,6465,7677,8961,10539,11965,13490,15758,17970,20118,22400,24467,26223,27971,30601,33293,35548,38146,40069,41666,43646,46395,48806,51208,53201,55314,56486,57890,60426,62873,65150,67101,68833,70009,71350,73757,76336,78510,80228,81682,82899,83975,85889,87750,89544,91185,92427,93311,94330,95914,97348,98786,100110,101165,101792,102429,103215,104782,106023,107259,108295,108947,109644,110795,111902,112956,113946,114665,115050,115650,116757,117758,118677,119480,120197,120534,120968,121832,122656,123417,124150,124734,125005,125377,126253,127078,127737,128405,128923,129210,129580,130313,130996,131689,132320,132590,132858,133246,134252,135162,136143,137005,137751,138140,138619,139576,140599,141581,142551,143376,143798,144338,145526,146759,147955,149121,150047,150509,151106,152436,153901,155366,156826,157949,158416,158978,160338,161657,162860,164152,165138,165672,166241,167745,169131,170415,171535];var gdailycases = [null,265,472,698,785,1781,1477,1755,2010,2135,2623,2852,3257,3928,3736,3183,3453,2685,3005,2569,2050,14175,5185,2682,2132,2157,2039,1880,538,1039,1059,1037,627,999,875,1155,1472,1835,2218,2662,2644,3329,3206,4326,5173,5770,5963,7294,8855,11462,13419,16762,17325,19497,20722,22786,26834,31631,38013,33023,36074,43672,44249,48365,59108,62942,64622,57930,61781,70580,74662,76883,81601,78608,68524,71938,76718,82111,83990,90246,77693,70236,69497,71975,78991,79122,81359,78838,72257,73600,73426,77927,82022,96756,87252,71139,67460,74205,76454,84740,92684,81538,81294,78894,79758,93180,93573,93733,86991,78672,71669,84939,88712,96288,99231,95173,81642,90568,95778,103259,108301,107708,100380,97159,91814,93541,107446,117143,126790,125143,109944,105945,116503,121397,131485,131536,129539,114871,108834,122056,136910,139132,143226,135029,124401,126247,144254,146459,141502,182662,157982,131097,140342,164733,174512,181333,195591,178352,164799,162427,175681,199269,210161,214973,196204,178742,172391,209515,214929,224849,238473,217514,199198,197274,220875,236387,249844,241472,227058,222669,206310,240527,281238,276429,289735,261663,224987,219236,249495,289961,287277,291102,259639,224181,200333,254722,271917,282730,282245,270268,224046,215110,264090,284319,285486,285901];