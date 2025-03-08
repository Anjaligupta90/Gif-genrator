import { useEffect, useState } from "react";
import  axios from 'axios';
import { Spinnar } from "./Spinnar";
import useGif from "../hooks/useGif";

export default function Tag() {

  const [tag, settag]=useState('car');

  // const [gif, setGif] = useState("");
  // const [loder, setLoder]=useState(false);

  // async function fetchdata()
  //  {
  //   setLoder(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY} &tag=${tag}`;
  //    const {data}= await axios.get(url);
  //    const imagesource=data.data.images.downsized_large.url;
  //    setGif(imagesource);
  //    setLoder(false);
  // }

  // useEffect (()=>{
  //   fetchdata();
  // },[])

  function clickHandler() {
       fetchdata(tag);
     }

     function changeHandler(event)
      {
        settag(event.target.value);
      }

  const [gif,loading,fetchdata]=useGif(tag);

  return (
    <div className=" w-1/2 h-[450px] bg-green-600 p-4 flex flex-col items-center border-2 border-blue-500 gap-y-5 mt-5 justify-between">
      <h1 className="text-xl font-bold">Random Gif {tag}</h1>
      {
        loading? (<Spinnar/>) : (<img src={gif} width="450" alt="image GIF" className="object-cover" />)
      }
      <input type="text" className="py-2 px-4 rounded w-10/12 mb-[-3px] text-center bg-gray-400" onChange={changeHandler} value={tag}></input>

      <button onClick={clickHandler} className="mt-4 bg-gray-400 text-black py-2 px-4 rounded w-10/12">
        Generate
      </button>
    </div>
  );
}
