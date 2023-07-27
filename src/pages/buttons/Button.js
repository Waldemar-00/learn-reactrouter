function Button({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>Clicks {count} times</button>
  )
}
export default Button