db['bb.radarmeasurement'].aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$match: {
				_id:'b35b15bb-2a7f-455c-956b-863e2ec5505f'
			}
		},

		// Stage 2
		{
			$project: {
			    "URL":'$TmdFile.FileUrl'
			}
		},

	]

	// Created with 3T MongoChef, the GUI for MongoDB - https://3t.io/mongochef

);
