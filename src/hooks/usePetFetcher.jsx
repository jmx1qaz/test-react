import { useState, useEffect } from "react"
import { get } from '../request'

const url = 'http://5c92dbfae7b1a00014078e61.mockapi.io/owners'

export const usePetFetcher = (props) => {
    const [data, setData] = useState({})

    useEffect(() => 
        get(url)
        .then(res => {
            if (res.status) {
                const petList = res.data || []
                setData(petList.reduce((acc, { pets, gender }) => {
                    if (pets && Array.isArray(pets)) {
                        pets.forEach(pet => {
                            pet.type === 'Cat' && 
                                (acc[gender] = [...acc[gender] || [], pet.name])
                        })
                    }
                    return acc
                }, {}))
            } 
        })
    , [props])
    return data;
}