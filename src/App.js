import React from 'react';

import Header from './components/Header'
import Card from './components/Card'
import data from './components/data.js'


function App() {

    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <>
            <Header />
            <section className="projects">
                <div className="container">
                    <ul className="cards-list">

                        {cards}

                    </ul>
                </div>
            </section>
        </>
    )
}

export default App