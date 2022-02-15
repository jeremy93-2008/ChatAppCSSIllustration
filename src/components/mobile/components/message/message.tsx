import React from 'react'
import './message.scss'

export interface IMessageProps extends JSX.ElementChildrenAttribute {
    isYou?: boolean
    isImageMessage?: boolean
    isWalkMessage?: boolean
}

export function Message({
    isYou,
    isImageMessage,
    isWalkMessage,
    children,
}: IMessageProps) {
    return (
        <div
            className={`message__container ${isYou ? 'your__message' : ''} ${
                isImageMessage ? 'image__message' : ''
            } ${isWalkMessage ? 'walk__message' : ''}`}
        >
            {children}
        </div>
    )
}
