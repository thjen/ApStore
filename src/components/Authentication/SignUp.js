import React, {Component} from "react";
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions, ScrollView} from "react-native";

const {width} = Dimensions.get("window");

export default class SignUp extends Component {

    goAuthentication() {
        //this.props.navigation.navigate("Authentication");
        this.props.navigation.goBack();
    }

    goSignIn() {
        this.props.navigation.navigate("SignIn");
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
                        <TextInput style={[styles.textInput, {marginTop: 0}]} placeholder="Enter your email"></TextInput>
                        <TextInput style={[styles.textInput, {marginTop: 0}]} placeholder="Enter your password"></TextInput>
                        <TextInput style={[styles.textInput, {marginTop: 0}]} placeholder="Re-enter your password"></TextInput>
                    </View>
                    <TouchableOpacity style={styles.buttonSignUpNow}>
                        <Text style={{color: "white"}}>Sign up now</Text>
                    </TouchableOpacity>
                    <View style={{flex: 1, height: 50}}></View>
                    <View style={styles.bottomButton}>
                        <TouchableOpacity style={styles.buttonSignIn}
                            onPress={() => {this.goSignIn()}}>
                            <Text>Sign in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSignOut}>
                            <Text style={{color: "tomato"}}>Sign up</Text>
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
    containerInput: {
        flex: 6,
    },
    buttonSignUpNow: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 50,
        flex: 1,
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "tomato",
        borderColor: "white",
        borderWidth: 1,
    },
    textInput: {
        paddingLeft: 20,
        borderRadius: 70,
        margin: 30,
        backgroundColor: "white",
        flex: 1,
    },
});