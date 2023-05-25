

import { Navbar} from "flowbite-react"

export default function Naavbar()
{
    return (
        <Navbar
  fluid={true}

  className="bg-white text-purple-400"
>
  <Navbar.Brand
    to="/"
  >
  
    <span className="self-center whitespace-nowrap text-xl font-bold text-purple-800">
      CineRealm
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      active={false}
      className="text-purple-400 hover:text-purple-600 hover:bg-gray-800"
    >
      <p className="hover:text-purple-600">Página Inicial</p>
    </Navbar.Link>
    <Navbar.Link

      href="/filmes/27"
      className="text-purple-400 hover:text-purple-600 hover:bg-gray-800"
      
    >
        <p className="hover:text-purple-600">Terror</p>
    </Navbar.Link>
    <Navbar.Link href="/filmes/35" className="text-purple-400 hover:text-purple-600 hover:bg-gray-800">
    <p className="hover:text-purple-600 ">Comédia</p>
    </Navbar.Link>
    <Navbar.Link href="/filmes/28" className="text-purple-400 hover:text-purple-600 hover:bg-gray-800">
    <p className="hover:text-purple-600 ">Ação</p>
    </Navbar.Link>
    <Navbar.Link href="/filmes/99" className="text-purple-400 hover:text-purple-600 hover:bg-gray-800">
      <p className="hover:text-purple-600">Documentários</p>
    </Navbar.Link>
    <Navbar.Link href="/filmes/18" className="text-purple-400 hover:text-purple-600 hover:bg-gray-800">
    <p className="hover:text-purple-600">Drama</p>
    </Navbar.Link>
    <Navbar.Link href="/filmes/12" className="text-purple-400 hover:text-purple-600 hover:bg-gray-800">
    <p className="hover:text-purple-600">Aventura</p>
    </Navbar.Link>
    <Navbar.Link href="/filmes/16" className="text-purple-400 hover:text-purple-600 hover:bg-gray-800">
    <p className="hover:text-purple-600">Animação</p>
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
          

    )
}

