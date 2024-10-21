import Image from "next/image";
import wonderImages, { WonderImage } from "./wonders";
import React from 'react';
import Modal from "../components/modal";

type ModalProps = {
  id: string;
};

const PhotoModal = ({ id } : ModalProps) => {
    const photo: WonderImage = wonderImages.find((p) => p.id === id)!;

    return (
        <Modal>
            <Image 
                alt={photo.name}
                src={photo.src}
                className="w-full object-cover aspect-square"
            />

            <div className="bg-white p-4">
                <h2 className="text-xl font-semibold">
                    {photo.name}
                </h2>
                <h3>{photo.photographer}</h3>
                <h3>{photo.location}</h3>
            </div>
        </Modal>
    )
}

export default PhotoModal;