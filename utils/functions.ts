import { Workoutline } from "@prisma/client";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import _ from "lodash";
import moment from "moment";
import {
  chartType,
  historyType,
  MenuType,
  progressType,
  RecType,
} from "./../types";
export const changeNavigationCurrent = (
  href: string,
  menu: MenuType[],
  setMenu: Function
) => {
  const navigation = menu.map((item) =>
    item.href.split("/")[1] === href.split("/")[1]
      ? { ...item, current: true }
      : { ...item, current: false }
  );
  setMenu(navigation);
};
export const getIdFromPath = (path: string): number => {
  const parts = path.split("/");
  const id = parts[parts.length - 1];
  return parseInt(id);
};
export const getCategoryIdFromPath = (path: string): number => {
  const parts = path.split("/");
  const id = parts[parts.length - 2];
  return parseInt(id);
};

export const getArrayOfSet = (workoutline: Workoutline, setRecs: Function) => {
  const arr: RecType[] = [];
  for (let i = 0; i < workoutline?.recSets!; i++) {
    arr.push({
      recSet: i + 1,
      recReps: workoutline.recReps,
      recWeights: workoutline.recWeights,
    });
  }
  setRecs(arr);
};

export const filterAllhistoryByDay = (
  logs: historyType[],
  day: Date,
  setLogs: Function
) => {
  const filterLogs = logs.filter(
    (log) => moment(log.createdAt).format("L") === moment(day).format("L")
  );
  const result = _(filterLogs)
    .groupBy("workoutline.workout.name")
    .map((v, email) => ({
      name: email,
      logs: _.map(v),
    }))
    .value();
  setLogs(result);
};

export const getStreakDay = (logs: historyType[], setDays: Function) => {
  let beforDay,
    day,
    dis,
    sum = 0,
    maxDays = 0;
  for (let i = 1; i < logs.length; i++) {
    beforDay = moment(logs[i - 1].createdAt).format("L");
    day = moment(logs[i].createdAt).format("L");
    dis = moment(day).diff(beforDay, "days");
    if (dis === 1) {
      sum += 1;
    } else if (dis > 1) {
      sum = 0;
      beforDay = moment(logs[i].createdAt).format("L");
    } else {
      sum = 1;
    }
    if (sum > maxDays) {
      maxDays = sum;
    }
  }
  if (logs.length === 1) maxDays = 1;
  setDays(maxDays);
};

export const getPersonalRecord = (
  logs: historyType[],
  progress: progressType[],
  setPersonalRecords: Function
) => {
  const personalRecords: progressType[] = [];
  let weights = 0;
  for (let j = 0; j < 4; j++) {
    weights = 0;
    for (let i = 0; i < logs.length; i++) {
      if (logs[i].workoutline.exercise.name === progress[j].name) {
        if (logs[i].userWeights > weights) weights = logs[i].userWeights;
      }
    }
    personalRecords.push({
      bgColor: progress[j].bgColor,
      name: progress[j].name,
      lbs: weights,
    });
  }
  setPersonalRecords(personalRecords);
};

export const getChartsRecords = (
  logs: historyType[],
  progress: progressType[],
  setChartRecords: Function
) => {
  const chartRecords: chartType[] = [];
  let data: {
    chartData: {
      labels: string[];
      data: number[];
    };
  }={
    chartData: {
      labels: ["January", "February", "March", "April", "May", "June","July","August","September","October","Noverber","December"],
      data: [],
    },
  }
  let weights = 0,
    number = 1,
    sum = 0
  for (let j = 0; j < 4; j++) {
    weights = 0;
    data={
      chartData: {
        labels: ["January", "February", "March", "April", "May", "June","July","August","September","October","Noverber","December"],
        data: [],
      },
    }
    console.log(progress[j])
    console.log(data.chartData.data)
    for (let k = 0; k < 12; k++) {
      number = 1;
      sum = 0;
      for (let i = 0; i < logs.length; i++) {
        if (logs[i].workoutline.exercise.name === progress[j].name) {
          if (logs[i].userWeights > weights) weights = logs[i].userWeights;
          if (moment(logs[j].createdAt).month() === k) {
            number++;
            sum += logs[i].userWeights;
          }
        }
        
      
      }
      data.chartData.data.push(sum/number);
    }

    chartRecords.push({
      bgColor: progress[j].bgColor,
      name: progress[j].name,
      lbs: weights,
      data,
    });
  }
  setChartRecords(chartRecords);
};

export const IsBusy = (day: Date, logs: historyType[]) => {
  for (let i = 0; i < logs.length; i++) {
    if (moment(logs[i].createdAt).format("L") === moment(day).format("L")) {
      return true;
    }
  }
  return false;
};

export const logsUniqe = (logs: historyType[], setUniqeLogs: Function) => {
  const result = _(logs)
    .groupBy("workoutline.exercise.name")
    .map((v, email) => ({
      name: email,
      logs: _.map(v),
    }))
    .value();
  setUniqeLogs(result);
};
