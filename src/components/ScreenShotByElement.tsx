import { ReactNode, useEffect } from 'react'
import domToImage from 'dom-to-image-more'

interface ScreenShotByElementProps {
  element: ReactNode
  selector: string

  fetchRequestPromise: Promise<void>
  onDataURLObtained: (dataURL: string) => void

  takeScreenShotDelay?: number
}
const ScreenShotByElement = (props: ScreenShotByElementProps) => {
  useEffect(() => {
    const {
      fetchRequestPromise: fetchRequest,
      selector,
      onDataURLObtained,
      takeScreenShotDelay = 1000,
    } = props

    fetchRequest.then(() => {
      console.debug(`delay ${takeScreenShotDelay} ms until animation end.`)

      setTimeout(() => {
        domToImage
          .toPng(document.querySelector(selector), {
            bgcolor: 'white',
            style: {
              border: 'none',
              margin: 0,
              'background-color': 'white',
            },
          })
          .then((dataURL: any) => {
            console.debug('take a screenshot of the element.')
            onDataURLObtained(dataURL)
          })
      }, takeScreenShotDelay)
    })
  }, [])
  const { element } = props

  return <div>{element}</div>
}

export default ScreenShotByElement
