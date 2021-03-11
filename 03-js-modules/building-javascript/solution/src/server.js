import express from "express";
import weather from "weather-js";
import { promisify } from "util";

const findWeather = promisify(weather.find);

const app = express();

app.use(express.static("public"));
app.get("/:city/:state", weatherSearch);
app.listen(3000, () =>
  console.log(`Weather Bug Running - http://localhost:3000`)
);

async function weatherSearch(req, res) {
  const { city, state } = req.params;
  const result = await findWeather({
    search: `${city}, ${state}`,
    degreeType: "F",
  });

  res.send(result);
}
