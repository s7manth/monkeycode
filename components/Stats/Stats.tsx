import React, { useState } from 'react'
import StatsModuleCSS from './Stats.module.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

// props-> wpm, accuracy, time, accuracylist, corrChar, errChar, language, mmc

function Stats(props: any) {
  console.log(props)
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  )
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Results',
      },
    },
  }
  const labels = Array(props.time || 30)
    .fill(0)
    .map((_, idx) => 1 + idx)
  const data = {
    labels,
    datasets: [
      {
        label: 'Accuracy',
        data:
          props.accuracy_list ||
          Array(props.time || 30)
            .fill(0)
            .map((_, idx) => 1 + idx),
        borderColor: 'rgb(219,185,65)',
        backgroundColor: 'gb(219,185,65)',
      },
    ],
  }

  return (
    <div className={StatsModuleCSS.stats}>
      <Line
        options={options}
        data={data}
        className={StatsModuleCSS.linegraph}
      />
      <div className={StatsModuleCSS.other_stats}>
        <div>
          <p>WPM: {props.wpm || 0}</p>
          <p>Accuracy: {props.accuracy || 0}</p>
        </div>
        <div>
          <p>Time: {props.time || 0}</p>
          <p>
            Characters: {props.corrchar || 0} / {props.errchar || 0}
          </p>
        </div>
        <div>
          <p>Language: {props.language || 'Dummy'}</p>
          <p>Most mistyped character: {props.mmc || 'c'}</p>
        </div>
      </div>
    </div>
  )
}

export default Stats
