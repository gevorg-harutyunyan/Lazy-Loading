import data from "./data"

const dataReturner = (data, pageCount) => {
  let page = 0
  return () => data.slice(page++ * pageCount, page * pageCount)
}

export const next = dataReturner(data, 40)
