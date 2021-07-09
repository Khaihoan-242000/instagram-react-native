import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, FlatList, ScrollView } from 'react-native'

import { COLORS, icons, images, SIZES } from  '../constants'
import LinearGradient from 'react-native-linear-gradient'

import userData from '../data/userData'
import postData from '../data/postData'

const Home = ({navigation}) => {
    // renderHeader
    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TouchableOpacity style={{ paddingLeft: SIZES.padding * 2 }}>
                    <Image 
                        source={icons.logo}
                        resizeMode="cover"
                        style={{
                            width: 100,
                            height: 50
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', paddingRight: SIZES.padding * 2 }}>
                    <TouchableOpacity style={{ paddingRight: SIZES.padding * 2 }}>
                        <Image 
                            source={icons.add}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={icons.messenger}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    // story
    function renderStory() {
        const renderItem = ({item, index}) => {
            return (
                <TouchableOpacity style={{ paddingLeft: SIZES.padding }}>
                    <View style={{ height: 70,width: 70, alignItems: 'center', justifyContent: 'center'}}>
                        <LinearGradient
                            colors={['#CA1D7E', '#E35157', '#F2703F']}
                            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                            style={{ height: 70,width: 70, alignItems: 'center', justifyContent: 'center', borderRadius:70 / 2}}>
                            <Image source={item.avatar} style={{width: 65,height: 65,borderRadius: 65/2,alignSelf: 'center',borderColor: '#fff',borderWidth: 3}}/>
                        </LinearGradient>
                        {
                            index === 0 ? 
                            <View
                                style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        right: 5,
                                        width: 20,
                                        height: 20,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#0652DD',
                                        borderRadius: 30 / 2,
                                }}
                            >
                                <Text style={{fontSize: 20, color: '#fff', top: -2.5, left: .5 }}>+</Text>
                            </View> : <View></View>
                        }
                    </View>
                    <Text style={{alignItems: 'center', justifyContent: 'center'}}>{item.name}</Text>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ paddingLeft: SIZES.padding, paddingTop: SIZES.padding * 2, flexDirection: 'row' }}>
                <FlatList 
                    data={userData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                />
            </View>
        )
    }
    // renderPost
    function renderPost() {
        const renderItem = ({item}) => {
            return (
                <View style={{marginTop: SIZES.padding * 2}}>
                    {/* Header Post */}
                    <View 
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: SIZES.padding
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Image 
                                    source={item.user.avatar}
                                    resizeMode="cover"
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 40 / 2 
                                    }}
                                />
                                <Text style={{ fontSize: SIZES.body3, marginLeft: 10}}>{item.user.name}</Text>
                            </View>
                            <Image
                                source={icons.more}
                                style={{
                                    width: 5,
                                    height: 20
                                }}
                            />
                    </View>

                    {/* Image */}
                    <View
                        style={{
                            width: '100%',
                            height: 500
                        }}
                    >
                        <Image 
                            source={item.photo}
                            // resizeMode="cover"
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                        />
                    </View>

                    {/* info */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: SIZES.padding}}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity>
                                <Image 
                                    source={icons.heart}
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingLeft: SIZES.padding * 2}}>
                                <Image 
                                    source={icons.cmt}
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingLeft: SIZES.padding * 2}}>
                                <Image 
                                    source={icons.seen}
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <Image 
                                source={icons.save}
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                        </TouchableOpacity>           
                    </View>

                    {/* text box */}
                    <View style={{ padding: SIZES.padding}}>
                        <Text style={{ fontWeight: '600'}}>{item.heart} Lượt Thích</Text>
                        <View>
                            <Text style={{ fontWeight: '600', fontSize: SIZES.body3}}>{item.user.name}</Text>
                            <Text>{item.description}</Text>
                        </View>
                        <Text style={{ marginTop: 10}}>Xem tất cả {item.cmt} bình luận</Text>
                    </View>
                    {/* cmt */}
                    <View style={{ padding: SIZES.padding, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <Image 
                                source={images.images01}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 30 / 2
                                }}
                            />
                            <Text style={{ marginLeft: 10}}>Thêm bình luận...</Text>
                        </View>
                        <View>
                            
                        </View>
                    </View>
                </View>
            )
        }
        return (
            <FlatList 
                data={postData}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
            />
        )
    }

    return (
        <SafeAreaView style={style.container}>
            {renderHeader()}
            <ScrollView>
                {renderStory()}
                {renderPost()}
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg,
    }
})


export default Home