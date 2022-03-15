import react from "react";

function importAll(r){
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

export default function ProjectItem({project}){

    const images = importAll(require.context('../assets/img', false, /.(png|jpe?g|svg)$/));

    return(
        <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img src={images[project.img]} />
        </div>
    )
}