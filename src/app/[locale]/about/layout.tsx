import { GeistSans } from 'geist/font/sans';
import '../globals.css';
import Navbar from '@/src/components/Navbar';
import { Toaster } from '@/src/components/ui/toaster';
import SecondaryNavbar from '@/src/components/SecondaryNavbar';
import Syncer from '@/src/components/Syncer';

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: 'CarbonAI: Customer Portal',
    description: 'Admin console for CarbonAI customers.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={GeistSans.className}>
            <body className="text-zinc-700">
                <main className="flex min-h-screen flex-col items-center">
                    <Syncer />
                    <Navbar />
                    <SecondaryNavbar />
                    <div className="w-full max-w-4xl opacity-0 animate-in">
                        {children}
                    </div>
                    <Toaster />
                </main>
            </body>
        </html>
    );
}
