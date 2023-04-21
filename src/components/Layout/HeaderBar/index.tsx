import moment from 'moment';
import React, { useEffect, useState } from 'react';

export default function HeaderBar({ title }:any) {

    const [time, setTime] = useState("loading.....")


    useEffect(() => {
        setTime(moment(new Date).format('h:mm a'))

    }, [])


    return (
        <div className="middle-menu-top-section">
            <div className="text-block-4">{title}</div>
            <div>
                <div className="time">{time}</div>
                <div className="location">PST</div>
            </div>
        </div>
    )
}