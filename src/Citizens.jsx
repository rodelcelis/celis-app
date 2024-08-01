import React, { useState } from "react";
import Citizen from "./Citizen";
import SearchFilter from "./SearchFilter";
import "./styles.css";

const Citizens = () => {
  const initialCitizens = [
    {
      name: "Rodel",
      age: 20,
      address: "Basak",
      status: "Active",
    },
    {
      name: "Kyrie",
      age: 28,
      address: "Carcar",
      status: "Active",
    },
    {
      name: "Lebron",
      age: 38,
      address: "Toledo",
      status: "Active",
    },
    {
      name: "Japhzel",
      age: 40,
      address: "Mandaue",
      status: "Active",
    },
    {
      name: "Leinard",
      age: 45,
      address: "Naga",
      status: "Active",
    },
    {
      name: "Jei",
      age: 67,
      address: "Talisay",
      status: "Active",
    },
    {
      name: "Joanna",
      age: 50,
      address: "Toledo",
      status: "Inactive",
    },
    {
      name: "Sweet",
      age: 69,
      address: "Tunghaan",
      status: "Inactive",
    },
    {
      name: "Edgardo",
      age: 52,
      address: "Tulay",
      status: "Inactive",
    },
    {
      name: "Jane",
      age: 31,
      address: "Tungkop",
      status: "Inactive",
    },
  ];

  const [citizens, setCitizens] = useState(initialCitizens);
  const [filteredCitizens, setFilteredCitizens] = useState(initialCitizens);

  function getRandomAge() {}

  const toggleStatus = (index) => {
    const updatedCitizens = citizens.map((citizen, i) =>
      i === index
        ? {
            ...citizen,
            status: citizen.status === "Active" ? "Inactive" : "Active",
          }
        : citizen
    );
    setCitizens(updatedCitizens);
    setFilteredCitizens(updatedCitizens);
  };

  return (
    <div>
      <SearchFilter
        citizens={citizens}
        setFilteredCitizens={setFilteredCitizens}
      />
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredCitizens.map((citizen, index) => (
            <Citizen
              key={index}
              citizen={citizen}
              index={index}
              toggleStatus={toggleStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Citizens;
