import StockChart from "../components/chart";

const data = {
    stockFullName: "SW Limited.",
    stockShortName: "ASX:SFW",
    price: {
        current: 2.32,
        open: 2.23,
        low: 2.215,
        high: 2.325,
        cap: 93765011,
        ratio: 20.1,
        dividend: 1.67,
    },
    chartData: {
        labels: [
            "January",


            "February",

            "March   ",

            "April",


            "May",


            "July",
        ],
        data: [
            100,
            120,
            140,
            160,
            180,
            200,
            220,
            240,
            260,
            280,
            300,
        ],
    },
};
const progress = [
    { bgColor: "bg-red-600", name: "Squat", lbs: "255" },
    { bgColor: "bg-black", name: "Bicep Curl", lbs: "55" },
    { bgColor: "bg-blue-600", name: "Bench Press", lbs: "150" },
    { bgColor: "bg-green-600", name: "Overhead Press", lbs: "150" }
]

export default function Progress() {

    return (
        <div className="container mx-auto sm:px-6 lg:px-8 bg-zinc-100 py-10">
            <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">My Progress</h1>
            </div>
            <div className="min-w-screen min-h-screen flex-wrap	   flex items-center justify-center px-5 py-5 ">
                {progress.map(inx => <StockChart key={inx.bgColor} info={data} color={inx.bgColor} name={inx.name} lbs={inx.lbs} />)}
            </div>
        </div>
    );
}

