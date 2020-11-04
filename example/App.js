import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
    ImageBackground
} from 'react-native';
import {RNMoPubInterstitial, MoPubBanner} from 'react-native-mopub-sdk';


const INTERSTITIAL_UNIT_ID = Platform.OS == 'ios' ? '4f117153f5c24fa6a3a92b818a5eb630' : '24534e1901884e398f1253216226017e';
const BANNER_UNIT_ID = Platform.OS == 'ios' ? '0ac59b0996d947309c33f59d6676399f' : 'b195f8dd8ded45fe847ad89ed1d016da';

export default class App extends Component<Props> {

    constructor() {
        super()
        this.state = {
            mainText: '',
            title: '',
            callToActionText: '',
            mainImage: '',
            iconImage: '',
            privacyIconImage: '',
            link: ''
        }
    }

    componentDidMount() {


        RNMoPubInterstitial.initializeInterstitialAd(INTERSTITIAL_UNIT_ID);
        RNMoPubInterstitial.addEventListener('onLoaded', () => {
            console.log('Interstitial Loaded')
            RNMoPubInterstitial.show()
        });
        RNMoPubInterstitial.addEventListener('onFailed', message => console.log('Interstitial failed: ' + message));
        RNMoPubInterstitial.addEventListener('onClicked', () => console.log('Interstitial clicked'));
        RNMoPubInterstitial.addEventListener('onShown', () => console.log('Interstitial shown'));
        RNMoPubInterstitial.addEventListener('onDismissed', () => console.log('Interstitial dismissed'));

    }

    componentWillUnmount() {
        RNMoPubInterstitial.removeAllListeners('onLoaded');
        RNMoPubInterstitial.removeAllListeners('onFailed');
        RNMoPubInterstitial.removeAllListeners('onClicked');
        RNMoPubInterstitial.removeAllListeners('onShown');
        RNMoPubInterstitial.removeAllListeners('onDismissed');
    }


    onLoaded = () => {
        console.log('MoPub banner loaded');
    };


    onFailed = message => {
        console.log('MoPub banner failed with message: ' + message);
    };

    onClicked = () => {
        console.log('MoPub banner was clicked');
    };

    render() {

        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

                <MoPubBanner
                    adUnitId={BANNER_UNIT_ID}
                    autoRefresh={true}
                    onLoaded={this.onLoaded}
                    onFailed={this.onFailed}
                    onClicked={this.onClicked}
                />
               
                <TouchableOpacity style={{width: 100, height: 30, backgroundColor: '#0001', marginTop: 10,alignItems:'center',justifyContent:'center'}} onPress={() =>
                    RNMoPubInterstitial.loadAd()
                }>
                    <Text>
                        load ad
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

