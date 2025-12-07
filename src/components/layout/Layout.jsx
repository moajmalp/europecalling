import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-surface-light dark:bg-surface-dark transition-colors duration-300 font-sans">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow pt-20 w-full overflow-x-hidden">
                {children}
            </main>
            <Footer />
            {/* WhatsApp Floating Button can go here */}
            <a
                href="https://wa.me/YOURNUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-[0_4px_20px_rgba(22,163,74,0.4)] transition-all hover:scale-110 flex items-center justify-center group"
                aria-label="Contact on WhatsApp"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 fill-current"
                >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0 .5-.5l.14-.35c.04-.15.15-.3.26-.33a.5.5 0 0 1 .5.5 2.5 2.5 0 0 0 5 0 .5.5 0 0 1 .5-.5c.15 0 .3.14.33.26l.35.14c.15.04.3.15.33.26a.5.5 0 0 1-.5.5H15a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5c.15 0 .3.14.33.26l.35.14c.15.04.3.15.33.26a.5.5 0 0 1-.5.5H9" stroke="none" />
                    {/* Simple phone icon as placeholder if needed, or just standard whatsapp SVG path */}
                    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 9.904 2h-.032A11.021 11.021 0 0 0 2.81 5.303 11.868 11.868 0 0 0 .1 12.068c0 2.122.548 4.14 1.518 5.86l-1.618 5.91L5.93 22.22c1.65.91 3.52 1.39 5.442 1.39h.032a11.862 11.862 0 0 0 11.868-11.868 11.803 11.803 0 0 0-3.417-8.418" />
                </svg>
            </a>
        </div>
    );
};

export default Layout;
