import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font';
import Styles from './styles';

const Login = () => {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [fontLoaded, setFontLoaded] = useState(false);

  const loadFont = async () => {
    await Font.loadAsync({
        'whitneybold': require('../../../assets/Fonts/whitneybold.otf'),
        'whitneymedium': require('../../../assets/Fonts/whitneymedium.otf'),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  }

    return (
        <View style={Styles.container}>
            <View style={Styles.loginContainer}>
                <View style={Styles.boasVindas}>
                    <View style={Styles.tituloContainer}>
                        <Text style={Styles.titulo}>Boas-Vindas de volta!</Text>
                    </View>
                    <View>
                        <Text style={Styles.texto}>Estamos muito animados em te ver novamente!</Text>
                    </View>
                </View>
                <View style={Styles.infoContainer} >
                    <Text style={Styles.info}>INFORMAÇAO DE CONTA</Text>
                </View>
                <View>
                    <TextInput
                        style={Styles.input}
                        placeholder="E-mail ou número de telefone"
                        placeholderTextColor={'#c1c1c1'}
                        value={login}
                        onChangeText={(text) => setLogin(text)}
                    />
                    <TextInput
                        style={Styles.input}
                        placeholder="Senha"
                        placeholderTextColor={'#c1c1c1'}
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                    />
                </View>
                <View style={Styles.recuperarContainer}>
                    <Text style={Styles.recuperar}>Esqueceu sua senha?</Text>
                </View>
                <View>
                    <Text style={Styles.recuperar}>Utilizar um gerenciador de senhas?</Text>
                </View>
                <View style={Styles.botaoContainer}>
                    <TouchableOpacity style={Styles.botao}>
                        <Text style={Styles.entrar}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default Login