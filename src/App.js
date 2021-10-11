import "./App.css";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Filter from "./components/Filter";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const obj = {
      //составляющая контакта - имя и идентификатор
      name,
      number,
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
    const { value, name, number } = e.target;
    this.setState({
      [name]: value,
      [number]: value,
    });
  };

  contactIdName = uuidv4();
  contactIdNumber = uuidv4();

  resetForm = () => {
    this.setState({ name: "", number: "" });
  };
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { name, number, contacts, filter } = this.state;
    const {
      handleSubmit,
      handleChange,
      contactIdName,
      contactIdNumber,
      changeFilter,
    } = this;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
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

          <label htmlFor={contactIdNumber}>Number</label>
          <input
            id={contactIdNumber}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
            value={number}
          />
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <Filter id={contactIdName} onChange={changeFilter} value={filter} />

          <ul>
            {filteredContacts.map(({ id, name, number }) => (
              <li key={id}>
                {name}: {number}
              </li>
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
