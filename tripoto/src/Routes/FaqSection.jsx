import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "Itinerary",
    rows: [
        {
            title: "Day 1",
            content: `Check-in at around noon, and take a walk exploring this nature friendly retreat.
            Post lunch.
            In the evening, attend an exciting session on Kalaripayattu and burn away the holiday calories.
            Enjoy a hot and delicious dinner with a side of starry skies.`,
            
        },
        {
            title: "Day 2",
            content:
                "06:30 am: Wake up to the chirping of birds and volunteer at an organic farm Enjoy a well-deserved hearty breakfast. It's time to explore Auroville like never before! Go cycling around the property and hit the rustic trails of Spirulina farm, Svaram sound garden and Matrimandir. Connect with fellow travelers, explore the town’s many cafes and of course, enjoy a delicious lunch at the property.",
        },
        {
            title: "Day 3",
            content: `Enjoy your breakfast,
            Share warm hugs with the hosts and bid goodbye to this beautiful retreat. `,
        },
    ],
};

const styles = {
   bgColor: 'white',
    titleTextColor: "teal",
    rowTitleColor: "green",
     rowContentColor: 'grey',
     arrowColor: "red",
};

const config = {
    animate: true,
    tabFocus: true
};

export default function FaqSection() {

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}