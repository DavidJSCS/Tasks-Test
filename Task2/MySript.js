
const fs = require('fs');

var myArgs = process.argv.slice(2);

fs.readFile('./alerts.json', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err) //we check if we catched properly the json file
    return;
  }
 
  try {

    if(myArgs.length==0){//Zero arguments

    const data = JSON.parse(fileContents); //we parse the json file
    let myDate =new Date(data.timestamp);  //and filling the required data
    let rule=data.rule.id;
    let level=data.rule.level;
    let log=data.location;

    let options={ year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit",minute: "2-digit",second: "2-digit" }; //those optios are for parsing the date output
    //printing to console the exits
    console.log("Last alert information:");
    console.log("-Timestamp: "+myDate.toLocaleDateString("en-US",options));
    console.log("-Rule ID: "+rule);
    console.log("-Rule Level: "+level);
    console.log("-LogFile: "+log);
    }
    else{ //has arguments
      if (myArgs[0]== "--count"){ //if argument is count
        let res= myArgs[1].split("/");
        let datestring=res[0]+"-"+res[1]+"-"+res[2];
        console.log((fileContents.match(new RegExp(datestring,"gm")||[]).length))
    
      }
  }
    } catch(err) {
    
  }
})

