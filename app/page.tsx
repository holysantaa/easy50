"use client";

import Header from "@/components/Header"
import Board from "@/components/Board"
import Footer from "@/components/Footer"
import SignUpPage from "@/components/SignUpPage"
import LogInPage from "@/components/LogInPage";
import React, {useState} from "react";
import WorkAccepted from "@/components/WorkAccepted";
import WorkSend from "@/components/WorkSend";
import WorkSheet from "@/components/WorkSheet";

export default function Home() {

  const [showSignUpPage, setShowSignUpPage] = useState(false);
  const [showLogInPage, setShowLogInPage] = useState(false);

  const handleSignUpButtonClick = () => {
    setShowSignUpPage(true);
    setShowLogInPage(false);
  };

  const handleLogInButtonClick = () => {
    setShowLogInPage(true);
    setShowSignUpPage(false);
  };

  return (
    <main>
      <Header handleSignUpButtonClick={handleSignUpButtonClick} handleLogInButtonClick={handleLogInButtonClick} />

      <Board />

      <SignUpPage />

      <WorkAccepted />

      <WorkSend />

      <WorkSheet />
      <div>
        <br />
        <br />
        <br />
      </div>

      <Footer />
    </main>
  )
}