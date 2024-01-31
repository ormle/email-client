import React, { useState, useEffect} from "react";
import './App.css';
import axios from 'axios';
import EmailList from "./components/emaillist/emaillist.component";
import SearchBar from "./components/searchbar/searchbar.component";
import EmailDisplay from "./components/emaildisplay/emaildisplay.components";

function App() {
  const [emails, setEmails] = useState([]);
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [activeEmail, setActiveEmail] = useState(null);
  

  //First get of all the emails from data fetch
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json'
      );
      setEmails(response.data);
    };
    fetchUsers();
  }, []);

  //Active filtering based on user input
  useEffect(() => {
    let filtered = [];
    if (searchInput === "") {
      filtered = emails;
    } else {
      filtered = emails.filter( email => 
        email.subject.toLowerCase().includes(searchInput.toLowerCase())
        );
    }
    setFilteredEmails(filtered);
  }, [emails, searchInput]);

  //Searchbar input
  const handleInput = e =>{
    setSearchInput(e.target.value);
  }

  //Handles email selection
  const handleEmailClick = (email) => {
    setActiveEmail(email);
  };

  return (
    <div className="App">
      <div className="EmailSideBar">
        <SearchBar
          placeholder='Search Subject'
          handleInput={handleInput}
        />
        <EmailList 
          emails={filteredEmails}
          //To pass email selection function down to email component
          clickEmail={handleEmailClick} 
          />
      </div>
        <EmailDisplay email={activeEmail}/>
    </div>
  );
}

export default App;
