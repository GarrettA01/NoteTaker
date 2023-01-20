const router = require("express").Router();

// import our mdoular routers for /notes
const noteRoutes = require("./noteRoutes");

router.use("./notes", noteRoutes);

module.exports = router;
