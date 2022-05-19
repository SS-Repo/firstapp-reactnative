import React from 'react';
import {
    View, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Text,
    Pressable,
    Linking
} from 'react-native';

const colorGithub = '#010409';
const colorFontGihub = '#C9D1D9';
const colorDarkFontGithub = '#4f565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/23404398?v=4';

const urlMyGithub = 'https://github.com/SS-Repo';

const App = () =>{

    const handlePressGoToGithub = async () =>{
      const res = await Linking.canOpenURL(urlMyGithub);
      if(res){
         await Linking.openURL(urlMyGithub);
      }
    };

    return(
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}>
                <Image
                    accessibilityLabel='Sergio foto github' 
                    style={style.avatar} 
                    source={{uri: imageProfileGithub}} 
                />
                <Text 
                    accessibilityLabel='Nome: sergio silveira' 
                    style={[style.defaultText,style.name]}>
                    Sergio Silveira
                </Text>
                <Text 
                    accessibilityLabel='Nome do repositorio: SS-Repo'
                    style={[style.defaultText,style.nickname]}>
                    SS-Repo
                </Text>
                <Text
                    accessibilityLabel='Descrição: Developer c# Web,Desktop and others
                    Brazil sergio.desenvolvedor.web@gmail.com' 
                    style={[style.defaultText,style.description]}>
                    Developer c# Web | Desktop and others
                    | sergio.desenvolvedor.web@gmail.com
                </Text>
                <View style={style.githubPanel1}>
                    {/* <Text>1</Text> */}
                </View>
                <View style={style.githubPanel2}>
                    {/* <Text>2</Text> */}
                </View> 
                <View style={style.githubPanel3}>
                    {/* <Text>3</Text> */}
                </View> 
                <View style={style.githubPanel4}>
                    {/* <Text>4</Text> */}
                </View> 
                <View style={style.githubPanel5}>
                    {/* <Text>4</Text> */}
                </View> 
                <View style={style.githubPanel6}>
                    {/* <Text>4</Text> */}
                </View> 
                <View style={style.githubPanel7}>
                    {/* <Text>4</Text> */}
                </View> 
                <View style={style.githubPanel8}>
                    {/* <Text>4</Text> */}
                </View>
                <View style={style.githubPanel9}>
                    {/* <Text>4</Text> */}
                </View>
                <View style={style.githubPanel10}>
                    {/* <Text>4</Text> */}
                </View>
                <View style={style.githubPanel11}>
                    {/* <Text>4</Text> */}
                </View>
                <View style={style.githubPanel12}>
                    {/* <Text>4</Text> */}
                </View>
                <View style={style.githubPanel13}>
                    {/* <Text>4</Text> */}
                </View>
                <View style={style.githubPanelf21}>
                    {/* <Text>1</Text> */}
                </View>
                <View style={style.githubPanelf22}>
                    {/* <Text>2</Text> */}
                </View> 
                <View style={style.githubPanelf23}>
                    {/* <Text>3</Text> */}
                </View> 
                <View style={style.githubPanelf24}>
                    {/* <Text>4</Text> */}
                </View> 
                <View style={style.githubPanelf25}>
                    {/* <Text>4</Text> */}
                </View> 
                <View style={style.githubPanelf26}>
                    {/* <Text>4</Text> */}
                </View> 
                <View style={style.githubPanelf27}>
                    {/* <Text>4</Text> */}
                </View> 
                <View style={style.githubPanelf28}>
                    {/* <Text>4</Text> */}
                </View>
                <View style={style.githubPanelf29}>
                    {/* <Text>4</Text> */}
                </View>
                <View style={style.githubPanelf210}>
                    {/* <Text>4</Text> */}
                </View>
                <View style={style.githubPanelf211}>
                    {/* <Text>4</Text> */}
                </View>
                <View style={style.githubPanelf212}>
                    {/* <Text>4</Text> */}
                </View>
                <View style={style.githubPanelf213}>
                    {/* <Text>4</Text> */}
                </View>
                <View style={style.githubPanelf31}>
                    {/* <Text>1</Text> */}
                </View>
                <View style={style.githubPanelf32}>
                    {/* <Text>2</Text> */}
                </View> 
                <View style={style.githubPanelf33}>
                    {/* <Text>3</Text> */}
                </View> 
                <View style={style.githubPanelf34}>
                    {/* <Text>4</Text> */}
                </View> 
                <View style={style.githubPanelf35}>
                    {/* <Text>4</Text> */}
                </View> 
                <View style={style.githubPanelf36}>
                    {/* <Text>4</Text> */}
                </View> 
                <View style={style.githubPanelf37}>
                    {/* <Text>4</Text> */}
                </View> 
                <View style={style.githubPanelf38}>
                    {/* <Text>4</Text> */}
                </View>
                <View style={style.githubPanelf39}>
                    {/* <Text>4</Text> */}
                </View>
                <View style={style.githubPanelf310}>
                    {/* <Text>4</Text> */}
                </View>
                <View style={style.githubPanelf311}>
                    {/* <Text>4</Text> */}
                </View>
                <View style={style.githubPanelf312}>
                    {/* <Text>4</Text> */}
                </View>
                <View style={style.githubPanelf313}>
                    {/* <Text>4</Text> */}
                </View>
               
               
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText,style.textButton]}>Open in Github</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1,
        justifyContent: 'center',
    },
    content:{
        top: 300,
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGihub,
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname: {
        color: colorDarkFontGithub,
        fontSize: 10,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        marginTop: -600,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    githubPanel1:{
        backgroundColor: 'green',
        top: 20,
        padding: 10,
        right: 150,
        borderRadius: 10,
    },
    githubPanel2:{
        backgroundColor: '#0bfc03',
        top:0,
        padding: 10,
        right: 125,
        borderRadius: 10,
    },
    githubPanel3:{
        backgroundColor: '#0bfc03',
        top: -20,
        padding: 10,
        right: 100,
        borderRadius: 10,
    },
    githubPanel4:{
        backgroundColor: 'green',
        top: -40,
        padding: 10,
        right: 75,
        borderRadius: 10,
    },
    githubPanel5:{
        backgroundColor: 'green',
        top: -60,
        padding: 10,
        right: 50,
        borderRadius: 10,
    },
    githubPanel6:{
        backgroundColor: '#0bfc03',
        top: -80,
        padding: 10,
        right: 25,
        borderRadius: 10,
    },
    githubPanel7:{
        backgroundColor: 'green',
        top: -100,
        padding: 10,
        right: 0,
        borderRadius: 10,
    },
    githubPanel8:{
        backgroundColor: '#0bfc03',
        top: -120,
        padding: 10,
        right: -25,
        borderRadius: 10,
    },
    githubPanel9:{
        backgroundColor: '#0bfc03',
        top: -140,
        padding: 10,
        right: -50,
        borderRadius: 10,
    },
    githubPanel10:{
        backgroundColor: '#0bfc03',
        top:-160,
        padding: 10,
        right: -75,
        borderRadius: 10,
    },
    githubPanel11:{
        backgroundColor: 'green',
        top: -180,
        padding: 10,
        right: -100,
        borderRadius: 10,
    },
    githubPanel12:{
        backgroundColor: 'green',
        top: -200,
        padding: 10,
        right: -125,
        borderRadius: 10,
    },
    githubPanel13:{
        backgroundColor: 'green',
        top: -220,
        padding: 10,
        right: -150,
        borderRadius: 10,
    },
    githubPanelf21:{
        backgroundColor: 'green',
        top: -215,
        padding: 10,
        right: 150,
        borderRadius: 10,
    },
    githubPanelf22:{
        backgroundColor: '#0bfc03',
        top:-235,
        padding: 10,
        right: 125,
        borderRadius: 10,
    },
    githubPanelf23:{
        backgroundColor: 'green',
        top: -255,
        padding: 10,
        right: 100,
        borderRadius: 10,
    },
    githubPanelf24:{
        backgroundColor: '#0bfc03',
        top: -275,
        padding: 10,
        right: 75,
        borderRadius: 10,
    },
    githubPanelf25:{
        backgroundColor: 'green',
        top: -295,
        padding: 10,
        right: 50,
        borderRadius: 10,
    },
    githubPanelf26:{
        backgroundColor: '#0bfc03',
        top: -315,
        padding: 10,
        right: 25,
        borderRadius: 10,
    },
    githubPanelf27:{
        backgroundColor: 'green',
        top: -335,
        padding: 10,
        right: 0,
        borderRadius: 10,
    },
    githubPanelf28:{
        backgroundColor: '#0bfc03',
        top: -355,
        padding: 10,
        right: -25,
        borderRadius: 10,
    },
    githubPanelf29:{
        backgroundColor: 'green',
        top: -375,
        padding: 10,
        right: -50,
        borderRadius: 10,
    },
    githubPanelf210:{
        backgroundColor: '#0bfc03',
        top:-395,
        padding: 10,
        right: -75,
        borderRadius: 10,
    },
    githubPanelf211:{
        backgroundColor: 'green',
        top: -415,
        padding: 10,
        right: -100,
        borderRadius: 10,
    },
    githubPanelf212:{
        backgroundColor: 'green',
        top: -435,
        padding: 10,
        right: -125,
        borderRadius: 10,
    },
    githubPanelf213:{
        backgroundColor: 'green',
        top: -455,
        padding: 10,
        right: -150,
        borderRadius: 10,
    },
    githubPanelf31:{
        backgroundColor: 'green',
        top: -450,
        padding: 10,
        right: 150,
        borderRadius: 10,
    },
    githubPanelf32:{
        backgroundColor: '#0bfc03',
        top:-470,
        padding: 10,
        right: 125,
        borderRadius: 10,
    },
    githubPanelf33:{
        backgroundColor: '#0bfc03',
        top: -490,
        padding: 10,
        right: 100,
        borderRadius: 10,
    },
    githubPanelf34:{
        backgroundColor: 'green',
        top: -510,
        padding: 10,
        right: 75,
        borderRadius: 10,
    },
    githubPanelf35:{
        backgroundColor: 'green',
        top: -530,
        padding: 10,
        right: 50,
        borderRadius: 10,
    },
    githubPanelf36:{
        backgroundColor: '#0bfc03',
        top: -550,
        padding: 10,
        right: 25,
        borderRadius: 10,
    },
    githubPanelf37:{
        backgroundColor: 'green',
        top: -570,
        padding: 10,
        right: 0,
        borderRadius: 10,
    },
    githubPanelf38:{
        backgroundColor: '#0bfc03',
        top: -590,
        padding: 10,
        right: -25,
        borderRadius: 10,
    },
    githubPanelf39:{
        backgroundColor: '#0bfc03',
        top: -610,
        padding: 10,
        right: -50,
        borderRadius: 10,
    },
    githubPanelf310:{
        backgroundColor: '#0bfc03',
        top:-630,
        padding: 10,
        right: -75,
        borderRadius: 10,
    },
    githubPanelf311:{
        backgroundColor: 'green',
        top: -650,
        padding: 10,
        right: -100,
        borderRadius: 10,
    },
    githubPanelf312:{
        backgroundColor: 'green',
        top: -670,
        padding: 10,
        right: -125,
        borderRadius: 10,
    },
    githubPanelf313:{
        backgroundColor: 'green',
        top: -690,
        padding: 10,
        right: -150,
        borderRadius: 10,
    },
   
  
});