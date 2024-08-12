"use client";

import { useEffect, useState } from 'react';
import Chat from "@/components/chatbot-widget/chat";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/chatbot-widget/ui/popover";
import { MessageCircle } from "lucide-react";


export default function ChatBubbleWidget() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile) {
        return null; // Don't render anything on mobile
    } else {
        return (
            <>
                <div className="flex bg-gray-50 min-h-screen items-center justify-center">
                    <Popover>
                        <PopoverContent align="start" className="w-[440px] mr-4 bg-white">
                            <Chat />
                        </PopoverContent>
                        <PopoverTrigger asChild className="fixed bottom-4 right-4">
                            <Button
                                variant="outline"
                                className="rounded-full w-16 h-16 aspect-square bg-black hover:bg-gray-700"
                            >
                                <MessageCircle size={40} className="text-white" />
                            </Button>
                        </PopoverTrigger>
                    </Popover>
                </div>
            </>
        );
    }
}