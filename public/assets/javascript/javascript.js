$(document).ready(function() {
 
var dates = [];
var globaldeathdates = [];
var uscasedates = [];
var usdeathdates = [];
var utahcasedates = [];
var utahdeathdates = [];
var globalcasebank = {};
var globaldeathbank = {};
var uscasebank = {};
var usdeathbank = {};
var utahcasebank = {};
var utahdeathbank = {};
var grecovered = {};
var gactivecases = {};
var usrecovered = {};
var usactivecases = {};
var utahrecovered = {};
var utahactivecases = {};
var todayDate = globalstuffs.length;
var gcaserank = [];
var uscaserank = [];
var utahcaserank = [];

var gCasesData = [];
var gDeathsData = [];
var gActiveData = [];
var gRecoveredData = [];
var usCasesData = [];
var usDeathsData = [];
var usActiveData = [];
var usRecoveredData = [];
var utahCasesData = [];
var utahDeathsData = [];
var utahActiveData = [];
var utahRecoveredData = [];

utahcountycasebank = {
  jan01: 0,
  jan02: 0,
};

function createObjects() {
  for (var i = 0; i < globalstuffs.length; i++) {
    if (i < 10) {
      var date = "jan" + (22 + i);
      dates.push(date);
    } else if (i < 19) {
      var date = "feb0" + (i - 9);
      dates.push(date);
    } else if (i < 39) {
      var date = "feb" + (i - 9);
      dates.push(date);
    } else if (i < 48) {
      var date = "mar0" + (i - 38);
      dates.push(date);
    } else if (i < 70) {
      var date = "mar" + (i - 38);
      dates.push(date);
    } else if (i < 79) {
      var date = "apr0" + (i - 69);
      dates.push(date);
    } else if (i < 100) {
      var date = "apr" + (i - 69);
      dates.push(date);
    } else if (i < 109) {
      var date = "may0" + (i - 99);
      dates.push(date);
    } else if (i < 131) {
      var date = "may" + (i - 99);
      dates.push(date);
    } else if (i < 140) {
      var date = "jun0" + (i - 130);
      dates.push(date);
    } else if (i < 161) {
      var date = "jun" + (i - 130);
      dates.push(date);
    }  else if (i < 170) {
      var date = "jul0" + (i - 160);
      dates.push(date);
    }  else if (i < 192) {
      var date = "jul" + (i - 160);
      dates.push(date);
    }  else if (i < 201) {
      var date = "aug0" + (i - 191);
      dates.push(date);
    } else if (i < 223) {
      var date = "aug" + (i - 191);
      dates.push(date);
    } else if (i < 232) {
      var date = "sep0" + (i - 222);
      dates.push(date);
    } else if (i < 253) {
      var date = "sep" + (i - 222);
      dates.push(date);
    } else if (i < 262) {
      var date = "oct0" + (i - 252);
      dates.push(date);
    } else if (i < 284) {
      var date = "oct" + (i - 252);
      dates.push(date);
    } else if (i < 305) {
      var date = "nov0" + (i - 283);
      dates.push(date);
    } else if (i < 315) {
      var date = "nov" + (i - 283);
      dates.push(date);
    }
  }
}
/*
createObjects();
dates.forEach((key, idx) => (globalcasebank[key] = globalstuffs[idx]));
dates.forEach((key, idx) => (globaldeathbank[key] = deathsStuffs[idx]));
dates.forEach((key, idx) => (uscasebank[key] = uscases[idx]));
dates.forEach((key, idx) => (usdeathbank[key] = usdeaths[idx]));
dates.forEach((key, idx) => (utahcasebank[key] = utahcases[idx]));
dates.forEach((key, idx) => (utahdeathbank[key] = utahdeaths[idx]));
dates.forEach((key, idx) => (grecovered[key] = (globalstuffs[idx - 14] - deathsStuffs[idx])));
dates.forEach((key, idx) => (gactivecases[key] = (globalstuffs[idx] - (deathsStuffs[idx] + (globalstuffs[idx -14] - deathsStuffs[idx])))))
dates.forEach((key, idx) => (usrecovered[key] = (uscases[idx - 14] - usdeaths[idx])));
dates.forEach((key, idx) => (usactivecases[key] = (uscases[idx] - (usdeaths[idx] + (uscases[idx -14] - usdeaths[idx])))));
dates.forEach((key, idx) => (utahrecovered[key] = (utahcases[idx - 14] - utahdeaths[idx])));
dates.forEach((key, idx) => (utahactivecases[key] = (utahcases[idx] - (utahdeaths[idx] + (utahcases[idx -14] - utahdeaths[idx])))));
*/

for (var i = 0; i < globalstuffs.length - 69; i++) {
  gCasesData.push(globalstuffs[i + 69]);
  gDeathsData.push(deathsStuffs[i + 69]);
  gActiveData.push((globalstuffs[i + 69] - (deathsStuffs[i + 69] + (globalstuffs[i + 55] - deathsStuffs[i + 69]))))
  gRecoveredData.push((globalstuffs[i + 55] - deathsStuffs[i + 69]));
  usCasesData.push(uscases[i + 69]);
  usDeathsData.push(usdeaths[i + 69]);
  usActiveData.push((uscases[i + 69] - (usdeaths[i + 69] + (uscases[i + 55] - usdeaths[i + 69]))));
  usRecoveredData.push((uscases[i + 55] - usdeaths[i + 69]));
  utahCasesData.push(utahcases[i + 69]);
  utahDeathsData.push(utahdeaths[i + 69]);
  utahActiveData.push((utahcases[i + 69] - (utahdeaths[i + 69] + (utahcases[i + 55] - utahdeaths[i + 69]))));
  utahRecoveredData.push((utahcases[i + 55] - utahdeaths[i + 69]));

}

function gcasecreate() {
  for (var i=0; i < (gdailycases.length); i++) {
    var newDate = Math.round((gdailydeaths[i+ 14] / (gdailycases[i]) ) *10000) /100
    gcaserank.push(newDate);
  }
  for (var i=0; i < (gdailycases.length - 14); i++) {
    var newDate = Math.round((usdailydeaths[i+ 14] / (usdailycases[i]) ) *10000) /100
    uscaserank.push(newDate);
  }
  for (var i=0; i < (gdailycases.length - 14); i++) {
    var newDate = Math.round((utahdailydeaths[i+ 14] / (utahdailycases[i]) ) *10000) /100
    utahcaserank.push(newDate);
  }
}
console.log(globalcasebank);
gcasecreate();
var globalcaseprediction = 3308945;
var uscasesprediction = 1096002;
var utahcaseprediction = 4705;

var globaldeathsprediction = 244428;
var usdeathsprediction = 63970;
var utahdeathsprediction = 46;
var gcaserankavg = [];
var uscaserankavg = [];
var utahcaserankavg = [];

for (var x = 0; x<(gcaserank.length - 62); x++) {
  var average = (gcaserank[x+56] +
  gcaserank[x+57] +
  gcaserank[x+58] +
  gcaserank[x+59] +
  gcaserank[x+60] +
  gcaserank[x+61] +
  gcaserank[x+62] ) / 7;
  var avg = (Math.round(average * 100))/100;
  gcaserankavg.push(avg);
  var usaverage = (uscaserank[x+56] +
    uscaserank[x+57] +
    uscaserank[x+58] +
    uscaserank[x+59] +
    uscaserank[x+60] +
    uscaserank[x+61] +
    uscaserank[x+62] ) / 7;
    var usavg = (Math.round(usaverage * 100))/100;
    uscaserankavg.push(usavg);
    var utahaverage = (utahcaserank[x+56] +
      utahcaserank[x+57] +
      utahcaserank[x+58] +
      utahcaserank[x+59] +
      utahcaserank[x+60] +
      utahcaserank[x+61] +
      utahcaserank[x+62] ) / 7;
      var utahavg = (Math.round(utahaverage * 100))/100;
      utahcaserankavg.push(utahavg);
}




var utahcountyrecovered = {
  mar25: utahcountycasebank.mar11,
  mar26: utahcountycasebank.mar12,
  mar27: utahcountycasebank.mar13,
  mar28: utahcountycasebank.mar14,
  mar29: utahcountycasebank.mar15,
  mar30: utahcountycasebank.mar16,
  mar31: utahcountycasebank.mar17,
  apr01: utahcountycasebank.mar18,
  apr02: utahcountycasebank.mar19,
  apr03: utahcountycasebank.mar20,
  apr04: utahcountycasebank.mar21,
  apr05: utahcountycasebank.mar22,
  apr06: utahcountycasebank.mar23,
  apr07: utahcountycasebank.mar24,
  apr08: utahcountycasebank.mar25,
  apr09: utahcountycasebank.mar26,
  apr10: utahcountycasebank.mar27,
  apr11: utahcountycasebank.mar28,
  apr12: utahcountycasebank.mar29,
  apr13: utahcountycasebank.mar30,
  apr14: utahcountycasebank.mar31,
  apr15: utahcountycasebank.apr01,
  apr16: utahcountycasebank.apr02,
  apr17: utahcountycasebank.apr03,
  apr18: utahcountycasebank.apr04,
  apr19: utahcountycasebank.apr05,
  apr20: utahcountycasebank.apr06,
  apr21: utahcountycasebank.apr07,
  apr22: utahcountycasebank.apr08,
  apr23: utahcountycasebank.apr09,
  apr24: utahcountycasebank.apr10,
  apr25: utahcountycasebank.apr11,
  apr26: utahcountycasebank.apr12,
  apr27: utahcountycasebank.apr13,
  apr28: utahcountycasebank.apr14,
  apr29: utahcountycasebank.apr15,
  apr30: utahcountycasebank.apr16,
  may01: utahcountycasebank.apr17,
  may02: utahcountycasebank.apr18,
  may03: utahcountycasebank.apr19,
  may04: utahcountycasebank.apr20,
  may05: utahcountycasebank.apr21,
  may06: utahcountycasebank.apr22,
  may07: utahcountycasebank.apr23,
  may08: utahcountycasebank.apr24,
  may09: utahcountycasebank.apr25,
  may10: utahcountycasebank.apr26,
  may11: utahcountycasebank.apr27,
  may12: utahcountycasebank.apr28,
  may13: utahcountycasebank.apr29,
  may14: utahcountycasebank.apr30,
  may15: utahcountycasebank.may01,
  may16: utahcountycasebank.may02,
  may17: utahcountycasebank.may03,
  may18: utahcountycasebank.may04,
  may19: utahcountycasebank.may05,
  may20: utahcountycasebank.may06,
  may21: utahcountycasebank.may07,
  may22: utahcountycasebank.may08,
  may23: utahcountycasebank.may09,
  may24: utahcountycasebank.may10,
  may25: utahcountycasebank.may11,
  may26: utahcountycasebank.may12,
  may27: utahcountycasebank.may13,
  may28: utahcountycasebank.may14,
  may29: utahcountycasebank.may15,
  may30: utahcountycasebank.may16,
};

var utahcountyactivecases = {
  mar25: utahcountycasebank.mar25 - utahcountyrecovered.mar25,
  mar26: utahcountycasebank.mar26 - utahcountyrecovered.mar26,
  mar27: utahcountycasebank.mar27 - utahcountyrecovered.mar27,
  mar28: utahcountycasebank.mar28 - utahcountyrecovered.mar28,
  mar29: utahcountycasebank.mar29 - utahcountyrecovered.mar29,
  mar30: utahcountycasebank.mar30 - utahcountyrecovered.mar30,
  mar31: utahcountycasebank.mar31 - utahcountyrecovered.mar31,
  apr01: utahcountycasebank.apr01 - utahcountyrecovered.apr01,
  apr02: utahcountycasebank.apr02 - utahcountyrecovered.apr02,
  apr03: utahcountycasebank.apr03 - utahcountyrecovered.apr03,
  apr04: utahcountycasebank.apr04 - utahcountyrecovered.apr04,
  apr05: utahcountycasebank.apr05 - utahcountyrecovered.apr05,
  apr06: utahcountycasebank.apr06 - utahcountyrecovered.apr06,
  apr07: utahcountycasebank.apr07 - utahcountyrecovered.apr07,
  apr08: utahcountycasebank.apr08 - utahcountyrecovered.apr08,
  apr09: utahcountycasebank.apr09 - utahcountyrecovered.apr09,
  apr10: utahcountycasebank.apr10 - utahcountyrecovered.apr10,
  apr11: utahcountycasebank.apr11 - utahcountyrecovered.apr11,
  apr12: utahcountycasebank.apr12 - utahcountyrecovered.apr12,
  apr13: utahcountycasebank.apr13 - utahcountyrecovered.apr13,
  apr14: utahcountycasebank.apr14 - utahcountyrecovered.apr14,
  apr15: utahcountycasebank.apr15 - utahcountyrecovered.apr15,
  apr16: utahcountycasebank.apr16 - utahcountyrecovered.apr16,
  apr17: utahcountycasebank.apr17 - utahcountyrecovered.apr17,
  apr18: utahcountycasebank.apr18 - utahcountyrecovered.apr18,
  apr19: utahcountycasebank.apr19 - utahcountyrecovered.apr19,
  apr20: utahcountycasebank.apr20 - utahcountyrecovered.apr20,
  apr21: utahcountycasebank.apr21 - utahcountyrecovered.apr21,
  apr22: utahcountycasebank.apr22 - utahcountyrecovered.apr22,
  apr23: utahcountycasebank.apr23 - utahcountyrecovered.apr23,
  apr24: utahcountycasebank.apr24 - utahcountyrecovered.apr24,
  apr25: utahcountycasebank.apr25 - utahcountyrecovered.apr25,
  apr26: utahcountycasebank.apr26 - utahcountyrecovered.apr26,
  apr27: utahcountycasebank.apr27 - utahcountyrecovered.apr27,
  apr28: utahcountycasebank.apr28 - utahcountyrecovered.apr28,
  apr29: utahcountycasebank.apr29 - utahcountyrecovered.apr29,
  apr30: utahcountycasebank.apr30 - utahcountyrecovered.apr30,
  may01: utahcountycasebank.may01 - utahcountyrecovered.may01,
  may02: utahcountycasebank.may02 - utahcountyrecovered.may02,
  may03: utahcountycasebank.may03 - utahcountyrecovered.may03,
  may04: utahcountycasebank.may04 - utahcountyrecovered.may04,
  may05: utahcountycasebank.may05 - utahcountyrecovered.may05,
  may06: utahcountycasebank.may06 - utahcountyrecovered.may06,
  may07: utahcountycasebank.may07 - utahcountyrecovered.may07,
  may08: utahcountycasebank.may08 - utahcountyrecovered.may08,
  may09: utahcountycasebank.may09 - utahcountyrecovered.may09,
  may10: utahcountycasebank.may10 - utahcountyrecovered.may10,
  may11: utahcountycasebank.may11 - utahcountyrecovered.may11,
  may12: utahcountycasebank.may12 - utahcountyrecovered.may12,
  may13: utahcountycasebank.may13 - utahcountyrecovered.may13,
  may14: utahcountycasebank.may14 - utahcountyrecovered.may14,
  may15: utahcountycasebank.may15 - utahcountyrecovered.may15,
  may16: utahcountycasebank.may16 - utahcountyrecovered.may16,
  may17: utahcountycasebank.may17 - utahcountyrecovered.may17,
  may18: utahcountycasebank.may18 - utahcountyrecovered.may18,
  may19: utahcountycasebank.may19 - utahcountyrecovered.may19,
  may20: utahcountycasebank.may20 - utahcountyrecovered.may20,
  may21: utahcountycasebank.may21 - utahcountyrecovered.may21,
  may22: utahcountycasebank.may22 - utahcountyrecovered.may22,
  may23: utahcountycasebank.may23 - utahcountyrecovered.may23,
  may24: utahcountycasebank.may24 - utahcountyrecovered.may24,
  may25: utahcountycasebank.may25 - utahcountyrecovered.may25,
  may26: utahcountycasebank.may26 - utahcountyrecovered.may26,
  may27: utahcountycasebank.may27 - utahcountyrecovered.may27,
  may28: utahcountycasebank.may28 - utahcountyrecovered.may28,
  may29: utahcountycasebank.may29 - utahcountyrecovered.may29,
  may30: utahcountycasebank.may30 - utahcountyrecovered.may30,
};

          var twodaysago = uscases[todayDate - 3];
var twodaysagoglobal = globalstuffs[todayDate - 3];
      var deathstwo = deathsStuffs[todayDate - 3];
        var usdeathstwo = usdeaths[todayDate - 3];
    var utahdeathstwo = utahdeaths[todayDate - 3];
    var utahtwodaysago = utahcases[todayDate - 3];

              var utahyesterday = utahcases[todayDate - 2];
       var utahdeathsyesterday = utahdeaths[todayDate - 2];
           var usdeathsyesterday = usdeaths[todayDate - 2];
         var deathsyesterday = deathsStuffs[todayDate - 2];
           var yesterdaytotal = globalstuffs[todayDate - 2];
                    var yesterday = uscases[todayDate - 2];
      var gactivecasesyesterday = gActiveData[todayDate - 71];
    var usactivecasesyesterday = usActiveData[todayDate - 71];
var utahactivecasesyesterday = utahActiveData[todayDate - 71];

       var utahdeathstoday = utahdeaths[todayDate - 1];
              var utahtoday = utahcases[todayDate - 1];
           var usdeathstoday = usdeaths[todayDate - 1];
         var deathstoday = deathsStuffs[todayDate - 1];
           var todaytotal = globalstuffs[todayDate - 1];
                    var today = uscases[todayDate - 1];
var utahactivecasestoday = utahActiveData[todayDate - 70];
    var usactivecasestoday = usActiveData[todayDate - 70];
      var gactivecasestoday = gActiveData[todayDate - 70];

        var gcasesoneweekago = globalstuffs[todayDate - 8];
     var utahdeathsoneweekago = utahdeaths[todayDate - 8];
           var uscasesoneweekago = uscases[todayDate - 8];
       var utahcasesoneweekago = utahcases[todayDate - 8];
      var gdeathsoneweekago = deathsStuffs[todayDate - 8];
         var usdeathsoneweekago = usdeaths[todayDate - 8];
var utahactivecaseslastweek = utahActiveData[todayDate - 77];
    var usactivecaseslastweek = usActiveData[todayDate - 77];
      var gactivecaseslastweek = gActiveData[todayDate - 77];

   var gcasestwoweeksago = globalstuffs[todayDate - 15];
    var usdeathstwoweeksago = usdeaths[todayDate - 15];
  var utahcasestwoweeksago = utahcases[todayDate - 15];
 var gdeathstwoweeksago = deathsStuffs[todayDate - 15];
      var uscasestwoweeksago = uscases[todayDate - 15];
var utahdeathstwoweeksago = utahdeaths[todayDate - 15];

      var uscasesthreeweeksago = uscases[todayDate - 22];
  var gdeathsthreeweekago = deathsStuffs[todayDate - 22];
  var utahcasesthreeweeksago = utahcases[todayDate - 22];
    var usdeathsthreeweeksago = usdeaths[todayDate - 22];
var utahdeathsthreeweeksago = utahdeaths[todayDate - 22];
   var gcasesthreeweeksago = globalstuffs[todayDate - 22];

   var gTotalAverage = Math.round((deathstoday / gcasestwoweeksago) * 10000) /100;
   var usTotalAverage = Math.round((usdeathstoday / uscasestwoweeksago) * 10000) /100;
   var utahTotalAverage = Math.round((utahdeathstoday / utahcasestwoweeksago) * 10000) /100;
var glastweekchange = todaytotal - gcasesoneweekago;
var uslastweekchange = today - uscasesoneweekago;
var utahlastweekchange = utahtoday - utahcasesoneweekago;
var dataLabelsBig = [];
var dateLabels = [];
var gTotalAverageData  = [];
var usTotalAverageData  = [];
var utahTotalAverageData  = [];


for (var i = 0; i<gcaserank.length -69; i++) {
  if (i<1) {
    dataLabelsBig.push("March 31")
  }
  else if (i<31) {
    dataLabelsBig.push("April " + i)
  }
  else if (i< 62) {
    dataLabelsBig.push("May " + (i -30))
  }
  else if (i< 92) {
    dataLabelsBig.push("June " + (i -61))
  }
  else if (i< 123) {
    dataLabelsBig.push("July " + (i -91))
  }
  else if (i< 154) {
    dataLabelsBig.push("August " + (i -122))
  }
  else if (i< 184) {
    dataLabelsBig.push("September " + (i -153))
  }
  else if (i< 215) {
    dataLabelsBig.push("October " + (i -183))
  }
  else if (i< 245) {
    dataLabelsBig.push("November " + (i -214))
  }
  else if (i< 276) {
    dataLabelsBig.push("December  " + (i -244))
  }
  else if (i< 307) {
    dataLabelsBig.push("January  " + (i -275))
  }
gTotalAverageData.push(gTotalAverage);
usTotalAverageData.push(usTotalAverage);
utahTotalAverageData.push(utahTotalAverage);

}

for (var i = 0; i<gcaserank.length -76; i++) {
  if (i<7) {
    dateLabels.push("March " + (i + 25))
  }
  else if (i<37) {
    dateLabels.push("April " + (i  - 6))
  }
  else if (i< 68) {
    dateLabels.push("May " + (i -36))
  }
  else if (i< 98) {
    dateLabels.push("June " + (i -67))
  }
  else if (i< 129) {
    dateLabels.push("July " + (i -97))
  }
  else if (i< 160) {
    dateLabels.push("August " + (i -128))
  }
  else if (i< 190) {
    dateLabels.push("September " + (i -159))
  }
  else if (i< 221) {
    dateLabels.push("October " + (i -189))
  }
  else if (i< 251) {
    dateLabels.push("November " + (i -220))
  }
  else if (i< 281) {
    dateLabels.push("December " + (i -250))
  }
  else if (i< 312) {
    dateLabels.push("January " + (i -281))
  }
}
console.log(dateLabels)
$("#date").html("Updated " + dataLabelsBig[dataLabelsBig.length -1])


var ctx = document.getElementById("myChart").getContext("2d");
var stackedLine = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: dataLabelsBig,
    datasets: [
      {
        label: "Global Deaths",
        borderColor: "rgb(255, 99, 132)",
        order: 1,
        hoverBorderWidth: 10,
        poointHoverBackgroundColor: "rgb(255, 99, 132)",

        data: gDeathsData
      },
    ],
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          stacked: false,
        },
      ],
    },
  },
});

var ctx2 = document.getElementById("myChart2").getContext("2d");
var newchart = new Chart(ctx2, {
  //The type of chart we want to create
  type: "line",

  //The data for our dataset
  data: {
    labels: dataLabelsBig,
    datasets: [
      {
        label: "Global Deaths",
        backgroundColor: "rgb(0, 0, 0)",
        borderColor: "rgb(0, 0, 0)",
        order: 1,
        stacked: true,
        data: gDeathsData
      },

      {
        label: "Global active cases",
        backgroundColor: "rgb(255, 255, 0)",
        borderColor: "rgb(255, 255, 0)",
        stacked: true,
        order: 1,
        data: gActiveData
      },

      {
        label: "global recovered",
        backgroundColor: "rgb(0, 300, 0)",
        borderColor: "rgb(0, 300, 0)",
        order: 1,
        stacked: true,

        data: gRecoveredData,
      },
    ],
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  },
});

var ctx3 = document.getElementById("myChart3").getContext("2d");
var uschart = new Chart(ctx3, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: dataLabelsBig,
    datasets: [
      {
        label: "US Deaths",
        borderColor: "rgb(255, 99, 132)",
        order: 1,

        data: usDeathsData,
      },
    ],
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          stacked: false,
        },
      ],
    },
  },
});

var ctx4 = document.getElementById("myChart4").getContext("2d");
var newchart = new Chart(ctx4, {
  //The type of chart we want to create
  type: "line",

  //The data for our dataset
  data: {
    labels: dataLabelsBig,
    datasets: [
      {
        label: "US Deaths",
        backgroundColor: "rgb(0, 0, 0)",
        borderColor: "rgb(0, 0, 0)",
        order: 1,
        stacked: true,
        data: usDeathsData,
      },

      {
        label: "US active cases",
        backgroundColor: "rgb(255, 255, 0)",
        borderColor: "rgb(255, 255, 0)",
        stacked: true,
        order: 1,
        data: usActiveData,
      },

      {
        label: "US recovered",
        backgroundColor: "rgb(0, 300, 0)",
        borderColor: "rgb(0, 300, 0)",
        order: 1,
        stacked: true,

        data: usRecoveredData,
      },
    ],
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  },
});

var ctx5 = document.getElementById("myChart5").getContext("2d");
var uschart = new Chart(ctx5, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: dataLabelsBig,
    datasets: [
      {
        label: "Utah Deaths",
        borderColor: "rgb(255, 99, 132)",
        order: 1,

        data: utahDeathsData,
      },
    ],
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          stacked: false,
        },
      ],
    },
  },
});

var ctx6 = document.getElementById("myChart6").getContext("2d");
var newchart = new Chart(ctx6, {
  //The type of chart we want to create
  type: "line",

  //The data for our dataset
  data: {
    labels: dataLabelsBig,
    datasets: [
      {
        label: "Utah Deaths",
        backgroundColor: "rgb(0, 0, 0)",
        borderColor: "rgb(0, 0, 0)",
        order: 1,
        stacked: true,
        data: utahDeathsData,
      },

      {
        label: "Utah active cases",
        backgroundColor: "rgb(255, 255, 0)",
        borderColor: "rgb(255, 255, 0)",
        stacked: true,
        order: 1,
        data: utahActiveData,
      },

      {
        label: "Utah recovered",
        backgroundColor: "rgb(0, 300, 0)",
        borderColor: "rgb(0, 300, 0)",
        order: 1,
        stacked: true,

        data: utahRecoveredData,
      },
    ],
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  },
});
var gRank = [];
var usRank = [];
var utahRank = [];
for (var i=0; i<gcaserank.length - 62; i++ ) {
  utahRank.push(utahcaserank[i+62]);
  usRank.push(uscaserank[i+62]);
  gRank.push(gcaserank[i+62]);
};

var ctx7 = document.getElementById("myChart7").getContext("2d");
var uschart = new Chart(ctx7, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: dateLabels,
    datasets: [
      {
        label: "percentage of cases globally that resulted in death by day",
        borderColor: "rgb(255, 99, 132)",
        order: 1,

        data: gRank,
      },
      {
        label: "7 day moving average",
        borderColor: "rgb(8, 8, 8)",
        order: 1,

        data: gcaserankavg,
      },
      {
        label: "ESTIMATE: death rate so far (how many CONFIRMED tests so far have resulted in death?)",
        borderColor: "rgb(225, 225, 0)",
        order: 1,

        data: gTotalAverageData,
      },
    ],
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          stacked: false,
        },
      ],
    },
  },
});
var ctx8 = document.getElementById("myChart8").getContext("2d");
var uschart = new Chart(ctx8, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: dateLabels,
    datasets: [
      {
        label: "percentage of cases in us that resulted in death by day",
        borderColor: "rgb(255, 99, 132)",
        order: 1,

        data: usRank,
      },
      {
        label: "7 day moving average",
        borderColor: "rgb(8, 8, 8)",
        order: 1,

        data: uscaserankavg,
      },
      {
        label: "ESTIMATE: death rate so far (how many CONFIRMED tests so far have resulted in death?)",
        borderColor: "rgb(225, 225, 0)",
        order: 1,

        data: usTotalAverageData,
      },
    ],
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          stacked: false,
        },
      ],
    },
  },
});



var ctx9 = document.getElementById("myChart9").getContext("2d");
var utahchart = new Chart(ctx9, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: dateLabels,
    datasets: [
      {
        label: "percentage of cases in utah that resulted in death by day",
        borderColor: "rgb(255, 99, 132)",
        order: 1,

        data: utahRank,
      },
      {
        label: "7 day moving average",
        borderColor: "rgb(8, 8, 8)",
        order: 1,

        data: utahcaserankavg,
      },
      {
        label: "ESTIMATE: death rate so far (how many CONFIRMED tests so far have resulted in death?)",
        borderColor: "rgb(225, 225, 0)",
        order: 1,

        data: utahTotalAverageData,
      },
    ],
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          stacked: false,
        },
      ],
    },
  },
});



var gactivecaseschange = gactivecasestoday - gactivecasesyesterday;
var usactivecaseschange = usactivecasestoday - usactivecasesyesterday;
var utahactivecaseschange = utahactivecasestoday - utahactivecasesyesterday;

$("#gactivecases").html(gactivecasestoday.toLocaleString());

if (gactivecaseschange > -1) {
  $("#gactivecaseschange").html("+" + gactivecaseschange.toLocaleString());
} else {
  $("#gactivecaseschange").html(gactivecaseschange.toLocaleString());
}

$("#usactivecases").html(usactivecasestoday.toLocaleString());

if (usactivecaseschange > -1) {
  $("#usactivecaseschange").html("+" + usactivecaseschange.toLocaleString());
} else {
  $("#usactivecaseschange").html(usactivecaseschange.toLocaleString());
}

$("#utahactivecases").html(utahactivecasestoday.toLocaleString());

if (utahactivecaseschange > -1) {
  $("#utahactivecaseschange").html(
    "+" + utahactivecaseschange.toLocaleString()
  );
} else {
  $("#utahactivecaseschange").html(utahactivecaseschange.toLocaleString());
}

var gcasechangethree = gcasestwoweeksago - gcasesthreeweeksago;
var gcasechangetwo = gcasesoneweekago - gcasestwoweeksago;
var gcasechangeone = todaytotal - gcasesoneweekago;

var glastweekgrowthrate = gcasechangetwo / gcasechangethree;
var gthisweekgrowthrate = gcasechangeone / gcasechangetwo;

$("#ggrowthratelastweek").html(Math.round(glastweekgrowthrate * 100) / 100);
$("#ggrowthratethisweek").html(Math.round(gthisweekgrowthrate * 100) / 100);

var uscasechangethree = uscasestwoweeksago - uscasesthreeweeksago;
var uscasechangetwo = uscasesoneweekago - uscasestwoweeksago;
var uscasechangeone = today - uscasesoneweekago;

var uslastweekgrowthrate = uscasechangetwo / uscasechangethree;
var usthisweekgrowthrate = uscasechangeone / uscasechangetwo;

$("#usgrowthratelastweek").html(Math.round(uslastweekgrowthrate * 100) / 100);
$("#usgrowthratethisweek").html(Math.round(usthisweekgrowthrate * 100) / 100);

var utahcasechangethree = utahcasestwoweeksago - utahcasesthreeweeksago;
var utahcasechangetwo = utahcasesoneweekago - utahcasestwoweeksago;
var utahcasechangeone = utahtoday - utahcasesoneweekago;

var utahlastweekgrowthrate = utahcasechangetwo / utahcasechangethree;
var utahthisweekgrowthrate = utahcasechangeone / utahcasechangetwo;
$("#utahgrowthratelastweek").html(
  Math.round(utahlastweekgrowthrate * 100) / 100
);
$("#utahgrowthratethisweek").html(
  Math.round(utahthisweekgrowthrate * 100) / 100
);

var gdeathschangethree = gdeathstwoweeksago - gdeathsthreeweekago;
var gdeathschangetwo = gdeathsoneweekago - gdeathstwoweeksago;
var gdeathschangeone = deathstoday - gdeathsoneweekago;

var glastweekdeathrate = gdeathschangetwo / gdeathschangethree;
var gthisweekdeathrate = gdeathschangeone / gdeathschangetwo;
$("#gdeathratelastweek").html(Math.round(glastweekdeathrate * 100) / 100);
$("#gdeathratethisweek").html(Math.round(gthisweekdeathrate * 100) / 100);

var usdeathschangethree = usdeathstwoweeksago - usdeathsthreeweeksago;
var usdeathschangetwo = usdeathsoneweekago - usdeathstwoweeksago;
var usdeathschangeone = usdeathstoday - usdeathsoneweekago;

var uslastweekdeathrate = usdeathschangetwo / usdeathschangethree;
var usthisweekdeathrate = usdeathschangeone / usdeathschangetwo;
$("#usdeathratelastweek").html(Math.round(uslastweekdeathrate * 100) / 100);
$("#usdeathratethisweek").html(Math.round(usthisweekdeathrate * 100) / 100);

var utahdeathschangethree = utahdeathstwoweeksago - utahdeathsthreeweeksago;
var utahdeathschangetwo = utahdeathsoneweekago - utahdeathstwoweeksago;
var utahdeathschangeone = utahdeathstoday - utahdeathsoneweekago;

var utahlastweekdeathrate = utahdeathschangetwo / utahdeathschangethree;
var utahthisweekdeathrate = utahdeathschangeone / utahdeathschangetwo;
$("#utahdeathratelastweek").html(Math.round(utahlastweekdeathrate * 100) / 100);
$("#utahdeathratethisweek").html(Math.round(utahthisweekdeathrate * 100) / 100);

$("#gaveragegrowthrate").html();

var changeyesterday = yesterday - twodaysago;
var changetoday = today - yesterday;
$("#numbershere").html("+" + changetoday.toLocaleString());
var growthrate = changetoday / changeyesterday;
$("#usgrowth").html(Math.round(growthrate * 100) / 100);
var total = "";
var tomorrow = today + growthrate * changetoday;
var roundedtomorrow = Math.round(tomorrow);
$("#uscasestomorrow").html(roundedtomorrow.toLocaleString());
$("#ustotal").html(today.toLocaleString());
var growth = [];

$("#btn-generator").on("click", function () {
  var html = "";
  function multiplier() {
    yesterday = today;
    today = tomorrow;
    changetoday = today - yesterday;
    tomorrow = tomorrow + growthrate * changetoday;
    growth.push(Math.round(tomorrow));
    for (var i = 0; i < growth.length; i++) {
      document.getElementById("array-here").innerHTML = html +=
        "<li>" + "In " + (i + 2) + " days: " + Math.round(growth[i]) + "</li>";
    }

    if (tomorrow > 350000000) {
      document.getElementById("array-here").innerHTML +=
        "Sorry, you have infected everyone";
    }
  }
  multiplier();
}); //button bracket

$("#btn-global").on("click", function () {
  var htmltwo = "";

  function multiplierglobal() {
    yesterdaytotal = todaytotal;
    todaytotal = globalcasestomorrow;
    globalchangetoday = todaytotal - yesterdaytotal;
    globalcasestomorrow =
      globalcasestomorrow + growthratetoday * globalchangetoday;
    globalgrowth.push(Math.round(globalcasestomorrow));
    for (var x = 0; x < globalgrowth.length; x++) {
      document.getElementById("global-here").innerHTML = htmltwo +=
        "<li>" +
        "In " +
        (x + 2) +
        " days: " +
        Math.round(globalgrowth[x]) +
        "</li>";
    }

    if (globalcasestomorrow > 8000000000) {
      document.getElementById("global-here").innerHTML +=
        "Sorry, you have infected everyone";
    }
  } //end if statment

  multiplierglobal();
 

}); //button bracket

$("#gcasesyesterday").html(yesterdaytotal.toLocaleString());

//$("#gcasestoday").html((todaytotal.toLocaleString()) + "<br>(" +
//(globalcaseprediction.toLocaleString()) + " predicted)");

$("#gcasestoday").html(todaytotal.toLocaleString());

var globalchangetoday = todaytotal - yesterdaytotal;
$("#gcaseschange").html("+" + globalchangetoday.toLocaleString());
var globalchangeyesterday = yesterdaytotal - twodaysagoglobal;
$("#gcaseschangeyesterday").html(yesterdaytotal.toLocaleString());

var growthratetoday = globalchangetoday / globalchangeyesterday;
$("#casesgrowth").html(Math.round(growthratetoday * 100) / 100);

var globalcasestomorrow = growthratetoday * globalchangetoday + todaytotal;
var roundedglobaltomorrow = Math.round(globalcasestomorrow);
$("#gcasestomorrow").html(roundedglobaltomorrow.toLocaleString());
var globalgrowth = [];

$("#deathstoday").html(deathstoday.toLocaleString());

var deathschangetoday = deathstoday - deathsyesterday;
$("#newdeaths").html("+" + deathschangetoday.toLocaleString());
var deathschangeyesterday = deathsyesterday - deathstwo;
$("#deathsyesterday").html(deathsyesterday.toLocaleString());

var deathratetoday = deathschangetoday / deathschangeyesterday;
$("#deathrate").html(Math.round(deathratetoday * 100) / 100);

var deathstomorrow = deathratetoday * deathschangetoday + deathstoday;
var roundeddeathstomorrow = Math.round(deathstomorrow);
$("#deathstomorrow").html(roundeddeathstomorrow.toLocaleString());

$("#usdeaths").html(usdeathstoday.toLocaleString());
var usdeathschangetoday = usdeathstoday - usdeathsyesterday;
$("#usnewdeaths").html("+" + usdeathschangetoday.toLocaleString());
var usdeathschangeyesterday = usdeathsyesterday - usdeathstwo;
$("#usdeathsyesterday").html(usdeathsyesterday.toLocaleString());

var usdeathratetoday = usdeathschangetoday / usdeathschangeyesterday;
$("#usdeathrate").html(Math.round(usdeathratetoday * 100) / 100);

var usdeathstomorrow = usdeathratetoday * usdeathschangetoday + usdeathstoday;
var usroundeddeathstomorrow = Math.round(usdeathstomorrow);
$("#usdeathstomorrow").html(usroundeddeathstomorrow.toLocaleString());

var utahchangeyesterday = utahyesterday - utahtwodaysago;
var utahchangetoday = utahtoday - utahyesterday;
$("#utahnumbershere").html("+" + utahchangetoday.toLocaleString());
var utahgrowthrate = utahchangetoday / utahchangeyesterday;
$("#utahgrowth").html(Math.round(utahgrowthrate * 100) / 100);
var total = "";
var utahtomorrow = utahtoday + utahgrowthrate * utahchangetoday;
var utahroundedtomorrow = Math.round(utahtomorrow);
$("#utahcasestomorrow").html(utahroundedtomorrow.toLocaleString());
$("#utahtotal").html(utahtoday.toLocaleString());
var growth = [];

$("#utahdeaths").html(utahdeathstoday.toLocaleString());
var utahdeathschangetoday = utahdeathstoday - utahdeathsyesterday;
$("#utahnewdeaths").html("+" + utahdeathschangetoday.toLocaleString());
var utahdeathschangeyesterday = utahdeathsyesterday - utahdeathstwo;
$("#usdeathsyesterday").html(utahdeathsyesterday.toLocaleString());

var utahdeathratetoday = utahdeathschangetoday / utahdeathschangeyesterday;
$("#utahdeathrate").html(Math.round(utahdeathratetoday * 100) / 100);

var utahdeathstomorrow =
  ((utahthisweekdeathrate + utahdeathratetoday + utahlastweekdeathrate) / 3) *
    utahdeathschangetoday +
  utahdeathstoday;
var utahroundeddeathstomorrow = Math.round(utahdeathstomorrow);
$("#utahdeathstomorrow").html(utahroundeddeathstomorrow.toLocaleString());

$("#gcasestoday2").html(todaytotal.toLocaleString());
$("#gcaseslastweek").html(gcasesoneweekago.toLocaleString());
$("#gcaseslastweekchange").html("+" + glastweekchange.toLocaleString());
$("#gactivecases2").html(gactivecasestoday.toLocaleString());
$("#gactivecaseslastweek").html(gactivecaseslastweek.toLocaleString());

if (gactivecasestoday - gactivecaseslastweek < 0) {
  $("#gactivecaseschange2").html(
    (gactivecasestoday - gactivecaseslastweek).toLocaleString()
  );
} else {
  $("#gactivecaseschange2").html(
    "+" + (gactivecasestoday - gactivecaseslastweek).toLocaleString()
  );
}

$("#uscasestoday2").html(today.toLocaleString());
$("#uscaseslastweek").html(uscasesoneweekago.toLocaleString());
$("#uscaseslastweekchange").html("+" + uslastweekchange.toLocaleString());
$("#usactivecases2").html(usactivecasestoday.toLocaleString());
$("#usactivecaseslastweek").html(usactivecaseslastweek.toLocaleString());

if (usactivecasestoday - usactivecaseslastweek < 0) {
  $("#usactivecaseschange2").html(
    (usactivecasestoday - usactivecaseslastweek).toLocaleString()
  );
} else {
  $("#usactivecaseschange2").html(
    "+" + (usactivecasestoday - usactivecaseslastweek).toLocaleString()
  );
}

$("#utahcasestoday2").html(utahtoday.toLocaleString());
$("#utahcaseslastweek").html(utahcasesoneweekago.toLocaleString());
$("#utahcaseslastweekchange").html("+" + utahlastweekchange.toLocaleString());
$("#utahactivecases2").html(utahactivecasestoday.toLocaleString());
$("#utahactivecaseslastweek").html(utahactivecaseslastweek.toLocaleString());

if (utahactivecasestoday - utahactivecaseslastweek < 0) {
  $("#utahactivecaseschange2").html(
    (utahactivecasestoday - utahactivecaseslastweek).toLocaleString()
  );
} else {
  $("#utahactivecaseschange2").html(
    "+" + (utahactivecasestoday - utahactivecaseslastweek).toLocaleString()
  );
}
});