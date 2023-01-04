import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { selectCurrentUser, selectIsLoggedIn } from "../features/session/sessionSlice";
import EditProfileForm from "./EditProfileForm";

export default function Profile () {
  const currentUser = useSelector(selectCurrentUser)
  const loggedIn = useSelector(selectIsLoggedIn);

  if (!loggedIn) {
    return (
      <Navigate to='/'/>
    );
  }

  return (
    <main>
      <h1>{currentUser.username}</h1>
      <Link to="edit">Edit</Link>
      <Routes>
        <Route path="edit" element={<EditProfileForm/>}/>
      </Routes>
    </main>
  )
}
