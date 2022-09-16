// our-domain.com/news
import Link from "next/link";
import React from "react";

function NewsPage() {
    return (
        <>
            <h1>The News Page</h1>
            <ul>
                <li> <Link href="/news/nextjs-is-a-great-framework">NextJs Is A Great Framework</Link></li>
                <li><a href="">Something Else</a></li>
            </ul>
        </>
    )
}

export default NewsPage;