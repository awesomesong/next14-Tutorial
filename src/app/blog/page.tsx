import { Metadata } from "next";

export const metadata: Metadata = {
    // title: "Blog",
    title: {
        absolute : "template ignore"
    }
};

export default function Blog(){
    return <h1>My Blog</h1>
}