import React, {Component} from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

export default class Authentication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
        };
    }

    isSignIn() {
        this.setState({
            isLogin: true,
        });
    }

    isSignOut() {
        this.setState({
            isLogin: false,
        });
    }

    goChangeInfo() {
        this.props.navigation.navigate("ChangeInfo");
    }
    
    goOrderHistory() {
        this.props.navigation.navigate("OrderHistory");
    }

    goSignIn() {
        this.props.navigation.navigate("SignIn");
    }

    goSignUp() {
        this.props.navigation.navigate("SignUp");
    }

    render() {
        const logoutJSX = (
            <TouchableOpacity
                style={styles.buttonOpa}
                onPress={() => {this.goSignIn()}}>
                <Text style={styles.textOne}>Sign in</Text>
            </TouchableOpacity>
        );
        
        const loginJSX = (
            <View>
                <TouchableOpacity
                    style={styles.buttonOpa}>
                    <Text style={styles.textOne}>Order history</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonOpa}>
                    <Text style={styles.textOne}>Change info</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonOpa}>
                    <Text style={styles.textOne}>Sign out</Text>
                </TouchableOpacity>
            </View>
        );

        const mainJSX = this.state.isLogin ? loginJSX : logoutJSX;

        return (
            <View style={{flex: 1}}>
                {mainJSX}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonOpa: {
        alignItems: "center",
        padding: 20,
        marginTop: 20,
        marginRight: 50,
        marginLeft: 50,
        backgroundColor: "orange",
        borderRadius: 10,
    },
    textOne: {
        color: "#fff",
        fontSize: 20,
    },
});