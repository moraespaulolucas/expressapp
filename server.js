const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
