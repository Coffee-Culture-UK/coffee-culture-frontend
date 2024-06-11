"use client"
import Login from "@/components/auth/loginModal";
import Register from "@/components/auth/registerModal";
import Hero from "@/components/hero/hero";
import { useSearchParams } from 'next/navigation'
import { Suspense } from "react";

export default function Home() {
  const searchParams = useSearchParams();
    const register = searchParams.get('register') == 'true'
    const login = searchParams.get('login') == 'true';
  
  return (
    <main className="flex min-h-[calc(100vh-60px)] flex-col md:items-start md:justify-center items-center justify-start w-full md:mt-[60px] ">
      <Suspense>
      {register && <Register register={register}/>}
      {login && <Login login={login} />}
      <Hero/>
      </Suspense>

      <div className="h-screen w-full"></div>
    </main>
  );
}
