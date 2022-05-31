import useSWR from 'swr'

function survivorPerks() {
  const fetcher = (url) => fetch(url).then((r) => r.json())

  const { data, error } = useSWR('/api/survivor/perks', fetcher)

  if (error) return <div>ошибка загрузки</div>
  if (!data) return <div>загрузка...</div>
  return <div>привет, <div> {data.map((item) => {
    return <div>{item.name}</div>
  })} </div>!</div>
}

export default survivorPerks



