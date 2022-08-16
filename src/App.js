import { useEffect, useState } from "react"
import "./App.css"
import { Div } from "./Div"
import { next } from "./utils"

export const App = () => {
  const [data, setData] = useState(next())

  const scroll = () => {
    if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
      const newData = next()
      setData([...data, ...newData])
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", scroll)

    return () => {
      document.removeEventListener("scroll", scroll)
    }
  }, [data])

  return (
    <div className="App">
      {data.map(({ color, width }) => (
        <Div key={color} color={color} width={width} />
      ))}
    </div>
  )
}
