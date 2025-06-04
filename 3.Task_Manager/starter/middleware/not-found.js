const notFound = (req, res) => {
    res.status(404).send("ROUTE DOES NOT EXITS!!");
}
module.exports = notFound;