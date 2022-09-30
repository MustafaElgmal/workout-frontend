import { getUser, withPageAuth } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";
import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import StockChart from "../components/chart";
import Layout from "../components/layout";
import { Base_Url, progress } from "../constants/index";
import { classNames } from "../constants/index";
import { AppProps, progressType } from "../types";
import { getLogs } from "../utils/apis";
import { getPersonalRecord, getStreakDay } from "../utils/functions";

export const getServerSideProps: GetServerSideProps = withPageAuth({
  async getServerSideProps(ctx) {
    const { user } = await getUser(ctx);
    const res = await axios.get(`${Base_Url}/api/users/${user.email}`);
    const logs = await getLogs(user.id);
    return { props: { profile: res.data.profile, logs } };
  },
});

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
    labels: ["January", "February", "March   ", "April", "May", "July"],
    data: [260, 90, 150, 200, 300, 200],
  },
};

const Home: NextPage = ({ profile, logs }: AppProps) => {
  const [days, setDays] = useState<number>(0);
  const [personalRecords,setPersonalRecords]=useState<progressType[]>([])
  const [selected, setSelected] = useState<{ btn1: Boolean; btn2: Boolean }>({
    btn1: false,
    btn2: true,
  });
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    getStreakDay(logs!, setDays);
    getPersonalRecord(logs!, progress,setPersonalRecords);
  }, [logs]);

  return (
    <Layout>
      <div className="container mx-auto sm:px-6 lg:px-8 bg-zinc-100	py-10	">
        <div className="bg-white py-6 px-10 flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="inline-block h-14 w-14 rounded-full "
              src={`${
                profile?.imageUrl
                  ? profile.imageUrl
                  : "https://review2020.s3.amazonaws.com/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
              }`}
              alt="Profile"
            />
            <div className="p-2">
              <h2 className="text-xl	font-bold">{`Good morning, ${user?.user_metadata.name}`}</h2>
              <span>{`${days > 0 ? `🔥${days} Day Streak` : ""}`}</span>
            </div>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => {
                router.push("/workouts");
                {
                  !selected.btn1
                    ? setSelected({
                        btn1: !selected.btn1,
                        btn2: !selected.btn2,
                      })
                    : "";
                }
              }}
              type="button"
              className={`${
                !selected.btn1
                  ? "inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  : "inline-flex items-center rounded-md border border-gray-300 bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              }`}
            >
              Browse workouts
            </button>
            <button
              onClick={() => {
                router.push("/");
                {
                  !selected.btn2
                    ? setSelected({
                        btn1: !selected.btn1,
                        btn2: !selected.btn2,
                      })
                    : "";
                }
              }}
              type="button"
              className={`${
                !selected.btn2
                  ? "inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  : "inline-flex items-center rounded-md border border-gray-300 bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              }`}
            >
              Start today&apos;s workout
            </button>
          </div>
        </div>
        <div className="py-6 px-10">
          <div>Personal Records 🏆</div>

          <ul
            role="list"
            className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
          >
            {personalRecords.map((progres) => (
              <li
                key={progres.name}
                className={classNames(
                  `${progres.bgColor} col-span-1 flex rounded-xl shadow-sm `
                )}
              >
                <div className="flex flex-1 items-center justify-between truncate rounded-xl border-t border-r border-b py-5">
                  <div className="flex-1 truncate px-6 py-2 text-sm">
                    <div className="font-medium text-white">{progres.name}</div>
                    <p className="text-white text-lg font-bold">
                      {progres.lbs} lbs
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="container mx-auto sm:px-6 lg:px-8 bg-zinc-100 py-10">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              My Progress
            </h1>
          </div>
          <div className="min-w-screen min-h-screen flex-wrap	   flex items-center justify-center px-5 py-5 ">
            {progress.map((inx) => (
              <StockChart
                key={inx.bgColor}
                info={data}
                color={inx.bgColor}
                name={inx.name}
                lbs={inx.lbs}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
