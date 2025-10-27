import JobItem from "./JobItem"
import { useEffect, useState } from "react";

export const JobBoard = ({category}) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
    }, [category])

    return (
        <div style={{backgroundColor: "#4E56C0", padding: "0 40px"}}>
            <h2 className="text-center" style={{padding: "0.75rem 0", margin: 0, color: "white"}}>Latest Jobs</h2>
            <hr style={{ border: "none", height: "3px", margin: "0 0 20px 0", backgroundColor: "#fff"}}/>
            <div className="d-flex flex-wrap justify-content-center gap-4">
            {articles.map((jobs, index) => {
                return <JobItem key={index} title={jobs.title} description={jobs.description} src={jobs.urlToImage} url={jobs.url}/>
            })}
            </div>
        </div>
    )
}

export default JobBoard