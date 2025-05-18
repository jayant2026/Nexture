"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        author: string;
        position?: string;
        company?: string;
        imageSrc?: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards",
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse",
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 w-full overflow-hidden",
                className,
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]",
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="relative w-[90vw] max-w-full shrink-0 rounded-2xl border border-b-0 border-slate-200 p-5 md:p-10 md:w-[60vw]"
                        style={{
                            background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
                        }}
                        key={idx}
                    >
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>
                            <span className="relative z-20 text-sm md:text-lg leading-[1.6] font-normal text-gray-700">
                                "{item.quote}"
                            </span>
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                                {item.imageSrc && (
                                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                                        <img src={item.imageSrc} alt={item.author} className="h-full w-full object-cover" />
                                    </div>
                                )}
                                <div className="flex flex-col">
                                    <span className="text-xl font-semibold text-gray-800">
                                        {item.author}
                                    </span>
                                    <div className="flex flex-col md:flex-row md:items-center">
                                        <span className="text-sm text-gray-600">
                                            {item.position}
                                        </span>
                                        {item.position && item.company && (
                                            <span className="hidden md:inline mx-1 text-gray-500">•</span>
                                        )}
                                        <span className="text-sm text-gray-600">
                                            {item.company}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};