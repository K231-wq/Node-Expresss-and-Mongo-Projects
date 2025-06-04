const notFoundMiddleWare = (req, res) => {
    res.status(500).send("ROUTES DOES NOT EXIT~~");
}
module.exports = notFoundMiddleWare;