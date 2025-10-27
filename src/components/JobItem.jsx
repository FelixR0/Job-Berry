export const JobItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px", height: "420px", overflow: "hidden", borderRadius: "25px" }}>
            <img src={src || "cat.gif"} className="card-img-top" alt={title} style={{ width: "100%", height: "200px", objectFit: "cover", objectPosition: "top", borderRadius: "15px", overflow: "hidden" }} />
            <div className="card-body" style={{ height: "calc(100% - 200px)", padding: "5px 5px 40px 5px" }}>
                <h5 className="card-title" style={{ color: "#FDCFFA", width: "100%", marginBottom: "5px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</h5>
                <p className="card-text" style={{width: "100%", display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden", textOverflow: "ellipsis" }}>{description ? description : "No job description found."}</p>
                <div style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", width: "calc(100% - 17px)" }}>
                    <a href={url} className="btn btn-purple" style={{ display: "block", width: "100%", borderRadius: "15px", fontWeight: "500" }}>Apply Now</a>
                </div>
            </div>
        </div>
    )
}

export default JobItem