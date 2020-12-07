const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

// /leaders

leaderRouter.route("/")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res, next) => {
    res.end("Sending all the leaders");
})
.post((req, res, next) => {
    res.end("Adding the new leader with name: " + req.body.name + " and details: " + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /leaders");
})
.delete((req, res, next) => {
    res.end("Deleting all the leaders");
});

// /leaders/:leaderId

leaderRouter.route("/:leaderId")
.get((req, res, next) => {
    res.end("Will send the details of the leader: " + req.params.leaderId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST not supported on /leaders/" + req.params.leaderId);
})
.put((req, res, next) => {
    res.write("Updating the leader: " + req.params.leaderId);
    res.end("\n Will update the leader: " + req.body.name + " with details: " + req.body.description);
})
.delete((req, res, next) => {
    res.end("Deleting the leader: " + req.params.leaderId);
})

module.exports = leaderRouter;

