import { useEffect, useState } from "react";
import  axios from 'axios';
import { Spinnar } from "./Spinnar";
import useGif from "../hooks/useGif";


export default function Random() {

  // const [gif, setGif] = useState("");
  // const [loder, setLoder]=useState(false);
  // const [tag ,settag]=useState('car');

  // async function fetchdata()
  //  {
  //   setLoder(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //    const {data}= await axios.get(url);
  //    const imagesource=data.data.images.downsized_large.url;
  //    setGif(imagesource);
  //    setLoder(false);
  // }

  // useEffect (()=>{
  //   fetchdata();
  // },[])

  const [gif,loading,fetchdata]= useGif();

  function clickHandler() {
    fetchdata();
  }

  return (
    <div className="w-1/2 h-[450px] bg-green-600 p-4 flex flex-col items-center border-2 border-black gap-y-5 mt-5 justify-between">
      <h1 className="text-xl font-bold">Random Gif</h1>
      {
        loading? (<Spinnar/>) : (<img src={gif} width="450" alt="image GIF" />)
      }
      <button onClick={clickHandler} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-10/12">
        Generate
      </button>
    </div>
  );
}