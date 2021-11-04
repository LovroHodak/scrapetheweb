const statesElement = document.querySelector('#states')
const infoElement = document.querySelector('#info')

function setUSStates(states){
    states.forEach((state) => {
        const optionElement = document.createElement('option')
        optionElement.setAttribute('value', state.name)
        optionElement.textContent = state.name
        statesElement.append(optionElement)


        optionElement.addEventListener('click', () => {
            infoElement.innerHTML = `<pre>${JSON.stringify(state, null, 2)}</pre>`
            console.log('am i workin?')
        })
    })
}

async function getUSStates(){
    const response = await fetch('/api/states')
    const states = await response.json()
    setUSStates(states)
}


getUSStates()