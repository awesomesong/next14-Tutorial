"use client"

function getRandomInt(count: number){
    return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({ children } : {
    children : React.ReactNode;
}){
    // layout안의 error와 중첩된 세그먼트의 에러를 다루려면, 
    // error 페이지는 상위에 위치해야한다
    const random = getRandomInt(2);
    if(random === 1) {
        throw new Error('Error loading product');
    }
    return (
        <>
            {children}
            <h2>Feature products</h2>
        </>
    )
}