import React, {Component} from "react";
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions, ScrollView} from "react-native";

const {width} = Dimensions.get("window");

export default class SignIn extends Component {
    
    goAuthentication() {
        //this.props.navigation.navigate("Authentication");
        this.props.navigation.goBack();
    }

    goSignUp() {
        this.props.navigation.navigate("SignUp");
    }
    
    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: "tomato"}}>
                <View style={styles.rootView}>
                    <View style={styles.toolBar}>
                        <TouchableOpacity onPress={() => {this.goAuthentication()}}>
                            <Image source={require("../../images/appIcon/back_white.png")}
                                style={styles.icon}></Image>
                        </TouchableOpacity>
                        <Text style={styles.titleToolbar}>Wearing a adress</Text>
                        <Image source={require("../../images/appIcon/ic_logo.png")}
                            style={styles.icon}></Image>
                    </View>
                    <View style={styles.containerInput}>
                        <TextInput style={styles.textInput} placeholder="Enter your name"></TextInput>
                        <TextInput style={[styles.textInput, {marginTop: 0}]} placeholder="Enter your password"></TextInput>                 
                    </View>
                    <TouchableOpacity style={styles.signInNow}>
                        <Text style={{color: "white"}}>Sign in now</Text>
                    </TouchableOpacity>
                    <View style={{flex: 3.5, height: 250}}></View>
                    <View style={styles.bottomButton}>
                        <TouchableOpacity style={styles.buttonSignIn}>
                            <Text style={{color: "tomato"}}>Sign in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSignOut}
                            onPress={() => {this.goSignUp()}}>
                            <Text>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    rootView: {
        backgroundColor: "tomato",
        flex: 1,
        justifyContent: "space-between",
    },
    toolBar: {
        flex: 1,
        paddingTop: 15,
        paddingRight: 10,
        paddingLeft: 10,
        width: width,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icon: {
        height: 35,
        width: 35,
    },
    titleToolbar: {
        fontSize: 25,
        color: "white",
    },
    containerInput: {
        flex: 3.5,
    },
    textInput: {
        paddingLeft: 20,
        borderRadius: 70,
        margin: 30,
        backgroundColor: "white",
        flex: 1,
    },
    signInNow: {
        flex: 0.9,
        backgroundColor: "tomato",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 50,
        borderColor: "white",
        borderWidth: 1,
        height: 50,
    },
    bottomButton: {
        marginBottom: 20,
        flexDirection: "row",
        width: width,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonSignIn: {
        marginRight: 1,
        marginLeft: 30,
        backgroundColor: "white",
        height: 50,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    buttonSignOut: {
        marginLeft: 1,
        marginRight: 30,
        backgroundColor: "white",
        height: 50,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
});