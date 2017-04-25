db.game.aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$match: {
			    "Info.Location._id":'951c7099-f93c-4609-8680-d5e89e26309c',
			    "DateCreated":{$gte: new Date('2017-01-01'), $lt: new Date('2017-04-11')},
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

	]

	// Created with 3T MongoChef, the GUI for MongoDB - https://3t.io/mongochef

);
