"use client"
import { useEffect, useState } from "react";


/**
 * React Hook to get the scroll percentage from the page, returns value from 0 to 100
 */
export function useReadingProgress() {
    const [completion, setCompletion] = useState(0);
    useEffect(() => {
        function updateScrollCompletion() {
            // see how much we have scrolled
            const currentProgress = window.scrollY;
            // see how much total scroll is available
            let scrollHeight = document.body.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setCompletion(
                    Number((currentProgress / scrollHeight).toFixed(2)) * 100
                );
            }
        }
        // add scroll event listener
        window.addEventListener("scroll", updateScrollCompletion);

        // remove scroll event listener on umount
        return () => {
            window.removeEventListener("scroll", updateScrollCompletion);
        };
    }, []);
    return completion;
}

const ProcessBar = () => {
    const completion = useReadingProgress();

    return (
        <nav className="sticky z-50 top-0 backdrop-blur-3xl  bg-[#161513] ">
            <span
                id="progress-bar"
                style={{
                    transform: `translateX(${completion - 100}%)`,
                }}
                className={`absolute top-0 w-full transition-transform duration-150 h-[7px] bg-orange-300`}
            />
            {/* Rest of the NavBar */}
        </nav>
    )
}

export default ProcessBar