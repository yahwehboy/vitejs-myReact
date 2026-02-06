function Profile(values){
    const {name, position="Not Assigned"} = values
    return (
        <>
            <div className="card">
                <img src="img/mine.jpg" />
                <h1>{name}</h1>
                <p className="title">{position}</p>
                <p className="uni">FUTA</p>
                <div className="socials">
                    <a href="#" target="_blank"><i className="fa fa-dribbble"></i></a>
                    <a href="#" target="_blank"><i className="fa fa-twitter"></i></a>
                    <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a>
                    <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                </div>
            </div>
        </>
    )
}

export default Profile