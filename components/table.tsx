import { useEffect } from "react"
import { AppProps, RecType } from "../types"
import React from "react"
import { useState } from "react"
import { getArrayOfSet } from "../utils/functions"
import { useUser } from "@supabase/auth-helpers-react"
import RowTable from "./rowTable"

export default function Table({ workoutline }: AppProps) {
    const [recs, setRecs] = useState<RecType[]>([])
    useEffect(() => {
        getArrayOfSet(workoutline!, setRecs)
    }, []);
    return (
        <div className=" w-full">

            <div className="mt-2 flex flex-col w-full md:w-full">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            #
                                        </th>
                                        <th scope="col" className="px-3 w-50 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Weight(KG)
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 w-50 text-left text-sm font-semibold text-gray-900">
                                            Reps
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {recs.map((ele) => (
                                        <RowTable ele={ele} key={ele.recSet} workoutline={workoutline}/>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}