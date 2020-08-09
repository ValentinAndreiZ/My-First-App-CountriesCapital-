
const regionArray = []
countryArray = []

const formSelector = document.querySelector('#select-region')  //------------------------------------------------------------
formSelector.addEventListener('click', (e) => {
    console.log('hello din select region')
    const buttonToChange = e.target.id

    if (buttonToChange !== 'select-region') {

        const buttonToChangeArray = document.getElementsByClassName('btn btn-sm btn-md-lg btn-outline-dark my-3 shadow text-wrap text-center btn-block d-block d-md-inline w-25 mx-auto mx-md-4')
        for (var i = 0; i < buttonToChangeArray.length; i++) {
            buttonToChangeArray[i].style.color = 'orange'
            buttonToChangeArray[i].style.background = 'white'
        }

        document.getElementById(`${buttonToChange}`).style.background = "black"

    }

    regionArray.splice(0, 1)
    const regionChoosen = e.target.textContent
    regionArray.push(regionChoosen.trim())

    const infoToChange = document.querySelector('#country')
    infoToChange.textContent = `Press 'Next country' to get a country from ${regionChoosen}`
})




const nextQuestionSelector = document.querySelector('#next')  //---------------------------------------------------
nextQuestionSelector.addEventListener('click', () => {
    console.log('hello din next')
    //Reset background  

    const resetBg = document.getElementsByClassName('btns btn-light btn-lg mr-3 shadow')
    for (var i = 0; i < resetBg.length; i++) {
        resetBg[i].style.background = 'white'
    }


    // Generate Countries

    const theRegion = regionArray[0].trim()
    const allCountries = countriesBringer(theRegion).then(value => {
        const arrayOfCountryes = []
        value.forEach((country) => {
            arrayOfCountryes.push(country.name.common)

        })
        const countryFromArray = arrayOfCountryes[Math.floor(Math.random() * arrayOfCountryes.length)]
        //  console.log(countryFromArray)
        const countryDiv = document.querySelector('#country')
        countryDiv.textContent = `Which one is the capital of ${countryFromArray}?`
        countryArray.splice(0, 1)
        countryArray.push(countryFromArray)
        return countryFromArray
    })
    // Generate Capitals

    //functie buna
    const randomCapital = countriesBringer(theRegion).then(value => {
        const arrayOfCapitals = []
        value.forEach((element) => {

            arrayOfCapitals.push(element.capital[0])

        })

        //Restrangerea sirului pentru fiecare alegere facuta returnand un nou sir care nu contine valoarea aleasa initial 
        const capitalFromArray0 = arrayOfCapitals[Math.floor(Math.random() * arrayOfCapitals.length)]
        const arrayOfCapitals1 = arrayOfCapitals.filter((value) => {
            return value !== capitalFromArray0
        })
        const capitalFromArray1 = arrayOfCapitals1[Math.floor(Math.random() * arrayOfCapitals1.length)]
        const arrayOfCapitals2 = arrayOfCapitals1.filter((value) => {
            return value !== capitalFromArray1
        })
        const capitalFromArray2 = arrayOfCapitals2[Math.floor(Math.random() * arrayOfCapitals2.length)]
        const arrayOfCapitals3 = arrayOfCapitals2.filter((value) => {
            return value !== capitalFromArray2
        })
        const capitalFromArray3 = arrayOfCapitals3[Math.floor(Math.random() * arrayOfCapitals3.length)]

        const arrayOfProcessedCapitals = [capitalFromArray0, capitalFromArray1, capitalFromArray2, capitalFromArray3]

        return arrayOfProcessedCapitals

    })


    randomCapital.then(value => {
        //Returneaza capitala tarii generate - Valoarea corecta***
        const correctValue = countriesBringer(theRegion).then(value => {
            arrayOfCountryesAndCapitals = []
            value.forEach((value) => {
                arrayOfCountryesAndCapitals.push(value.name.common, value.capital[0])
            })
            arrayOfCountryNames = []
            value.forEach((value) => {
                arrayOfCountryNames.push(value.name.common)
            })

            const countryExtract = allCountries.then(country => {
                var found = arrayOfCountryNames.find((element) => {
                    return element === country
                })
                const indexOfFound = arrayOfCountryesAndCapitals.findIndex((element) => {
                    return element === found
                })
                return arrayOfCountryesAndCapitals[indexOfFound + 1]
            })


            //    console.log(arrayOfCountryesAndCapitals)
            //     console.log(countryExtract)
            return countryExtract
        })

        correctValue.then(value => {
            // console.log(value)
        })


        const a = [0, 1, 2, 3]
        // console.log(a)
        const randomNumber0 = Math.floor(Math.random() * a.length)

        const a1 = a.filter((value) => {
            return value !== randomNumber0
        })

        // console.log(a1)
        const randomNumber1 = a1[Math.floor(Math.random() * a1.length)]
        const a2 = a1.filter((value) => {
            return value !== randomNumber1
        })
        // console.log(a2)
        const randomNumber2 = a2[Math.floor(Math.random() * a2.length)]
        const a3 = a2.filter((value) => {
            return value !== randomNumber2
        })
        const randomNumber3 = a3[0]


        // console.log(randomNumber1)

        //de folosit aceeasi metoda ca mai sus pt valoarea butoanelor 
        //toate random number vor fi puse intr un array impreuna cu valoarea corecta 

        correctValue.then(capital => {
            var arrayOfButtonValues0 = [capital, value[randomNumber1], value[randomNumber2], value[randomNumber3]]


            var firstRandomValue = Math.floor(Math.random() * arrayOfButtonValues0.length)
            var firstRandomButton = arrayOfButtonValues0[firstRandomValue]
            var arrayOfButtonValues1 = arrayOfButtonValues0.filter((element) => {
                return element !== firstRandomButton
            })

            var secondRandomValue = Math.floor(Math.random() * arrayOfButtonValues1.length)
            var secondRandomButton = arrayOfButtonValues1[secondRandomValue]
            var arrayOfButtonValues2 = arrayOfButtonValues1.filter((element) => {
                return element !== secondRandomButton
            })

            var thirdRandomValue = Math.floor(Math.random() * arrayOfButtonValues2.length)
            var thirdRandomButton = arrayOfButtonValues2[thirdRandomValue]
            var arrayOfButtonValues3 = arrayOfButtonValues2.filter((element) => {
                return element !== thirdRandomButton
            })

            var forthRandomButton = arrayOfButtonValues3[0]

            document.querySelector('#btn1').textContent = firstRandomButton
            document.querySelector('#btn2').textContent = secondRandomButton
            document.querySelector('#btn3').textContent = thirdRandomButton
            document.querySelector('#btn4').textContent = forthRandomButton

            const summarySelector = document.querySelector('#summary')
            summarySelector.textContent = ''

        })

    })

})


const choiceSelector = document.querySelector('#choices')
choiceSelector.addEventListener('click', (e) => {

    const userChoice = e.target.textContent


    match(regionArray[0], countryArray[0], userChoice).then((value => {
        console.log(value)
        console.log(regionArray[0])
        console.log(countryArray[0])
        console.log(userChoice)
        const btnBackgroundChange = e.target.id
        console.log(btnBackgroundChange)

        const summaryParagraph = document.createElement('p')

        var summarySelector = document.querySelector('#summary')

        if (btnBackgroundChange !== 'choices') {
            if (value === false) {
                summarySelector.innerHTML = ''
                summaryParagraph.textContent = ` You didn't manage to do it this time... Try again.`
                summarySelector.appendChild(summaryParagraph)
                document.getElementById(`${btnBackgroundChange}`).style.background = 'red'
            } else {
                summarySelector.innerHTML = ''
                summaryParagraph.textContent = `Well done, your choice was the right one!`
                summarySelector.appendChild(summaryParagraph)
                document.getElementById(`${btnBackgroundChange}`).style.background = 'green'
            }
        }

    }))
    //  })


})


const match = async (region, country, capital) => {
    const allData = await countriesBringer(region)

    const countryHere = () => {
        const countryCapitalArray = []

        allData.forEach((element) => {
            countryCapitalArray.push(element.name.common, element.capital[0])
        })
        // console.log(countryCapitalArray)

        for (var i = 0; i < countryCapitalArray.length; i++) {
            const index = countryCapitalArray.indexOf(country)
            const capitalMatch = countryCapitalArray[index + 1]
            if (capitalMatch === capital) {
                return true
            } else {
                return false
            }
        }

    }
    const resolved = countryHere()
    // console.log(resolved)
    return resolved
}








        // match('    Americas', 'United States', 'Washington D.C.').then((value => {
        //     console.log(value)
        // }))





