import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { styles } from '../theme/appestilo';

const Pantalla2Screen = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleDivision = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    
    if (n1 === 0 && n2 === 0) {
      setResult('indeterminacion');
    } else if (n2 === 0) {
      setResult('No existe division para 0');
    } else {
      setResult(`El resultado es: ${n1 / n2}`);
    }
  };
  
 
  return (

    
    <View style={styles.containernum}>
      <TextInput
        style={styles.inputnum}
        placeholder="número 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1} 
        
      />


      <TextInput
      
        style={styles.inputnum}
        placeholder="numero 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <Button title="Dividir" onPress={handleDivision} />
      {result ? <Text style={styles.result}>{result}</Text> : null}
    </View>
  );
};



export default Pantalla2Screen;
