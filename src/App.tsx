import ReactECharts from 'echarts-for-react'
import { useCallback, useMemo, useState } from 'react'
import ScreenShotByElement from './components/ScreenShotByElement'

const App = () => {
  const [dataURL, setDataURL] = useState()
  const option: any = useMemo(
    () => ({
      title: {
        text: 'Stacked Line',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    }),
    [],
  )
  const renderElement = useMemo(
    () => (
      <div id='react-echart'>
        <ReactECharts option={option} />
      </div>
    ),
    [],
  )
  const fetchRequestPromise = useMemo(
    () =>
      new Promise<void>((resolve) => {
        console.debug('delay 2000 ms to simulate async request.')
        setTimeout(() => {
          console.debug('delay end.')
          resolve()
        }, 1500)
      }),
    [],
  )
  const onDataURLObtained = useCallback((dataURL: any) => {
    console.debug('dataURL obtained:', dataURL)
    setDataURL(dataURL)
  }, [])

  return (
    <div id='id-app'>
      {dataURL && <img src={dataURL} />}
      <ScreenShotByElement
        selector={'#react-echart'}
        takeScreenShotDelay={1500}
        element={renderElement}
        fetchRequestPromise={fetchRequestPromise}
        onDataURLObtained={onDataURLObtained}
      />
    </div>
  )
}
export default App
