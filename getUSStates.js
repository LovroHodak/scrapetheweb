const axios = require("axios");
const cheerio = require("cheerio");

const page_url =
  "https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States";

async function getUSStates() {
  // get wikipedia HTML
  const { data } = await axios.get(page_url);
  const $ = cheerio.load(data);

  // get TABLE where states are listed
  const table = $(
    $('caption:contains("States of the United States of America")')[0]
  ).parent();

  const states = [];
  // go inside ROWS in table
  // we used .slice() to get rid of first 2 and trim() to get rid of /n
  table
    .find("tbody tr")
    .slice(2)
    .each((i, element) => {
      const $row = $(element);
      const state = {};
      /* state.name = $row.find('th').text().trim() */
      state.name = $row.find("th a").first().text().trim();
      /* const columns = $row.find("td"); */

      const labels = [
        "code",
        "capital",
        "largest",
        "ratification",
        "population",
        "total_area_miles",
        "total_area_km",
        "land_area_miles",
        "land_area_km",
        "water_area_miles",
        "water_area_km",
        "number_of_reps",
      ];

      let offset = 0;
      $row.find("td").each((j, col) => {
        const $col = $(col);
        let value = $col.text().trim();
        const numValue = Number(value.replace(/,/g, ''))
        if (!isNaN(numValue)){
            value = numValue
        }
        if (j === 1 && $col.attr("colspan") === "2") {
          const label = labels[j];
          state[label] = value;
          offset = 1;
        } 
        const label = labels[j + offset];
        state[label] = value;
      });

      states.push(state);
      /* state.code = columns.get(0).text(); */

      /* if (columns.length === 12) {
      } else {
      } */

      /* console.log(states); */
    });

  /* const rows = table.find('tbody tr') */
  return states
}

/* getUSStates(); */

module.exports = getUSStates
