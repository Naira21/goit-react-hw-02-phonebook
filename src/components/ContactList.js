const ContactList = ({ filtered }) => (
  <ul>
    {filtered.map(({ name, number, id }) => (
      <li key={id}>
        {name}: {number}
      </li>
    ))}
  </ul>
);

export default ContactList;
