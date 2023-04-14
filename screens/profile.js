import React from "react"
import {
    View,
    Text,
    SafeAreaView,
    Image,
    FlatList,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from "react-native";

//import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, icons, images, SIZES, FONTS, categories } from "../constans";


const Profile = () => {

    const categoryData = [
        {
            id: 1,
            name: "All",
            icon: icons.list,
        },
        {
            id: 2,
            name: "Vár",
            icon: icons.castle,
        },
        {
            id: 3,
            name: "Túra",
            icon: icons.hike,
        },
        {
            id: 4,
            name: "Tér",
            icon: icons.square,
        },
        {
            id: 5,
            name: "Sport",
            icon: icons.sport,
        },
        {
            id: 6,
            name: "Múzeum",
            icon: icons.museum,
        },
        {
            id: 7,
            name: "Kilátó",
            icon: icons.kilátó,
        },
        {
            id: 8,
            name: "Barlang",
            icon: icons.cave,
        },
        {
            id: 9,
            name: "Emlékmű",
            icon: icons.monument,
        },
        {
            id: 10,
            name: "Fürdő",
            icon: icons.bath,
        },
        {
            id: 11,
            name: "Rendezvény",
            icon: icons.rendezvény,
        },

    ]

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={{
                    paddingHorizontal: 10,
                    backgroundColor:COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight:3
                }}
            >
                <Text
                    style={{
                        marginBottom: 0,
                    }}
                >
                    {item.name}
                </Text>            
            </TouchableOpacity>
        )
    }
    
    const [categories, setCategories] = React.useState(categoryData)
 


    return (
        <SafeAreaView style={{ flexDirection:'column', display: 'flex', flex:1}}>
            <View style={{ flexDirection: "row", backgroundColor: "red"}}>
                <View 
                    style={{
                        flex:1, 
                        backgroundColor: COLORS.Gray, 
                        height: 100,
                        justifyContent: "center"
                    }}
                >
                    <Image 
                        source={images.avatar_1} 
                        resizeMode="cover"
                        style= {{
                            alignSelf: 'center',
                            width: 80,
                            height: 80,
                            borderRadius: 50,
                            padding: 0,
                            margin:0,
                            borderWidth: 2
                        }}
                    />
                </View>
                <View 
                    style={{
                        flex:3,  
                        height:100
                    }}
                >
                    <View style={{flex: 1,flexDirection:'column', backgroundColor: COLORS.Gray}}>
                        <View style={{flex: 1, justifyContent:'center'}}>
                            <Text style={{alignSelf: 'center', ...FONTS.h3}}>Felhasználó</Text>
                            <TouchableOpacity>
                                <Image 
                                    source={icons.settings} 
                                    resizeMode= 'cover'
                                    style= {{
                                        alignSelf: 'center',
                                        width: 40,
                                        height: 40,
                                        padding: 0,
                                        margin:0,
                                        position: 'absolute',
                                        right: 10,
                                        top: -30
                                    }}
                                />

                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1,flexDirection:'row', justifyContent:'space-around', }}>
                            <Text style={{...FONTS.h4}}>Barátok: 100</Text>
                            <Text style={{...FONTS.h4}}>Látott: 1000 </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: COLORS.Gray}}>
                <FlatList 
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{paddingVertical: 5}}
                />
            </View> 
            <View style={{flex:1, backgroundColor:'green'}}>

            </View>                    
        </SafeAreaView>
    )
}

export default Profile;

const styles = StyleSheet.create({
    items: {
        borderWidth:1,
        borderLeftWidth:0, 
        paddingHorizontal:7
    }

});