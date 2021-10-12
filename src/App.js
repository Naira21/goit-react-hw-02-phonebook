import "./App.css";
import { Component } from "react";
import contactsData from "./contacts.json";

import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import Form from "./components/Form";

export class App extends Component {
  state = {
    contacts: contactsData,
    filter: "",
  };

  handleSubmit = (newContact) => {
    // e.preventDefault();
    const { contacts } = this.state;
    // const obj = {
    //   //составляющая контакта - имя и идентификатор
    //   name,
    //   number,
    //   id: uuidv4(),
    // };
    const dupliceteContact = contacts.find(
      (contact) => contact.name === newContact.name
    );
    if (dupliceteContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, newContact], //добавление в массив введенного значения
      };
    });

    // this.resetForm();
  };

  // handleChange = (e) => {
  //   const { value, name, number } = e.target;
  //   this.setState({
  //     [name]: value,
  //     [number]: value,
  //   });
  // contactIdName = uuidv4();
  // contactIdNumber = uuidv4();

  // resetForm = () => {
  //   this.setState({ name: "", number: "" });
  // };
  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const {
      handleSubmit,
      // contactIdName,
      //contactIdNumber,
      // handleChange,
      changeFilter,
      deleteContact,
    } = this;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        {/* <form onSubmit={handleSubmit}>
          
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
        </form> */}

        <div>
          <h1>Phonebook</h1>
          <Form onSubmit={handleSubmit} />
          <h2>Contacts</h2>
          <Filter onChange={changeFilter} value={filter} />
          <ContactList filtered={filteredContacts} onDelete={deleteContact} />
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
