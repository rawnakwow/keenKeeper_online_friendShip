const Errorpage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center p-6 font-sans">
            <h1 className="text-9xl font-extrabold text-emerald-700">404</h1>
            <p className="text-2xl font-bold text-base-content mt-4">Oops! Page Not Found</p>
            <p className="text-sm text-base-content/60 mt-2 max-w-sm">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <a href="/" className="btn bg-[#1b4332] text-white hover:bg-[#143225] border-none mt-6 px-6">
                Back to Home
            </a>
        </div>
    );
};


export default Errorpage; 
