var sql = require ('mssql');
var mongoose = require('mongoose')
var db = require('../db.js')
var Game = require('../model/game.js')
var moment = require('moment')



//Connection String
const config = {
  user: 'ereyes',

  password: '5aBPxtX71bEs2',

  server: 'kmqed1sonq.database.windows.net',

  database: 'TrackMan.Baseball',
  options: {
    encrypt: true // Use this if you're on Windows Azure
  }
};


var getDeltas_sql = (locationid,start_date, end_date) => {
  console.log(start_date)
  return new Promise((resolve,reject)=>{

    var data = [];

    var querystring =`select jk.Name, jk.LocationID, jk.DateModified, jk.CalibrationID, jk.SoftwareVersion, jk.OEMVersion,
     dbo.MtoIn(isnull(jk.RubberPositionX - lag(jk.RubberPositionX) over (order by jk.datemodified), 0)) as RPXDelta,
     dbo.MtoIn(isnull(jk.RubberPositionY - lag(jk.RubberPositionY) over (order by jk.datemodified), 0)) as RPYDelta,
     dbo.MtoIn(isnull(jk.RubberPositionZ - lag(jk.RubberPositionZ) over (order by jk.datemodified), 0)) as RPZDelta,
     dbo.MtoIn(isnull(jk.HomePositionX - lag(jk.HomePositionX) over (order by jk.datemodified), 0)) as HPXDelta,
     dbo.MtoIn(isnull(jk.HomePositionY - lag(jk.HomePositionY) over (order by jk.datemodified), 0)) as HPYDelta,
     dbo.MtoIn(isnull(jk.HomePositionZ - lag(jk.HomePositionZ) over (order by jk.datemodified), 0)) as HPZDelta,
     isnull(jk.FixedRadarTilt - lag(jk.FixedRadarTilt) over (order by jk.datemodified), 0) as TiltDelta,
     isnull(jk.FixedRadarRoll - lag(jk.FixedRadarRoll) over (order by jk.datemodified), 0) as RollDelta
     from
     (
     select l.Name, c1.LocationId, c1.DateCreated, c1.DateModified, Round(c1.RubberPositionX,3) as RubberPositionX,
       Round(c1.RubberPositionY,3) as RubberPositionY, Round(c1.RubberPositionZ,3) as RubberPositionZ,
       Round(c1.HomePositionX,3) as HomePositionX, Round(c1.HomePositionY,3) as HomePositionY, Round(c1.HomePositionZ,3) as HomePositionZ, c1.CalibrationId,
       Round(degrees(c1.FixedRadarTilt),3) as FixedRadarTilt, Round(degrees(c1.FixedRadarRoll),3) as FixedRadarRoll, c1.CalibrationClass, l.SoftwareVersion, l.OEMVersion
       from calibration c1
       inner join location l
       on l.locationID = c1.locationID and c1.calibrationclass = 'AutoRecalibration' and c1.datemodified >= '`+start_date+`' and c1.datemodified < '`+end_date+`'
       where c1.LocationId = '`+locationid+`'
     ) jk
     order by jk.datemodified`



    sql.connect(config, err => {
        // ... error checks
        const request = new sql.Request();

        request.stream = true; // You can set streaming differently for each request
        //request.query('select TOP 5 calibrationclass, CalibrationId from dbo.calibration ') // or request.execute(procedure)

        request.query(querystring);

        request.on('recordset', columns => {
          // Emitted once for each recordset in a query

          //console.dir(columns)
        });

        request.on('row', row => {
          // Emitted for each row in a recordset

          data.push(row)
        });

        request.on('error', err => {
          // May be emitted multiple times

        });

        request.on('done', result => {
         // Always emitted as the last one
         console.log("By Calibration API call was success");

         resolve(data);
         sql.close();
         });
    });

    sql.on('error', err => {
         // ... error handler
         reject("there was an error")
    });


})
}




var getPitchTimes_mongo = (locationid,start_date, end_date)=>{

  return new Promise((resolve,reject)=>{
    mongoose.connect(db, function(err){
        if (err) throw err;
        console.log("Connection" + " to "+ db + " Sucessful!")
      });

      Game.aggregate(

        // Pipeline
      	[
      		// Stage 1
      		{
      			$match: {
      			    "Info.Location._id":locationid,
      			    "DateCreated":{$gte: new Date(start_date), $lt: new Date(end_date)},
      			    "Info.ApplicationType":'trackgame'
      			}
      		},

      		// Stage 2
      		{
      			$project: {
      			    _id:true,
      			    GameReference:true,
      			    DateCreated:true,
      			    "firstPitch":"$Stats.FirstPitch",
      			    "lastPitch":"$Stats.LastPitch"
      			}
      		},

      	],function(err,doc){
          if(err) {throw err}

          else{
            resolve (doc)
            mongoose.connection.close();
          }
        }
      );
  })

}

// getDeltas_sql('DAAB636B-C964-4444-8131-348FC1C75CB3','2017-01-01','2017-04-17').then((res)=>{
//   console.log(res)
// }).catch((msg)=>{
//   console.log(msg)
// })

// getPitchTimes_mongo('951c7099-f93c-4609-8680-d5e89e26309c','2017-01-01','2017-04-11').then((res)=>{
//   console.log(res)
// }).catch(()=>{
//   console.log("something is wrong")
// })

//
// Promise.all([getDeltas_sql('951c7099-f93c-4609-8680-d5e89e26309c','2017-01-01','2017-04-17'),getPitchTimes_mongo('951c7099-f93c-4609-8680-d5e89e26309c','2017-01-01','2017-04-17')]).then((values)=>{
//   var data = [];
//   values[1].forEach((game,i)=>{
//
//     values[0].forEach((cal,j)=>{
//
//
//       if(cal.DateModified >= game.firstPitch){
//         cal.InGame = game.GameReference;
//       }else{
//         cal.InGame = null;
//         data.push(cal)
//       }
//     })
//
//
//   })
//   console.log(data)
//
//
// }).catch(()=>{
//   console.log("SOMETHING IS WRONG")
// })

module.exports={
  getDeltas_sql:getDeltas_sql,
  getPitchTimes_mongo:getPitchTimes_mongo
}
