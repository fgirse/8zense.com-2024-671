import {BasejumpUserSession,SignedIn,SignedOut} from "@usebasejump/next";
import UserAccountButton from "@/src/components/basejump/userAccountButton"
import Link from "next/link";


export default function Navigation() {
        return (
            <nav>
        
                <BasejumpUserSession>
                    <SignedIn>
                        <UserAccountButton />
                    </SignedIn>
                    <SignedOut>
                        

                       
                        <div className="w-full bg-[#bbbbbb] hover:bg-red-700 hover:text-white  h-16 flex -col items-center px-5 py-5lg:h-24 ">
                        <Link className=" uppercase" href="/sign-in">Login 
                        </Link>
                        </div>
                        
             

                    </SignedOut>
                </BasejumpUserSession>
            </nav>
        )
    }
