export default function Header() {
  return (
    <div className="col-span-12 row-span-1 justify-center flex gap-10 items-center text-center">
      Sort by:<button onClick={() => console.log(11)}>Up</button>
      <button onClick={() => console.log(1)}>Down</button>
      <button onClick={() => console.log(2)}>PC</button>
      <button onClick={() => console.log(3)}>Ps</button>
      <button onClick={() => console.log(4)}>Xbox</button>
      <button onClick={() => console.log(5)}>Subs</button>
      <button onClick={() => console.log(6)}>Dubs</button>
      <button onClick={() => console.log(7)}>Online</button>
      <button onClick={() => console.log(8)}>Solo Games</button>
      <button onClick={() => console.log(9)}>reset</button>
    </div>
  )
}
