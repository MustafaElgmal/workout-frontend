import { useEffect } from "react"
import { AppProps, RecType } from "../types"
import React from "react"
import { useState } from "react"
import { getArrayOfSet } from "../utils/functions"

export default function Table({ workoutline }: AppProps) {
    const [recs, setRecs] = useState<RecType[]>([])

    useEffect(() => {
        getArrayOfSet(workoutline!, setRecs)
    }, []);
    return (
        <div className=" w-1/2 md:w-full">

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
                                        <tr key={ele.recSet} className='bg-gray-50'>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {ele.recSet}
                                            </td>
                                            <td className="whitespace-nowrap w-50 px-3 py-4 text-sm text-gray-500">
                                                <input
                                                    id="weight"
                                                    name="weight"
                                                    type="number"
                                                    autoComplete="weight"
                                                    value={`${ele.recWeights}`}
                                                    required
                                                    className="block w-full md:w:1/3 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </td>
                                            <td className="whitespace-nowrap w-50 px-3 py-4 text-sm text-gray-500">

                                                <div className="flex items-center">
                                                    <input
                                                        id="reps"
                                                        name="reps"
                                                        type="number"
                                                        autoComplete="reps"
                                                        value={`${ele.recReps}`}
                                                        required
                                                        className="block w-full md:w:1/3 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                    <div className="mx-5">
                                                        <input
                                                            id="candidates"
                                                            aria-describedby="candidates-description"
                                                            name="candidates"
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded border-gray-600 text-indigo-600 focus:ring-black focus:text-white focus:bg-black checked:bg-black checked:text-white"
                                                        />
                                                    </div>

                                                </div>
                                            </td>

                                        </tr>
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