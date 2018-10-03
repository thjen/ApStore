import React, {Component} from "react";
import {ScrollView, Image, View} from "react-native";

import Toolbar from "./Toolbar";
import Collection from "./Collection";
import Category from "./Category";
import TopProduct from "./TopProduct";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            types: [],
        };
    }

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Image source = {require("../../../images/home.png")}
                style = {[{width: 26, height: 26,}, {tintColor: tintColor}]}>
            </Image>
        ),
        /*drawerIcon: ({tintColor}) => (
            <Image source = {require("../../../images/home.png")}
                style = {[{height: 26, width: 26,}, {tintColor: tintColor}]}/>
        ),*/ 
    }

    componentDidMount() {
        // FIXME: fetch error
        /*fetch("http://192.168.1.25/app/")
        .then((res) => {res.json()})
        .then((resJson) => {
            //this.setState({types: resJson});
            const {type} = resJson;
            console.log(resJson);
        }).catch((error) => {
            console.log(error);
        });*/
        // TODO: networking
        var request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }

            if (request.status === 200) {
                this.setState({types: request.responseText, isLoading: false});
            } else {
                console.warn('error');
            }
        };

        request.open('GET', 'http://192.168.1.25/app/');
        request.send();
    }

    goAuthentication() {
        this.props.navigation.navigate("Authentication");
    }

    render() {
        return (
            <ScrollView style = {{flex: 1, backgroundColor: "#dbdbdb"}}>
                <Toolbar navigation = {this.props.navigation}/>
                <View>
                    <Collection navigation={this.props.navigation}
                    />
                    <Category navigation={this.props.navigation}
                        type={this.state.types}
                    />
                    <TopProduct navigation={this.props.navigation}/>
                </View>
            </ScrollView>
        );
    }
}