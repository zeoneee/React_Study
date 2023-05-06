function Diary({title, contents}){
    return(
        <div style={styles}>
            <p>My diary</p>
            <h1>{title}</h1>
            <p>{contents}</p>
        </div>
    );
}

const styles = {
    width: "30vw",
    height: 150,
    backgroundColor: "grey",
}

export default Diary;