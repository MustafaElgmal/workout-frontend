import { useUser } from "@supabase/auth-helpers-react"
import { useFormik } from "formik"
import { createLog } from "../utils/apis"


const RowTable = ({ ele, workoutline }: any) => {
    const{user}=useUser()
    const formik = useFormik({
        initialValues: {
            step: ele.recSet,
            userReps: workoutline?.recReps,
            userWeights: workoutline?.recWeights,
        },
        onSubmit: async (values) => {
            await createLog({
                step: +values.step,
                userReps: +values.userReps!,
                userWeights: +values.userWeights!,
                workoutlineId: workoutline?.id!,
                userId: user?.id!
            })
        }
    })
    return (
        <tr key={ele.recSet} className='bg-gray-50'>
            <form id="form1"                           
></form>

            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                {ele.recSet
                }
            </td>
            <td className="whitespace-nowrap w-50 px-3 py-4 text-sm text-gray-500">
                <input
                    id="userWeights"
                    name="userWeights"
                    type="number"
                    form="form1"
                    autoComplete="userWeights"
                    value={formik.values.userWeights}
                    onChange={formik.handleChange}
                    required
                    className="block w-full md:w:1/3 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
            </td>
            <td className="whitespace-nowrap w-50 px-3 py-4 text-sm text-gray-500">
                <div className="flex items-center">
                    <input
                        id="userReps"
                        name="userReps"
                        type="number"
                        form="form1"
                        onChange={formik.handleChange}
                        autoComplete="reps"
                        value={formik.values.userReps}
                        required
                        className="block w-full md:w:1/3 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    <div className="mx-5">
                        <button
                            id="candidates"
                            name="candidates"
                            type="button"
                            onClick={() => formik.handleSubmit()}
                            form="form1"
                            className="h-4 w-4 rounded border-black border-3 border-dashed text-indigo-600 focus:ring-black focus:text-white focus:bg-black checked:bg-black checked:text-white"
                        />
                    </div>

                </div>
            </td>
        </tr>
    )
}

export default RowTable
