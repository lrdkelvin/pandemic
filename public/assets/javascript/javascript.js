

  
    var dates = [];
    var globaldeathdates = [];
    var uscasedates = [];
    var globalcasebank = {};
    var globaldeathbank = {};
    var uscasebank = {};
    var globalstuffs =
    [580,845,1317,2015,2800,4581,6058,7813,9823,11950,14553,17391,20630,24545,28266,31439,34876,
        37552,40553,43099,45134,59287,64438,67100,69197,71329,73332,75184,75700,76677,77673,78651
        ,79205,80087,80828,81820,83108,84615,86605,88585,90447,93017,95323,98416,102056,106112,110009,
        114444,119014,126327,134586,145518,156502,169532,182470,198249,218985,245174,275893,305386,337869,
        379499,423405,472158,533279,598173,665092,725764,790234,864492,941992,1022501,1106983,1188840,1259807,
        1333147,1411799,1496703,1582254,1674543,1754266,1826022,1896512,1969945,2053054,2134148,2219475,2300205,
        2375885,2449637,2525322,2605654,2690687,2792867,2883369,2956992,3026613,3102254,3182307,3268493,3363832,
        3446959,3529510,3609179,3690878,3787027,3883737,3980608,4070179,4150510,4225533,4311398,4401295,4498704,
        4599421,4696548,4779191,4869673,4965467,5068906,5177323,5286081,5386618,5483984,5574858,5668352,5775905,
        5893531,6020285,6145337,6255138,6360646,6476952,6598284,6729583,6860923,6990555,7105197,7213716,7335500,
        7472272,7611290,7754711,7889696,8014327,8140528,8284437,8430819,8572223,8754425,8912187,9042968,9182575,
        9345569] ;

        var deathsStuffs = [17,25,41,56,80,106,132,170,213,259,304,362,426,492,565,638,724
            ,813,910,1018,1115,1261,1383,1526,1669,1775,1873,2009,2126,2247,2360,2460,2618,
            2699,2763,2800,2858,2923,2977,3050,3117,3202,3285,3387,3493,3598,3826,4023,4297,
            4627,4980,5427,5841,6532,7180,8000,8983,10077,11457,13101,14739,16671,19157,21747,
            24693,28163,31835,35179,39341,44053,49246,55519,61484,67553,72560,78171,86068,92808,
            100479,107835,114048,119617,125261,132676,140873,147878,156313,162992,167890,173382,
            180676,187379,194091,200513,206622,210381,214894,221589,228186,233986,239612,244836,248317,
            252417,258205,265019,270612,276164,280419,283928,287380,292882,298174,303447,308486,312806,
            316389,319811,324377,329020,333950,338590,342773,345920,349087,352933,358281,362967,367918,
            372049,375277,378359,383050,388008,393539,398474,402741,406144,409313,414062,419235,424209,
            428828,433066,436336,439758,446357,451627,456759,461837,466266,469604,473484,478949];

        var uscases = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,15,15,15,15,15,35,35,35,53,57,60,60,63,68,75,100,124,158,221,319,435,541,704,994,1301,1630,2184,
            2773,3621,4609,6363,9328,13928,19599,24487,33931,44306,55556,69109,86633,105543,125203,145469,168757,194038,
            221137,251699,284648,319318,345207,376947,411004,443502,477574,511804,542279,570124,597206,624633,655294,
            685427,717904,747080,773266,801471,827690,857975,890028,929127,964629,991198,1014446,1040000,1068571,
            1099548,1135682,1165527,1192941,1217680,1242564,1268119,1297737,1327002,1353211,1374013,1392705,1415695,
            1438065,1466131,1493730,1518041,1538224,1561746,1582528,1605176,1633995,1658633,1680549,1700455,1720354,
            1739733,1760472,1783537,1809211,1832951,1853685,1876099,1898364,1919179,1942012,1967416,1990261,2009176,
            2028231,2047298,2068321,2091790,2119175,2144647,2164813,2185699,2211314,2237550,2265479,2299023,2332415,
            2358496,2389995,2426014,2464404,2504588];



        function createObjects(){

        for (var i=0; i<globalstuffs.length; i++) {
            if (i<10) {
            var date = ("jan" + (22 + i))
            dates.push(date);
            }
            else if (i<19) {
                var date = ("feb0" + (i-9))
                dates.push(date);
            }
            else if (i<39) {
                var date = ("feb" + (i-9))
                dates.push(date);
            }
            else if (i<48) {
                var date = ("mar0" + (i-38))
                dates.push(date);
            }
            else if (i<70) {
                var date = ("mar" + (i-38))
                dates.push(date);
            }
            else if (i<79) {
                var date = ("apr0" + (i-69))
                dates.push(date);
            }
            else if (i<100) {
                var date= ("apr" + (i-69))
                dates.push(date);
            }
            else if (i<109) {
                var date = ("may0" + (i-99));
                dates.push(date);
            }
            else if (i<131) {
                var date = ("may" + (i-99));
                dates.push(date);
            }
            else if (i<140) {
                var date = ("jun0" + (i-130));
                dates.push(date);
            }
            else if (i<171) {
                var date = ("jun" + (i-130));
                dates.push(date);
            }
            
        }
    
        };
        createObjects();
        console.log(dates);
        dates.forEach((key, idx) => globalcasebank[key] = globalstuffs[idx]);
        dates.forEach((key, idx) => globaldeathbank[key] = deathsStuffs[idx]);
        dates.forEach((key, idx) => uscasebank[key] = uscases[idx]);
        console.log(uscasebank);
    
    
   /* var globaldeathbank = {
        mar11: 4628,
        mar12: 4981,
        mar13: 5428,
        mar14: 5833,
        mar15: 6520,
        mar16: 7162,
        mar17: 7979,
        mar18: 8951,
        mar19: 10030,
        mar20: 11386,
        mar21: 13011,
        mar22: 14640,
        mar23: 16514,
        mar24: 18895,
        mar25: 21283,
        mar26: 24074,
        mar27: 27345,
        mar28: 30863,
        mar29: 34074,
        mar30: 37783,
        mar31: 42320,
        apr01: 47210,
        apr02: 53189,
        apr03: 58909,
        apr04: 64708,
        apr05: 69447,
        apr06: 74678,
        apr07: 82063,
        apr08: 88480,
        apr09: 95714,
        apr10: 102688,
        apr11: 108780,
        apr12: 114197,
        apr13: 119618,
        apr14: 130379,
        apr15: 138474,
        apr16: 145470,
        apr17: 154145,
        apr18: 160047,
        apr19: 165009,
        apr20: 170397,
        apr21: 177459,
        apr22: 184235,
        apr23: 190528,
        apr24: 197091,
        apr25: 203166,
        apr26: 206915,
        apr27: 211447,
        apr28: 217813,
        apr29: 228030,
        apr30: 233830,
        may01: 239448,
        may02: 243024,
        may03: 248144,
        may04: 252240,
        may05: 258026,
        may06: 264837,
        may07: 270426,
        may08: 275976,
        may09: 280224,
        may10: 283734,
        //may11: ,
        //may12: ,
        //may13: ,
        //may14: ,
        //may15: ,
        //may16: ,
        //may17: ,
        //may18: ,
        //may19: ,
        //may20: ,
        //may21: ,
        //may22: ,
        //may23: ,
        //may24: ,
        //may25: ,
        //may26: ,
        //may27: ,
        //may28: ,
        //may29: ,
        //may30: ,
        //may31: ,
       
    };
    */
   /* var uscasebank = {
        mar11: 1301,
        mar12: 1603,
        mar13: 2183,
        mar14: 2770,
        mar15: 3613,
        mar16: 4596,
        mar17: 6346,
        mar18: 9296,
        mar19: 13865,
        mar20: 19497,
        mar21: 24345,
        mar22: 33745,
        mar23: 44056,
        mar24: 55222,
        mar25: 68673,
        mar26: 86379,
        mar27: 105217,
        mar28: 124788,
        mar29: 144980,
        mar30: 168177,
        mar31: 193353,
        apr01: 220295,
        apr02: 250708,
        apr03: 283477,
        apr04: 317994,
        apr05: 343747,
        apr06: 375348,
        apr07: 409225,
        apr08: 441569,
        apr09: 475515,
        apr10: 509604,
        apr11: 532879,
        apr12: 567708,
        apr13: 594693,
        apr14: 621953,
        apr15: 652747,
        apr16: 682454,
        apr17: 714822,
        apr18: 743901,
        apr19: 770084,
        apr20: 798227,
        apr21: 824322,
        apr22: 854542,
        apr23: 886442,
        apr24: 925038,
        apr25: 960651,
        apr26: 987160,
        apr27: 1010356,
        apr28: 1035765,
        apr29: 1064194,
        apr30: 1095023,
        may01: 1131030,
        may02: 1147358,
        may03: 1188122,
        may04: 1212835,
        may05: 1237633,
        may06: 1263092,
        may07: 1292623,
        may08: 1321785,
        may09: 1347309,
        may10: 1367638,
        //may11: ,
        //may12: ,
        //may13: ,
        //may14: ,
        //may15: ,
        //may16: ,
        //may17: ,
        //may18: ,
        //may19: ,
        //may20: ,
        //may21: ,
        //may22: ,
        //may23: ,
        //may24: ,
        //may25: ,
        //may26: ,
        //may27: ,
        //may28: ,
        //may29: ,
        //may30: ,
        //may31: ,
        
    };
    */
    var usdeathbank = {
        mar11: 38,
        mar12: 41,
        mar13: 48,
        mar14: 57,
        mar15: 69,
        mar16: 87,
        mar17: 110,
        mar18: 150,
        mar19: 206,
        mar20: 255,
        mar21: 301,
        mar22: 414,
        mar23: 556,
        mar24: 781,
        mar25: 1028,
        mar26: 1296,
        mar27: 1697,
        mar28: 2222,
        mar29: 2592,
        mar30: 3150,
        mar31: 4064,
        apr01: 5114,
        apr02: 6088,
        apr03: 7139,
        apr04: 8469,
        apr05: 9636,
        apr06: 10895,
        apr07: 12868,
        apr08: 14811,
        apr09: 16712,
        apr10: 18747,
        apr11: 20577,
        apr12: 22105,
        apr13: 23640,
        apr14: 29825,
        apr15: 32443,
        apr16: 34617,
        apr17: 37154,
        apr18: 39014,
        apr19: 40553,
        apr20: 42514,
        apr21: 45318,
        apr22: 47695,
        apr23: 49845,
        apr24: 52185,
        apr25: 54256,
        apr26: 55413,
        apr27: 56797,
        apr28: 59266,
        apr29: 61656,
        apr30: 63856,
        may01: 65753,
        may02: 66640,
        may03: 68597,
        may04: 69921,
        may05: 72271,
        may06: 74799,
        may07: 76928,
        may08: 78615,
        may09: 80037,
        may10: 80787,
        //may11: ,
        //may12: ,
        //may13: ,
        //may14: ,
        //may15: ,
        //may16: ,
        //may17: ,
        //may18: ,
        //may19: ,
        //may20: ,
        //may21: ,
        //may22: ,
        //may23: ,
        //may24: ,
        //may25: ,
        //may26: ,
        //may27: ,
        //may28: ,
        //may29: ,
        //may30: ,
        //may31: ,
    };
    var utahcasebank = {
        mar11: 3,
        mar12: 4,
        mar13: 9,
        mar14: 14,
        mar15: 26,
        mar16: 38,
        mar17: 52,
        mar18: 61,
        mar19: 94,
        mar20: 120,
        mar21: 141,
        mar22: 223,
        mar23: 255,
        mar24: 323,
        mar25: 346,
        mar26: 402,
        mar27: 480,
        mar28: 602,
        mar29: 719,
        mar30: 806,
        mar31: 887,
        apr01: 1012,
        apr02: 1074,
        apr03: 1246,
        apr04: 1428,
        apr05: 1605,
        apr06: 1675,
        apr07: 1738,
        apr08: 1846,
        apr09: 1976,
        apr10: 2102,
        apr11: 2206,
        apr12: 2303,
        apr13: 2363,
        apr14: 2412,
        apr15: 2542,
        apr16: 2683,
        apr17: 2805,
        apr18: 2931,
        apr19: 3069,
        apr20: 3213,
        apr21: 3296,
        apr22: 3445,
        apr23: 3612,
        apr24: 3782,
        apr25: 3948,
        apr26: 4123,
        apr27: 4233,
        apr28: 4343,
        apr29: 4495,
        apr30: 4672,
        may01: 4823,
        may02: 4979,
        may03: 5168,
        may04: 5308,
        may05: 5437,
        may06: 5597,
        may07: 5724,
        may08: 5919,
        may09: 6103,
        may10: 6251,
        //may11: ,
        //may12: ,
        //may13: ,
        //may14: ,
        //may15: ,
        //may16: ,
        //may17: ,
        //may18: ,
        //may19: ,
        //may20: ,
        //may21: ,
        //may22: ,
        //may23: ,
        //may24: ,
        //may25: ,
        //may26: ,
        //may27: ,
        //may28: ,
        //may29: ,
        //may30: ,
        //may31: ,
    };
    var utahdeathbank = {
        mar11: 0,
        mar12: 0,
        mar13: 0,
        mar14: 0,
        mar15: 0,
        mar16: 0,
        mar17: 0,
        mar18: 0,
        mar19: 0,
        mar20: 0,
        mar21: 0,
        mar22: 0,
        mar23: 0,
        mar24: 0,
        mar25: 1,
        mar26: 1,
        mar27: 2,
        mar28: 2,
        mar29: 2,
        mar30: 4,
        mar31: 5,
        apr01: 7,
        apr02: 7,
        apr03: 7,
        apr04: 8,
        apr05: 8,
        apr06: 13,
        apr07: 13,
        apr08: 13,
        apr09: 13,
        apr10: 17,
        apr11: 18,
        apr12: 18,
        apr13: 18,
        apr14: 19,
        apr15: 20,
        apr16: 21,
        apr17: 23,
        apr18: 25,
        apr19: 27,
        apr20: 28,
        apr21: 32,
        apr22: 34,
        apr23: 35,
        apr24: 39,
        apr25: 41,
        apr26: 41,
        apr27: 47,
        apr28: 47,
        apr29: 47,
        apr30: 46,
        may01: 46,
        may02: 46,
        may03: 50,
        may04: 52,
        may05: 55,
        may06: 56,
        may07: 57,
        may08: 59,
        may09: 66,
        may10: 67,
        //may11: ,
        //may12: ,
        //may13: ,
        //may14: ,
        //may15: ,
        //may16: ,
        //may17: ,
        //may18: ,
        //may19: ,
        //may20: ,
        //may21: ,
        //may22: ,
        //may23: ,
        //may24: ,
        //may25: ,
        //may26: ,
        //may27: ,
        //may28: ,
        //may29: ,
        //may30: ,
        //may31: ,
    };

    var utahcountycasebank = {
        mar28: 40,
        mar29: 50,
        mar30: 60,
        mar31: 71,
        apr01: 90,
        apr02: 105,
        apr03: 150,
        apr04: 186,
        apr05: 216,
        apr06: 223,
        apr07: 236,
        apr08: 267,
        apr09: 272,
        apr10: 283,
        apr11: 295,
        apr12: 313,
        apr13: 322,
        apr14: 335,
        apr15: 352,
        apr16: 387,
        apr17: 405,
        apr18: 417,
        apr19: 455,
        apr20: 498,
        apr21: 523,
        apr22: 570,
        apr23: 611,
        apr24: 669,
        apr25: 725,
        //apr26: ,
        //apr27: ,
        //apr28: ,
        //apr29: ,
        //apr30: ,
        //may01: ,
        //may02: ,
        //may03: ,
        //may04: ,
        //may05: ,
        //may06: ,
        //may07: ,
        //may08: ,
        //may09: ,
        //may10: ,
        //may11: ,
        //may12: ,
        //may13: ,
        //may14: ,
        //may15: ,
        //may16: ,
        //may17: ,
        //may18: ,
        //may19: ,
        //may20: ,
        //may21: ,
        //may22: ,
        //may23: ,
        //may24: ,
        //may25: ,
        //may26: ,
        //may27: ,
        //may28: ,
        //may29: ,
        //may30: ,
        //may31: ,


    };
    var globalcaseprediction = 3308945;
    var uscasesprediction = 1096002;
    var utahcaseprediction = 4705;

    var globaldeathsprediction = 244428;
    var usdeathsprediction = 63970;
    var utahdeathsprediction = 46;

    var grecovered = {
        mar25: (globalcasebank.mar11 - globaldeathbank.mar25 ),
        mar26: (globalcasebank.mar12 - globaldeathbank.mar26 ),
        mar27: (globalcasebank.mar13 - globaldeathbank.mar27 ),
        mar28: (globalcasebank.mar14 - globaldeathbank.mar28 ),
        mar29: (globalcasebank.mar15 - globaldeathbank.mar29 ),
        mar30: (globalcasebank.mar16 - globaldeathbank.mar30 ),
        mar31: (globalcasebank.mar17 - globaldeathbank.mar31 ),
        apr01: (globalcasebank.mar18 - globaldeathbank.apr01 ),
        apr02: (globalcasebank.mar19 - globaldeathbank.apr02 ),
        apr03: (globalcasebank.mar20 - globaldeathbank.apr03 ),
        apr04: (globalcasebank.mar21 - globaldeathbank.apr04 ),
        apr05: (globalcasebank.mar22 - globaldeathbank.apr05 ),
        apr06: (globalcasebank.mar23 - globaldeathbank.apr06 ),
        apr07: (globalcasebank.mar24 - globaldeathbank.apr07 ),
        apr08: (globalcasebank.mar25 - globaldeathbank.apr08 ),
        apr09: (globalcasebank.mar26 - globaldeathbank.apr09 ),
        apr10: (globalcasebank.mar27 - globaldeathbank.apr10 ),
        apr11: (globalcasebank.mar28 - globaldeathbank.apr11 ),
        apr12: (globalcasebank.mar29 - globaldeathbank.apr12 ),
        apr13: (globalcasebank.mar30 - globaldeathbank.apr13 ),
        apr14: (globalcasebank.mar31 - globaldeathbank.apr14 ),
        apr15: (globalcasebank.apr01 - globaldeathbank.apr15 ),
        apr16: (globalcasebank.apr02 - globaldeathbank.apr16 ),
        apr17: (globalcasebank.apr03 - globaldeathbank.apr17 ),
        apr18: (globalcasebank.apr04 - globaldeathbank.apr18 ),
        apr19: (globalcasebank.apr05 - globaldeathbank.apr19 ),
        apr20: (globalcasebank.apr06 - globaldeathbank.apr20 ),
        apr21: (globalcasebank.apr07 - globaldeathbank.apr21 ),
        apr22: (globalcasebank.apr08 - globaldeathbank.apr22 ),
        apr23: (globalcasebank.apr09 - globaldeathbank.apr23 ),
        apr24: (globalcasebank.apr10 - globaldeathbank.apr24 ),
        apr25: (globalcasebank.apr11 - globaldeathbank.apr25 ),
        apr26: (globalcasebank.apr12 - globaldeathbank.apr26 ),
        apr27: (globalcasebank.apr13 - globaldeathbank.apr27 ),
        apr28: (globalcasebank.apr14 - globaldeathbank.apr28 ),
        apr29: (globalcasebank.apr15 - globaldeathbank.apr29 ),
        apr30: (globalcasebank.apr16 - globaldeathbank.apr30 ),
        may01: (globalcasebank.apr17 - globaldeathbank.may01 ),
        may02: (globalcasebank.apr18 - globaldeathbank.may02 ),
        may03: (globalcasebank.apr19 - globaldeathbank.may03 ),
        may04: (globalcasebank.apr20 - globaldeathbank.may04 ),
        may05: (globalcasebank.apr21 - globaldeathbank.may05 ),
        may06: (globalcasebank.apr22 - globaldeathbank.may06 ),
        may07: (globalcasebank.apr23 - globaldeathbank.may07 ),
        may08: (globalcasebank.apr24 - globaldeathbank.may08 ),
        may09: (globalcasebank.apr25 - globaldeathbank.may09 ),
        may10: (globalcasebank.apr26 - globaldeathbank.may10 ),
        may11: (globalcasebank.apr27 - globaldeathbank.may11 ),
        may12: (globalcasebank.apr28 - globaldeathbank.may12 ),
        may13: (globalcasebank.apr29 - globaldeathbank.may13 ),
        may14: (globalcasebank.apr30 - globaldeathbank.may14 ),
        may15: (globalcasebank.may01 - globaldeathbank.may15 ),
        may16: (globalcasebank.may02 - globaldeathbank.may16 ),
        may17: (globalcasebank.may03 - globaldeathbank.may17 ),
        may18: (globalcasebank.may04 - globaldeathbank.may18 ),
        may19: (globalcasebank.may05 - globaldeathbank.may19 ),
        may20: (globalcasebank.may06 - globaldeathbank.may20 ),
        may21: (globalcasebank.may07 - globaldeathbank.may21 ),
        may22: (globalcasebank.may08 - globaldeathbank.may22 ),
        may23: (globalcasebank.may09 - globaldeathbank.may23 ),
        may24: (globalcasebank.may10 - globaldeathbank.may24 ),
        may25: (globalcasebank.may11 - globaldeathbank.may25 ),
        may26: (globalcasebank.may12 - globaldeathbank.may26 ),
        may27: (globalcasebank.may13 - globaldeathbank.may27 ),
        may28: (globalcasebank.may14 - globaldeathbank.may28 ),
        may29: (globalcasebank.may15 - globaldeathbank.may29 ),
        may30: (globalcasebank.may16 - globaldeathbank.may30 ),

    };

    var gactivecases = {
        mar25: (globalcasebank.mar25  - (globaldeathbank.mar25 + grecovered.mar25)),
        mar26: (globalcasebank.mar26  - (globaldeathbank.mar26 + grecovered.mar26)),
        mar27: (globalcasebank.mar27  - (globaldeathbank.mar27 + grecovered.mar27)),
        mar28: (globalcasebank.mar28  - (globaldeathbank.mar28 + grecovered.mar28)),
        mar29: (globalcasebank.mar29  - (globaldeathbank.mar29 + grecovered.mar29)),
        mar30: (globalcasebank.mar30  - (globaldeathbank.mar30 + grecovered.mar30)),
        mar31: (globalcasebank.mar31  - (globaldeathbank.mar31 + grecovered.mar31)),
        apr01: (globalcasebank.apr01  - (globaldeathbank.apr01 + grecovered.apr01)),
        apr02: (globalcasebank.apr02  - (globaldeathbank.apr02 + grecovered.apr02)),
        apr03: (globalcasebank.apr03  - (globaldeathbank.apr03 + grecovered.apr03)),
        apr04: (globalcasebank.apr04  - (globaldeathbank.apr04 + grecovered.apr04)),
        apr05: (globalcasebank.apr05  - (globaldeathbank.apr05 + grecovered.apr05)),
        apr06: (globalcasebank.apr06  - (globaldeathbank.apr06 + grecovered.apr06)),
        apr07: (globalcasebank.apr07  - (globaldeathbank.apr07 + grecovered.apr07)),
        apr08: (globalcasebank.apr08  - (globaldeathbank.apr08 + grecovered.apr08)),
        apr09: (globalcasebank.apr09  - (globaldeathbank.apr09 + grecovered.apr09)),
        apr10: (globalcasebank.apr10  - (globaldeathbank.apr10 + grecovered.apr10)),
        apr11: (globalcasebank.apr11  - (globaldeathbank.apr11 + grecovered.apr11)),
        apr12: (globalcasebank.apr12  - (globaldeathbank.apr12 + grecovered.apr12)),
        apr13: (globalcasebank.apr13  - (globaldeathbank.apr13 + grecovered.apr13)),
        apr14: (globalcasebank.apr14  - (globaldeathbank.apr14 + grecovered.apr14)),
        apr15: (globalcasebank.apr15  - (globaldeathbank.apr15 + grecovered.apr15)),
        apr16: (globalcasebank.apr16  - (globaldeathbank.apr16 + grecovered.apr16)),
        apr17: (globalcasebank.apr17  - (globaldeathbank.apr17 + grecovered.apr17)),
        apr18: (globalcasebank.apr18  - (globaldeathbank.apr18 + grecovered.apr18)),
        apr19: (globalcasebank.apr19  - (globaldeathbank.apr19 + grecovered.apr19)),
        apr20: (globalcasebank.apr20  - (globaldeathbank.apr20 + grecovered.apr20)),
        apr21: (globalcasebank.apr21  - (globaldeathbank.apr21 + grecovered.apr21)),
        apr22: (globalcasebank.apr22  - (globaldeathbank.apr22 + grecovered.apr22)),
        apr23: (globalcasebank.apr23  - (globaldeathbank.apr23 + grecovered.apr23)),
        apr24: (globalcasebank.apr24  - (globaldeathbank.apr24 + grecovered.apr24)),
        apr25: (globalcasebank.apr25  - (globaldeathbank.apr25 + grecovered.apr25)),
        apr26: (globalcasebank.apr26  - (globaldeathbank.apr26 + grecovered.apr26)),
        apr27: (globalcasebank.apr27  - (globaldeathbank.apr27 + grecovered.apr27)),
        apr28: (globalcasebank.apr28  - (globaldeathbank.apr28 + grecovered.apr28)),
        apr29: (globalcasebank.apr29  - (globaldeathbank.apr29 + grecovered.apr29)),
        apr30: (globalcasebank.apr30  - (globaldeathbank.apr30 + grecovered.apr30)),
        may01: (globalcasebank.may01  - (globaldeathbank.may01 + grecovered.may01)),
        may02: (globalcasebank.may02  - (globaldeathbank.may02 + grecovered.may02)),
        may03: (globalcasebank.may03  - (globaldeathbank.may03 + grecovered.may03)),
        may04: (globalcasebank.may04  - (globaldeathbank.may04 + grecovered.may04)),
        may05: (globalcasebank.may05  - (globaldeathbank.may05 + grecovered.may05)),
        may06: (globalcasebank.may06  - (globaldeathbank.may06 + grecovered.may06)),
        may07: (globalcasebank.may07  - (globaldeathbank.may07 + grecovered.may07)),
        may08: (globalcasebank.may08  - (globaldeathbank.may08 + grecovered.may08)),
        may09: (globalcasebank.may09  - (globaldeathbank.may09 + grecovered.may09)),
        may10: (globalcasebank.may10  - (globaldeathbank.may10 + grecovered.may10)),
        may11: (globalcasebank.may11  - (globaldeathbank.may11 + grecovered.may11)),
        may12: (globalcasebank.may12  - (globaldeathbank.may12 + grecovered.may12)),
        may13: (globalcasebank.may13  - (globaldeathbank.may13 + grecovered.may13)),
        may14: (globalcasebank.may14  - (globaldeathbank.may14 + grecovered.may14)),
        may15: (globalcasebank.may15  - (globaldeathbank.may15 + grecovered.may15)),
        may16: (globalcasebank.may16  - (globaldeathbank.may16 + grecovered.may16)),
        may17: (globalcasebank.may17  - (globaldeathbank.may17 + grecovered.may17)),
        may18: (globalcasebank.may18  - (globaldeathbank.may18 + grecovered.may18)),
        may19: (globalcasebank.may19  - (globaldeathbank.may19 + grecovered.may19)),
        may20: (globalcasebank.may20  - (globaldeathbank.may20 + grecovered.may20)),
        may21: (globalcasebank.may21  - (globaldeathbank.may21 + grecovered.may21)),
        may22: (globalcasebank.may22  - (globaldeathbank.may22 + grecovered.may22)),
        may23: (globalcasebank.may23  - (globaldeathbank.may23 + grecovered.may23)),
        may24: (globalcasebank.may24  - (globaldeathbank.may24 + grecovered.may24)),
        may25: (globalcasebank.may25  - (globaldeathbank.may25 + grecovered.may25)),
        may26: (globalcasebank.may26  - (globaldeathbank.may26 + grecovered.may26)),
        may27: (globalcasebank.may27  - (globaldeathbank.may27 + grecovered.may27)),
        may28: (globalcasebank.may28  - (globaldeathbank.may28 + grecovered.may28)),
        may29: (globalcasebank.may29  - (globaldeathbank.may29 + grecovered.may29)),
        may30: (globalcasebank.may30  - (globaldeathbank.may30 + grecovered.may30)),
        
    };

    var usrecovered = {
        mar25: (uscasebank.mar11 - usdeathbank.mar25 ),
        mar26: (uscasebank.mar12 - usdeathbank.mar26 ),
        mar27: (uscasebank.mar13 - usdeathbank.mar27 ),
        mar28: (uscasebank.mar14 - usdeathbank.mar28 ),
        mar29: (uscasebank.mar15 - usdeathbank.mar29 ),
        mar30: (uscasebank.mar16 - usdeathbank.mar30 ),
        mar31: (uscasebank.mar17 - usdeathbank.mar31 ),
        apr01: (uscasebank.mar18 - usdeathbank.apr01 ),
        apr02: (uscasebank.mar19 - usdeathbank.apr02 ),
        apr03: (uscasebank.mar20 - usdeathbank.apr03 ),
        apr04: (uscasebank.mar21 - usdeathbank.apr04 ),
        apr05: (uscasebank.mar22 - usdeathbank.apr05 ),
        apr06: (uscasebank.mar23 - usdeathbank.apr06 ),
        apr07: (uscasebank.mar24 - usdeathbank.apr07 ),
        apr08: (uscasebank.mar25 - usdeathbank.apr08 ),
        apr09: (uscasebank.mar26 - usdeathbank.apr09 ),
        apr10: (uscasebank.mar27 - usdeathbank.apr10 ),
        apr11: (uscasebank.mar28 - usdeathbank.apr11 ),
        apr12: (uscasebank.mar29 - usdeathbank.apr12 ),
        apr13: (uscasebank.mar30 - usdeathbank.apr13 ),
        apr14: (uscasebank.mar31 - usdeathbank.apr14 ),
        apr15: (uscasebank.apr01 - usdeathbank.apr15 ),
        apr16: (uscasebank.apr02 - usdeathbank.apr16 ),
        apr17: (uscasebank.apr03 - usdeathbank.apr17 ),
        apr18: (uscasebank.apr04 - usdeathbank.apr18 ),
        apr19: (uscasebank.apr05 - usdeathbank.apr19 ),
        apr20: (uscasebank.apr06 - usdeathbank.apr20 ),
        apr21: (uscasebank.apr07 - usdeathbank.apr21 ),
        apr22: (uscasebank.apr08 - usdeathbank.apr22 ),
        apr23: (uscasebank.apr09 - usdeathbank.apr23 ),
        apr24: (uscasebank.apr10 - usdeathbank.apr24 ),
        apr25: (uscasebank.apr11 - usdeathbank.apr25 ),
        apr26: (uscasebank.apr12 - usdeathbank.apr26 ),
        apr27: (uscasebank.apr13 - usdeathbank.apr27 ),
        apr28: (uscasebank.apr14 - usdeathbank.apr28 ),
        apr29: (uscasebank.apr15 - usdeathbank.apr29 ),
        apr30: (uscasebank.apr16 - usdeathbank.apr30 ),
        may01: (uscasebank.apr17 - usdeathbank.may01 ),
        may02: (uscasebank.apr18 - usdeathbank.may02 ),
        may03: (uscasebank.apr19 - usdeathbank.may03 ),
        may04: (uscasebank.apr20 - usdeathbank.may04 ),
        may05: (uscasebank.apr21 - usdeathbank.may05 ),
        may06: (uscasebank.apr22 - usdeathbank.may06 ),
        may07: (uscasebank.apr23 - usdeathbank.may07 ),
        may08: (uscasebank.apr24 - usdeathbank.may08 ),
        may09: (uscasebank.apr25 - usdeathbank.may09 ),
        may10: (uscasebank.apr26 - usdeathbank.may10 ),
        may11: (uscasebank.apr27 - usdeathbank.may11 ),
        may12: (uscasebank.apr28 - usdeathbank.may12 ),
        may13: (uscasebank.apr29 - usdeathbank.may13 ),
        may14: (uscasebank.apr30 - usdeathbank.may14 ),
        may15: (uscasebank.may01 - usdeathbank.may15 ),
        may16: (uscasebank.may02 - usdeathbank.may16 ),
        may17: (uscasebank.may03 - usdeathbank.may17 ),
        may18: (uscasebank.may04 - usdeathbank.may18 ),
        may19: (uscasebank.may05 - usdeathbank.may19 ),
        may20: (uscasebank.may06 - usdeathbank.may20 ),
        may21: (uscasebank.may07 - usdeathbank.may21 ),
        may22: (uscasebank.may08 - usdeathbank.may22 ),
        may23: (uscasebank.may09 - usdeathbank.may23 ),
        may24: (uscasebank.may10 - usdeathbank.may24 ),
        may25: (uscasebank.may11 - usdeathbank.may25 ),
        may26: (uscasebank.may12 - usdeathbank.may26 ),
        may27: (uscasebank.may13 - usdeathbank.may27 ),
        may28: (uscasebank.may14 - usdeathbank.may28 ),
        may29: (uscasebank.may15 - usdeathbank.may29 ),
        may30: (uscasebank.may16 - usdeathbank.may30 ),
    };

    var usactivecases = {
        mar25: (uscasebank.mar25  - (usdeathbank.mar25 + usrecovered.mar25)),
        mar26: (uscasebank.mar26  - (usdeathbank.mar26 + usrecovered.mar26)),
        mar27: (uscasebank.mar27  - (usdeathbank.mar27 + usrecovered.mar27)),
        mar28: (uscasebank.mar28  - (usdeathbank.mar28 + usrecovered.mar28)),
        mar29: (uscasebank.mar29  - (usdeathbank.mar29 + usrecovered.mar29)),
        mar30: (uscasebank.mar30  - (usdeathbank.mar30 + usrecovered.mar30)),
        mar31: (uscasebank.mar31  - (usdeathbank.mar31 + usrecovered.mar31)),
        apr01: (uscasebank.apr01  - (usdeathbank.apr01 + usrecovered.apr01)),
        apr02: (uscasebank.apr02  - (usdeathbank.apr02 + usrecovered.apr02)),
        apr03: (uscasebank.apr03  - (usdeathbank.apr03 + usrecovered.apr03)),
        apr04: (uscasebank.apr04  - (usdeathbank.apr04 + usrecovered.apr04)),
        apr05: (uscasebank.apr05  - (usdeathbank.apr05 + usrecovered.apr05)),
        apr06: (uscasebank.apr06  - (usdeathbank.apr06 + usrecovered.apr06)),
        apr07: (uscasebank.apr07  - (usdeathbank.apr07 + usrecovered.apr07)),
        apr08: (uscasebank.apr08  - (usdeathbank.apr08 + usrecovered.apr08)),
        apr09: (uscasebank.apr09  - (usdeathbank.apr09 + usrecovered.apr09)),
        apr10: (uscasebank.apr10  - (usdeathbank.apr10 + usrecovered.apr10)),
        apr11: (uscasebank.apr11  - (usdeathbank.apr11 + usrecovered.apr11)),
        apr12: (uscasebank.apr12  - (usdeathbank.apr12 + usrecovered.apr12)),
        apr13: (uscasebank.apr13  - (usdeathbank.apr13 + usrecovered.apr13)),
        apr14: (uscasebank.apr14  - (usdeathbank.apr14 + usrecovered.apr14)),
        apr15: (uscasebank.apr15  - (usdeathbank.apr15 + usrecovered.apr15)),
        apr16: (uscasebank.apr16  - (usdeathbank.apr16 + usrecovered.apr16)),
        apr17: (uscasebank.apr17  - (usdeathbank.apr17 + usrecovered.apr17)),
        apr18: (uscasebank.apr18  - (usdeathbank.apr18 + usrecovered.apr18)),
        apr19: (uscasebank.apr19  - (usdeathbank.apr19 + usrecovered.apr19)),
        apr20: (uscasebank.apr20  - (usdeathbank.apr20 + usrecovered.apr20)),
        apr21: (uscasebank.apr21  - (usdeathbank.apr21 + usrecovered.apr21)),
        apr22: (uscasebank.apr22  - (usdeathbank.apr22 + usrecovered.apr22)),
        apr23: (uscasebank.apr23  - (usdeathbank.apr23 + usrecovered.apr23)),
        apr24: (uscasebank.apr24  - (usdeathbank.apr24 + usrecovered.apr24)),
        apr25: (uscasebank.apr25  - (usdeathbank.apr25 + usrecovered.apr25)),
        apr26: (uscasebank.apr26  - (usdeathbank.apr26 + usrecovered.apr26)),
        apr27: (uscasebank.apr27  - (usdeathbank.apr27 + usrecovered.apr27)),
        apr28: (uscasebank.apr28  - (usdeathbank.apr28 + usrecovered.apr28)),
        apr29: (uscasebank.apr29  - (usdeathbank.apr29 + usrecovered.apr29)),
        apr30: (uscasebank.apr30  - (usdeathbank.apr30 + usrecovered.apr30)),
        may01: (uscasebank.may01  - (usdeathbank.may01 + usrecovered.may01)),
        may02: (uscasebank.may02  - (usdeathbank.may02 + usrecovered.may02)),
        may03: (uscasebank.may03  - (usdeathbank.may03 + usrecovered.may03)),
        may04: (uscasebank.may04  - (usdeathbank.may04 + usrecovered.may04)),
        may05: (uscasebank.may05  - (usdeathbank.may05 + usrecovered.may05)),
        may06: (uscasebank.may06  - (usdeathbank.may06 + usrecovered.may06)),
        may07: (uscasebank.may07  - (usdeathbank.may07 + usrecovered.may07)),
        may08: (uscasebank.may08  - (usdeathbank.may08 + usrecovered.may08)),
        may09: (uscasebank.may09  - (usdeathbank.may09 + usrecovered.may09)),
        may10: (uscasebank.may10  - (usdeathbank.may10 + usrecovered.may10)),
        may11: (uscasebank.may11  - (usdeathbank.may11 + usrecovered.may11)),
        may12: (uscasebank.may12  - (usdeathbank.may12 + usrecovered.may12)),
        may13: (uscasebank.may13  - (usdeathbank.may13 + usrecovered.may13)),
        may14: (uscasebank.may14  - (usdeathbank.may14 + usrecovered.may14)),
        may15: (uscasebank.may15  - (usdeathbank.may15 + usrecovered.may15)),
        may16: (uscasebank.may16  - (usdeathbank.may16 + usrecovered.may16)),
        may17: (uscasebank.may17  - (usdeathbank.may17 + usrecovered.may17)),
        may18: (uscasebank.may18  - (usdeathbank.may18 + usrecovered.may18)),
        may19: (uscasebank.may19  - (usdeathbank.may19 + usrecovered.may19)),
        may20: (uscasebank.may20  - (usdeathbank.may20 + usrecovered.may20)),
        may21: (uscasebank.may21  - (usdeathbank.may21 + usrecovered.may21)),
        may22: (uscasebank.may22  - (usdeathbank.may22 + usrecovered.may22)),
        may23: (uscasebank.may23  - (usdeathbank.may23 + usrecovered.may23)),
        may24: (uscasebank.may24  - (usdeathbank.may24 + usrecovered.may24)),
        may25: (uscasebank.may25  - (usdeathbank.may25 + usrecovered.may25)),
        may26: (uscasebank.may26  - (usdeathbank.may26 + usrecovered.may26)),
        may27: (uscasebank.may27  - (usdeathbank.may27 + usrecovered.may27)),
        may28: (uscasebank.may28  - (usdeathbank.may28 + usrecovered.may28)),
        may29: (uscasebank.may29  - (usdeathbank.may29 + usrecovered.may29)),
        may30: (uscasebank.may30  - (usdeathbank.may30 + usrecovered.may30)),
        
    };

    var utahrecovered = {
        mar25: (utahcasebank.mar11 - utahdeathbank.mar25 ),
        mar26: (utahcasebank.mar12 - utahdeathbank.mar26 ),
        mar27: (utahcasebank.mar13 - utahdeathbank.mar27 ),
        mar28: (utahcasebank.mar14 - utahdeathbank.mar28 ),
        mar29: (utahcasebank.mar15 - utahdeathbank.mar29 ),
        mar30: (utahcasebank.mar16 - utahdeathbank.mar30 ),
        mar31: (utahcasebank.mar17 - utahdeathbank.mar31 ),
        apr01: (utahcasebank.mar18 - utahdeathbank.apr01 ),
        apr02: (utahcasebank.mar19 - utahdeathbank.apr02 ),
        apr03: (utahcasebank.mar20 - utahdeathbank.apr03 ),
        apr04: (utahcasebank.mar21 - utahdeathbank.apr04 ),
        apr05: (utahcasebank.mar22 - utahdeathbank.apr05 ),
        apr06: (utahcasebank.mar23 - utahdeathbank.apr06 ),
        apr07: (utahcasebank.mar24 - utahdeathbank.apr07 ),
        apr08: (utahcasebank.mar25 - utahdeathbank.apr08 ),
        apr09: (utahcasebank.mar26 - utahdeathbank.apr09 ),
        apr10: (utahcasebank.mar27 - utahdeathbank.apr10 ),
        apr11: (utahcasebank.mar28 - utahdeathbank.apr11 ),
        apr12: (utahcasebank.mar29 - utahdeathbank.apr12 ),
        apr13: (utahcasebank.mar30 - utahdeathbank.apr13 ),
        apr14: (utahcasebank.mar31 - utahdeathbank.apr14 ),
        apr15: (utahcasebank.apr01 - utahdeathbank.apr15 ),
        apr16: (utahcasebank.apr02 - utahdeathbank.apr16 ),
        apr17: (utahcasebank.apr03 - utahdeathbank.apr17 ),
        apr18: (utahcasebank.apr04 - utahdeathbank.apr18 ),
        apr19: (utahcasebank.apr05 - utahdeathbank.apr19 ),
        apr20: (utahcasebank.apr06 - utahdeathbank.apr20 ),
        apr21: (utahcasebank.apr07 - utahdeathbank.apr21 ),
        apr22: (utahcasebank.apr08 - utahdeathbank.apr22 ),
        apr23: (utahcasebank.apr09 - utahdeathbank.apr23 ),
        apr24: (utahcasebank.apr10 - utahdeathbank.apr24 ),
        apr25: (utahcasebank.apr11 - utahdeathbank.apr25 ),
        apr26: (utahcasebank.apr12 - utahdeathbank.apr26 ),
        apr27: (utahcasebank.apr13 - utahdeathbank.apr27 ),
        apr28: (utahcasebank.apr14 - utahdeathbank.apr28 ),
        apr29: (utahcasebank.apr15 - utahdeathbank.apr29 ),
        apr30: (utahcasebank.apr16 - utahdeathbank.apr30 ),
        may01: (utahcasebank.apr17 - utahdeathbank.may01 ),
        may02: (utahcasebank.apr18 - utahdeathbank.may02 ),
        may03: (utahcasebank.apr19 - utahdeathbank.may03 ),
        may04: (utahcasebank.apr20 - utahdeathbank.may04 ),
        may05: (utahcasebank.apr21 - utahdeathbank.may05 ),
        may06: (utahcasebank.apr22 - utahdeathbank.may06 ),
        may07: (utahcasebank.apr23 - utahdeathbank.may07 ),
        may08: (utahcasebank.apr24 - utahdeathbank.may08 ),
        may09: (utahcasebank.apr25 - utahdeathbank.may09 ),
        may10: (utahcasebank.apr26 - utahdeathbank.may10 ),
        may11: (utahcasebank.apr27 - utahdeathbank.may11 ),
        may12: (utahcasebank.apr28 - utahdeathbank.may12 ),
        may13: (utahcasebank.apr29 - utahdeathbank.may13 ),
        may14: (utahcasebank.apr30 - utahdeathbank.may14 ),
        may15: (utahcasebank.may01 - utahdeathbank.may15 ),
        may16: (utahcasebank.may02 - utahdeathbank.may16 ),
        may17: (utahcasebank.may03 - utahdeathbank.may17 ),
        may18: (utahcasebank.may04 - utahdeathbank.may18 ),
        may19: (utahcasebank.may05 - utahdeathbank.may19 ),
        may20: (utahcasebank.may06 - utahdeathbank.may20 ),
        may21: (utahcasebank.may07 - utahdeathbank.may21 ),
        may22: (utahcasebank.may08 - utahdeathbank.may22 ),
        may23: (utahcasebank.may09 - utahdeathbank.may23 ),
        may24: (utahcasebank.may10 - utahdeathbank.may24 ),
        may25: (utahcasebank.may11 - utahdeathbank.may25 ),
        may26: (utahcasebank.may12 - utahdeathbank.may26 ),
        may27: (utahcasebank.may13 - utahdeathbank.may27 ),
        may28: (utahcasebank.may14 - utahdeathbank.may28 ),
        may29: (utahcasebank.may15 - utahdeathbank.may29 ),
        may30: (utahcasebank.may16 - utahdeathbank.may30 ),
        
    };

    

    var utahactivecases = {
        mar25: (utahcasebank.mar25  - (utahdeathbank.mar25 + utahrecovered.mar25)),
        mar26: (utahcasebank.mar26  - (utahdeathbank.mar26 + utahrecovered.mar26)),
        mar27: (utahcasebank.mar27  - (utahdeathbank.mar27 + utahrecovered.mar27)),
        mar28: (utahcasebank.mar28  - (utahdeathbank.mar28 + utahrecovered.mar28)),
        mar29: (utahcasebank.mar29  - (utahdeathbank.mar29 + utahrecovered.mar29)),
        mar30: (utahcasebank.mar30  - (utahdeathbank.mar30 + utahrecovered.mar30)),
        mar31: (utahcasebank.mar31  - (utahdeathbank.mar31 + utahrecovered.mar31)),
        apr01: (utahcasebank.apr01  - (utahdeathbank.apr01 + utahrecovered.apr01)),
        apr02: (utahcasebank.apr02  - (utahdeathbank.apr02 + utahrecovered.apr02)),
        apr03: (utahcasebank.apr03  - (utahdeathbank.apr03 + utahrecovered.apr03)),
        apr04: (utahcasebank.apr04  - (utahdeathbank.apr04 + utahrecovered.apr04)),
        apr05: (utahcasebank.apr05  - (utahdeathbank.apr05 + utahrecovered.apr05)),
        apr06: (utahcasebank.apr06  - (utahdeathbank.apr06 + utahrecovered.apr06)),
        apr07: (utahcasebank.apr07  - (utahdeathbank.apr07 + utahrecovered.apr07)),
        apr08: (utahcasebank.apr08  - (utahdeathbank.apr08 + utahrecovered.apr08)),
        apr09: (utahcasebank.apr09  - (utahdeathbank.apr09 + utahrecovered.apr09)),
        apr10: (utahcasebank.apr10  - (utahdeathbank.apr10 + utahrecovered.apr10)),
        apr11: (utahcasebank.apr11  - (utahdeathbank.apr11 + utahrecovered.apr11)),
        apr12: (utahcasebank.apr12  - (utahdeathbank.apr12 + utahrecovered.apr12)),
        apr13: (utahcasebank.apr13  - (utahdeathbank.apr13 + utahrecovered.apr13)),
        apr14: (utahcasebank.apr14  - (utahdeathbank.apr14 + utahrecovered.apr14)),
        apr15: (utahcasebank.apr15  - (utahdeathbank.apr15 + utahrecovered.apr15)),
        apr16: (utahcasebank.apr16  - (utahdeathbank.apr16 + utahrecovered.apr16)),
        apr17: (utahcasebank.apr17  - (utahdeathbank.apr17 + utahrecovered.apr17)),
        apr18: (utahcasebank.apr18  - (utahdeathbank.apr18 + utahrecovered.apr18)),
        apr19: (utahcasebank.apr19  - (utahdeathbank.apr19 + utahrecovered.apr19)),
        apr20: (utahcasebank.apr20  - (utahdeathbank.apr20 + utahrecovered.apr20)),
        apr21: (utahcasebank.apr21  - (utahdeathbank.apr21 + utahrecovered.apr21)),
        apr22: (utahcasebank.apr22  - (utahdeathbank.apr22 + utahrecovered.apr22)),
        apr23: (utahcasebank.apr23  - (utahdeathbank.apr23 + utahrecovered.apr23)),
        apr24: (utahcasebank.apr24  - (utahdeathbank.apr24 + utahrecovered.apr24)),
        apr25: (utahcasebank.apr25  - (utahdeathbank.apr25 + utahrecovered.apr25)),
        apr26: (utahcasebank.apr26  - (utahdeathbank.apr26 + utahrecovered.apr26)),
        apr27: (utahcasebank.apr27  - (utahdeathbank.apr27 + utahrecovered.apr27)),
        apr28: (utahcasebank.apr28  - (utahdeathbank.apr28 + utahrecovered.apr28)),
        apr29: (utahcasebank.apr29  - (utahdeathbank.apr29 + utahrecovered.apr29)),
        apr30: (utahcasebank.apr30  - (utahdeathbank.apr30 + utahrecovered.apr30)),
        may01: (utahcasebank.may01  - (utahdeathbank.may01 + utahrecovered.may01)),
        may02: (utahcasebank.may02  - (utahdeathbank.may02 + utahrecovered.may02)),
        may03: (utahcasebank.may03  - (utahdeathbank.may03 + utahrecovered.may03)),
        may04: (utahcasebank.may04  - (utahdeathbank.may04 + utahrecovered.may04)),
        may05: (utahcasebank.may05  - (utahdeathbank.may05 + utahrecovered.may05)),
        may06: (utahcasebank.may06  - (utahdeathbank.may06 + utahrecovered.may06)),
        may07: (utahcasebank.may07  - (utahdeathbank.may07 + utahrecovered.may07)),
        may08: (utahcasebank.may08  - (utahdeathbank.may08 + utahrecovered.may08)),
        may09: (utahcasebank.may09  - (utahdeathbank.may09 + utahrecovered.may09)),
        may10: (utahcasebank.may10  - (utahdeathbank.may10 + utahrecovered.may10)),
        may11: (utahcasebank.may11  - (utahdeathbank.may11 + utahrecovered.may11)),
        may12: (utahcasebank.may12  - (utahdeathbank.may12 + utahrecovered.may12)),
        may13: (utahcasebank.may13  - (utahdeathbank.may13 + utahrecovered.may13)),
        may14: (utahcasebank.may14  - (utahdeathbank.may14 + utahrecovered.may14)),
        may15: (utahcasebank.may15  - (utahdeathbank.may15 + utahrecovered.may15)),
        may16: (utahcasebank.may16  - (utahdeathbank.may16 + utahrecovered.may16)),
        may17: (utahcasebank.may17  - (utahdeathbank.may17 + utahrecovered.may17)),
        may18: (utahcasebank.may18  - (utahdeathbank.may18 + utahrecovered.may18)),
        may19: (utahcasebank.may19  - (utahdeathbank.may19 + utahrecovered.may19)),
        may20: (utahcasebank.may20  - (utahdeathbank.may20 + utahrecovered.may20)),
        may21: (utahcasebank.may21  - (utahdeathbank.may21 + utahrecovered.may21)),
        may22: (utahcasebank.may22  - (utahdeathbank.may22 + utahrecovered.may22)),
        may23: (utahcasebank.may23  - (utahdeathbank.may23 + utahrecovered.may23)),
        may24: (utahcasebank.may24  - (utahdeathbank.may24 + utahrecovered.may24)),
        may25: (utahcasebank.may25  - (utahdeathbank.may25 + utahrecovered.may25)),
        may26: (utahcasebank.may26  - (utahdeathbank.may26 + utahrecovered.may26)),
        may27: (utahcasebank.may27  - (utahdeathbank.may27 + utahrecovered.may27)),
        may28: (utahcasebank.may28  - (utahdeathbank.may28 + utahrecovered.may28)),
        may29: (utahcasebank.may29  - (utahdeathbank.may29 + utahrecovered.may29)),
        may30: (utahcasebank.may30  - (utahdeathbank.may30 + utahrecovered.may30)),
        
    };

    var utahcountyrecovered = {
        mar25: (utahcountycasebank.mar11),
        mar26: (utahcountycasebank.mar12),
        mar27: (utahcountycasebank.mar13),
        mar28: (utahcountycasebank.mar14),
        mar29: (utahcountycasebank.mar15),
        mar30: (utahcountycasebank.mar16),
        mar31: (utahcountycasebank.mar17),
        apr01: (utahcountycasebank.mar18),
        apr02: (utahcountycasebank.mar19),
        apr03: (utahcountycasebank.mar20),
        apr04: (utahcountycasebank.mar21),
        apr05: (utahcountycasebank.mar22),
        apr06: (utahcountycasebank.mar23),
        apr07: (utahcountycasebank.mar24),
        apr08: (utahcountycasebank.mar25),
        apr09: (utahcountycasebank.mar26),
        apr10: (utahcountycasebank.mar27),
        apr11: (utahcountycasebank.mar28),
        apr12: (utahcountycasebank.mar29),
        apr13: (utahcountycasebank.mar30),
        apr14: (utahcountycasebank.mar31),
        apr15: (utahcountycasebank.apr01),
        apr16: (utahcountycasebank.apr02),
        apr17: (utahcountycasebank.apr03),
        apr18: (utahcountycasebank.apr04),
        apr19: (utahcountycasebank.apr05),
        apr20: (utahcountycasebank.apr06),
        apr21: (utahcountycasebank.apr07),
        apr22: (utahcountycasebank.apr08),
        apr23: (utahcountycasebank.apr09),
        apr24: (utahcountycasebank.apr10),
        apr25: (utahcountycasebank.apr11),
        apr26: (utahcountycasebank.apr12),
        apr27: (utahcountycasebank.apr13),
        apr28: (utahcountycasebank.apr14),
        apr29: (utahcountycasebank.apr15),
        apr30: (utahcountycasebank.apr16),
        may01: (utahcountycasebank.apr17),
        may02: (utahcountycasebank.apr18),
        may03: (utahcountycasebank.apr19),
        may04: (utahcountycasebank.apr20),
        may05: (utahcountycasebank.apr21),
        may06: (utahcountycasebank.apr22),
        may07: (utahcountycasebank.apr23),
        may08: (utahcountycasebank.apr24),
        may09: (utahcountycasebank.apr25),
        may10: (utahcountycasebank.apr26),
        may11: (utahcountycasebank.apr27),
        may12: (utahcountycasebank.apr28),
        may13: (utahcountycasebank.apr29),
        may14: (utahcountycasebank.apr30),
        may15: (utahcountycasebank.may01),
        may16: (utahcountycasebank.may02),
        may17: (utahcountycasebank.may03),
        may18: (utahcountycasebank.may04),
        may19: (utahcountycasebank.may05),
        may20: (utahcountycasebank.may06),
        may21: (utahcountycasebank.may07),
        may22: (utahcountycasebank.may08),
        may23: (utahcountycasebank.may09),
        may24: (utahcountycasebank.may10),
        may25: (utahcountycasebank.may11),
        may26: (utahcountycasebank.may12),
        may27: (utahcountycasebank.may13),
        may28: (utahcountycasebank.may14),
        may29: (utahcountycasebank.may15),
        may30: (utahcountycasebank.may16),
    };

    var utahcountyactivecases = {
        mar25: (utahcountycasebank.mar25  - (utahcountyrecovered.mar25)),
        mar26: (utahcountycasebank.mar26  - (utahcountyrecovered.mar26)),
        mar27: (utahcountycasebank.mar27  - (utahcountyrecovered.mar27)),
        mar28: (utahcountycasebank.mar28  - (utahcountyrecovered.mar28)),
        mar29: (utahcountycasebank.mar29  - (utahcountyrecovered.mar29)),
        mar30: (utahcountycasebank.mar30  - (utahcountyrecovered.mar30)),
        mar31: (utahcountycasebank.mar31  - (utahcountyrecovered.mar31)),
        apr01: (utahcountycasebank.apr01  - (utahcountyrecovered.apr01)),
        apr02: (utahcountycasebank.apr02  - (utahcountyrecovered.apr02)),
        apr03: (utahcountycasebank.apr03  - (utahcountyrecovered.apr03)),
        apr04: (utahcountycasebank.apr04  - (utahcountyrecovered.apr04)),
        apr05: (utahcountycasebank.apr05  - (utahcountyrecovered.apr05)),
        apr06: (utahcountycasebank.apr06  - (utahcountyrecovered.apr06)),
        apr07: (utahcountycasebank.apr07  - (utahcountyrecovered.apr07)),
        apr08: (utahcountycasebank.apr08  - (utahcountyrecovered.apr08)),
        apr09: (utahcountycasebank.apr09  - (utahcountyrecovered.apr09)),
        apr10: (utahcountycasebank.apr10  - (utahcountyrecovered.apr10)),
        apr11: (utahcountycasebank.apr11  - (utahcountyrecovered.apr11)),
        apr12: (utahcountycasebank.apr12  - (utahcountyrecovered.apr12)),
        apr13: (utahcountycasebank.apr13  - (utahcountyrecovered.apr13)),
        apr14: (utahcountycasebank.apr14  - (utahcountyrecovered.apr14)),
        apr15: (utahcountycasebank.apr15  - (utahcountyrecovered.apr15)),
        apr16: (utahcountycasebank.apr16  - (utahcountyrecovered.apr16)),
        apr17: (utahcountycasebank.apr17  - (utahcountyrecovered.apr17)),
        apr18: (utahcountycasebank.apr18  - (utahcountyrecovered.apr18)),
        apr19: (utahcountycasebank.apr19  - (utahcountyrecovered.apr19)),
        apr20: (utahcountycasebank.apr20  - (utahcountyrecovered.apr20)),
        apr21: (utahcountycasebank.apr21  - (utahcountyrecovered.apr21)),
        apr22: (utahcountycasebank.apr22  - (utahcountyrecovered.apr22)),
        apr23: (utahcountycasebank.apr23  - (utahcountyrecovered.apr23)),
        apr24: (utahcountycasebank.apr24  - (utahcountyrecovered.apr24)),
        apr25: (utahcountycasebank.apr25  - (utahcountyrecovered.apr25)),
        apr26: (utahcountycasebank.apr26  - (utahcountyrecovered.apr26)),
        apr27: (utahcountycasebank.apr27  - (utahcountyrecovered.apr27)),
        apr28: (utahcountycasebank.apr28  - (utahcountyrecovered.apr28)),
        apr29: (utahcountycasebank.apr29  - (utahcountyrecovered.apr29)),
        apr30: (utahcountycasebank.apr30  - (utahcountyrecovered.apr30)),
        may01: (utahcountycasebank.may01  - (utahcountyrecovered.may01)),
        may02: (utahcountycasebank.may02  - (utahcountyrecovered.may02)),
        may03: (utahcountycasebank.may03  - (utahcountyrecovered.may03)),
        may04: (utahcountycasebank.may04  - (utahcountyrecovered.may04)),
        may05: (utahcountycasebank.may05  - (utahcountyrecovered.may05)),
        may06: (utahcountycasebank.may06  - (utahcountyrecovered.may06)),
        may07: (utahcountycasebank.may07  - (utahcountyrecovered.may07)),
        may08: (utahcountycasebank.may08  - (utahcountyrecovered.may08)),
        may09: (utahcountycasebank.may09  - (utahcountyrecovered.may09)),
        may10: (utahcountycasebank.may10  - (utahcountyrecovered.may10)),
        may11: (utahcountycasebank.may11  - (utahcountyrecovered.may11)),
        may12: (utahcountycasebank.may12  - (utahcountyrecovered.may12)),
        may13: (utahcountycasebank.may13  - (utahcountyrecovered.may13)),
        may14: (utahcountycasebank.may14  - (utahcountyrecovered.may14)),
        may15: (utahcountycasebank.may15  - (utahcountyrecovered.may15)),
        may16: (utahcountycasebank.may16  - (utahcountyrecovered.may16)),
        may17: (utahcountycasebank.may17  - (utahcountyrecovered.may17)),
        may18: (utahcountycasebank.may18  - (utahcountyrecovered.may18)),
        may19: (utahcountycasebank.may19  - (utahcountyrecovered.may19)),
        may20: (utahcountycasebank.may20  - (utahcountyrecovered.may20)),
        may21: (utahcountycasebank.may21  - (utahcountyrecovered.may21)),
        may22: (utahcountycasebank.may22  - (utahcountyrecovered.may22)),
        may23: (utahcountycasebank.may23  - (utahcountyrecovered.may23)),
        may24: (utahcountycasebank.may24  - (utahcountyrecovered.may24)),
        may25: (utahcountycasebank.may25  - (utahcountyrecovered.may25)),
        may26: (utahcountycasebank.may26  - (utahcountyrecovered.may26)),
        may27: (utahcountycasebank.may27  - (utahcountyrecovered.may27)),
        may28: (utahcountycasebank.may28  - (utahcountyrecovered.may28)),
        may29: (utahcountycasebank.may29  - (utahcountyrecovered.may29)),
        may30: (utahcountycasebank.may30  - (utahcountyrecovered.may30)),

    
    };

                  var twodaysago = uscasebank.may08;
        var twodaysagoglobal = globalcasebank.may08;
              var deathstwo = globaldeathbank.may08;
                var usdeathstwo = usdeathbank.may08;
            var utahdeathstwo = utahdeathbank.may08;
            var utahtwodaysago = utahcasebank.may08;

               var utahyesterday = utahcasebank.may09;
        var utahdeathsyesterday = utahdeathbank.may09;
            var usdeathsyesterday = usdeathbank.may09;
          var deathsyesterday = globaldeathbank.may09;
            var yesterdaytotal = globalcasebank.may09;
                     var yesterday = uscasebank.may09;
       var gactivecasesyesterday = gactivecases.may09;
     var usactivecasesyesterday = usactivecases.may09;
 var utahactivecasesyesterday = utahactivecases.may09;

        var utahdeathstoday = utahdeathbank.may10;
               var utahtoday = utahcasebank.may10;
            var usdeathstoday = usdeathbank.may10;
          var deathstoday = globaldeathbank.may10;
            var todaytotal = globalcasebank.may10;
                     var today = uscasebank.may10;
 var utahactivecasestoday = utahactivecases.may10;
     var usactivecasestoday = usactivecases.may10;
       var gactivecasestoday = gactivecases.may10;

  
           var gcasesoneweekago = globalcasebank.may03;
        var utahdeathsoneweekago = utahdeathbank.may03;
              var uscasesoneweekago = uscasebank.may03;
          var utahcasesoneweekago = utahcasebank.may03;
         var gdeathsoneweekago = globaldeathbank.may03;
            var usdeathsoneweekago = usdeathbank.may03;
   var utahactivecaseslastweek = utahactivecases.may03;
       var usactivecaseslastweek = usactivecases.may03;
         var gactivecaseslastweek = gactivecases.may03;
        
           var gcasestwoweeksago = globalcasebank.apr26;
            var usdeathstwoweeksago = usdeathbank.apr26;
          var utahcasestwoweeksago = utahcasebank.apr26;
         var gdeathstwoweeksago = globaldeathbank.apr26;
              var uscasestwoweeksago = uscasebank.apr26;
        var utahdeathstwoweeksago = utahdeathbank.apr26;

              var uscasesthreeweeksago = uscasebank.apr19;
          var gdeathsthreeweekago = globaldeathbank.apr19;
          var utahcasesthreeweeksago = utahcasebank.apr19;
            var usdeathsthreeweeksago = usdeathbank.apr19;
        var utahdeathsthreeweeksago = utahdeathbank.apr19;
           var gcasesthreeweeksago = globalcasebank.apr19;
        
        

            



        var glastweekchange = (todaytotal- gcasesoneweekago);
        var uslastweekchange =  (today - uscasesoneweekago);
        var utahlastweekchange = (utahtoday - utahcasesoneweekago);

        
        
    


        var ctx = document.getElementById('myChart').getContext('2d');
        var stackedLine = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: [
                "March 25",
                "March 26",
                "March 27",
                "March 28",
                "March 29",
                "March 30",
                "March 31",
                "April 1",
                "April 2",
                "April 3",
                "April 4",
                "April 5",
                "April 6",
                "April 7",
                "April 8",
                "April 9",
                "April 10",
                "April 11",
                "April 12",
                "April 13",
                "April 14",
                "April 15",
                "April 16",
                "April 17",
                "April 18",
                "April 19",
                "April 20",
                "April 21",
                "April 22",
                "April 23",
                "April 24",
                "April 25",
                "April 26",
                "April 27",
                "April 28",
                "April 29",
                "April 30",
                "May 1",
                "May 2",
                "May 3",
                "May 4",
                "May 5",
                "May 6",
                "May 7",
                "May 8",
                "May 9",
                "May 10",
            ],
                datasets: [{
                    label: "Cases", 
                    borderColor: "rgb(255, 99, 132)",
                    order: 1,
                    hoverBorderWidth: 10,
                    poointHoverBackgroundColor: "rgb(255, 99, 132)",

                    data: [
                        globalcasebank.mar25, 
                        globalcasebank.mar26, 
                        globalcasebank.mar27, 
                        globalcasebank.mar28,
                        globalcasebank.mar29, 
                        globalcasebank.mar30, 
                        globalcasebank.mar31, 
                        globalcasebank.apr01, 
                        globalcasebank.apr02, 
                        globalcasebank.apr03, 
                        globalcasebank.apr04, 
                        globalcasebank.apr05,
                        globalcasebank.apr06, 
                        globalcasebank.apr07, 
                        globalcasebank.apr08, 
                        globalcasebank.apr09,
                        globalcasebank.apr10, 
                        globalcasebank.apr11,
                        globalcasebank.apr12,
                        globalcasebank.apr13,
                        globalcasebank.apr14,
                        globalcasebank.apr15,
                        globalcasebank.apr16,
                        globalcasebank.apr17,
                        globalcasebank.apr18,
                        globalcasebank.apr19,
                        globalcasebank.apr20,
                        globalcasebank.apr21,
                        globalcasebank.apr22,
                        globalcasebank.apr23,
                        globalcasebank.apr24,
                        globalcasebank.apr25,
                        globalcasebank.apr26,
                        globalcasebank.apr27,
                        globalcasebank.apr28,
                        globalcasebank.apr29,
                        globalcasebank.apr30,
                        globalcasebank.may01, 
                        globalcasebank.may02, 
                        globalcasebank.may03, 
                        globalcasebank.may04, 
                        globalcasebank.may05,
                        globalcasebank.may06, 
                        globalcasebank.may07, 
                        globalcasebank.may08, 
                        globalcasebank.may09,
                        globalcasebank.may10, 
                        globalcasebank.may11,
                        globalcasebank.may12,
                        globalcasebank.may13,
                        globalcasebank.may14,
                        globalcasebank.may15,
                        globalcasebank.may16,
                        globalcasebank.may17,
                        globalcasebank.may18,
                        globalcasebank.may19,
                        globalcasebank.may20,
                        globalcasebank.may21,
                        globalcasebank.may22,
                        globalcasebank.may23,
                        globalcasebank.may24,
                        globalcasebank.may25,
                        globalcasebank.may26,
                        globalcasebank.may27,
                        globalcasebank.may28,
                        globalcasebank.may29,
                        globalcasebank.may30,

    
                    ],
                    

                   
                },


                    ]
            
            },
        
            // Configuration options go here
            options: {
                scales: {
                    yAxes: [{
                        stacked: false
                    }]
                }
            }
        });

    var ctx2 = document.getElementById('myChart2').getContext('2d');
       var newchart = new Chart(ctx2, {
            //The type of chart we want to create
            type: 'line',
        
            //The data for our dataset
           data: {
                labels: [
                "March 25",
                "March 26",
                "March 27",
                "March 28",
                "March 29",
                "March 30",
                "March 31",
                "April 1",
                "April 2",
                "April 3",
                "April 4",
                "April 5",
                "April 6",
                "April 7",
                "April 8",
                "April 9",
                "April 10",
                "April 11",
                "April 12",
                "April 13",
                "April 14",
                "April 15",
                "April 16",
                "April 17",
                "April 18",
                "April 19",
                "April 20",
                "April 21",
                "April 22",
                "April 23",
                "April 24",
                "April 25",
                "April 26",
                "April 27",
                "April 28",
                "April 29",
                "April 30",
                "May 1",
                "May 2",
                "May 3",
                "May 4",
                "May 5",
                "May 6",
                "May 7",
                "May 8",
                "May 9",
                "May 10",

            ],
                datasets: [{
                label: "Global Deaths",
                backgroundColor: "rgb(0, 0, 0)",
                borderColor: "rgb(0, 0, 0)",
                order: 1,
                stacked: true,
                data: [ 
                    globaldeathbank.mar25,
                    globaldeathbank.mar26,
                    globaldeathbank.mar27,
                    globaldeathbank.mar28,
                    globaldeathbank.mar29,
                    globaldeathbank.mar30,
                    globaldeathbank.mar31,
                    globaldeathbank.apr01,
                    globaldeathbank.apr02,
                    globaldeathbank.apr03,
                    globaldeathbank.apr04,
                    globaldeathbank.apr05,
                    globaldeathbank.apr06,
                    globaldeathbank.apr07,
                    globaldeathbank.apr08, 
                    globaldeathbank.apr09,
                    globaldeathbank.apr10, 
                    globaldeathbank.apr11,
                    globaldeathbank.apr12,
                    globaldeathbank.apr13,
                    globaldeathbank.apr14,
                    globaldeathbank.apr15,
                    globaldeathbank.apr16,
                    globaldeathbank.apr17,
                    globaldeathbank.apr18,
                    globaldeathbank.apr19,
                    globaldeathbank.apr20,
                    globaldeathbank.apr21,
                    globaldeathbank.apr22,
                    globaldeathbank.apr23,
                    globaldeathbank.apr24,
                    globaldeathbank.apr25,
                    globaldeathbank.apr26,
                    globaldeathbank.apr27,
                    globaldeathbank.apr28,
                    globaldeathbank.apr29,
                    globaldeathbank.apr30,
                    globaldeathbank.may01,
                    globaldeathbank.may02,
                    globaldeathbank.may03,
                    globaldeathbank.may04,
                    globaldeathbank.may05,
                    globaldeathbank.may06,
                    globaldeathbank.may07,
                    globaldeathbank.may08, 
                    globaldeathbank.may09,
                    globaldeathbank.may10, 
                    globaldeathbank.may11,
                    globaldeathbank.may12,
                    globaldeathbank.may13,
                    globaldeathbank.may14,
                    globaldeathbank.may15,
                    globaldeathbank.may16,
                    globaldeathbank.may17,
                    globaldeathbank.may18,
                    globaldeathbank.may19,
                    globaldeathbank.may20,
                    globaldeathbank.may21,
                    globaldeathbank.may22,
                    globaldeathbank.may23,
                    globaldeathbank.may24,
                    globaldeathbank.may25,
                    globaldeathbank.may26,
                    globaldeathbank.may27,
                    globaldeathbank.may28,
                    globaldeathbank.may29,
                    globaldeathbank.may30,
                ],},

                {
                    label: "Global active cases",
                    backgroundColor: "rgb(255, 255, 0)",
                    borderColor: "rgb(255, 255, 0)",
                    stacked: true,
                    order: 1,
                    data: [
                        (gactivecases.mar25),
                        (gactivecases.mar26),
                        (gactivecases.mar27),
                        (gactivecases.mar28),
                        (gactivecases.mar29),
                        (gactivecases.mar30),
                        (gactivecases.mar31),
                        (gactivecases.apr01),
                        (gactivecases.apr02),
                        (gactivecases.apr03),
                        (gactivecases.apr04),
                        (gactivecases.apr05),
                        (gactivecases.apr06),
                        (gactivecases.apr07),
                        (gactivecases.apr08),
                        (gactivecases.apr09),
                        (gactivecases.apr10),
                        (gactivecases.apr11),
                        (gactivecases.apr12),
                        (gactivecases.apr13),
                        (gactivecases.apr14),
                        (gactivecases.apr15),
                        (gactivecases.apr16),
                        (gactivecases.apr17),
                        (gactivecases.apr18),
                        (gactivecases.apr19),
                        (gactivecases.apr20),
                        (gactivecases.apr21),
                        (gactivecases.apr22),
                        (gactivecases.apr23),
                        (gactivecases.apr24),
                        (gactivecases.apr25),
                        (gactivecases.apr26),
                        (gactivecases.apr27),
                        (gactivecases.apr28),
                        (gactivecases.apr29),
                        (gactivecases.apr30),
                        (gactivecases.may01),
                        (gactivecases.may02),
                        (gactivecases.may03),
                        (gactivecases.may04),
                        (gactivecases.may05),
                        (gactivecases.may06),
                        (gactivecases.may07),
                        (gactivecases.may08),
                        (gactivecases.may09),
                        (gactivecases.may10),
                        (gactivecases.may11),
                        (gactivecases.may12),
                        (gactivecases.may13),
                        (gactivecases.may14),
                        (gactivecases.may15),
                        (gactivecases.may16),
                        (gactivecases.may17),
                        (gactivecases.may18),
                        (gactivecases.may19),
                        (gactivecases.may20),
                        (gactivecases.may21),
                        (gactivecases.may22),
                        (gactivecases.may23),
                        (gactivecases.may24),
                        (gactivecases.may25),
                        (gactivecases.may26),
                        (gactivecases.may27),
                        (gactivecases.may28),
                        (gactivecases.may29),
                        (gactivecases.may30),

                    ],},

                    {
                        label: "global recovered",
                        backgroundColor: "rgb(0, 300, 0)",
                        borderColor: "rgb(0, 300, 0)",
                        order: 1,
                        stacked: true,

                        data: [
                        grecovered.mar25, 
                        grecovered.mar26, 
                        grecovered.mar27, 
                        grecovered.mar28,
                        grecovered.mar29, 
                        grecovered.mar30, 
                        grecovered.mar31, 
                        grecovered.apr01, 
                        grecovered.apr02, 
                        grecovered.apr03, 
                        grecovered.apr04, 
                        grecovered.apr05,
                        grecovered.apr06, 
                        grecovered.apr07, 
                        grecovered.apr08, 
                        grecovered.apr09,
                        grecovered.apr10, 
                        grecovered.apr11,
                        grecovered.apr12,
                        grecovered.apr13,
                        grecovered.apr14,
                        grecovered.apr15,
                        grecovered.apr16,
                        grecovered.apr17,
                        grecovered.apr18,
                        grecovered.apr19,
                        grecovered.apr20,
                        grecovered.apr21,
                        grecovered.apr22,
                        grecovered.apr23,
                        grecovered.apr24,
                        grecovered.apr25,
                        grecovered.apr26,
                        grecovered.apr27,
                        grecovered.apr28,
                        grecovered.apr29,
                        grecovered.apr30,
                        grecovered.may01, 
                        grecovered.may02, 
                        grecovered.may03, 
                        grecovered.may04, 
                        grecovered.may05,
                        grecovered.may06, 
                        grecovered.may07, 
                        grecovered.may08, 
                        grecovered.may09,
                        grecovered.may10, 
                        grecovered.may11,
                        grecovered.may12,
                        grecovered.may13,
                        grecovered.may14,
                        grecovered.may15,
                        grecovered.may16,
                        grecovered.may17,
                        grecovered.may18,
                        grecovered.may19,
                        grecovered.may20,
                        grecovered.may21,
                        grecovered.may22,
                        grecovered.may23,
                        grecovered.may24,
                        grecovered.may25,
                        grecovered.may26,
                        grecovered.may27,
                        grecovered.may28,
                        grecovered.may29,
                        grecovered.may30,

                        ],}, 

                


                ]
            
           },
        
            // Configuration options go here
            options: {
                scales: {
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        });




        var ctx3 = document.getElementById('myChart3').getContext('2d');
        var uschart = new Chart(ctx3, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: [
                "March 25",
                "March 26",
                "March 27",
                "March 28",
                "March 29",
                "March 30",
                "March 31",
                "April 1",
                "April 2",
                "April 3",
                "April 4",
                "April 5",
                "April 6",
                "April 7",
                "April 8",
                "April 9",
                "April 10",
                "April 11",
                "April 12",
                "April 13",
                "April 14",
                "April 15",
                "April 16",
                "April 17",
                "April 18",
                "April 19",
                "April 20",
                "April 21",
                "April 22",
                "April 23",
                "April 24",
                "April 25",
                "April 26",
                "April 27",
                "April 28",
                "April 29",
                "April 30",
                "May 1",
                "May 2",
                "May 3",
                "May 4",
                "May 5",
                "May 6",
                "May 7",
                "May 8",
                "May 9",
                "May 10",
            ],
                datasets: [{
                    label: "US Cases", 
                    borderColor: "rgb(255, 99, 132)",
                    order: 1,

                    data: [
                        uscasebank.mar25, 
                        uscasebank.mar26, 
                        uscasebank.mar27, 
                        uscasebank.mar28,
                        uscasebank.mar29, 
                        uscasebank.mar30, 
                        uscasebank.mar31, 
                        uscasebank.apr01, 
                        uscasebank.apr02, 
                        uscasebank.apr03, 
                        uscasebank.apr04, 
                        uscasebank.apr05,
                        uscasebank.apr06, 
                        uscasebank.apr07, 
                        uscasebank.apr08, 
                        uscasebank.apr09,
                        uscasebank.apr10, 
                        uscasebank.apr11,
                        uscasebank.apr12,
                        uscasebank.apr13,
                        uscasebank.apr14,
                        uscasebank.apr15,
                        uscasebank.apr16,
                        uscasebank.apr17,
                        uscasebank.apr18,
                        uscasebank.apr19,
                        uscasebank.apr20,
                        uscasebank.apr21,
                        uscasebank.apr22,
                        uscasebank.apr23,
                        uscasebank.apr24,
                        uscasebank.apr25,
                        uscasebank.apr26,
                        uscasebank.apr27,
                        uscasebank.apr28,
                        uscasebank.apr29,
                        uscasebank.apr30,
                        uscasebank.may01, 
                        uscasebank.may02, 
                        uscasebank.may03, 
                        uscasebank.may04, 
                        uscasebank.may05,
                        uscasebank.may06, 
                        uscasebank.may07, 
                        uscasebank.may08, 
                        uscasebank.may09,
                        uscasebank.may10, 
                        uscasebank.may11,
                        uscasebank.may12,
                        uscasebank.may13,
                        uscasebank.may14,
                        uscasebank.may15,
                        uscasebank.may16,
                        uscasebank.may17,
                        uscasebank.may18,
                        uscasebank.may19,
                        uscasebank.may20,
                        uscasebank.may21,
                        uscasebank.may22,
                        uscasebank.may23,
                        uscasebank.may24,
                        uscasebank.may25,
                        uscasebank.may26,
                        uscasebank.may27,
                        uscasebank.may28,
                        uscasebank.may29,
                        uscasebank.may30,

    
                    ],
                    

                   
                },


                    ]
            
            },
        
            // Configuration options go here
            options: {
                scales: {
                    yAxes: [{
                        stacked: false
                    }]
                }
            }
        });

    var ctx4 = document.getElementById('myChart4').getContext('2d');
       var newchart = new Chart(ctx4, {
            //The type of chart we want to create
            type: 'line',
        
            //The data for our dataset
           data: {
                labels: [
                "March 25",
                "March 26",
                "March 27",
                "March 28",
                "March 29",
                "March 30",
                "March 31",
                "April 1",
                "April 2",
                "April 3",
                "April 4",
                "April 5",
                "April 6",
                "April 7",
                "April 8",
                "April 9",
                "April 10",
                "April 11",
                "April 12",
                "April 13",
                "April 14",
                "April 15",
                "April 16",
                "April 17",
                "April 18",
                "April 19",
                "April 20",
                "April 21",
                "April 22",
                "April 23",
                "April 24",
                "April 25",
                "April 26",
                "April 27",
                "April 28",
                "April 29",
                "April 30",
                "May 1",
                "May 2",
                "May 3",
                "May 4",
                "May 5",
                "May 6",
                "May 7",
                "May 8",
                "May 9",
                "May 10",

            ],
                datasets: [{
                label: "US Deaths",
                backgroundColor: "rgb(0, 0, 0)",
                borderColor: "rgb(0, 0, 0)",
                order: 1,
                stacked: true,
                data: [ 
                    usdeathbank.mar25,
                    usdeathbank.mar26,
                    usdeathbank.mar27,
                    usdeathbank.mar28,
                    usdeathbank.mar29,
                    usdeathbank.mar30,
                    usdeathbank.mar31,
                    usdeathbank.apr01,
                    usdeathbank.apr02,
                    usdeathbank.apr03,
                    usdeathbank.apr04,
                    usdeathbank.apr05,
                    usdeathbank.apr06,
                    usdeathbank.apr07,
                    usdeathbank.apr08, 
                    usdeathbank.apr09,
                    usdeathbank.apr10, 
                    usdeathbank.apr11,
                    usdeathbank.apr12,
                    usdeathbank.apr13,
                    usdeathbank.apr14,
                    usdeathbank.apr15,
                    usdeathbank.apr16,
                    usdeathbank.apr17,
                    usdeathbank.apr18,
                    usdeathbank.apr19,
                    usdeathbank.apr20,
                    usdeathbank.apr21,
                    usdeathbank.apr22,
                    usdeathbank.apr23,
                    usdeathbank.apr24,
                    usdeathbank.apr25,
                    usdeathbank.apr26,
                    usdeathbank.apr27,
                    usdeathbank.apr28,
                    usdeathbank.apr29,
                    usdeathbank.apr30,
                    usdeathbank.may01,
                    usdeathbank.may02,
                    usdeathbank.may03,
                    usdeathbank.may04,
                    usdeathbank.may05,
                    usdeathbank.may06,
                    usdeathbank.may07,
                    usdeathbank.may08, 
                    usdeathbank.may09,
                    usdeathbank.may10, 
                    usdeathbank.may11,
                    usdeathbank.may12,
                    usdeathbank.may13,
                    usdeathbank.may14,
                    usdeathbank.may15,
                    usdeathbank.may16,
                    usdeathbank.may17,
                    usdeathbank.may18,
                    usdeathbank.may19,
                    usdeathbank.may20,
                    usdeathbank.may21,
                    usdeathbank.may22,
                    usdeathbank.may23,
                    usdeathbank.may24,
                    usdeathbank.may25,
                    usdeathbank.may26,
                    usdeathbank.may27,
                    usdeathbank.may28,
                    usdeathbank.may29,
                    usdeathbank.may30,
                ],},

                {
                    label: "US active cases",
                    backgroundColor: "rgb(255, 255, 0)",
                    borderColor: "rgb(255, 255, 0)",
                    stacked: true,
                    order: 1,
                    data: [
                        (usactivecases.mar25 ),
                        (usactivecases.mar26 ),
                        (usactivecases.mar27 ),
                        (usactivecases.mar28 ),
                        (usactivecases.mar29 ),
                        (usactivecases.mar30 ),
                        (usactivecases.mar31 ),
                        (usactivecases.apr01 ),
                        (usactivecases.apr02 ),
                        (usactivecases.apr03 ),
                        (usactivecases.apr04 ),
                        (usactivecases.apr05 ),
                        (usactivecases.apr06 ),
                        (usactivecases.apr07 ),
                        (usactivecases.apr08 ),
                        (usactivecases.apr09 ),
                        (usactivecases.apr10 ),
                        (usactivecases.apr11 ),
                        (usactivecases.apr12 ),
                        (usactivecases.apr13 ),
                        (usactivecases.apr14 ),
                        (usactivecases.apr15 ),
                        (usactivecases.apr16 ),
                        (usactivecases.apr17 ),
                        (usactivecases.apr18 ),
                        (usactivecases.apr19 ),
                        (usactivecases.apr20 ),
                        (usactivecases.apr21 ),
                        (usactivecases.apr22 ),
                        (usactivecases.apr23 ),
                        (usactivecases.apr24 ),
                        (usactivecases.apr25 ),
                        (usactivecases.apr26 ),
                        (usactivecases.apr27 ),
                        (usactivecases.apr28 ),
                        (usactivecases.apr29 ),
                        (usactivecases.apr30 ),
                        (usactivecases.may01 ),
                        (usactivecases.may02 ),
                        (usactivecases.may03 ),
                        (usactivecases.may04 ),
                        (usactivecases.may05 ),
                        (usactivecases.may06 ),
                        (usactivecases.may07 ),
                        (usactivecases.may08 ),
                        (usactivecases.may09 ),
                        (usactivecases.may10 ),
                        (usactivecases.may11 ),
                        (usactivecases.may12 ),
                        (usactivecases.may13 ),
                        (usactivecases.may14 ),
                        (usactivecases.may15 ),
                        (usactivecases.may16 ),
                        (usactivecases.may17 ),
                        (usactivecases.may18 ),
                        (usactivecases.may19 ),
                        (usactivecases.may20 ),
                        (usactivecases.may21 ),
                        (usactivecases.may22 ),
                        (usactivecases.may23 ),
                        (usactivecases.may24 ),
                        (usactivecases.may25 ),
                        (usactivecases.may26 ),
                        (usactivecases.may27 ),
                        (usactivecases.may28 ),
                        (usactivecases.may29 ),
                        (usactivecases.may30 ),

                    ],}, 

                    {
                        label: "US recovered",
                        backgroundColor: "rgb(0, 300, 0)",
                        borderColor: "rgb(0, 300, 0)",
                        order: 1,
                        stacked: true,

                        data: [
                            (usrecovered.mar25 ),
                            (usrecovered.mar26 ),
                            (usrecovered.mar27 ),
                            (usrecovered.mar28 ),
                            (usrecovered.mar29 ),
                            (usrecovered.mar30 ),
                            (usrecovered.mar31 ),
                            (usrecovered.apr01 ),
                            (usrecovered.apr02 ),
                            (usrecovered.apr03 ),
                            (usrecovered.apr04 ),
                            (usrecovered.apr05 ),
                            (usrecovered.apr06 ),
                            (usrecovered.apr07 ),
                            (usrecovered.apr08 ),
                            (usrecovered.apr09 ),
                            (usrecovered.apr10 ),
                            (usrecovered.apr11 ),
                            (usrecovered.apr12 ),
                            (usrecovered.apr13 ),
                            (usrecovered.apr14 ),
                            (usrecovered.apr15 ),
                            (usrecovered.apr16 ),
                            (usrecovered.apr17 ),
                            (usrecovered.apr18 ),
                            (usrecovered.apr19 ),
                            (usrecovered.apr20 ),
                            (usrecovered.apr21 ),
                            (usrecovered.apr22 ),
                            (usrecovered.apr23 ),
                            (usrecovered.apr24 ),
                            (usrecovered.apr25 ),
                            (usrecovered.apr26 ),
                            (usrecovered.apr27 ),
                            (usrecovered.apr28 ),
                            (usrecovered.apr29 ),
                            (usrecovered.apr30 ),
                            (usrecovered.may01 ),
                            (usrecovered.may02 ),
                            (usrecovered.may03 ),
                            (usrecovered.may04 ),
                            (usrecovered.may05 ),
                            (usrecovered.may06 ),
                            (usrecovered.may07 ),
                            (usrecovered.may08 ),
                            (usrecovered.may09 ),
                            (usrecovered.may10 ),
                            (usrecovered.may11 ),
                            (usrecovered.may12 ),
                            (usrecovered.may13 ),
                            (usrecovered.may14 ),
                            (usrecovered.may15 ),
                            (usrecovered.may16 ),
                            (usrecovered.may17 ),
                            (usrecovered.may18 ),
                            (usrecovered.may19 ),
                            (usrecovered.may20 ),
                            (usrecovered.may21 ),
                            (usrecovered.may22 ),
                            (usrecovered.may23 ),
                            (usrecovered.may24 ),
                            (usrecovered.may25 ),
                            (usrecovered.may26 ),
                            (usrecovered.may27 ),
                            (usrecovered.may28 ),
                            (usrecovered.may29 ),
                            (usrecovered.may30 ),
                        ],}, 

                


                ]
            
            },
        
            // Configuration options go here
            options: {
                scales: {
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        });





        var ctx5 = document.getElementById('myChart5').getContext('2d');
        var uschart = new Chart(ctx5, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: [
                "March 25",
                "March 26",
                "March 27",
                "March 28",
                "March 29",
                "March 30",
                "March 31",
                "April 1",
                "April 2",
                "April 3",
                "April 4",
                "April 5",
                "April 6",
                "April 7",
                "April 8",
                "April 9",
                "April 10",
                "April 11",
                "April 12",
                "April 13",
                "April 14",
                "April 15",
                "April 16",
                "April 17",
                "April 18",
                "April 19",
                "April 20",
                "April 21",
                "April 22",
                "April 23",
                "April 24",
                "April 25",
                "April 26",
                "April 27",
                "April 28",
                "April 29",
                "April 30",
                "May 1",
                "May 2",
                "May 3",
                "May 4",
                "May 5",
                "May 6",
                "May 7",
                "May 8",
                "May 9",
                "May 10",
            ],
                datasets: [{
                    label: "Utah Cases", 
                    borderColor: "rgb(255, 99, 132)",
                    order: 1,

                    data: [
                        utahcasebank.mar25, 
                        utahcasebank.mar26, 
                        utahcasebank.mar27, 
                        utahcasebank.mar28,
                        utahcasebank.mar29, 
                        utahcasebank.mar30, 
                        utahcasebank.mar31, 
                        utahcasebank.apr01, 
                        utahcasebank.apr02, 
                        utahcasebank.apr03, 
                        utahcasebank.apr04, 
                        utahcasebank.apr05,
                        utahcasebank.apr06, 
                        utahcasebank.apr07, 
                        utahcasebank.apr08, 
                        utahcasebank.apr09,
                        utahcasebank.apr10, 
                        utahcasebank.apr11,
                        utahcasebank.apr12,
                        utahcasebank.apr13,
                        utahcasebank.apr14,
                        utahcasebank.apr15,
                        utahcasebank.apr16,
                        utahcasebank.apr17,
                        utahcasebank.apr18,
                        utahcasebank.apr19,
                        utahcasebank.apr20,
                        utahcasebank.apr21,
                        utahcasebank.apr22,
                        utahcasebank.apr23,
                        utahcasebank.apr24,
                        utahcasebank.apr25,
                        utahcasebank.apr26,
                        utahcasebank.apr27,
                        utahcasebank.apr28,
                        utahcasebank.apr29,
                        utahcasebank.apr30,
                        utahcasebank.may01, 
                        utahcasebank.may02, 
                        utahcasebank.may03, 
                        utahcasebank.may04, 
                        utahcasebank.may05,
                        utahcasebank.may06, 
                        utahcasebank.may07, 
                        utahcasebank.may08, 
                        utahcasebank.may09,
                        utahcasebank.may10, 
                        utahcasebank.may11,
                        utahcasebank.may12,
                        utahcasebank.may13,
                        utahcasebank.may14,
                        utahcasebank.may15,
                        utahcasebank.may16,
                        utahcasebank.may17,
                        utahcasebank.may18,
                        utahcasebank.may19,
                        utahcasebank.may20,
                        utahcasebank.may21,
                        utahcasebank.may22,
                        utahcasebank.may23,
                        utahcasebank.may24,
                        utahcasebank.may25,
                        utahcasebank.may26,
                        utahcasebank.may27,
                        utahcasebank.may28,
                        utahcasebank.may29,
                        utahcasebank.may30,
    
    
                        
    
                    ],
                    

                   
                },


                    ]
            
            },
        
            // Configuration options go here
            options: {
                scales: {
                    yAxes: [{
                        stacked: false
                    }]
                }
            }
        });

    var ctx6 = document.getElementById('myChart6').getContext('2d');
       var newchart = new Chart(ctx6, {
            //The type of chart we want to create
            type: 'line',
        
            //The data for our dataset
           data: {
                labels: [
                    "March 25",
                    "March 26",
                    "March 27",
                    "March 28",
                    "March 29",
                    "March 30",
                    "March 31",
                    "April 1",
                    "April 2",
                    "April 3",
                    "April 4",
                    "April 5",
                    "April 6",
                    "April 7",
                    "April 8",
                    "April 9",
                    "April 10",
                    "April 11",
                    "April 12",
                    "April 13",
                    "April 14",
                    "April 15",
                    "April 16",
                    "April 17",
                    "April 18",
                    "April 19",
                    "April 20",
                    "April 21",
                    "April 22",
                    "April 23",
                    "April 24",
                    "April 25",
                    "April 26",
                    "April 27",
                    "April 28",
                    "April 29",
                    "April 30",
                    "May 1",
                    "May 2",
                    "May 3",
                    "May 4",
                    "May 5",
                    "May 6",
                    "May 7",
                    "May 8",
                    "May 9",
                    "May 10",
                    
                ],
                datasets: [{
                label: "Utah Deaths",
                backgroundColor: "rgb(0, 0, 0)",
                borderColor: "rgb(0, 0, 0)",
                order: 1,
                stacked: true,
                data: [ 
                    utahdeathbank.mar25, 
                    utahdeathbank.mar26, 
                    utahdeathbank.mar27, 
                    utahdeathbank.mar28,
                    utahdeathbank.mar29, 
                    utahdeathbank.mar30, 
                    utahdeathbank.mar31, 
                    utahdeathbank.apr01, 
                    utahdeathbank.apr02, 
                    utahdeathbank.apr03, 
                    utahdeathbank.apr04, 
                    utahdeathbank.apr05,
                    utahdeathbank.apr06, 
                    utahdeathbank.apr07, 
                    utahdeathbank.apr08, 
                    utahdeathbank.apr09,
                    utahdeathbank.apr10, 
                    utahdeathbank.apr11,
                    utahdeathbank.apr12,
                    utahdeathbank.apr13,
                    utahdeathbank.apr14,
                    utahdeathbank.apr15,
                    utahdeathbank.apr16,
                    utahdeathbank.apr17,
                    utahdeathbank.apr18,
                    utahdeathbank.apr19,
                    utahdeathbank.apr20,
                    utahdeathbank.apr21,
                    utahdeathbank.apr22,
                    utahdeathbank.apr23,
                    utahdeathbank.apr24,
                    utahdeathbank.apr25,
                    utahdeathbank.apr26,
                    utahdeathbank.apr27,
                    utahdeathbank.apr28,
                    utahdeathbank.apr29,
                    utahdeathbank.apr30,
                    utahdeathbank.may01, 
                    utahdeathbank.may02, 
                    utahdeathbank.may03, 
                    utahdeathbank.may04, 
                    utahdeathbank.may05,
                    utahdeathbank.may06, 
                    utahdeathbank.may07, 
                    utahdeathbank.may08, 
                    utahdeathbank.may09,
                    utahdeathbank.may10, 
                    utahdeathbank.may11,
                    utahdeathbank.may12,
                    utahdeathbank.may13,
                    utahdeathbank.may14,
                    utahdeathbank.may15,
                    utahdeathbank.may16,
                    utahdeathbank.may17,
                    utahdeathbank.may18,
                    utahdeathbank.may19,
                    utahdeathbank.may20,
                    utahdeathbank.may21,
                    utahdeathbank.may22,
                    utahdeathbank.may23,
                    utahdeathbank.may24,
                    utahdeathbank.may25,
                    utahdeathbank.may26,
                    utahdeathbank.may27,
                    utahdeathbank.may28,
                    utahdeathbank.may29,
                    utahdeathbank.may30,

                ],},

                {
                    label: "Utah active cases",
                    backgroundColor: "rgb(255, 255, 0)",
                    borderColor: "rgb(255, 255, 0)",
                    stacked: true,
                    order: 1,
                    data: [
                        utahactivecases.mar25,
                        utahactivecases.mar26,
                        utahactivecases.mar27,
                        utahactivecases.mar28,
                        utahactivecases.mar29,
                        utahactivecases.mar30,
                        utahactivecases.mar31,
                        utahactivecases.apr01,
                        utahactivecases.apr02,
                        utahactivecases.apr03,
                        utahactivecases.apr04,
                        utahactivecases.apr05,
                        utahactivecases.apr06,
                        utahactivecases.apr07,
                        utahactivecases.apr08,
                        utahactivecases.apr09,
                        utahactivecases.apr10,
                        utahactivecases.apr11,
                        utahactivecases.apr12,
                        utahactivecases.apr13,
                        utahactivecases.apr14,
                        utahactivecases.apr15,
                        utahactivecases.apr16,
                        utahactivecases.apr17,
                        utahactivecases.apr18,
                        utahactivecases.apr19,
                        utahactivecases.apr20,
                        utahactivecases.apr21,
                        utahactivecases.apr22,
                        utahactivecases.apr23,
                        utahactivecases.apr24,
                        utahactivecases.apr25,
                        utahactivecases.apr26,
                        utahactivecases.apr27,
                        utahactivecases.apr28,
                        utahactivecases.apr29,
                        utahactivecases.apr30,
                        utahactivecases.may01, 
                        utahactivecases.may02, 
                        utahactivecases.may03, 
                        utahactivecases.may04, 
                        utahactivecases.may05,
                        utahactivecases.may06, 
                        utahactivecases.may07, 
                        utahactivecases.may08, 
                        utahactivecases.may09,
                        utahactivecases.may10, 
                        utahactivecases.may11,
                        utahactivecases.may12,
                        utahactivecases.may13,
                        utahactivecases.may14,
                        utahactivecases.may15,
                        utahactivecases.may16,
                        utahactivecases.may17,
                        utahactivecases.may18,
                        utahactivecases.may19,
                        utahactivecases.may20,
                        utahactivecases.may21,
                        utahactivecases.may22,
                        utahactivecases.may23,
                        utahactivecases.may24,
                        utahactivecases.may25,
                        utahactivecases.may26,
                        utahactivecases.may27,
                        utahactivecases.may28,
                        utahactivecases.may29,
                        utahactivecases.may30,
    
                    ],},
    

                    {
                        label: "Utah recovered",
                        backgroundColor: "rgb(0, 300, 0)",
                        borderColor: "rgb(0, 300, 0)",
                        order: 1,
                        stacked: true,

                        data: [
                                utahrecovered.mar25,
                                utahrecovered.mar26,
                                utahrecovered.mar27,
                                utahrecovered.mar28,
                                utahrecovered.mar29,
                                utahrecovered.mar30,
                                utahrecovered.mar31,
                                utahrecovered.apr01,
                                utahrecovered.apr02,
                                utahrecovered.apr03,
                                utahrecovered.apr04,
                                utahrecovered.apr05,
                                utahrecovered.apr06,
                                utahrecovered.apr07,
                                utahrecovered.apr08,
                                utahrecovered.apr09,
                                utahrecovered.apr10,
                                utahrecovered.apr11,
                                utahrecovered.apr12,
                                utahrecovered.apr13,
                                utahrecovered.apr14,
                                utahrecovered.apr15,
                                utahrecovered.apr16,
                                utahrecovered.apr17,
                                utahrecovered.apr18,
                                utahrecovered.apr19,
                                utahrecovered.apr20,
                                utahrecovered.apr21,
                                utahrecovered.apr22,
                                utahrecovered.apr23,
                                utahrecovered.apr24,
                                utahrecovered.apr25,
                                utahrecovered.apr26,
                                utahrecovered.apr27,
                                utahrecovered.apr28,
                                utahrecovered.apr29,
                                utahrecovered.apr30,
                                utahrecovered.may01,
                                utahrecovered.may02,
                                utahrecovered.may03,
                                utahrecovered.may04,
                                utahrecovered.may05,
                                utahrecovered.may06,
                                utahrecovered.may07,
                                utahrecovered.may08,
                                utahrecovered.may09,
                                utahrecovered.may10,
                                utahrecovered.may11,
                                utahrecovered.may12,
                                utahrecovered.may13,
                                utahrecovered.may14,
                                utahrecovered.may15,
                                utahrecovered.may16,
                                utahrecovered.may17,
                                utahrecovered.may18,
                                utahrecovered.may19,
                                utahrecovered.may20,
                                utahrecovered.may21,
                                utahrecovered.may22,
                                utahrecovered.may23,
                                utahrecovered.may24,
                                utahrecovered.may25,
                                utahrecovered.may26,
                                utahrecovered.may27,
                                utahrecovered.may28,
                                utahrecovered.may29,
                                utahrecovered.may30,
                        ],}, 

                


                ]
            
            },
        
            // Configuration options go here
            options: {
                scales: {
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        });

        var ctx7 = document.getElementById('myChart7').getContext('2d');
        var newchart = new Chart(ctx7, {
             //The type of chart we want to create
             type: 'line',
         
             //The data for our dataset
            data: {
                 labels: [
                     "April 11",
                     "April 12",
                     "April 13",
                     "April 14",
                     "April 15",
                     "April 16",
                     "April 17",
                     "April 18",
                     "April 19",
                     "April 20",
                     "April 21",
                     "April 22",
                     "April 23",
                     "April 24",
                     "April 25",],
                 datasets: [{
                 label: "Utah County Deaths",
                 backgroundColor: "rgb(0, 0, 0)",
                 borderColor: "rgb(0, 0, 0)",
                 order: 1,
                 stacked: true,
                 data: [ 
                     
 
                 ],},
 
                 {
                     label: "Utah County active cases",
                     backgroundColor: "rgb(255, 255, 0)",
                     borderColor: "rgb(255, 255, 0)",
                     stacked: true,
                     order: 1,
                     data: [
                         utahcountyactivecases.apr11,
                         utahcountyactivecases.apr12,
                         utahcountyactivecases.apr13,
                         utahcountyactivecases.apr14,
                         utahcountyactivecases.apr15,
                         utahcountyactivecases.apr16,
                         utahcountyactivecases.apr17,
                         utahcountyactivecases.apr18,
                         utahcountyactivecases.apr19,
                         utahcountyactivecases.apr20,
                         utahcountyactivecases.apr21,
                         utahcountyactivecases.apr22,
                         utahcountyactivecases.apr23,
                         utahcountyactivecases.apr24,
                         utahcountyactivecases.apr25,
                         utahcountyactivecases.apr26,
                         utahcountyactivecases.apr27,
                         utahcountyactivecases.apr28,
                         utahcountyactivecases.apr29,
                         utahcountyactivecases.apr30,
                         utahcountyactivecases.may01,
                         utahcountyactivecases.may02,
                         utahcountyactivecases.may03,
                         utahcountyactivecases.may04,
                         utahcountyactivecases.may05,
                         utahcountyactivecases.may06,
                         utahcountyactivecases.may07,
                         utahcountyactivecases.may08,
                         utahcountyactivecases.may09,
                         utahcountyactivecases.may10,
                         utahcountyactivecases.may11,
                         utahcountyactivecases.may12,
                         utahcountyactivecases.may13,
                         utahcountyactivecases.may14,
                         utahcountyactivecases.may15,
                         utahcountyactivecases.may16,
                         utahcountyactivecases.may17,
                         utahcountyactivecases.may18,
                         utahcountyactivecases.may19,
                         utahcountyactivecases.may20,
                         utahcountyactivecases.may21,
                         utahcountyactivecases.may22,
                         utahcountyactivecases.may23,
                         utahcountyactivecases.may24,
                         utahcountyactivecases.may25,
                         utahcountyactivecases.may26,
                         utahcountyactivecases.may27,
                         utahcountyactivecases.may28,
                         utahcountyactivecases.may29,
                         utahcountyactivecases.may30,
                     ],}, 
 
                     {
                         label: "Utah county recovered",
                         backgroundColor: "rgb(0, 300, 0)",
                         borderColor: "rgb(0, 300, 0)",
                         order: 1,
                         stacked: true,
 
                         data: [
                                 utahcountyrecovered.apr11,
                                 utahcountyrecovered.apr12,
                                 utahcountyrecovered.apr13,
                                 utahcountyrecovered.apr14,
                                 utahcountyrecovered.apr15,
                                 utahcountyrecovered.apr16,
                                 utahcountyrecovered.apr17,
                                 utahcountyrecovered.apr18,
                                 utahcountyrecovered.apr19,
                                 utahcountyrecovered.apr20,
                                 utahcountyrecovered.apr21,
                                 utahcountyrecovered.apr22,
                                 utahcountyrecovered.apr23,
                                 utahcountyrecovered.apr24,
                                 utahcountyrecovered.apr25,
                                 utahcountyrecovered.apr26,
                                 utahcountyrecovered.apr27,
                                 utahcountyrecovered.apr28,
                                 utahcountyrecovered.apr29,
                                 utahcountyrecovered.apr30,
                                 utahcountyrecovered.may01,
                                 utahcountyrecovered.may02,
                                 utahcountyrecovered.may03,
                                 utahcountyrecovered.may04,
                                 utahcountyrecovered.may05,
                                 utahcountyrecovered.may06,
                                 utahcountyrecovered.may07,
                                 utahcountyrecovered.may08,
                                 utahcountyrecovered.may09,
                                 utahcountyrecovered.may10,
                                 utahcountyrecovered.may11,
                                 utahcountyrecovered.may12,
                                 utahcountyrecovered.may13,
                                 utahcountyrecovered.may14,
                                 utahcountyrecovered.may15,
                                 utahcountyrecovered.may16,
                                 utahcountyrecovered.may17,
                                 utahcountyrecovered.may18,
                                 utahcountyrecovered.may19,
                                 utahcountyrecovered.may20,
                                 utahcountyrecovered.may21,
                                 utahcountyrecovered.may22,
                                 utahcountyrecovered.may23,
                                 utahcountyrecovered.may24,
                                 utahcountyrecovered.may25,
                                 utahcountyrecovered.may26,
                                 utahcountyrecovered.may27,
                                 utahcountyrecovered.may28,
                                 utahcountyrecovered.may29,
                                 utahcountyrecovered.may30,
                         ],}, 
 
                 
 
 
                 ]
             
             },
         
             // Configuration options go here
             options: {
                 scales: {
                     yAxes: [{
                         stacked: true
                     }]
                 }
             }
         });
 
        
    
        console.log("active cases globally yeserday was " + gactivecasesyesterday);
        console.log("active cases us yeserday was " + usactivecasesyesterday);
        console.log("active cases utah yeserday was " + utahactivecasesyesterday);




        var gactivecaseschange = (gactivecasestoday - gactivecasesyesterday);
        var usactivecaseschange = (usactivecasestoday - usactivecasesyesterday);
        var utahactivecaseschange = (utahactivecasestoday - utahactivecasesyesterday);


        $("#gactivecases").html(gactivecasestoday.toLocaleString());

        if (gactivecaseschange > -1) {
        $("#gactivecaseschange").html("+" + (gactivecaseschange.toLocaleString()))
        } else {
            $("#gactivecaseschange").html(gactivecaseschange.toLocaleString())
        };

        $("#usactivecases").html(usactivecasestoday.toLocaleString());

        if (usactivecaseschange > -1) {
        $("#usactivecaseschange").html("+" + (usactivecaseschange.toLocaleString()));
        } else {
            $("#usactivecaseschange").html(usactivecaseschange.toLocaleString())
        };

        $("#utahactivecases").html(utahactivecasestoday.toLocaleString());

        if (utahactivecaseschange > -1) {
        $("#utahactivecaseschange").html("+" + (utahactivecaseschange.toLocaleString()))
        } else {
            $("#utahactivecaseschange").html(utahactivecaseschange.toLocaleString())
        };

        

        var gcasechangethree = (gcasestwoweeksago - gcasesthreeweeksago);
        console.log("two weeks global change is " +gcasechangethree);
        var gcasechangetwo = (gcasesoneweekago - gcasestwoweeksago);
        console.log("last weeks global change is " +gcasechangetwo)
        var gcasechangeone = (todaytotal - gcasesoneweekago);
        console.log("this weeks global change is " + gcasechangeone);

        var glastweekgrowthrate = (gcasechangetwo / gcasechangethree);
        var gthisweekgrowthrate = (gcasechangeone / gcasechangetwo);

        $("#ggrowthratelastweek").html((Math.round(glastweekgrowthrate*100))/100);
        $("#ggrowthratethisweek").html((Math.round(gthisweekgrowthrate*100))/100);





        var uscasechangethree = (uscasestwoweeksago - uscasesthreeweeksago);
        var uscasechangetwo = (uscasesoneweekago - uscasestwoweeksago);
        var uscasechangeone = (today - uscasesoneweekago);

        var uslastweekgrowthrate = (uscasechangetwo / uscasechangethree);
        var usthisweekgrowthrate = (uscasechangeone / uscasechangetwo);

        $("#usgrowthratelastweek").html((Math.round(uslastweekgrowthrate*100))/100);
        $("#usgrowthratethisweek").html((Math.round(usthisweekgrowthrate*100))/100);


        var utahcasechangethree = (utahcasestwoweeksago - utahcasesthreeweeksago);
        var utahcasechangetwo = (utahcasesoneweekago - utahcasestwoweeksago);
        var utahcasechangeone = (utahtoday - utahcasesoneweekago);

        var utahlastweekgrowthrate = (utahcasechangetwo / utahcasechangethree);
        var utahthisweekgrowthrate = (utahcasechangeone / utahcasechangetwo);
        $("#utahgrowthratelastweek").html((Math.round(utahlastweekgrowthrate*100))/100);
        $("#utahgrowthratethisweek").html((Math.round(utahthisweekgrowthrate*100))/100);



        var gdeathschangethree = (gdeathstwoweeksago - gdeathsthreeweekago);
        var gdeathschangetwo = (gdeathsoneweekago - gdeathstwoweeksago);
        var gdeathschangeone = (deathstoday - gdeathsoneweekago);

        var glastweekdeathrate = (gdeathschangetwo / gdeathschangethree);
        var gthisweekdeathrate = (gdeathschangeone / gdeathschangetwo);
        $("#gdeathratelastweek").html((Math.round(glastweekdeathrate*100))/100);
        $("#gdeathratethisweek").html((Math.round(gthisweekdeathrate*100))/100);


        var usdeathschangethree = (usdeathstwoweeksago - usdeathsthreeweeksago);
        var usdeathschangetwo = (usdeathsoneweekago - usdeathstwoweeksago);
        var usdeathschangeone = (usdeathstoday - usdeathsoneweekago);

        var uslastweekdeathrate = (usdeathschangetwo / usdeathschangethree);
        var usthisweekdeathrate = (usdeathschangeone / usdeathschangetwo);
        $("#usdeathratelastweek").html((Math.round(uslastweekdeathrate*100))/100);
        $("#usdeathratethisweek").html((Math.round(usthisweekdeathrate*100))/100);


        var utahdeathschangethree = (utahdeathstwoweeksago - utahdeathsthreeweeksago);
        var utahdeathschangetwo = (utahdeathsoneweekago - utahdeathstwoweeksago);
        var utahdeathschangeone = (utahdeathstoday - utahdeathsoneweekago);

        var utahlastweekdeathrate = (utahdeathschangetwo / utahdeathschangethree);
        var utahthisweekdeathrate = (utahdeathschangeone / utahdeathschangetwo);
        $("#utahdeathratelastweek").html((Math.round(utahlastweekdeathrate*100))/100);
        $("#utahdeathratethisweek").html((Math.round(utahthisweekdeathrate*100))/100);
        




    
        


        $("#gaveragegrowthrate").html()




        var changeyesterday = (yesterday - twodaysago);
        var changetoday = (today - yesterday);
        $("#numbershere").html("+" + (changetoday.toLocaleString()));
        console.log("new cases in US is " + changetoday);
        var growthrate = (changetoday / changeyesterday);
        $("#usgrowth").html((Math.round(growthrate*100)) /100);
        console.log("the growth rate in the US today is " + growthrate);
        console.log("-----------");
        var total = "";
        var tomorrow = (today + (growthrate* changetoday));
        console.log("cases the next day in the US will be " + (Math.round(tomorrow)));
        var roundedtomorrow = Math.round(tomorrow);
        $("#uscasestomorrow").html(roundedtomorrow.toLocaleString());
        console.log("-----------");
        $("#ustotal").html(today.toLocaleString());
        var growth = [];
        
        
        
        $("#btn-generator").on("click", function() {
       
            var html = "";
        function multiplier()  {
            yesterday = today;
            today = tomorrow;
            console.log(today);
            changetoday = (today - yesterday);
            tomorrow = (tomorrow + (growthrate * changetoday));
            console.log(tomorrow);
            growth.push(Math.round(tomorrow));
            console.log(growth);
            for (var i=0; i < growth.length; i++) {
            document.getElementById("array-here").innerHTML = html += "<li>"+ "In " + (i +2) + " days: " + (Math.round(growth[i])) + "</li>";
            };

            if (tomorrow > 350000000) {
                document.getElementById("array-here").innerHTML += "Sorry, you have infected everyone"; 
            };









        }
        multiplier();
        console.log("the day after that in the US will be " + (Math.round(tomorrow)));



        
        console.log("---------");

        
        
    });//button bracket

    $("#btn-global").on("click", function() {
       
        var htmltwo = "";
        
    function multiplierglobal()  {
        yesterdaytotal = todaytotal;
        todaytotal = globalcasestomorrow;
        globalchangetoday = (todaytotal - yesterdaytotal);
        globalcasestomorrow = (globalcasestomorrow + (growthratetoday * globalchangetoday));
        console.log(tomorrow);
        globalgrowth.push(Math.round(globalcasestomorrow));
        console.log(globalgrowth);
        for (var x=0; x < globalgrowth.length; x++) {
        document.getElementById("global-here").innerHTML = htmltwo += "<li>"+ "In " + (x +2) + " days: " + (Math.round(globalgrowth[x])) + "</li>";
        };

        if (globalcasestomorrow > 8000000000) {
            document.getElementById("global-here").innerHTML += "Sorry, you have infected everyone";
        };

    
        









    } //end if statment



    multiplierglobal();
    console.log("the day after that Globally will be " + (Math.round(globalcasestomorrow)));
    



    
    console.log("---------");

    
    
});//button bracket

       
       
        $("#gcasesyesterday").html(yesterdaytotal.toLocaleString());
       
        //$("#gcasestoday").html((todaytotal.toLocaleString()) + "<br>(" + 
        //(globalcaseprediction.toLocaleString()) + " predicted)");

        $("#gcasestoday").html(todaytotal.toLocaleString());

        var globalchangetoday = (todaytotal - yesterdaytotal);
        $("#gcaseschange").html("+" + (globalchangetoday.toLocaleString()));
        console.log("new cases today is " + globalchangetoday);
        var globalchangeyesterday = (yesterdaytotal - twodaysagoglobal);
        $("#gcaseschangeyesterday").html(yesterdaytotal.toLocaleString());

        var growthratetoday = (globalchangetoday / globalchangeyesterday);
        console.log("growth rate today is " + growthratetoday);
        $("#casesgrowth").html((Math.round(growthratetoday* 100))/100);

        var globalcasestomorrow = ((growthratetoday * globalchangetoday) + todaytotal);
        console.log(Math.round(globalcasestomorrow));
        var roundedglobaltomorrow = (Math.round(globalcasestomorrow));
        $("#gcasestomorrow").html(roundedglobaltomorrow.toLocaleString());
        var globalgrowth = [];

        $("#deathstoday").html(deathstoday.toLocaleString());

            console.log("deaths today is " + deathstoday);
            var deathschangetoday = (deathstoday - deathsyesterday);
            $("#newdeaths").html("+" + (deathschangetoday.toLocaleString()));
            console.log("new deaths today is " + deathschangetoday);
            var deathschangeyesterday = (deathsyesterday - deathstwo);
            $("#deathsyesterday").html(deathsyesterday.toLocaleString());
    
            var deathratetoday = (deathschangetoday / deathschangeyesterday);
            $("#deathrate").html((Math.round(deathratetoday* 100))/100);
    
            var deathstomorrow= ((deathratetoday * deathschangetoday) + deathstoday);
            var roundeddeathstomorrow= (Math.round(deathstomorrow));
            $("#deathstomorrow").html(roundeddeathstomorrow.toLocaleString());

        
        $("#usdeaths").html(usdeathstoday.toLocaleString())
            console.log("deaths today is " + usdeathstoday);
            var usdeathschangetoday = (usdeathstoday - usdeathsyesterday);
            $("#usnewdeaths").html("+" + (usdeathschangetoday.toLocaleString()));
            console.log("new deaths today is " + usdeathschangetoday);
            var usdeathschangeyesterday = (usdeathsyesterday - usdeathstwo);
            $("#usdeathsyesterday").html(usdeathsyesterday.toLocaleString());
    
            var usdeathratetoday = (usdeathschangetoday / usdeathschangeyesterday);
            $("#usdeathrate").html((Math.round(usdeathratetoday* 100))/100);
    
            var usdeathstomorrow= ((usdeathratetoday * usdeathschangetoday) + usdeathstoday);
            var usroundeddeathstomorrow= (Math.round(usdeathstomorrow));
            $("#usdeathstomorrow").html(usroundeddeathstomorrow.toLocaleString());

            var utahchangeyesterday = (utahyesterday - utahtwodaysago);
            var utahchangetoday = (utahtoday - utahyesterday);
            $("#utahnumbershere").html("+" + (utahchangetoday.toLocaleString()));
            console.log("new cases in US is " + utahchangetoday);
            var utahgrowthrate = (utahchangetoday / utahchangeyesterday);
            $("#utahgrowth").html((Math.round(utahgrowthrate*100)) /100);
            console.log("the growth rate in the US today is " + utahgrowthrate);
            console.log("-----------");
            var total = "";
            var utahtomorrow = (utahtoday + (utahgrowthrate* utahchangetoday));
            console.log("cases the next day in the US will be " + (Math.round(utahtomorrow)));
            var utahroundedtomorrow = Math.round(utahtomorrow);
            $("#utahcasestomorrow").html(utahroundedtomorrow.toLocaleString());
            console.log("-----------");
            $("#utahtotal").html(utahtoday.toLocaleString());
            var growth = [];

            $("#utahdeaths").html(utahdeathstoday.toLocaleString());
            console.log("deaths today is " + utahdeathstoday);
            var utahdeathschangetoday = (utahdeathstoday - utahdeathsyesterday);
            $("#utahnewdeaths").html("+" + (utahdeathschangetoday.toLocaleString()));
            console.log("new deaths today is " + utahdeathschangetoday);
            var utahdeathschangeyesterday = (utahdeathsyesterday - utahdeathstwo);
            $("#usdeathsyesterday").html(utahdeathsyesterday.toLocaleString());
    
            var utahdeathratetoday = (utahdeathschangetoday / utahdeathschangeyesterday);
            $("#utahdeathrate").html((Math.round(utahdeathratetoday* 100))/100);
    
            var utahdeathstomorrow= ((((utahthisweekdeathrate + utahdeathratetoday + utahlastweekdeathrate) /3) * utahdeathschangetoday) + utahdeathstoday);
            var utahroundeddeathstomorrow= (Math.round(utahdeathstomorrow));
            $("#utahdeathstomorrow").html(utahroundeddeathstomorrow.toLocaleString());

                $("#gcasestoday2").html(todaytotal.toLocaleString());
                $("#gcaseslastweek").html(gcasesoneweekago.toLocaleString());
                $("#gcaseslastweekchange").html("+" + (glastweekchange.toLocaleString()));
                $("#gactivecases2").html(gactivecasestoday.toLocaleString());
                $("#gactivecaseslastweek").html(gactivecaseslastweek.toLocaleString());

                if ((gactivecasestoday - gactivecaseslastweek) < 0) {
                    $("#gactivecaseschange2").html((gactivecasestoday - gactivecaseslastweek).toLocaleString());
                } else  {
                    $("#gactivecaseschange2").html(("+" + (gactivecasestoday - gactivecaseslastweek).toLocaleString()));
                }

                $("#uscasestoday2").html(today.toLocaleString());
                $("#uscaseslastweek").html(uscasesoneweekago.toLocaleString());
                $("#uscaseslastweekchange").html("+" + (uslastweekchange.toLocaleString()));
                $("#usactivecases2").html(usactivecasestoday.toLocaleString());
                $("#usactivecaseslastweek").html(usactivecaseslastweek.toLocaleString());

                if ((usactivecasestoday - usactivecaseslastweek) < 0) {
                    $("#usactivecaseschange2").html((usactivecasestoday - usactivecaseslastweek).toLocaleString());
                } else  {
                    $("#usactivecaseschange2").html(("+" + (usactivecasestoday - usactivecaseslastweek).toLocaleString()));
                }

                $("#utahcasestoday2").html(utahtoday.toLocaleString());
                $("#utahcaseslastweek").html(utahcasesoneweekago.toLocaleString());
                $("#utahcaseslastweekchange").html("+" + (utahlastweekchange.toLocaleString()));
                $("#utahactivecases2").html(utahactivecasestoday.toLocaleString());
                $("#utahactivecaseslastweek").html(utahactivecaseslastweek.toLocaleString());

                if ((utahactivecasestoday - utahactivecaseslastweek) < 0) {
                    $("#utahactivecaseschange2").html((utahactivecasestoday - utahactivecaseslastweek).toLocaleString());
                } else  {
                    $("#utahactivecaseschange2").html(("+" + (utahactivecasestoday - utahactivecaseslastweek).toLocaleString()));
                }

