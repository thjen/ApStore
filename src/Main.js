import React, {Component} from "react";
import {View} from "react-native";
import {HomeStack} from "./Router";

export default class Main extends Component {
    render() {
        return (
            <View style = {{flex: 1}}>
                <HomeStack />
            </View>
        );
    }
}