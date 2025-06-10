import { useState } from "react";
import toast from "react-hot-toast";

export default function useMessage() {
    const [loading, setloading] = useState(false);
    async function SendMessage(userData) {
        const { name, email, subject, message } = userData;
        try {
            setloading(true);
            const response = await fetch("/api/message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, subject, message })
            })
            const data = await response.json();
            toast.success(data.message);
        } catch (error) {
            return;
        } finally {
            setloading(false);
        }
    }
    return { loading, SendMessage }
}