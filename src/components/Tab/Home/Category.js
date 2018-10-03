import React, {Component} from "react";
import {View, Text, Dimensions, StyleSheet, ImageBackground, TouchableOpacity} from "react-native";
import Swiper from "react-native-swiper";

import Little from "../../../images/temp/little.jpg";
import Maxi from "../../../images/temp/maxi.jpg";
import Party from "../../../images/temp/party.jpg";

const {width, height} = Dimensions.get("window");

const imageWidth = width - 20;
const imageHeight = (imageWidth/933) * 465;

export default class Category extends Component {
    constructor(props) {
        super(props);
    }

    goProductDetail() {
        this.props.navigation.navigate("ProductDetail");
    }

    goListDetail() {
        this.props.navigation.navigate("ListDetail");
    }

    // componentDidMount() {
    //     const {type} = this.props;
    //     const json = JSON.parse(type);
    // }
    
    render() { 
        const {type} = this.props;
        console.log("arr", Object.values({type}));
        var arrType = Object.values({type});
        var objre = arrType.forEach(element => {
            console.log("element", element.type);
        });
        console.log("type", arrType[1]);
        arrType.map((element) => {
            console.log("id", element.id);
            console.log("image", element.image);
            console.log("name", element.name);
        });

        return(
            <View style = {styles.wrapper}>
                <View style = {{flex: 1}}>
                    <Text style = {{
                        fontSize: 20, 
                        color: "#afaeaf", 
                        paddingTop: 5, 
                        padding: 10, 
                        justifyContent: "center"
                        }}>List of category
                    </Text>
                </View>
                <View style = {{flex: 4}}>
                    <Swiper>
                        {arrType.map((element, index) => (
                            <TouchableOpacity onPress={() => {
                                this.goListDetail()
                            }}
                            key={index}>
                                <ImageBackground source = {element.image} 
                                    style = {styles.imageSize}
                                    >
                                    <Text style = {{fontSize: 17}}>{element.name}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))}
                    </Swiper>
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
    imageSize: {
        height: imageHeight,
        width: imageWidth,
        alignItems: "center",
        justifyContent: "center",
    }
});