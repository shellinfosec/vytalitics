import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const PlaceholderPage = () => {
    const { page } = useParams();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const title = page
            ? page.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())
            : "Coming Soon";
        document.title = `${title} | Vytalitics`;
    }, [page]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const pageTitle = page
        ? page.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())
        : "Coming Soon";

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 relative overflow-hidden pt-20 flex flex-col items-center justify-center">
                {/* Dynamic glow following mouse */}
                <div
                    className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-all duration-1000 ease-out opacity-30"
                    style={{
                        background: "radial-gradient(circle, hsl(181 82% 26% / 0.3) 0%, transparent 70%)",
                        left: mousePosition.x - 300,
                        top: mousePosition.y - 300,
                    }}
                />

                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-hero" />
                <div className="hero-glow w-full h-[400px] top-0" />

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-primary/30 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        />
                    ))}
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="glass-card p-12 max-w-2xl mx-auto animate-float">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse ring-4 ring-primary/5">
                            <span className="text-4xl">🚧</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                            {pageTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            We're crafting something exceptional here. The <span className="text-foreground font-medium">{pageTitle}</span> page is currently under development to ensure it meets our high standards.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-primary/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            >
                                Return Home
                            </a>
                            <a
                                href="/#contact"
                                className="inline-flex items-center justify-center rounded-lg border border-input bg-background/50 backdrop-blur-sm px-8 py-3 text-sm font-medium shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105"
                            >
                                Contact Support
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PlaceholderPage;
