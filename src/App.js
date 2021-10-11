import "./App.css";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      //составляющая контакта - имя и идентификатор
      name: this.state.name,
      id: uuidv4(),
    };
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, obj], //добавление в массив введенного значения
      };
    });

    this.resetForm();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  contactIdName = uuidv4();

  resetForm = () => {
    this.setState({ name: "" });
  };

  render() {
    console.log(this.state.name);
    const { name, contacts } = this.state;
    const { handleSubmit, handleChange, contactIdName } = this;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Phonebook</h2>
          <label htmlFor={contactIdName}>Name</label>
          <input
            id={contactIdName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
            value={name}
          />
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <ul>
            {contacts.map(({ id, name }) => (
              <li key={id}>{name} </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

//obj.map(({id, name})=>(<li key={id}>{item.name} <button
//           type="button"
//           className="TodoList__btn"
//           onClick={() => onDeleteTodo(id)}
//         >
//           Удалить
//         </button>
//          </li >)))

//  {todos.map(({ id, text, completed }) => (
//       <li
//         key={id}
//         className={classNames('TodoList__item', {
//           'TodoList__item--completed': completed,
//         })}
//       >
//         <input
//           type="checkbox"
//           checked={completed}
//           onChange={() => onToggleCompleted(id)}
//         />
//         <p className="TodoList__text">{text}</p>
//         <button
//           type="button"
//           className="TodoList__btn"
//           onClick={() => onDeleteTodo(id)}
//         >
//           Удалить
//         </button>
//       </li>
//     ))}
