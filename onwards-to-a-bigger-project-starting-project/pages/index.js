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
function HomePage() {
    return (
        <>
            <MeetupList meetups={DUMY_MEETUPS} />
        </>
    )
}

export default HomePage;