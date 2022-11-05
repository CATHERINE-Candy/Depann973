import React, {useEffect, useState} from 'react'

function Home() {
    
    const [api, setApi] = useState([]);
    useEffect(()=> {
        fetch('/api').then(
            response => response.json()
        ).then(
            data => {
                setApi(data)
            }
        )
    }, [setApi])

    console.log(api.map(v => v.id))
    const question = api.map(v => v.question)
    const answer = api.map(v => v.answer)


    return (
        <section>
                {api.map(v => (
                    <>
                        <h2>Test</h2>
                        <h3>{v.question}</h3>
                        <p>{v.answer}</p>
                    </>
                    ))} 
            </section>
    )
}

export default Home