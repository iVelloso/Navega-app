import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-web";

export default function Home({ navigation }){
    
    function acessarCadastro(){
        navigation.navigate('Cadastro');

    }
    return(
        <View>
            <Text>
                -- ESTOU NA HOME --
            </Text>
            <TouchableOpacity
                onPress={acessarCadastro}
                >
                <Text>
                    Acessar Cadastro
                </Text>
            </TouchableOpacity>
        </View>
    );
}