interface CounterProps {
  count: number
}

const Counter = ({ count }: CounterProps) => {
  return <div>{count}</div>
}

export default Counter
