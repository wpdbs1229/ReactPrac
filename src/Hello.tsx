import exp from "node:constants";

interface Props{
    name?: string;
    color?: string;
}

/*export const Hello = ({name, color}:Props) => {
    return <div style={{color: color}}>Hello, {name}</div>;
}*/

function Hello({name = 'flature', color = 'blue'}:Props){
    return <div style={{color: color}}>Hello, {name}</div>;
}

export default Hello;
