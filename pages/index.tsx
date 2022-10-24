/* eslint-disable @next/next/no-img-element */
import { getUser, withPageAuth } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import StockChart from "../components/chart";
import Layout from "../components/layout";
import { progress, data } from "../constants/index";
import { classNames } from "../constants/index";
import { useAppSelector } from "../redux/app/hookes";
import { AppProps, chartType, progressType } from "../types";
import { getChartsRecords, getPersonalRecord, getStreakDay } from "../utils/functions";
import { prisma } from "../lib/prisma";

export const getServerSideProps: GetServerSideProps = withPageAuth({
  redirectTo: "/signin",
  async getServerSideProps(ctx) {
    const { user } = await getUser(ctx);
   
    const logs = await prisma.log.findMany({
      where: { userId: user.id },
      include: { workoutline: { include: { workout: true, exercise: true } } },
    });
    return { props: { logs: JSON.parse(JSON.stringify(logs)) } };
  },
});

const Home: NextPage = ({ logs }: AppProps) => {
  const dispatch = useDispatch();
  const profile = useAppSelector((state) => state.user.profile);
  const [days, setDays] = useState<number>(0);
  const [personalRecords, setPersonalRecords] = useState<progressType[]>([]);
  const [chartRecords, setChartRecords] = useState<chartType[]>([]);
  const [selected, setSelected] = useState<{ btn1: Boolean; btn2: Boolean }>({
    btn1: false,
    btn2: true,
  });
  const { user, isLoading } = useUser();
 
  const router = useRouter();
  useEffect(() => {
    getStreakDay(logs!, setDays);
    getPersonalRecord(logs!, progress, setPersonalRecords);
    getChartsRecords(logs!,progress,setChartRecords)
    
  }, [logs]);

  if (isLoading) {
    return <div>Loding...</div>;
  }
  return (
    <Layout>
      <div className="container mx-auto sm:px-6 lg:px-8 bg-zinc-100	py-10	 min-h-screen">
        <div className="bg-white py-6 lg:px-10  flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="inline-block h-14 w-14 rounded-full "
              src={`${
                profile?.imageUrl
                  ? profile.imageUrl
                  : "https://vsehzqgmugndfzhsvknp.supabase.co/storage/v1/object/sign/images/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvMzYwX0ZfMzQ2ODM5NjgzXzZuQVB6YmhwU2tJcGI4cG1Bd3Vma0M3YzVlRDd3WXdzLmpwZyIsImlhdCI6MTY2NjYyMTUzOCwiZXhwIjoxOTgxOTgxNTM4fQ.yqrGRk7JGCuzW0KPIObHaPKKmKrijkSih7KzN406SYM"
              }`}
              alt="Profile"
            />
            <div className="p-2">
              <h2 className="text-xl	font-bold">{`Good morning, ${profile?.firstName}`}</h2>
              <span>{`${days > 0 ? `🔥${days} Day Streak` : ""}`}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 space-x-2">
           
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
                  ? "  inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  : "  inline-flex items-center rounded-md border border-gray-300 bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
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
                  ? " inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
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
          <div className="min-w-screen min-h-screen flex-wrap	flex items-center justify-center px-5 py-5 ">
            {chartRecords.map((progres) => (
              <StockChart
                key={progres.bgColor}
                info={progres.data}
                color={progres.bgColor}
                name={progres.name}
                lbs={progres.lbs}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
