import { useEffect, useState } from "react"
import "./App.css"
import { ImageItem } from "./ImageItem"
import { getData } from "./Api"

export const App = () => {
  const [datas, setDatas] = useState([])

  const scroll = () => {
    if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
      getData(30).then((newData) => setDatas([...datas, ...newData]))
    }
  }

  useEffect(() => {
    getData(50).then((newData) => setDatas(newData))
  }, [])

  useEffect(() => {
    document.addEventListener("scroll", scroll)

    return () => {
      document.removeEventListener("scroll", scroll)
    }
  }, [datas])

  return (
    <div className="App">
      {datas.map((data) => (
        <ImageItem key={data.id} data={data} />
      ))}
    </div>
  )
}
