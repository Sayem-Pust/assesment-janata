import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a Trade Code..."
          name="trade_code"
          value={editFormData.trade_code}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          style={{ width: "100px" }}
          type="text"
          required="required"
          placeholder="Enter an High..."
          name="high"
          value={editFormData.high}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          style={{ width: "100px" }}
          type="text"
          required="required"
          placeholder="Enter a Low..."
          name="low"
          value={editFormData.low}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          style={{ width: "100px" }}
          type="text"
          required="required"
          placeholder="Enter an Open..."
          name="open"
          value={editFormData.open}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          style={{ width: "100px" }}
          type="text"
          required="required"
          placeholder="Enter an Close..."
          name="close"
          value={editFormData.close}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          style={{ width: "100px" }}
          type="text"
          required="required"
          placeholder="Enter an Volume..."
          name="volume"
          value={editFormData.volume}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
