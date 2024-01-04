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
          .toPng(document.querySelector(selector))
          .then((dataURL: any) => {
            console.debug('take a screenshot of the element.')
            onDataURLObtained(dataURL)
          })
      }, takeScreenShotDelay)
    })
  }, [])
  const { element } = props

  return <div className='fixed w-[100%] left-[100%]'>{element}</div>
}

export default ScreenShotByElement
