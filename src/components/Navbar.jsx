
export const Navbar = ({ setCategory }) => {

    const jobGroups = {
        developer: [
            "Applications Engineer",
            "Backend Developer",
            "Computer Applications Programmer",
            "Computer Programmer",
            "Computer Scientist",
            "Computer Software Engineer",
            "Computer Systems Designer",
            "Computer Systems Programmer",
            "Engineer I",
            "Engineer II",
            "Engineer III",
            "Games Developer",
            "iOS Engineer",
            "Java Developer",
            "Programmer",
            "Scientific Programmer",
            "Software Applications Developer",
            "Software Developer",
            "Software Engineer",
            "Software Engineer I",
            "Software Engineer II",
            "Software Engineer III",
            "Software Quality Assurance (QA) Tester",
            "Software Systems Developer",
            "Software Test Engineer",
            "Web Developer",
            "Web Designer/Developer",
        ],
        design: [
            "Advisory UX Designer",
            "Creative Experiences Designer",
            "Graphic Designer",
            "Information Architect",
            "Interaction Designer",
            "Mobile UX Designer",
            "Product Designer",
            "Sr Human Factors Engineer",
            "UI Designer",
            "UI/UX Engineer",
            "UI/UX Web Designer",
            "UI Engineer",
            "UX Designer",
            "UX Project Manager",
            "UX Project/Program Manager",
            "UX Program Manager",
            "UX Researcher",
            "UX / Interaction Developer",
            "UX/UI Designer",
            "UX/UI Web Designer/Developer",
            "UX Writer",
            "Visual Designer",
            "User Experience Consultant",
        ],
        management: [
            "Agile Champ",
            "Agile Coach",
            "Delivery Manager",
            "IT Project Manager",
            "Portfolio Manager",
            "Product Manager",
            "Product Owner",
            "Program Director",
            "Program Manager",
            "Project Coordinator",
            "Project Director",
            "Project Lead",
            "Release Manager",
            "Scrum Master",
            "Substation Project Manager",
            "Technical Project Manager",
            "Utility Project Manager",
        ],
    };

    const buildJobQuery = (titles) =>
        titles.map((title) => title.replace(/ /g, "+")).join("|OR|");

    return (
        <nav className="navbar navbar-expand-lg navbar-dark-purple" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><span className="badge-purple text-center fs-4">Joberry</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item" onClick={() => {
                            console.log("Clicked developer");
                            setCategory(buildJobQuery(jobGroups.developer));
                        }}>
                            <div className="nav-link">Software Development</div>
                        </li>

                        <li className="nav-item" onClick={() => {
                            console.log("Clicked design");
                            setCategory(buildJobQuery(jobGroups.design)) 
                        }}>
                            <div className="nav-link">UX/UI & Design</div>
                        </li>

                        <li className="nav-item" onClick={() => {
                            console.log("Clicked management");
                            setCategory(buildJobQuery(jobGroups.management))
                        }}>
                            <div className="nav-link">Management</div>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar