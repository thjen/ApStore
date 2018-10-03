import React, {Component} from "react";
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from "react-native";

export default class ListDetail extends Component {

    goDetail() {
        this.props.navigation.navigate("ProductDetail");
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Party Dress</Text>
                    </View>
                    <View style={styles.divider}></View>
                    <View style={styles.productContent}>
                        <Image source={require("../../images/temp/sp1.jpeg")}
                            style={styles.thumbnail}/>
                        <View style={styles.productInfo}>
                            <Text style={{fontSize: 20}}>Lace sleeve si</Text>
                            <Text style={{fontSize: 15, color: "#b10d65"}}>117$</Text>
                            <View style={styles.lastRowProductInfo}>
                                <Text>Color royalblue</Text>
                                <View style={styles.dot}></View>
                                <TouchableOpacity onPress={() => {this.goDetail()}}
                                    style={{}}>
                                    <Text style={{color: "#b10d65",}}>Show detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dbdbdb',
        padding: 20,
    },
    header: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    wrapper: {
        flex: 1,
        shadowColor: "#2e272b",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        elevation: 5,
        backgroundColor: "white",
    },
    divider: {
        height: 1,
        backgroundColor: "#f0f0f0",
        margin: 10,
    },
    title: {
        fontSize: 20,
        color: "#b10d65",
    },
    productContent: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        flexDirection: "row",
    },
    productInfo: {
        flex: 1,
        paddingLeft: 15,
        justifyContent: "space-between",
    },
    thumbnail: {
        height: 70,
        width: 50,
    },
    lastRowProductInfo: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center",
    },
    dot: {
        height: 10,
        width: 10,
        backgroundColor: "cyan",
        borderRadius: 50,
    },
});