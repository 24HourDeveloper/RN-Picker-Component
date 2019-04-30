import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  Platform
} from "react-native";

import { teamColors } from "./teamColors";

export default class App extends React.Component {
  state = {
    theme: "Atlanta",
    teamColors: teamColors
  };

  renderPicker = () => {
    if (Platform.OS === "android") {
      return (
        <View
          style={{
            height: 50,
            width: "100%",
            borderWidth: 1,
            borderColor: "#fff",
            borderRadius: 10,
            marginBottom: 40
          }}
        >
          <Picker
            selectedValue={this.state.theme}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ theme: itemValue })
            }
            prompt="Choose Team"
            mode="dropdown"
            style={{ color: teamColors[this.state.theme].titleColor }}
          >
            <Picker.Item label="Falcon Team" value="Atlanta" />
            <Picker.Item label="Tampa Team" value="Florida" />
            <Picker.Item label="Detroit Team" value="Detroit" />
            <Picker.Item label="Washington Team" value="Washington" />
            <Picker.Item label="GreenBay Team" value="GreenBay" />
          </Picker>
        </View>
      );
    } else {
      return (
        <View
          style={{
            width: "100%",
            marginBottom: 40
          }}
        >
          <Picker
            selectedValue={this.state.theme}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ theme: itemValue })
            }
            prompt="Choose Team"
            mode="dropdown"
            style={{
              color: teamColors[this.state.theme].titleColor,
              height: 200
            }}
            itemStyle={{ color: teamColors[this.state.theme].titleColor }}
          >
            <Picker.Item label="Falcon Team" value="Atlanta" />
            <Picker.Item label="Tampa Team" value="Florida" />
            <Picker.Item label="Detroit Team" value="Detroit" />
            <Picker.Item label="Washington Team" value="Washington" />
            <Picker.Item label="GreenBay Team" value="GreenBay" />
          </Picker>
        </View>
      );
    }
  };
  render() {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: teamColors[this.state.theme].bgColor }
        ]}
      >
        {this.renderPicker()}
        <Text
          style={{
            fontSize: 25,
            color: teamColors[this.state.theme].titleColor
          }}
        >
          {this.state.theme}
        </Text>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            { backgroundColor: teamColors[this.state.theme].buttonColor }
          ]}
        >
          <Text
            style={{
              color: teamColors[this.state.theme].textColor,
              textAlign: "center",
              fontSize: 20
            }}
          >
            News
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            { backgroundColor: teamColors[this.state.theme].buttonColor }
          ]}
        >
          <Text
            style={{
              color: teamColors[this.state.theme].textColor,
              textAlign: "center",
              fontSize: 20
            }}
          >
            Schedule
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            { backgroundColor: teamColors[this.state.theme].buttonColor }
          ]}
        >
          <Text
            style={{
              color: teamColors[this.state.theme].textColor,
              textAlign: "center",
              fontSize: 20
            }}
          >
            Team
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonStyle,
            { backgroundColor: teamColors[this.state.theme].buttonColor }
          ]}
        >
          <Text
            style={{
              color: teamColors[this.state.theme].textColor,
              textAlign: "center",
              fontSize: 20
            }}
          >
            Buy Tickets
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15
  },
  buttonStyle: {
    marginVertical: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
    borderRadius: 10
  }
});
