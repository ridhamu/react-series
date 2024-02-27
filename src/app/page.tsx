"use client";

import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // const [fullName, setFullName] = useState("");
  const fullName = firstName + " " + lastName;

  const memoizedWord = useMemo(() => {
    //this is cheaper operation becoz it requires re-render every time, only when the "dependencies"-changes!
    const chars = fullName.split("");
    const vowels = chars.filter((char) => "aiueoAIUEO".includes(char));
    const consonants = chars.filter((char) => !"aiueoAIUEO".includes(char));
    return [vowels, consonants];
  }, [fullName]); // this is what i mean "dependencies"👈

  // useEffect(() => { // this is an expensive operation because it execute everytime the page is re-rendered
  //   setFullName(firstName + " " + middleName + " " + lastName);
  // }, [firstName, middleName, lastName]);

  return (
    <main className="flex flex-col gap-1 p-4">
      <p>Full Name: {fullName}</p>
      <p>Vowels: {memoizedWord[0].join(",")}</p>
      <p>consonants: {memoizedWord[1].join(",")}</p>
      <input
        placeholder="first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="border rounded gap-1 p-2 w-40"
      />
      <input
        placeholder="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="border rounded gap-1 p-2 w-40"
      />
    </main>
  );
}
