import React, { useEffect, useState } from 'react'
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
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Results',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
      },
    },
  }

  const [data, setData] = useState<any[]>()
  const [labels, setLabels] = useState<number[]>()

  useEffect(() => {
    console.log(props)
    if (!props || !props.correctCharsTyped) return
    const _labels = Array(props.time || 30)
      .fill(0)
      .map((_, idx) => 1 + idx)

    setLabels(_labels)
    const _data = {
      labels: _labels,
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
          yAxisID: 'y',
        },
        {
          label: 'WPM',
          data: props.correctCharsTyped.map(
            (value: number, idx: number) =>
              (value + props.errorCharsTyped[idx]) * 2/ (idx + 1),
          ),
          borderColor: '#36a2eb',
          backgroundColor: '#a0d0f5',
          yAxisID: 'y1',
        },
      ],
    }
    setData(_data)
  }, [props])

  return (
    <div className={StatsModuleCSS.stats}>
      {data && (
        <>
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
        </>
      )}
    </div>
  )
}

export default Stats
