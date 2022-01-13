import React, {useState} from "react"
import Tag from "./tag"
import { Heart } from 'react-feather';

export default function NASAImage(props: {date: string, imageLink: string, name: string, camera: string}) {

  let [liked, setLiked] = useState(false)

  return (
    <div className="container flex-col">
      <div 
        style={{backgroundImage: `url(${props.imageLink})`}} 
        className="image-container"
      > 
        <div className="image-contents" style={{opacity: liked == true ? 1 : ""}}>
          <div className="black-grad-bg" />
          <div 
            className="heart-container scale-up" 
            onClick={() => setLiked(!liked)} 
            style={{backgroundColor: liked == true ? "rgba(252, 221, 236, 1)" : "rgba(248, 248, 248, 1)"}}
          >
            <Heart 
            className={liked == true ? "heart scale-up" : "heart"} 
            color={liked == false ? "#98A2B3" : "#EF5DA8"} 
              fill={liked == false ? "#98A2B3" : "#EF5DA8"} 
              size={24}
            /> 
          </div>  
        </div>
        
      </div>
      <div className="flex-col">
        <Tag img="date" text={props.date} />
        <p className="img-title">{props.name} Rover - {props.camera}</p>
      </div>
    </div>
  )
}
