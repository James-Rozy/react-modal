import { useState } from "react";
import '../styles/MainContent.css';
import Modal from "./Modal";

const MainContent = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <main>
      <nav>
        <button onClick={() => setOpen(true)}>Export</button>

        <Modal isOpen={isOpen} onClose={() => setOpen(false)} />
      </nav>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Description</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>369</td>
            <td>James</td>
            <td>Rozsypal</td>
            <td>Web developer</td>
            <td>React.js Web Developer</td>
          </tr>
          <tr>
            <td>423</td>
            <td>Kevin</td>
            <td>Kelliher</td>
            <td>Tall, handsom, red hair, lucious facial hair</td>
            <td>Business man</td>
          </tr>
          <tr>
            <td>802</td>
            <td>Michael</td>
            <td>Rigney</td>
            <td>Artsy fellow</td>
            <td>Senior Designer</td>
          </tr>
          <tr>
            <td>120</td>
            <td>Alex</td>
            <td>Phillips</td>
            <td>Music guy</td>
            <td>Sound Engineer/Producer</td>
          </tr>
          <tr>
            <td>120</td>
            <td>Jason</td>
            <td>Wegryn</td>
            <td>Prarie dog vibes</td>
            <td>Electrical Engineer</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default MainContent;