import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun 01!' },
    { id: 'q2', author: 'Pedro', text: 'Learning React is fun 02!' },
    { id: 'q3', author: 'Jerónimo', text: 'Learning React is fun 03!' },
];

const QuoteDetail = () => {
    const params = useParams()
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No quote found !</p>;
    }

    return (
        <>
            <HighlightedQuote
                text={quote.text}
                author={quote.author}
            />
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </>
    )
}
export default QuoteDetail;