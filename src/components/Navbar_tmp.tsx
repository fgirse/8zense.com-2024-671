import React from 'react';
import OrgSelector from '@/src/components/OrgSelector';
import UserNav from '@/src/components/UserNav';
import { getUserOnServer } from '@/src/utils/supabase/user';


async function fetchUserOnServer() {
    // Fetch user data from your server or database
    const response = await fetch('https://udgzvdcpuzoackembinq.supabase.co/Rest/v1/',     );
    const userData = await response.json();
    return userData;
}
async function Navbar() {
    const user_data = await fetchUserOnServer();
    const secret = user_data.secret;


    
    return (
        <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
            <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
                <OrgSelector/>
                <div className="flex gap-2 items-center">         
                    <UserNav secret={secret}/>
                </div>
               
            </div>
        </nav>
    );
}

export default Navbar;
