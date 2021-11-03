const statesElement = document.querySelector('#states')

function setUSStates(states){
    states.forEach((state) => {
        const optionElement = document.createElement('option')
        optionElement.setAttribute('value', state.name)
        optionElement.textContent = state.name
        statesElement.append(optionElement)

        
    })
}

async function getUSStates(){
    const response = await fetch('/api/states')
    const states = await response.json()
    setUSStates(states)
}


getUSStates()