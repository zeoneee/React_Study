export default function ParentComp(){
    const person = {
        name: "John",
        age: 30,
        city: "New York",
    }
    return <ChildComp {...person} />;
}

function ChildComp({name, age, city}){
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>City: {city}</p>
        </div>
    )
}