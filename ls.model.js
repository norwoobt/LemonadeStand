const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let PlayerSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	user_name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
	//games: [{ game_id: Number }]
});

let DaySchema = new Schema({
	day_id: {
		type: Number
	},

	stock_prices: {
		cup_25: {
			type: Number
		},
		cup_50: {
			type: Number
		},
		cup_100: {
			type: Number
		},
		lemon_10: {
			type: Number
		},
		lemon_30: {
			type: Number
		},
		lemon_75: {
			type: Number
		},
		sugar_8: {
			type: Number
		},
		sugar_20: {
			type: Number
		},
		sugar_48: {
			type: Number
		},
		ice_100: {
			type: Number
		},
		ice_250: {
			type: Number
		},
		ice_500: {
			type: Number
		}
	},

	weather_forecast: {
		temperature: {
			type: Number
		},
		description: {
			type: String
		}
	},

	potential_customers: {
		type: Number
	}
});

let InterestingFactsSchema = new Schema({
	fact_id: {
		type: Number
	},
	fact_text: {
		type: String
	}
});

let GameSchema = new Schema({
	game_id: {
		type: Number
	},

	logged_in: {
		type: Boolean
	},

	player_inventory: {
		cups: {
			type: Number
		},
		lemons: {
			type: Number
		},
		sugar: {
			type: Number
		},
		ice: {
			type: Number
		},
		money: {
			type: Number
		}
	},

	recipe: {
		lemons_per_pitcher: {
			type: Number
		},
		sugar_per_pitcher: {
			type: Number
		},
		ice_per_cup: {
			type: Number
		}
	},

	price_per_cup: {
		type: Number
	},

	day_limit: {
		type: Number
	},

	current_day_number: {
		//1-30
		type: Number
	},

	customer_satisfaction: {
		type: Number
	},

	popularity: {
		type: Number
	},

	stock_prices: {
		cup_25: {
			type: Number
		},
		cup_50: {
			type: Number
		},
		cup_100: {
			type: Number
		},
		lemon_10: {
			type: Number
		},
		lemon_30: {
			type: Number
		},
		lemon_75: {
			type: Number
		},
		sugar_8: {
			type: Number
		},
		sugar_20: {
			type: Number
		},
		sugar_48: {
			type: Number
		},
		ice_100: {
			type: Number
		},
		ice_250: {
			type: Number
		},
		ice_500: {
			type: Number
		}
	},

	weather_forecast: {
		temperature: {
			type: Number
		},
		description: {
			type: String
		}
	},

	potential_customers: {
		type: Number
	},

	recent_cups_sold: {
		type: Number
	},

	recent_day_profit: {
		type: Number
	},

	total_profit: {
		type: Number
	},

	total_cups_sold: {
		type: Number
	}
});

let LeaderboardRecordSchema = new Schema({
	user_name: {
		type: String
	},

	profit: {

	}
});

var Player = mongoose.model("Player", PlayerSchema);
var Day = mongoose.model("Day", DaySchema);
var InterestingFacts = mongoose.model(
	"InterestingFacts",
	InterestingFactsSchema
);
var LeaderboardRecord = mongoose.model("LeaderboardRecord", LeaderboardRecordSchema);
var Game = mongoose.model("Game", GameSchema);

module.exports = {
	Player: Player,
	Day: Day,
	InterestingFacts: InterestingFacts,
	Game: Game,
	LeaderboardRecord: LeaderboardRecord
};
