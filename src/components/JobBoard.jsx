import { useEffect, useState } from "react";
import JobItem from "./JobItem";

export const JobBoard = ({ category }) => {
    const [jobs, setJobs] = useState([]);
    const [throttleSeconds, setThrottleSeconds] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(() => {
        let timer;

        const fetchJobs = async () => {
            console.log(`Fetching new job data for category: ${category}...`);

            try {
                const URL = `https://cors-anywhere.herokuapp.com/https://jobdataapi.com/api/jobs/?title=${category}&country_code=US&posted_after=30`;

                const response = await fetch(URL, {
                    headers: {
                        "Origin": "http://localhost:5173",
                    },
                });

                console.log("Response status:", response.status);
                const data = await response.json();
                console.log("API response:", data);

                // Check for throttling message
                if (data.detail) {
                    const match = data.detail.match(/\d+/);
                    const seconds = match ? parseInt(match[0], 10) : 0;

                    setThrottleSeconds(seconds);
                    setMessage("Request throttled. Please wait...");
                    setJobs([]);
                } else {
                    setJobs(data.results || []);
                    setMessage("");
                    setThrottleSeconds(0);
                }
            } catch (error) {
                console.error("Error fetching jobs:", error);
                setMessage("Failed to fetch job data.");
            }
        };

        // Fetch jobs immediately when component mounts or category changes
        if (throttleSeconds === 0) {
            fetchJobs();
        }

        // Handle countdown if throttled
        if (throttleSeconds > 0) {
            timer = setInterval(() => {
                setThrottleSeconds((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        // Optionally retry fetching once cooldown ends
                        // fetchJobs();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [category, throttleSeconds]);

    return (
        <div style={{ backgroundColor: "#4E56C0", padding: "0 40px" }}>
            <h2
                className="text-center"
                style={{ padding: "0.75rem 0", margin: 0, color: "white" }}>Latest Jobs</h2>
            <hr
                style={{
                    border: "none",
                    height: "3px",
                    margin: "0 0 20px 0",
                    backgroundColor: "#fff",
                }}
            />

            <div className="d-flex flex-wrap justify-content-center gap-4">
                {throttleSeconds > 0 ? (
                    <p style={{ color: "white", fontWeight: "bold" }}>
                        {message} Retry in {throttleSeconds} second
                        {throttleSeconds !== 1 ? "s" : ""}.
                    </p>
                ) : jobs.length > 0 ? (
                    jobs.map((job, index) => (
                        <JobItem
                            key={index}
                            title={job.title}
                            description={job.location}
                            src={job.company?.logo}
                            name={job.company?.name}
                            url={job.application_url}
                            date={job.published}
                        />
                    ))
                ) : (
                    <p style={{ color: "white", fontWeight: "bold" }}>
                        No job data found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default JobBoard;