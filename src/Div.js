import { memo } from "react"

export const Div = memo(
  ({ color = "gray", height = "200px", width = "100%" }) => {
    return (
      <div
        style={{ minWidth: width, height, backgroundColor: color }}
      ></div>
    )
  }
)
