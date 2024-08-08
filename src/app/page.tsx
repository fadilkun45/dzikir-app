"use client"

import { useState } from "react";


export default function Home() {
  const [jumlah, setJumlah] = useState(0)
  const [perulangan, setPerulangan] = useState(0)


  const increment = () => {
      if(jumlah === 33){
        setJumlah(1)
        setPerulangan(perulangan + 1)
      }else{
        setJumlah(jumlah + 1)
      }
  }

  return (
    <div className="flex flex-col w-full justify-center items-center h-screen">
        <h1 className="text-2xl text-center">Dzikir App</h1>
        <p className="text-2xl my-2">Jumlah : {jumlah}</p>
        <p className="text-xl my-2">perulangan ke : {perulangan}</p>
        <button className="border bg-gray-500 mt-2 px-3 py-2 rounded-lg text-xl" onClick={increment}>Klik untuk tambah</button>
        
          <button className="border bg-gray-500 mt-8 px-3 py-2 rounded-lg text-xl " disabled={jumlah === 0 ? true : false} onClick={() => {setJumlah(0);setPerulangan(0)}}>Restart</button> 
        
    </div>
  );
}
