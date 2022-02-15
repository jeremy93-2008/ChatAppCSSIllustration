import React from 'react'
import {
    FaCaretLeft,
    FaCaretRight,
    FaCircle,
    FaEllipsisV,
} from 'react-icons/fa'
import Profile from '../../assets/avatar.jpg'
import './mobile.scss'
import { Message } from './components/message/message'

import Dog1 from '../../assets/dog-image-1.jpg'
import Dog2 from '../../assets/dog-image-2.jpg'
import Dog3 from '../../assets/dog-image-3.jpg'

export function Mobile() {
    return (
        <div className="mobile__container">
            <div className="mobile__notch" />
            <div className="mobile__header">
                <FaCaretLeft className="mobile__header--caret" />
                <div className="mobile__header--profile">
                    <img alt="avatar" src={Profile} />
                </div>
                <div className="mobile__header--text">
                    <h4>Simon Green</h4>
                    <span>Available to Walk</span>
                </div>
                <div className="mobile__header--option">
                    <FaEllipsisV />
                </div>
            </div>
            <div className="mobile__content">
                <Message> That sounds great. I’d be happy with that.</Message>
                <Message>
                    Could you send over some pictures of your dog, please?
                </Message>
                <Message isYou={true} isImageMessage={true}>
                    {[Dog1, Dog2, Dog3].map((doggo) => (
                        <img src={doggo} />
                    ))}
                </Message>
                <Message isYou={true}>
                    Here are a few pictures. She’s a happy girl!
                </Message>
                <Message isYou={true}>Can you make it?</Message>
                <Message>
                    She looks so happy! The time we discussed works. How long
                    shall I take her out for?
                </Message>
                <Message isWalkMessage={true}>
                    <FaCircle />
                    <div>30 minute walk</div>
                    <div className="price">$29</div>
                </Message>
                <Message isWalkMessage={true}>
                    <FaCircle />
                    <div>1 hour walk</div>
                    <div className="price">$49</div>
                </Message>
                <div className="mobile__input">
                    <input
                        readOnly
                        type="text"
                        placeholder="Type a message..."
                    />
                    <div className="mobile__submit">
                        <FaCaretRight />
                    </div>
                </div>
            </div>
        </div>
    )
}
