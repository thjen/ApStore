import React, {Component} from "react";
import {View, Text, Dimensions, TouchableOpacity, Image, TextInput, StyleSheet} from "react-native";

import icMenu from "../../../images/appIcon/ic_menu.png";
import icLogo from "../../../images/appIcon/ic_logo.png";

const {height} = Dimensions.get('window');

export default class Toolbar extends Component {
    render() {
        return (
            <View style = {styles.wrapper}>
                <View style = {styles.searchWrapper}>
                    <TouchableOpacity onPress = {() => this.props.navigation.openDrawer()}>
                        <Image source = {icMenu}
                            style = {styles.iconSize}/>
                    </TouchableOpacity>
                    <Text style = {{color: "white", fontSize: 20}}>Wearing a Dress</Text>
                    <Image source = {icLogo}
                        style = {styles.iconSize}/>
                </View>
                <TextInput style = {{height: height/15, backgroundColor: "white", marginTop: 10}}></TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height/6,
        backgroundColor: "tomato",
        flexDirection: "column",
        padding: 10,
    }, 
    searchWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 0,
    },
    iconSize: {
        width: 25,
        height: 25,
    },
});