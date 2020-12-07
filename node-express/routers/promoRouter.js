const express = require("express");
const bodyParser = require("body-parser");

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

// /promotions
promoRouter.route("/")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res, next) => {
    res.end("Will send all the promotions to you!");
})
.post((req, res, next) => {
    res.end("Will add the new promotion: " + req.body.name + " with details: " + req.body.description);
})
.put((req, res, next) => {
    res.end("PUT operation not supported on /promotions");
})
.delete((req, res, next) => {
    res.end("Deleting all the promotions!");
})

// /promotions/:promoId
promoRouter.route("/:promoId")
.get((req, res, next) => {
    res.end("Will send the details of the promotion: " + req.params.promoId);
})
.post((req, res, next) => {
    res.end("POST not supported on /promotions/" + req.params.promoId);
})
.put((req, res, next) => {
    res.write("Updating the promotion: " + req.params.promoId);
    res.end("\n Will update the promotion: " + req.body.name + " with details: " + req.body.description);
})
.delete((req, res, next) => {
    res.end("Deleting the promotion: " + req.params.promoId);
})

module.exports = promoRouter;
