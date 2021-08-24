import React, { useState, Fragment, useEffect } from "react";
import "./App.css";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import LineChart from "./components/LineChart";
import Header from "./components/Header";
import axios from "axios";

const App = () => {
  const [contacts, setContacts] = useState(null);
  const [del, setDel] = useState(false);
  const [editContactId, setEditContactId] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/data").then((res) => {
      setContacts(res.data);
      setDel(false);
    });
  }, [editContactId, del]);

  const [editFormData, setEditFormData] = useState({
    id: "",
    trade_code: "",
    high: "",
    low: "",
    open: "",
    close: "",
    volume: "",
  });

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      trade_code: editFormData.trade_code,
      high: editFormData.high,
      low: editFormData.low,
      open: editFormData.open,
      close: editFormData.close,
      volume: editFormData.volume,
    };

    axios
      .patch(`http://127.0.0.1:8000/api/data/${editContactId}/`, editedContact)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setEditContactId(null);
    setDel(true);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    console.log(contact);
    setEditContactId(contact.id);

    const formValues = {
      id: contact.id,
      trade_code: contact.trade_code,
      high: contact.high,
      low: contact.low,
      open: contact.open,
      close: contact.close,
      volume: contact.volume,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    axios.delete(`http://127.0.0.1:8000/api/data/${contactId}/`);
    setDel(true);
  };

  const handleCSVSubmit = async (e) => {
    const uploadData = new FormData();
    uploadData.append("file_up", file, file.name);
    await axios
      .post("http://127.0.0.1:8000/api/file", uploadData)
      .then((res) => {
        console.log(res);
        setDel(true);
      });
  };

  return (
    <>
      <Header/>
    <div className="app-container" >
      <LineChart contacts={contacts} />
      <h1 className="table-head">Please Upload CSV File</h1>
      <form onSubmit={handleCSVSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Submit</button>
      </form>
      {contacts?.length > 0 ? (
        <>
          <h1 className="table-head">Data</h1>
          <h3 className="table-head">For Simplicity, I will show only 30 dataset</h3>
          <form onSubmit={handleEditFormSubmit}>
            <table>
              <thead>
                <tr>
                  <th>Trade Code</th>
                  <th>High</th>
                  <th>Low</th>
                  <th>Open</th>
                  <th>Close</th>
                  <th>Volume</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts?.map((contact) => (
                  <Fragment key={contact.id}>
                    {editContactId === contact.id ? (
                      <EditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        contact={contact}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>
        </>
      ) : (
        <h2>Please Upload A CSV File or Add Data From the Admin</h2>
      )}
      </div>
      </>
  );
};

export default App;
