const countriesBringer = async (region) => {
    const response = await fetch('https://raw.githubusercontent.com/mledoze/countries/master/dist/countries.json')

    if (response.status === 200) {
        const data = await response.json()

        return data.filter((country) => {
            if (country.region === region) {
                //    console.log(country)
                return country
            }
        })
    }
}

