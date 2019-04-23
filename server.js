const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dbRouter = express.Router();
const PORT = 4000;
let LemonadeStand = require("./ls.model");
app.use(cors());
app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1:27017/lemonadestand", {
	useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once("open", function() {
	console.log("MongoDB database connection established successfully");
});
dbRouter.route("/Game").get(function(req, res) {
	LemonadeStand.Game.find(function(err, games) {
		if (err) {
			console.log(err);
		} else {
			res.json(games);
		}
	});
});
dbRouter.route("/Game/:id").get(function(req, res) {
	let id = req.params.id;
	LemonadeStand.Game.findById(id, function(err, game) {
		res.json(game);
	});
});
dbRouter.route("/Game/update/:id").post(function(req, res) {
	LemonadeStand.Game.findById(req.params.id, function(err, game) {
		if (!game) res.status(404).send("data is not found");
		else game.game_id = req.body.todo_description;
		game.logged_in = req.body.logged_in;
		game.player_inventory.cups = req.body.player_inventory.cups;
		game.player_inventory.lemons = req.body.player_inventory.lemons;
		game.player_inventory.sugar = req.body.player_inventory.sugar;
		game.player_inventory.ice = req.body.player_inventory.ice;
		game.player_inventory.money = req.body.player_inventory.money;
		game.recipe.lemons_per_pitcher = req.body.recipe.lemons_per_pitcher;
		game.recipe.sugar_per_pitcher = req.body.recipe.sugar_per_pitcher;
		game.recipe.ice_per_cupe = req.body.recipe.ice_per_cupe;
		game.price_per_cup = req.body.price_per_cup;
		game.day_limit = req.body.day_limit;
		game.current_day_number = req.body.current_day_number;
		game.current_day_id = req.body.current_day_id;
		game.customer_satisfaction = req.body.customer_satisfaction;
		game.popularity = req.body.popularity;
        game.total_profit = req.body.total_profit;
        game.stock_prices.cup_25 = req.body.stock_prices.cup_25;
        game.stock_prices.cup_50 = req.body.stock_prices.cup_50;
        game.stock_prices.cup_100 = req.body.stock_prices.cup_100;
        game.stock_prices.lemon_10 = req.body.stock_prices.lemon_10;
        game.stock_prices.lemon_30 = req.body.stock_prices.lemon_30;
        game.stock_prices.lemon_75 = req.body.stock_prices.lemon_75;
        game.stock_prices.sugar_8 = req.body.stock_prices.sugar_8;
        game.stock_prices.sugar_20 = req.body.stock_prices.sugar_20;
        game.stock_prices.sugar_48 = req.body.stock_prices.sugar_48;
        game.stock_prices.ice_100 = req.body.stock_prices.ice_100;
        game.stock_prices.ice_250 = req.body.stock_prices.ice_250;
        game.stock_prices.ice_500 = req.body.stock_prices.ice_500;
        game.potential_customers = req.body.potential_customers;
        game.weather_forecast = req.body.weather_forecast;
        game.recent_cups_sold = req.body.recent_cups_sold;
        game.recent_day_profit = req.body.recent_day_profit;
        game.total_profit = req.body.total_profit;
        game.total_cups_sold = req.body.total_cups_sold;

		game.save()
			.then(game => {
				res.json("LemonadeStand Game updated!");
			})
			.catch(err => {
				res.status(400).send("Update not possible");
			});
	});
});
dbRouter.route("/Game/add").post(function(req, res) {
	let game = new LemonadeStand.Game(req.body);
	game.save()
		.then(game => {
			res.status(200).json({ game: "game added successfully" });
		})
		.catch(err => {
			res.status(400).send("adding new game failed");
		});
});

dbRouter.route("/Player").get(function(req, res) {
	LemonadeStand.Player.find(function(err, players) {
		if (err) {
			console.log(err);
		} else {
			res.json(players);
		}
	});
});
dbRouter.route("/Player/:id").get(function(req, res) {
	let id = req.params.id;
	LemonadeStand.Player.findById(id, function(err, player) {
		res.json(player);
	});
});
dbRouter.route("/Player/update/:id").post(function(req, res) {
	LemonadeStand.Player.findById(req.params.id, function(err, player) {
		if (!player) res.status(404).send("data is not found");
		else player.email = req.body.email;
		player.user_name = req.body.user_name;
		player.password = req.body.password;
		//player.games = req.body.games; UPDATE GAMES
		player
			.save()
			.then(player => {
				res.json("LemonadeStand Player updated!");
			})
			.catch(err => {
				res.status(400).send("Update not possible");
			});
	});
});
dbRouter.route("/Player/add").post(function(req, res) {
	let player = new LemonadeStand.Player(req.body);
	console.log(req.body);
	player
		.save()
		.then(player => {
			res.status(200).json({ player: "player added successfully" });
		})
		.catch(err => {
			res.status(400).send("adding new player failed");
		});
});

dbRouter.route("/Leaderboard").get(function(req, res) {
	LemonadeStand.LeaderboardRecord.find(function(err, records) {
		if (err) {
			console.log(err);
		} else {
			res.json(records);
		}
	});
});
dbRouter.route("/Leaderboard/:user").get(function(req, res) {
	let id = req.params.id;
	LemonadeStand.LeaderboardRecord.findById(id, function(err, record) {
		res.json(record);
	});
});
dbRouter.route("/Leaderboard/update/:id").post(function(req, res) {
	LemonadeStand.LeaderboardRecord.findById(req.params.id, function(
		err,
		record
	) {
		if (!record) res.status(404).send("data is not found");
		else record.user_name = req.body.user_name;
		record.profit = req.body.profit;
		record
			.save()
			.then(record => {
				res.json("LemonadeStand Leaderboard Record updated!");
			})
			.catch(err => {
				res.status(400).send("Leaderboard Record update not possible");
			});
	});
});
dbRouter.route("/Leaderboard/add").post(function(req, res) {
	let record = new LemonadeStand.LeaderboardRecord(req.body);

	player
		.save()
		.then(record => {
			res.status(200).json({
				record: "Leaderboard Record added successfully"
			});
		})
		.catch(err => {
			res.status(400).send("adding new player failed");
		});
});

dbRouter.route("/Day").get(function(req, res) {
	LemonadeStand.Day.find(function(err, days) {
		if (err) {
			console.log(err);
		} else {
			res.json(days);
		}
	});
});
dbRouter.route("/Day/:id").get(function(req, res) {
	let id = req.params.id;
	LemonadeStand.Day.find({ day_id: id }, function(err, day) {
		res.json(day);
	});
});
// Currently do not need a day update function
//
// dbRouter.route("/Day/update/:id").post(function(req, res) {
// 	let id = req.params.id;
// 	LemonadeStand.Day.find({"day_id": id}, function() {
// 		if (!day) res.status(404).send("day is not found");
// 		else day.email = req.body.email;
// 		day.user_name = req.body.user_name;
// 		day.password = req.body.password;
// 		day.save()
// 			.then(player => {
// 				res.json("LemonadeStand day updated!");
// 			})
// 			.catch(err => {
// 				res.status(400).send("Update not possible");
// 			});
// 	});
// });

dbRouter.route("/Day/add").post(function(req, res) {
	let day = new LemonadeStand.Day(req.body);

	player
		.save()
		.then(day => {
			res.status(200).json({ day: "day added successfully" });
		})
		.catch(err => {
			res.status(400).send("adding new day failed");
		});
});

dbRouter.route("/InterestingFacts").get(function(req, res) {
	LemonadeStand.InterestingFacts.find(function(err, facts) {
		if (err) {
			console.log(err);
		} else {
			res.json(facts);
		}
	});
});

dbRouter.route("/InterestingFacts/:id").get(function(req, res) {
	let id = req.params.id;
	LemonadeStand.InterestingFacts.find({ fact_id: id }, function(err, fact) {
		res.json(fact);
	});
});

dbRouter.route("/InterestingFacts/update/:id").post(function(req, res) {
	let id = req.params.id;
	LemonadeStand.InterestingFacts.find({ fact_id: id }, function(err, fact) {
		if (!fact) res.status(404).send("data is not found");
		else fact.fact_id = req.body.fact_id;
		fact.fact_text = req.body.fact_text;
		//player.games = req.body.games; UPDATE GAMES
		player
			.save()
			.then(player => {
				res.json("Interesting Fact updated!");
			})
			.catch(err => {
				res.status(400).send("Update not possible");
			});
	});
});
dbRouter.route("/InterestingFacts/add").post(function(req, res) {
	let fact = new LemonadeStand.InterestingFacts(req.body);
	console.log(req.body);
	fact
		.save()
		.then(fact => {
			res.status(200).json({ fact: "Interesting Fact added successfully" });
		})
		.catch(err => {
			res.status(400).send("adding new fact failed");
		});
});

app.use("/lemonadestand", dbRouter);
app.listen(PORT, function() {
	console.log("Server is running on Port: " + PORT);
});
