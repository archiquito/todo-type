import imgLogo from "./assets/logo.svg";

const Header = () => {

    return (
        <header className="header">
        <img src={imgLogo} />
        <div className="addToDo-container">
          <input placeholder="Adicione uma nova tarefa"/>
          <button>
            Criar<span className="material-symbols">add_circle</span>
          </button>
        </div>
      </header>
    )
}

export default Header;