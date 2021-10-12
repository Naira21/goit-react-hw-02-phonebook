const ContactList = ({ filtered, onDelete }) => (
  <ul>
    {filtered.map(({ name, number, id }) => (
      <li key={id}>
        {name}: {number}
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
