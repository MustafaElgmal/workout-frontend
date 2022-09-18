import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Table from "../../../components/table";
import { exercieceType } from "../../../types";
import {
  findOtherExercieces,
  findExerciece,
  getIdFromPath,
} from "../../../utils/functions";

const ExercieceDetails = () => {
  const [OtherExercieces, setOtherExercieces] = useState<exercieceType[]>([]);
  const [exerciece, setExerciece] = useState<exercieceType>();

  const router = useRouter();
  useEffect(() => {
    const id = getIdFromPath(router.asPath);
    findOtherExercieces(setOtherExercieces, id);
    findExerciece(setExerciece, id);
  }, []);
  return (
    <div className="container mx-auto sm:px-6 lg:px-8 bg-zinc-100 py-10 min-h-screen">
      <div className="flex space-x-5">
        <div>
          <iframe
            width="560"
            height="315"
            src={`${exerciece?.video}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-xl">
          <h1 className="font-extrabold text-2xl">{exerciece?.name}</h1>
          <p>{exerciece?.description}</p>
          <p>ljljlkjlkjlkljlkjlkjlklklllj</p>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-xl">Log exerciece</h2>
        <div className="flex space-x-40">
          <Table />
          <div className="text-center">
            <div className="timeBorder">
              <p className="timer">00:30</p>
            </div>
            <button
              type="button"
              className=" mt-10 inline-flex items-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Start Timer
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-xl">Other exercieces</h2>
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {OtherExercieces.map((exerciece) => (
            <Link key={exerciece.id} href={exerciece.href}>
              <a>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={exerciece.imageSrc}
                      alt={exerciece.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                      {exerciece.name}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExercieceDetails;
