import Link from 'next/link'
import { useCount, useDispatchCount } from '../../Counter'

const IndexPage = () => {
  const count = useCount()
  const dispatch = useDispatchCount()

  const handleIncrease = (event) =>
    dispatch({
      type: 'INCREASE',
    })
  const handleDecrease = (event) =>
    dispatch({
      type: 'DECREASE',
    })

  return (
    <>
      <div>
      <div>
        <h1>HOME</h1>
      </div>
      <div>
        <p>Counter: {count}</p>
      </div>
      <div>
      <button onClick={handleDecrease}>-1</button>
      </div>
      <div>
        <button onClick={handleIncrease}>+1</button>
      </div>
      <div>
        <p>
          <Link href="/sidebar/context/about">
            <a>About</a>
          </Link>
        </p>
      </div>
      </div>
    </>
  )
}

export default IndexPage
