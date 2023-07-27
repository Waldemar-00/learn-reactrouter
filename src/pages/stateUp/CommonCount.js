import { useState } from 'react'

import Button from '../buttons/Button'
function CommonCount() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Button count={count} setCount={setCount} />
      <Button count={count} setCount={setCount}/>
    </>
  )
}
export default CommonCount