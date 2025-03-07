import React, {useState, useEffect} from "react";
import Head from "next/head"
import {faIcon} from '@fortawesome/free-solid-svg-icons'

import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

const IndexPage = () => {
    const [isArticleVisible, setIsArticleVisible] = useState(false);
    const [timeout, setTimeout] = useState(false);
    const [articleTimeout, setArticleTimeout] = useState(false);
    const [article, setArticle] = useState("");
    const [loading, setLoading] = useState("is-loading");

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading("");
        }, 100);
        return () => clearTimeout(timeoutId)
    }, []);

    const handleOpenArticle = (article) => {
        setIsArticleVisible(!isArticleVisible);
        setArticle(article);
        setTimeout(() => {
            setTimeout(!timeout)
        }, 325);
        setTimeout(() => {
            setArticleTimeout(!articleTimeout)
        }, 350);
    };

    const handleCloseArticle = () => {
        setArticleTimeout(!articleTimeout);
        setTimeout(() => {
            setTimeout(!timeout)
        }, 325);
        setTimeout(() => {
            setIsArticleVisible(!isArticleVisible);
            setArticle("");
        }, 350);
    };

    return (
        <div className={`body ${loading} ${isArticleVisible ? "is-article-visible" : ""}`}>
            <div>
                <Head>
                    <title>Matthew Nguyen Portfolio</title>
                    <link rel="icon" type="image/x-icon" href="/static/images/favicon.ico"></link>
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                </Head>

                <div id="wrapper">
                    <Header onOpenArticle={handleOpenArticle} timeout={timeout} />
                    <Main
                        isArticleVisible={isArticleVisible}
                        timeout={timeout}
                        articleTimeout={articleTimeout}
                        article={article}
                        onCloseArticle={handleCloseArticle}
                    />
                    <Footer timeout={timeout} />
                </div>

                <div id="bg" />
            </div>
        </div>
    );
};

export default IndexPage;