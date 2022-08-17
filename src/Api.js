const dataReturnerr = () => {
  let page = 1
  return (limit) =>
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`).then(
      (response) => {
        page++
        return response.json()
      }
    )
}

export const getData = dataReturnerr()


