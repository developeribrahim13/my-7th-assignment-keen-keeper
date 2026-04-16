import React from 'react';

const Error = () => {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center">
            <div className="text-center px-6">
                <h1 className="text-9xl font-extrabold text-[#244D3F]">404</h1>
                <div className="divider w-48 mx-auto"></div>
                <h2 className="text-2xl font-bold text-base-content mb-3">
                    Page Not Found
                </h2>
                <p className="text-base-content/60 mb-8 max-w-sm mx-auto">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                    <button
                        className="btn btn-outline text-[#244D3F] outline-[#244D3F]"
                        onClick={() => window.history.back()}
                    >
                        ← Go Back
                    </button>
                    <button
                        className="btn bg-[#244D3F] text-white"
                        onClick={() => window.location.href = '/'}
                    >
                        Go to Home
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Error;