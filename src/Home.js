import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import {observable} from 'mobx';
import {observer, inject} from 'mobx-react';

@inject("counterStore", "userStore")
export default class Home extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.topRow}>
                    <Counter />
                </View>

                <View style={styles.bottomRow}>
                    <View style={styles.twoRowsContainer}>
                        <View style={[styles.gridContainer, {backgroundColor: "#A8CF85"}]}>
                            <FirstName />
                        </View>
                        <View style={[styles.gridContainer, {backgroundColor: "#7BC4BC"}]}>
                            <LastName />
                        </View>
                    </View>
                    <View style={styles.twoRowsContainer}>
                        <View style={[styles.gridContainer, {backgroundColor: "#FBB569"}]}>
                            <Email />
                        </View>
                        <View style={[styles.gridContainer, {backgroundColor: "#4D6AD0"}]}>
                            <Phone />
                        </View>
                    </View>                   
                 </View>

                <View style={styles.fullName}>
                    <FullName />
                </View>
                <View style={styles.actionRow}>
                    <Actions />
                </View>
            </View>
        )
    }
}

@inject("counterStore")
@observer
class Counter extends Component {
    render(){
        return <Text>Count: {this.props.counterStore.count}</Text>
    }
}

@inject("counterStore")
class Actions extends Component {
    firstNames  = ["John", "Fred", "Barney"];
    lastNames = ["Doe", "Flintstone", "Rubble"];
    emails = ["x@y.z", "a@b.c", "s@t.u"];
    phones = ["1234", "5678", "9012"];
    firstNameIndex = lastNameIndex = emailIndex = phoneIndex = 0;
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.button}
                            onPress={() => this.props.counterStore.increment()}
                            title="Increment Counter"
                            color="#805841" />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.button}
                            onPress={() => this.props.counterStore.decrement()}
                            title="Decrement Counter"
                            color="#805841" />
                    </View>
                </View>
            </View>
        );
    }
}

@inject("userStore")
@observer
class FirstName extends Component {
    render(){
        console.log("Render first name");
        return <Text>FirstName: {this.props.userStore.firstName}</Text>;
    }
}

@inject("userStore")
@observer
class LastName extends Component {
    render(){
        console.log("Render last name");
        return <Text>LastName: {this.props.userStore.lastName}</Text>;
    }
}

@inject("userStore")
@observer
class Email extends Component {
    render(){
        console.log("Render email");
        return <Text>Email: {this.props.userStore.email}</Text>;
    }
}

@inject("userStore")
@observer
class Phone extends Component {
    render(){
        console.log("Render phone");
        return <Text>Phone: {this.props.userStore.phone}</Text>;
    }
}

@inject("userStore")
@observer
class FullName extends Component {
    render(){
        console.log("Render fullname");
        return <Text>LastName: {this.props.userStore.fullName}</Text>;
    }
}

changeFirstName() {
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    buttonContainer: {
        flex:1,
        padding: 50
    },
    gridContainer: {
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    twoRowsContainer: {
        flex: 1,
        backgroundColor: "#445665",
        flexDirection: "row",
    },
    fullName: {
        flex: 1,
        backgroundColor: "#F5A2A2",
        justifyContent: "center",
        alignItems: "center",
    },
    bottomRow: {
        flex:3,
        backgroundColor: "#006E60",
    },
    button: {
        fontSize: 20,
        width: 100,
      },
    topRow: {
        flex:1,
        backgroundColor: "#D4456A",
        alignItems: "center",
        justifyContent: "center"
    },
    actionRow: {
        flex: 2,
        padding: 16,
    },
    row: {
        flex: 1,
        flexDirection: "row",
    }
})