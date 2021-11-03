const axios = require('axios')
const cheerio = require('cheerio')

const page_url = 'https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States'

async function getUSStates(){
    // get wikipedia HTML
    const {data} = await axios.get(page_url)
    const $ = cheerio.load(data)

    // get TABLE where states are listed
    const table = $($('caption:contains("States of the United States of America")')[0]).parent()
    
    const states = []
    // go inside ROWS in table
    // we used .slice() to get rid of first 2 and trim() to get rid of /n
    table.find('tbody tr').slice(2).each((i, element) => {
        const $element = $(element)
        const state = {}
        /* state.name = $element.find('th').text().trim() */
        state.name = $element.find('th a').first().text().trim()
        
        //console.log($element.text())
        console.log(state)
    })
    
    /* const rows = table.find('tbody tr') */
    
}

getUSStates()