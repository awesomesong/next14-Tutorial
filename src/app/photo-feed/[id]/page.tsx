import Image from "next/image";
import wonderImages, { WonderImage } from "../wonders";
import PhotoList from "../PhotoList";
import PhotoModal from "../PhotoModal";

export default function InterceptedPhotoPage({ params : { id }} : { params : {id : string} }){
    const photo: WonderImage = wonderImages.find((p) => p.id === id)!;

    // return (
    //         <div className="m-auto max-w-[500px]">
    //             <Image 
    //                 alt={photo.name}
    //                 src={photo.src}
    //                 className="w-full object-cover aspect-square"
    //             />
    
    //             <div className="bg-white p-4">
    //                 <h2 className="text-xl font-semibold">
    //                     {photo.name}
    //                 </h2>
    //                 <h3>{photo.photographer}</h3>
    //                 <h3>{photo.location}</h3>
    //             </div>
    //         </div>
    //     )

    return (
        <>
            <PhotoList />
            <PhotoModal id={id} />
        </>
    )
};