import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function App() {
  const [Date, setDate] = useState("");
  const [Name, setName] = useState("");
  const [Surname, setSurname] = useState("");
  const [Concept, setConcept] = useState("");
  const [Code, setCode] = useState("");
  const [Account, setAccount] = useState("");
  const [Credit, setCredit] = useState(0);
  const [Debit, setDebit] = useState(0);

  const saveDate = (text: string) => {
    if (text.length >= 10 && text != "2022-07-29") {
      alert("La fecha ingresada no es valida");
      return;
    } else Text.length <= 10;
    {
      setDate(text);
      console.log(text);
    }
  };

  const saveJournal = () => {
    console.log(` \n La fecha es: ${Date} \n\n`);
    console.log(`Nombre Completo: ${Name}  ${Surname} \n\n`);
    console.log(`Descripción: ${Concept} \n\n`);
    console.log(`El Codigo es: ${Code} \n\n`);
    console.log(`El numero de Cuenta es: ${Account} \n\n`);
  };

  const saveName = (text: string) => {
    setName(text);
  };

  const saveLastName = (text: string) => {
    setSurname(text);
  };

  const saveConcept = (text: string) => {
    setConcept(text);
  };

  const saveCode = (text: string) => {
    setCode(text);
  };

  const saveAccount = (text: string) => {
    setAccount(text);
  };

  const isNumber = (text: string) => {
    const TextIsNumber = Number(text);
    return !Number.isNaN(TextIsNumber);
  };

  const saveCredit = (text: string) => {
    console.log(
      `La variable text con valor ${text} es un numero ?: ${isNumber(text)}`
    );
  };

  const saveDebit = (text: string) => {
    console.log(
      `La variable text con valor ${text} es un numero ?: ${isNumber(text)}`
    );
  };

  return (
    <View>
      <Text> Journals </Text>

      <Text> Date: </Text>
      <TextInput placeholder="Date" 
      onChangeText={(text) => saveDate(text)}/>

      <Text> Nombre: </Text>
      <TextInput placeholder="Nombre" onChangeText={(text) => saveName(text)} />

      <Text> Surname: </Text>
      <TextInput
        placeholder="Surname"
        onChangeText={(text) => saveLastName(text)}
      />

      <Text> Concept: </Text>
      <TextInput
        placeholder="Concept"
        onChangeText={(text) => saveConcept(text)}
      />

      <View>
        <Text> Code: </Text>
        <TextInput placeholder="Code" onChangeText={(text) => saveCode(text)} />

        <Text> Account: </Text>
        <TextInput
          placeholder="Account"
          onChangeText={(text) => saveAccount(text)}
        />

        <Text> Credit: </Text>
        <TextInput
          placeholder="Credit"
          onChangeText={(text) => saveCredit(text)}
        />

        <Text> Debit: </Text>
        <TextInput
          placeholder="Debit"
          onChangeText={(text) => saveDebit(text)}
        />

        <Button title="Guardar" onPress={() => saveJournal()} />
      </View>
    </View>
  );
}
