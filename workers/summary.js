
var sql = require ('mssql');
var moment = require('moment');
var runQuery = require('../utils/accessDB.js')
// Set the headers
var end_date = moment().format('YYYY-MM-DD');











test = ['d8cb4d27-a521-4e24-9383-6090e0729244',
'ff687dbe-ca1f-48cc-8034-d2857135bdb9',
 '4eb0bb3d-6aa8-11e4-b8bc-00155d51aa0d',
 '993d7e0c-c2e9-4d6a-82cb-65153a836177',
 'e971769a-6aa8-11e4-b8bc-00155d51aa0d',
 'abb99f5e-bc40-4e4f-b6e2-7479e4fabe68',
 'bac3eb10-85e0-4a5a-84e2-ab821ad54c1a',
//'f285ff33-7c37-419d-9683-d63a589bc90c',
 'a3014953-5edc-11e4-9fa6-00155d51aa0d',
'f400d57f-5e32-4d95-9248-6101ed8e7528',
'2d4e66ce-6dd4-4b03-8fbe-fefbe11ad993',
 '64f8d733-1ffb-41d4-8a5e-bdf7d139d120',
// '6ec35ccd-9cf1-11e4-a0dc-00155d51e380',
'8263ebd5-5edc-11e4-9fa6-00155d51aa0d',
 'daab636b-c964-4444-8131-348fc1c75cb3',
 '067a8396-cdb9-40ce-b813-5f4036522f5e',
'2a6f3e15-0c43-442b-8830-07f59c4cc2bb',
'c92e7406-9fd3-4d06-810d-3c83890f24a6',
'07b9091e-7533-471e-af1e-39888bc19631',
'b762e3ef-6aa8-11e4-b8bc-00155d51aa0d',
'c40e76fe-2290-4078-93e9-e70323515dbd',
'38cf7413-b701-4183-8fa1-073dd8494030',
'36ec3f49-b929-4432-9e42-b6fd54967d67',
'21009770-1c2a-423c-899f-befdc4d42a99',
'eb03ca74-6927-11e4-9fa6-00155d51aa0d',
 'cb410c3c-66a7-11e4-ba87-00155d51e380',
 '1dc9e2b3-455a-495d-9cd6-2159ddd114b1',
 'bf28e9b8-37a4-4df8-a1c9-0b86bf9abd8b',
 'fd443949-e525-11e4-9e72-00155d51ac03',
 '898504b3-2897-4011-bc9f-58b6d293a180',
 '2c13e112-39c6-4141-a1f5-70fdfda24971',
 //'e0d56f5c-320f-4c19-9746-58a82af0859e',
 'c4a4c164-1fd2-4e40-ada1-6c004811ce6b',
// '060dfd67-7190-44ca-9634-10a7e1ea295b',
'fcc1ad48-80ef-4f29-9498-31a1779a8830',
'2959aea9-efcb-4261-98da-1d6343269c8e',
'a0e16641-0b38-4a28-9eab-0599229a79ba',
'6f07dd36-b375-4bdb-ad2b-c4f36d8d00d4',
'ac1156c6-96a0-11e4-9c18-00155d51e380',
// 'c1d8a085-f7de-4ce7-b863-5d157fbbc561',
 '951c7099-f93c-4609-8680-d5e89e26309c',
 'f3db3892-d903-11e4-aa50-00155d51ac03',
'4a028d79-3839-49f0-9bd3-2e10d095803f',
 '660bfa1c-634e-4b64-b511-fd2ef590b510',
'17ffd511-43f6-48af-937c-57f7308d0ad2',
'6c0c074a-4a19-474e-b089-ca3d2b4c2994',
'3cf9e3d5-7cfe-49e2-9f30-68617243d5d3',
 'd17b2b2f-48f6-11e4-a6be-00155d51aa0d',
// 'f0eb0ec5-0198-4aca-a83b-4539f519d511',
'24dcd2d7-1e9d-48df-a021-8614aec3f009',
'b82937d9-b768-4aa2-bcbe-230b38793d35',
'48e71417-d3d0-4585-ba70-295efcf70cbe',
'c8e219ea-552f-410c-9852-2adc3c456314',
'd5518cc3-9ceb-42cd-b7f0-f4f0cbe0b1fc',
'5f791346-51a6-4c39-972b-f5109ff5f64e',
'd46ed131-95df-49a0-8613-6d8dad1d38ef',
'f49929f6-e003-4b17-a2d0-e3051eeaa20b',
'bf5e1d64-127d-4d12-a0a2-0a68d6dd8d36',
'5c7b1b51-293b-479c-8b53-b7e704705176',
'60dacb67-6ec5-4fd5-bed7-58fbe5504f80',
'e43ac445-28c4-496e-957f-85ca116631f7',
'b0fa1928-9748-4fd9-93e0-31e8aba8e80e',
'10e3373b-d7f0-421b-bc1c-deaaf4b3e0c3',
'2033dda9-d86f-4d9b-a37b-82ee911c5642',
'727c65a9-0167-42a3-80e6-4d6aafde0d7b',
'fc806bb1-566c-402a-8fa2-20eac614b29a',
'21869a33-b780-4e47-99a9-de18fbc96bf4',
'17e8c679-5a88-454f-b3b5-a421f6aca047',
'c7716ccf-cfc3-4167-8dff-6b5e58bdc6af',
'85f4cd20-02c2-4afa-82ef-95119f6cba78',
 //'ac59d09c-391d-4506-bbb8-acd9c893a3ec',
 'ea664697-45b3-4446-9a18-51c62633e915'
];

var sequence = Promise.resolve();
var t=[];
var result = [];
test.forEach((a)=>{
  sequence = sequence.then(()=>{
    return Promise.all([runQuery.getDeltas_sql(a,'2017-01-01','2017-04-26'),runQuery.getPitchTimes_mongo(a,'2017-01-01','2017-04-26')]).then((res)=>{
      var data = [];

      res[1].forEach((game,i)=>{

        res[0].forEach((cal,j)=>{


          if(cal.DateModified >= game.firstPitch && cal.DateModified <= game.lastPitch){
            cal.InGame = game.GameReference;
            data.push(cal)
          }

        })


      })

      //console.log(data);

    var resultObj ={};
    var hpx=[];
    var hpy=[];
    var hpz=[];
    var rpx=[];
    var rpy=[];
    var rpz=[];

    var hpx_count = 0;
    var hpy_count = 0;
    var hpz_count = 0;
    var rpx_count = 0;
    var rpy_count = 0;
    var rpz_count = 0;

    for(i=0; i<data.length;i++){
      hpx.push(data[i].HPXDelta);
      hpy.push(data[i].HPYDelta);
      hpz.push(data[i].HPZDelta);

      rpx.push(data[i].RPXDelta);
      rpy.push(data[i].RPYDelta);
      rpz.push(data[i].RPZDelta);

      if( data[i].HPXDelta > 1 || data[i].HPXDelta < -1) {
        //console.log(data[i].HPXDelta)
        hpx_count += 1;

      }

      if( data[i].HPYDelta > 1 || data[i].HPYDelta < -1) {
        //console.log(data[i].HPYDelta)
        hpy_count += 1;

      }

      if( data[i].HPZDelta > 1 || data[i].HPZDelta < -1) {
        //console.log(data[i].HPZDelta)
        hpz_count += 1;

      }
      if( data[i].RPXDelta > 1 || data[i].RPXDelta < -1) {
        //console.log(data[i].HPXDelta)
        rpx_count += 1;

      }

      if( data[i].RPYDelta > 1 || data[i].RPYDelta < -1) {
        //console.log(data[i].HPYDelta)
        rpy_count += 1;

      }

      if( data[i].RPZDelta > 1 || data[i].RPZDelta < -1) {
        //console.log(data[i].HPZDelta)
        rpz_count += 1;

      }


    }

    hpxMax = Math.max(...hpx);
    hpxMin = Math.min(...hpx);

    hpyMax = Math.max(...hpy);
    hpyMin = Math.min(...hpy);

    hpzMax = Math.max(...hpz);
    hpzMin = Math.min(...hpz);

    rpxMax = Math.max(...rpx);
    rpxMin = Math.min(...rpx);

    rpyMax = Math.max(...rpy);
    rpyMin = Math.min(...rpy);

    rpzMax = Math.max(...rpz);
    rpzMin = Math.min(...rpz);

    resultObj = {
                LocationId: data[0].LocationID,
                Name:data[0].Name,
                hpx_count:hpx_count,
                hpx_max:hpxMax,
                hpx_min:hpxMin,
                hpy_count:hpy_count,
                hpy_max:hpyMax,
                hpy_min:hpyMin,
                hpz_count:hpz_count,
                hpz_max:hpzMax,
                hpz_min:hpzMin,
                rpx_count:rpx_count,
                rpx_max:rpxMax,
                rpx_min:rpxMin,
                rpy_count:rpy_count,
                rpy_max:rpyMax,
                hpy_min:hpyMin,
                rpz_count:rpz_count,
                rpz_max:rpzMax,
                rpz_min:rpzMin

              }

    //console.log(resultObj)
    return resultObj





  }).then((res)=>{

    result.push(res);
    if(result.length == test.length){console.log(JSON.stringify(result))}
  })

}).catch(()=>{
  console.log("there is an error")
})

})
