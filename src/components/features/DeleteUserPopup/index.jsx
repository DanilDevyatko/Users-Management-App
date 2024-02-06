import { useState, useEffect } from "react";
import { Button } from "../../common/Button";
import { Popup } from "../../common/Popup";

export function DeleteUserPopup({isOpen, onDelete, onClose}) {
  function onSubmit() {
    onDelete();
    onClose();
  }

  return (
    <Popup isOpen={isOpen}>
      <h1>Delete user</h1>
      <div className="button-group">
        <Button text="Delete" onClick={onSubmit}/>
        <Button text="Cancel" onClick={onClose}/>
      </div>
    </Popup>
  )
}
