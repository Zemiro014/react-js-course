// import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 10, 12345 City',
        description: 'This is a Second meetup!'
    }
]
function HomePage(props) {
    // const [loadMeetup, setLoadMeetup] = useState([])

    // useEffect(() => {
    //     console.log("Aqui")
    //     setLoadMeetup(DUMY_MEETUPS)
    // }, [])
    return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMY_MEETUPS,
        }
    };
}

export default HomePage;