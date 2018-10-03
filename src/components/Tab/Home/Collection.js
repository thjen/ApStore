import React, {Component} from "react";
import {View, Text, Image, Dimensions, StyleSheet} from "react-native";

import Banner from "../../../images/temp/banner.jpg"

const {width, height} = Dimensions.get("window");

const imageWidth = width - 40;
const imageHeight = (imageWidth/933) * 465;

export default class Collection extends Component {
    render() {
        return(
            <View style = {styles.wrapper}>
                <View style = {{flex: 1}}>
                    <Text style = {{
                        fontSize: 20, 
                        color: "#afaeaf", 
                        paddingTop: 5, 
                        padding: 10, 
                        justifyContent: "center"
                        }}>Collection
                </Text>
                </View>
                <View style = {{flex: 4, alignItems: "center"}}>
                    <Image source = {Banner}
                        style = {{width: imageWidth, height: imageHeight, padding: 10}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.33,
        backgroundColor: "#ffffff",
        margin: 10,
        shadowColor: "#2e272b",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        elevation: 5,
    },
});