const jsdom = require("jsdom");
const fs = require('fs');
const { JSDOM } = jsdom;

const globalURL = 'https://www.worldometers.info/coronavirus/';
const usURL = "https://www.worldometers.info/coronavirus/country/us/";
const utahURL = "https://www.worldometers.info/coronavirus/usa/utah/"
const got = require('got');
 



var globalDeathsScript;
const run = async () => {
        try {
            const global = await got(globalURL);
            const US = await got(usURL);
            const UTAH = await got(utahURL);
            const Utahdom = new JSDOM(UTAH.body);
            const USdom = new JSDOM(US.body);
            const dom = new JSDOM(global.body);
            globalDeathsScript = dom.window.document.scripts[22].text;
            globalCasesScript = dom.window.document.scripts[21].text;
            usDeathsScript = USdom.window.document.scripts[26].text;
            usDeathsScriptDay = USdom.window.document.scripts[27].text;
            usCasesScript = USdom.window.document.scripts[24].text;
            usCasesScript2 = USdom.window.document.scripts[23].text;

            utahDeathsScript = Utahdom.window.document.scripts[24].text;
            utahDeathsScriptDay = Utahdom.window.document.scripts[25].text;
            utahCasesScript = Utahdom.window.document.scripts[21].text;
            utahCasesScriptDay = Utahdom.window.document.scripts[22].text;
            console.log(utahDeathsScriptDay);
        

            gDailyDeathFind = globalDeathsScript.indexOf("data", (globalDeathsScript.indexOf("data") +1));
            gDailyDeathFound = globalDeathsScript.indexOf("data", (gDailyDeathFind +1));

            usDailyDeathFind = usDeathsScript.indexOf("data", (usDeathsScript.indexOf("data") +1));
            usDailyDeathFound = usDeathsScript.indexOf("data", (usDailyDeathFind +1));

            gDailyCasesFind = globalCasesScript.indexOf("data", (globalCasesScript.indexOf("data") +1));
            gDailyCasesFound = globalCasesScript.indexOf("data", (gDailyCasesFind +1));

            usDailyCasesFind = usCasesScript.indexOf("data", (usCasesScript.indexOf("data") +1));
            usDailyCasesFound = usCasesScript.indexOf("data", (usDailyCasesFind +1));
           

            var scrapedGlobalDeaths = globalDeathsScript.slice((globalDeathsScript.indexOf("data") + 5), 
            (globalDeathsScript.indexOf("]", globalDeathsScript.indexOf("data")) +1 ));

            var scrapedGlobalDeathsDay = globalDeathsScript.slice((gDailyDeathFound + 5), 
            (globalDeathsScript.indexOf("]", gDailyDeathFound) +1 ));

            var scrapedGlobalCasesDay = globalCasesScript.slice((gDailyCasesFound + 5), 
            (globalCasesScript.indexOf("]", gDailyCasesFound) +1 ));

            var scrapedGlobalCases = globalCasesScript.slice((globalCasesScript.indexOf("data") + 5), 
            (globalCasesScript.indexOf("]", globalCasesScript.indexOf("data")) +1 ));
            



            var scrapedUsDeaths = usDeathsScript.slice((usDeathsScript.indexOf("data") + 7), 
            (usDeathsScript.indexOf("]", usDeathsScript.indexOf("data")) +1 ));
            //success

            var scrapedUsDeathsDay = usDeathsScriptDay.slice((usDeathsScriptDay.indexOf("data") + 7), 
            (usDeathsScriptDay.indexOf("]", usDeathsScriptDay.indexOf("data")) +1 ));
            //success

            var scrapedUsCasesDay = usCasesScript.slice((usCasesScript.indexOf("data") + 7), 
            (usCasesScript.indexOf("]", usCasesScript.indexOf("data")) +1 ));
              //success

            var scrapedUsCases = usCasesScript2.slice((usCasesScript2.indexOf("data") + 7), 
            (usCasesScript2.indexOf("]", usCasesScript2.indexOf("data")) +1 ));
            //success



            var scrapedUtahDeaths = utahDeathsScript.slice((utahDeathsScript.indexOf("data") + 7), 
            (utahDeathsScript.indexOf("]", utahDeathsScript.indexOf("data")) +1 ));
           
            var scrapedUtahDeathsDay = utahDeathsScriptDay.slice((utahDeathsScriptDay.indexOf("data") + 7), 
            (utahDeathsScriptDay.indexOf("]", utahDeathsScriptDay.indexOf("data")) +1 ));
            
            var scrapedUtahCasesDay = utahCasesScriptDay.slice((utahCasesScriptDay.indexOf("data") + 7), 
            (utahCasesScriptDay.indexOf("]", utahCasesScriptDay.indexOf("data")) +1 ));

            var scrapedUtahCases = utahCasesScript.slice((utahCasesScript.indexOf("data") + 7), 
            (utahCasesScript.indexOf("]", utahCasesScript.indexOf("data")) +1 ));


            fs.writeFile('./public/assets/javascript/scraped.js', ("var deathsStuffs =" + scrapedGlobalDeaths + ";"), function (err) {
                if (err) throw err;
                console.log('Replaced!');
              });

              setTimeout(() => {
                fs.appendFile('./public/assets/javascript/scraped.js', ("var globalstuffs =" + scrapedGlobalCases + ";"), function (err) {
                    if (err) throw err;
                    console.log('updated!');
                  });
                  fs.appendFile('./public/assets/javascript/scraped.js', ("var gdailycases =" + scrapedGlobalCasesDay + ";"), function (err) {
                    if (err) throw err;
                    console.log('updated!');
                  });
                  fs.appendFile('./public/assets/javascript/scraped.js', ("var gdailydeaths =" + scrapedGlobalDeathsDay + ";"), function (err) {
                    if (err) throw err;
                    console.log('updated!');
                  });
                  fs.appendFile('./public/assets/javascript/scraped.js', ("var uscases=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0," + scrapedUsCases+ ";"), function (err) {
                    if (err) throw err;
                    console.log('updated!');
                  });
                  fs.appendFile('./public/assets/javascript/scraped.js', ("var usdeaths=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0," + scrapedUsDeaths+ ";"), function (err) {
                    if (err) throw err;
                    console.log('updated!');
                  });
                  fs.appendFile('./public/assets/javascript/scraped.js', ("var usdailydeaths=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0," + scrapedUsDeathsDay+ ";"), function (err) {
                    if (err) throw err;
                    console.log('updated!');
                  });
                  fs.appendFile('./public/assets/javascript/scraped.js', ("var usdailycases=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0," + scrapedUsCasesDay+ ";"), function (err) {
                    if (err) throw err;
                    console.log('updated!');
                  });
                  fs.appendFile('./public/assets/javascript/scraped.js', ("var utahcases=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0," + scrapedUtahCases+ ";"), function (err) {
                    if (err) throw err;
                    console.log('updated!');
                  });
                  fs.appendFile('./public/assets/javascript/scraped.js', ("var utahdeaths=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0," + scrapedUtahDeaths+ ";"), function (err) {
                    if (err) throw err;
                    console.log('updated!');
                  });
                  fs.appendFile('./public/assets/javascript/scraped.js', ("var utahdailydeaths=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0," + scrapedUtahDeathsDay+ ";"), function (err) {
                    if (err) throw err;
                    console.log('updated!');
                  });
                  fs.appendFile('./public/assets/javascript/scraped.js', ("var utahdailycases=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0," + scrapedUtahCasesDay+ ";"), function (err) {
                    if (err) throw err;
                    console.log('updated!');
                  });
              }, 200);
              
        }
        catch (err) {
            console.log(err)
        }
    }
    
  const show = async () => {
      await run();
  };
    // Create an Array out of the HTML Elements for filtering using spread syntax.

    //deaths and daily deaths
    
 show();




