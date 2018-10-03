import React, {Component} from "react";
import {View, Text, Image, Dimensions, StyleSheet, TouchableOpacity} from "react-native";

import Sp1 from "../../../images/temp/sp1.jpeg";
import Sp2 from "../../../images/temp/sp2.jpeg";
import Sp3 from "../../../images/temp/sp3.jpeg";
import Sp4 from "../../../images/temp/sp4.jpeg";

const {width, height} = Dimensions.get("window");
const productWidth = (width - 50)/2;
const productHeight = (productWidth/361) * 452;

export default class TopProduct extends Component {

    goProductDetail() {
        this.props.navigation.navigate("ProductDetail");
    }

    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.titleContainer}>
                    <Text style = {styles.title}>Top product</Text>
                </View>
                <View style = {styles.body}>
                    <TouchableOpacity style = {styles.child}
                        onPress={() => {
                            this.goProductDetail();
                        }}>
                        <Image source = {Sp1}
                            style = {styles.imageProduct}/>
                        <Text style = {styles.textName}>Name</Text>
                        <Text style = {styles.textPrice}>400$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.child}
                        onPress={() => {
                            this.goProductDetail();
                        }}>
                        <Image source = {Sp2}
                            style = {styles.imageProduct}/>
                        <Text style = {styles.textName}>Name</Text>
                        <Text style = {styles.textPrice}>250$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.child}
                        onPress={() => {
                            this.goProductDetail();
                        }}>
                        <Image source = {Sp3}
                            style = {styles.imageProduct}/>
                        <Text style = {styles.textName}>Name</Text>
                        <Text style = {styles.textPrice}>400$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.child}
                        onPress={() => {
                            this.goProductDetail();
                        }}>
                        <Image source = {Sp4}
                            style = {styles.imageProduct}/>
                        <Text style = {styles.textName}>Name</Text>
                        <Text style = {styles.textPrice}>250$</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        margin: 10,
        height: 600,
        shadowColor: "#2e272b",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        elevation: 5,
    },
    titleContainer: {
        height: 50,
        justifyContent: "center",
        paddingLeft: 10,
    },
    title: {
        color: "#afaeaf", 
        fontSize: 20,
    },
    body: {
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
    },
    child: {
        marginTop: 15,
        width: productWidth,
        shadowColor: "#2e272b",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 1.0,
        elevation: 5,
        backgroundColor: "white",
    },
    imageProduct: {
        height: productHeight,
        width: productWidth,
    },
    textName: {
        paddingLeft: 10,
        fontSize: 20,
        marginTop: 5,
        fontFamily: "Avenir",
        fontWeight: "500",
    },
    textPrice: {
        paddingLeft: 10,
        fontSize: 15,
        marginTop: 5,
        fontFamily: "Avenir",
        color: "#662f90",
        marginBottom: 5,
    }, 
});