import Image from "next/image";
import React from "react";

const page = () => {
  return (
   <>
    <div className="min-h-screen w-full bg-red-100">
     
        <Image
          src="https://images.unsplash.com/photo-1775126679367-3057683ced2e?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="loading..."
          fill
          className="object-cover object-bottom w-1/2 h-1/3"
        />
      </div>

      <div className="h-1/2 w-full bg-red-900">
      hello</div>
   
   </>
  );
};

export default page;
