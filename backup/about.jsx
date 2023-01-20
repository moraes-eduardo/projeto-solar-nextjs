import Link from 'next/link'
import { useCount, useDispatchCount } from '../../../components/Counter'

const AboutPage = () => {
  const count = useCount()
  const dispatch = useDispatchCount()

  const handleIncrease = (event) =>
    dispatch({
      type: 'INCREASE',
    })
  const handleIncrease15 = (event) =>
    dispatch({
      type: 'INCREASE_BY',
      payload: 15,
    })

  return (
    <>
      <div>
      <h1>ABOUT</h1>
      <p>Counter: {count}</p>
      <div>
       <button onClick={handleIncrease}>+1</button>
      </div>
      <div>
        <button onClick={handleIncrease15}>+15</button>
      </div>
      <p>
        <Link href="/sidebar/context/">
          <a>Home</a>
        </Link>
      </p>
      </div>
    </>
  )
}

export default AboutPage
