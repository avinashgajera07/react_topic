//Home logic
const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to registration page using router");
  } catch (error) {
    console.log(error);
  }
};


//Register logic
const register = async (req, res) => {
  try {
    res.status(200).send("Welcome to registration page using controller");
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};
module.exports = { home, register };
