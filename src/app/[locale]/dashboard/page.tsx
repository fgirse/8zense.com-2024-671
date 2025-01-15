import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Image from 'next/image';


interface User {
  email: string;
  last_sign_in_at?: string;
  image_url?: string; // Add the image_url property
}

export default async function Profile() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  const extendedUser = user as User; // Cast user to User

  return (
    <section className=" bg-contain h-screen flex flex-col items-center justify-center gap-8 min-w-[10rem]">
      <div className="flex flex-col justify-center gap-8 min-w-[10rem] items-center rounded-2xl bg-white py-8 px-4 shadow-md sm:min-w-[24rem] sm:px-10card">
        <h2 className="text-sm bg-red-600/50 rounded-lg py-1 px-3 text-center text-white lg:text-xl">
          Du bist mit folgenden Daten bei 8zense.com angemeldet:
        </h2>
      </div>
      <div className="flex flex-row gap-x-5 items-center justify-center">
        <code className="ml-1 text-sm rounded-lg bg-gray-100 p-2 font-mono">{extendedUser.email}</code>
        <div className="heading text-sm">Last Signed In:</div>
        <code className="highlight text-sm">
          {extendedUser.last_sign_in_at ? new Date(extendedUser.last_sign_in_at).toUTCString() : 'N/A'}
        </code>
      </div>
      {extendedUser.image_url && (
        <Image src={extendedUser.image_url} alt="User Image" width={100} height={100} className="rounded-full" />
      )}
                            
      <header /> {/* Use the SupabaseAdmin component */}
    </section>
  );
}