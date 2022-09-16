// our-domain.com/something/*
import { useRouter } from "next/router";
import React from "react";

function DynamicPage() {
    const router = useRouter();

    console.log(router.query.newsId)
    const newsId = router.query.newsId;
    //send a request to the backend API
    // to fetch the news item with newsId

    return <h1>The Dynamic Page</h1>
}

export default DynamicPage;