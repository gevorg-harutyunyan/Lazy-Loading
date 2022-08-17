const getUrl = ({ id, width, height }) =>
  `https://picsum.photos/id/${id}/${parseInt(width / 10)}/${parseInt(
    height / 10
  )}`

export const ImageItem = ({ data }) => {
  return (
    <img alt={data.author} src={getUrl(data)} style={{ height: "200px" }} />
  )
}
