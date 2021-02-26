import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function User() {
  const router = useRouter()
  const { data, error } = useSwr(
    router.query.id ? `/api/user/${router.query.id}` : null,
    fetcher
  )



  return <div>{data.name}</div>
}
