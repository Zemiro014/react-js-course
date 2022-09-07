import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun 01!' },
    { id: 'q2', author: 'Pedro', text: 'Learning React is fun 02!' },
    { id: 'q3', author: 'Jerónimo', text: 'Learning React is fun 03!' },
];

const AllQuotes = () => {
    return (
        <>
            <QuoteList quotes={DUMMY_QUOTES} />
        </>
    )
}
export default AllQuotes;