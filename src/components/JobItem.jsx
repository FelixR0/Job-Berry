export const JobItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px", height: "420px", overflow: "hidden", borderRadius: "25px"}}>
            <img src={src || "cat.gif"} className="card-img-top" alt={title} style={{ width: "100%", height: "200px", objectFit: "cover", objectPosition: "top", borderRadius: "15px", overflow: "hidden"}}/>
            <div className="card-body">
                <h5 className="card-title" style={{width:"100%", marginBottom: "5px"}}>{title.slice(0, 50).trimEnd() + "..."}</h5>
                <p className="card-text" style={{width:"100%"}}>{description ? description.slice(0, 90).trimEnd() + "..." : "No job description found."}</p>
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                    <a href={url} className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default JobItem