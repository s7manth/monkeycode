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
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
      },
    },
  }

  const [data, setData] = useState<any>()
  const [labels, setLabels] = useState<number[]>()
  const [totalCorrect, setTotalCorrect] = useState<number>(0)
  const [totalError, setTotalError] = useState<number>(0)
  const [averageWPM, setAverageWPM] = useState<number>(0)
  const [averageAccuracy, setAverageAccuracy] = useState<number>(0)

  useEffect(() => {
    console.log(props)
    if (!props || !props.correctCharsTyped || !props.accuracy_list) return
    const _labels = Array(props.time || 30)
      .fill(0)
      .map((_, idx) => 1 + idx)

    let _totalCorrect: number = props.correctCharsTyped[props.time - 1]
    let _totalError: number = props.errorCharsTyped[props.time - 1]

    setTotalCorrect(_totalCorrect)
    setTotalError(_totalError)
    setAverageWPM(
      ((_totalCorrect + _totalError) *
        3 *
        props.accuracy_list[props.time - 1]) /
        100 /
        props.time,
    )
    setAverageAccuracy(props.accuracy_list[props.time - 1])
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
              ((value + props.errorCharsTyped[idx]) *
                3 *
                props.accuracy_list[idx]) /
              100 /
              (idx + 1),
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
              <p>
                WPM:{' '}
                <span className={StatsModuleCSS.value}>
                  {averageWPM.toFixed(2) || 0}
                </span>
              </p>
              <p>
                Accuracy:{' '}
                <span className={StatsModuleCSS.value}>
                  {averageAccuracy.toFixed(2) || 0}
                </span>
              </p>
            </div>
            <div>
              <p>
                Time:{' '}
                <span className={StatsModuleCSS.value}>{props.time || 0}</span>
              </p>
              <p>
                Characters:{' '}
                <span className={StatsModuleCSS.value}>
                  {totalCorrect} / {totalError}
                </span>
              </p>
            </div>
            <div>
              <p>
                Language:{' '}
                <span className={StatsModuleCSS.value}>
                  {props.language || 'Dummy'}
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Stats
