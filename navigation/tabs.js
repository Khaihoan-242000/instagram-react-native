import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { Home } from '../screens'

import Svg, { Path } from 'react-native-svg'
import { isIphoneX } from 'react-native-iphone-x-helper';

import { COLORS, icons, images } from '../constants'

import LinearGradient from 'react-native-linear-gradient'



const Tab = createBottomTabNavigator()

const TabBarCustomBotton = ({ accessibilityState, children, onPress }) => {
    var isSelected = accessibilityState.selected

    if(isSelected) {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={COLORS.white}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.white
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: COLORS.white
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

// is Iphone x
const CustomTabBar = (props) => {
    if(isIphoneX()) {
        return (
            <View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 30,
                        backgroundColor: COLORS.white
                    }}
                >
    
                </View>
                <BottomTabBar {...props.props} />
            </View>
        )
    } else {
        <BottomTabBar {...props.props} />
    }
}

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0,
                }
            }}
            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                />
            )}
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image 
                            source={icons.home}
                            resizeMode="contain"
                            style={style.icon}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomBotton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Search"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image 
                            source={icons.search}
                            resizeMode="contain"
                            style={style.icon}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomBotton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Video"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image 
                            source={icons.play}
                            resizeMode="contain"
                            style={style.icon}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomBotton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Heart"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image 
                            source={icons.heart}
                            resizeMode="contain"
                            style={style.icon}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomBotton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Avatar"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <LinearGradient
                            colors={['#CA1D7E', '#E35157', '#F2703F']}
                            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                            style={{ height: 40,width: 40,alignItems: 'center',justifyContent: 'center',borderRadius:40 / 2}}>
                            <Image source={images.images01} style={{width: 35,height: 35,borderRadius: 35/2,alignSelf: 'center',borderColor: '#fff',borderWidth: 3}}/>
                        </LinearGradient>
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomBotton
                            {...props}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}


const style = StyleSheet.create({
    icon: {
        width: 25,
        height: 25
    }
})

export default Tabs