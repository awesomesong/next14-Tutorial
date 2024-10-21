
type Props = {
    children : React.ReactNode;
    modal: React.ReactNode;
}

export default function PhotoFeedLayout ({ children , modal} : Props) {
    return (
        <>
            {children}
            {modal}
        </>
    )
} 