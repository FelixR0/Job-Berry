import { useState, useEffect } from "react";

export const JobItem = ({ title, description, src, url, name, date }) => {
    const fallback = "/cat.gif";
    const [imgSrc, setImgSrc] = useState(src || fallback);
    const [errored, setErrored] = useState(false);
    const [formattedDate, setFormattedDate] = useState("");

    useEffect(() => {
        if (date) {
            const d = new Date(date);
            const options = { year: "numeric", month: "long", day: "numeric" };
            setFormattedDate(`Posted: ${d.toLocaleDateString("en-US", options)}`);
        } else {
            setFormattedDate("");
        }
    }, [date]);

    useEffect(() => {
        setImgSrc(src || fallback);
        setErrored(false);
    }, [src]);

    const handleError = () => {
        if (!errored) {
            setImgSrc(fallback);
            setErrored(true); // prevent looping
        }
    };

    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ width: "345px", height: "420px", overflow: "hidden", borderRadius: "25px" }} onError={handleError}>
            <img src={imgSrc} className="card-img-top" alt={title} style={{ width: "100%", height: "200px", objectFit: "cover", objectPosition: "center", borderRadius: "15px", overflow: "hidden" }} />
            <div className="card-body" style={{ height: "calc(100% - 200px)", padding: "5px 5px 40px 5px", position: "relative" }}>
                <h5 className="card-title" style={{ color: "#FDCFFA", width: "100%", marginBottom: "5px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", textOverflow: "ellipsis" }}>{title ? title : "Unknown Job"}</h5>
                <h6 className="card-text" style={{ width: "100%", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", textOverflow: "ellipsis" }}>{name ? name : "Unkown Company"}</h6>
                <p className="card-text" style={{ width: "100%", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" }}>{description ? description : "Unknown Location"}</p>
                <p className="card-text" style={{ position: "absolute", bottom: "55px", left: "50%", transform: "translateX(-50%)", width: "calc(100% - 10px)", textAlign: "center", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", textOverflow: "ellipsis", margin: 0 }}>{formattedDate ? formattedDate : "Posted: Unkown Date"}</p>
                <div style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", width: "calc(100% - 17px)" }}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-purple" style={{ display: "block", width: "100%", borderRadius: "15px", fontWeight: "500" }}>Apply Now</a>
                </div>
            </div>
        </div>
    )
}

export default JobItem