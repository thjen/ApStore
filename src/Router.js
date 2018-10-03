import {createStackNavigator, createDrawerNavigator, createBottomTabNavigator
            , DrawerItems} from "react-navigation";
import Contact from "./components/Tab/Contact/Contact";
import Authentication from "./components/Authentication/Authentication";
import ChangeInfo from "./components/ChangeInfo/ChangeInfo";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import Home from "./components/Tab/Home/Home";
import Cart from "./components/Tab/Cart/Cart";
import Search from "./components/Tab/Search/Search";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import ProductDetail from "./components/Tab/ProductDetail";
import ListDetail from "./components/Tab/ListDetail";

export const Tabbar = createBottomTabNavigator({
    Home: { 
        screen: Home, 
    },
    Cart: {
        screen: Cart,
    },
    Search: {
        screen: Search,             
    },
    Contact: {
        screen: Contact,
    }}, {
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#e91e63',
        },
    }
);

export const Drawer = createDrawerNavigator({
    Home: Tabbar,
    Authentication: createStackNavigator({
        Authentication: {
            screen: Authentication,
        },
        SignIn: {
            screen: SignIn,
        },
        SignUp: {
            screen: SignUp,
        }}, {
            navigationOptions: {
                header: null,
            },
        }),
    ChangeInfo: ChangeInfo,
    OrderHistory: OrderHistory,
    }, {
    //contentComponent: CustomDrawer,
    contentOptions: {
        activeTintColor: "orange"
    }}
);

export const HomeStack = createStackNavigator({
    Home: {
        screen: Drawer,
        navigationOptions: {
            header: null,
        },
    },
    ProductDetail: {
        screen: ProductDetail,
    },
    ListDetail: {
        screen: ListDetail,
    },
});


/*const CustomDrawer = (props) => (
    <ScrollView>
        <View style = {{flex: 1}}>
            <View style = {{backgroundColor: "tomato", height: 150}}>
                <Image source = {require("./images/user.png")}
                    style = {{width: 120, height: 120}}/>
            </View>
            <DrawerItems {...props}/>
        </View>
    </ScrollView>
);*/