import Card from "./Card";
import Link from "next/link";


export default function PostCard({id,content,created_at,photos,profiles:authorProfile}) {
 

  return (
    <Card>
     
    <div className="flex gap-3">
   
    <div className="grow">
      <p>
          <span className="mr-1 font-semibold cursor-pointer hover:underline">
           Smith Johnson
          </span>
      </p>
      
    </div>
    <div className="relative">
      <button className="text-gray-400" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </button>
   
       
    </div>
  </div>
  <div>
    <p className="my-3 text-sm">Awesome Pic</p>
    <div className="flex">

    <div  className="rounded-md overflow-hidden">
    <img src="data:image/;base64,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" className="rounded-md w-80" alt=""/>
  </div>
  </div>
  </div>
  <div className="mt-5 flex gap-8">
    <button className="flex gap-2 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
     3
    </button>
    <button className="flex gap-2 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
      1
    </button>
    <button className="flex gap-2 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
      4
    </button>
  </div>
  <div className="flex mt-4 gap-3">
    <div>
    </div>
    <div className="border grow rounded-full relative">
      <form>
        <input
         
          className="block w-full p-3 px-4 overflow-hidden h-12 rounded-full" placeholder="Leave a comment"/>
      </form>
      <button className="absolute top-3 right-3 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      </button>
    </div>
  </div>
  
    </Card>
  );
}