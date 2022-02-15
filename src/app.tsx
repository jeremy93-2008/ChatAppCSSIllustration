import React from 'react'
import { Mobile } from './components/mobile/mobile'

export function App() {
    return (
        <div className="container">
            <div className="container__block" />
            <div className="container__mobile">
                <Mobile />
            </div>
            <div className="container__text">
                <div className="container__text--content">
                    <h1>Simple booking</h1>
                    <p>
                        Stay in touch with our dog walkers through the chat
                        interface. This makes it easy to discuss arrangements
                        and make bookings. Once the walk has been completed you
                        can rate your walker and book again all through the
                        chat.
                    </p>
                </div>
            </div>
        </div>
    )
}
