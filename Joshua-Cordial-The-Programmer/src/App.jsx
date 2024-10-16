import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/joshcord99" target="_blank">
        <img src="/AvatarMaker-2.png" className="avatarImage" alt="Avatar"/>
        </a>
      </div>
      <h1>Joshua Cordial</h1>
      <div className="card">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi alias sit eos illo ratione quia culpa ut, architecto repudiandae pariatur incidunt, aperiam ducimus, aut esse dicta perferendis! Labore, laboriosam omnis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium cum et! Corporis incidunt ea commodi ipsam saepe excepturi nisi voluptate quae, explicabo reiciendis nam. Ipsa adipisci sed illo distinctio
        </p>
      </div>
      <footer>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quos non aliquid velit facere necessitatibus laborum expedita, eius eligendi alias laboriosam provident nesciunt ipsum fuga? Voluptatem hic est velit delectus!
      </footer>
    </>
  )
}

export default App
