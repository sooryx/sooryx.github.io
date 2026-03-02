"use client";

import { cn } from "@/lib/utils";
import {
    CheckCircle,
    Clock,
    Star,
    TrendingUp,
    Video,
    Globe,
    ExternalLink,
} from "lucide-react";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
    link?: string;
}

interface BentoGridProps {
    items: BentoItem[];
}

function BentoGrid({ items }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative p-6 rounded-2xl overflow-hidden transition-all duration-300",
                        "border border-white/10 bg-white/5",
                        "hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]",
                        "hover:-translate-y-1 will-change-transform",
                        item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
                        {
                            "shadow-[0_2px_12px_rgba(255,255,255,0.03)] -translate-y-1":
                                item.hasPersistentHover,
                        }
                    )}
                >
                    <div
                        className={`absolute inset-0 ${item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                            } transition-opacity duration-300`}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
                    </div>

                    <div className="relative flex flex-col h-full justify-between space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                                {item.icon}
                            </div>
                            <div className="flex items-center gap-2">
                                {item.link && (
                                    <a href={item.link} target="_blank" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all">
                                        <ExternalLink size={16} />
                                    </a>
                                )}
                                <span
                                    className={cn(
                                        "text-xs font-medium px-2.5 py-1 rounded-lg backdrop-blur-sm",
                                        "bg-white/10 text-gray-300",
                                        "transition-colors duration-300 group-hover:bg-white/20"
                                    )}
                                >
                                    {item.status || "Active"}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-bold text-white tracking-tight text-xl flex items-center gap-2">
                                {item.title}
                                {item.meta && (
                                    <span className="text-xs text-gray-500 font-normal">
                                        {item.meta}
                                    </span>
                                )}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-[425]">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <div className="flex flex-wrap items-center gap-2">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-neutral-400 uppercase tracking-wider border border-white/5 transition-all duration-200 hover:bg-white/10"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                {item.cta || "View Project →"}
                            </span>
                        </div>
                    </div>

                    <div
                        className={`absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-white/10 to-transparent ${item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                            } transition-opacity duration-300`}
                    />
                </div>
            ))}
        </div>
    );
}

export { BentoGrid }
