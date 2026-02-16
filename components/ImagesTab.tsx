"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from './ui/button';

const ImagesTab = () => {

    const [activeTab, setActiveTab] = useState("organize");

    return (
        <>
            <section className="border-t bg-white py-16" >
                <div className="max-w-7xl mx-auto">
                    <div className="mx-auto max-w-5xl">
                        {/* Tabs */}
                        <div className="flex gap-2 justify-center mb-8">
                            <Button
                                onClick={() => setActiveTab("organize")}
                                className={`cursor-pointer rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "organize"
                                    ? "bg-primary text-white"
                                    : "bg-gray-100 text-gray-600"
                                    }`}
                            >
                                Organize Applications
                            </Button>
                            <Button
                                onClick={() => setActiveTab("hired")}
                                className={`cursor-pointer rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "hired"
                                    ? "bg-primary text-white"
                                    : "bg-gray-100 text-gray-600"
                                    }`}
                            >
                                Get Hired
                            </Button>
                            <Button
                                onClick={() => setActiveTab("boards")}
                                className={`cursor-pointer rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "boards"
                                    ? "bg-primary text-white"
                                    : "bg-gray-100 text-gray-600"
                                    }`}
                            >
                                Manage Boards
                            </Button>
                        </div>
                        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg shadow-xl border border-gray-200">
                            {
                                activeTab === "organize" &&
                                <Image
                                    src="/hero-images/hero1.png"
                                    alt="Organize Applications"
                                    width={1200}
                                    height={800}
                                />
                            }

                            {
                                activeTab === "hired" &&
                                <Image
                                    src="/hero-images/hero2.png"
                                    alt="Get Hired"
                                    width={1200}
                                    height={800}
                                />
                            }

                            {
                                activeTab === "boards" &&
                                <Image
                                    src="/hero-images/hero3.png"
                                    alt="Manage Borads"
                                    width={1200}
                                    height={800}
                                />
                            }
                        </div>
                    </div>
                </div>
            </section >
        </>

    )
}

export default ImagesTab