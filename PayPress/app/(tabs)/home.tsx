import React from "react";

import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import styles from "../styles";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <View>
          <Text style={{ fontFamily: "PoppinsExtraBold", fontSize: 18 }}>
            Hello
          </Text>
          <Text>Spend wisely</Text>
        </View>
        <View style={style.ProfileContainer}></View>
      </View>

      {/* Dashboard container */}
      <View style={style.dash_Container}>
        <ImageBackground
          source={require("../../assets/images/FrameDashboard.png")}
          style={style.dash_image}
          resizeMode="cover"
        >
          <Image
            source={require("../../assets/images/dash_star.png")}
            style={{
              width: 44,
              height: 44,
              position: "absolute",
              top: 50,
              right: "60%",
            }}
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/dash_star.png")}
            style={{ width: 44, height: 44, position: "absolute", top: 65 }}
            resizeMode="contain"
          />
          <View style={style.buttonRow}>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.Secondary,
                borderRadius: 15,
                padding: 5,
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => {
                router.push("/my_savings");
              }}
            >
              <Ionicons
                name="add"
                size={20}
                color="black"
                style={{ marginRight: 6 }}
              />
              <Text>Quick Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                router.push("/savingsDashboard");
              }}
              style={{
                backgroundColor: Colors.Secondary,
                borderRadius: 15,
                padding: 5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text>View Savings</Text>
              <Ionicons
                name="arrow-forward"
                size={20}
                color="black"
                style={{ marginRight: 6 }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 10,
              padding: 10,
              marginTop: 24,
              width: "100%",
            }}
          >
            <View style={{ alignItems: "flex-start" }}>
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 14 }}>
                My Savings
              </Text>
              <View
                style={{
                  flexDirection: "row",

                  alignItems: "center",
                  gap: 20,
                }}
              >
                <Text style={{ color: "#fff", fontSize: 18, marginTop: 2 }}>
                  ₦0
                </Text>
                <Ionicons name="eye" size={18} color="#fff" />
              </View>
            </View>
            <View style={{ alignItems: "flex-end", flexDirection: "row" }}>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 14,
                  marginRight: 6,
                }}
              >
                Transaction History
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      {/* TO_DO */}
      <ScrollView style={{ marginBottom: 50 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          <Text style={style.toDo_Txt}>To-do lists</Text>
          <TouchableOpacity>
            <Text style={style.toDo_Txt}>Hide {">"}</Text>
          </TouchableOpacity>
        </View>

        {/* Card Items */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={style.mainCardContainer}>
            {/* BVN Card */}
            <TouchableOpacity
              onPress={() => {
                router.push("../addBVN");
              }}
            >
              <View style={style.cardConatiner}>
                <View style={style.cardImgContainer}>
                  <Image
                    style={style.cardImg}
                    source={require("../../assets/images/addBVN.png")}
                  />
                  <Text style={style.cardTxt}>Add your {"\n"}BVN</Text>
                </View>
                <View style={style.divider} />
              </View>
            </TouchableOpacity>

            {/* Lock funds */}
            <TouchableOpacity
              onPress={() => {
                router.push("../lockFund");
              }}
            >
              <View style={style.cardConatiner}>
                <View style={style.cardImgContainer}>
                  <Image
                    style={style.cardImg}
                    source={require("../../assets/images/lockFunds.png")}
                  />
                  <Text style={style.cardTxt}>Lock {"\n"}Funds</Text>
                </View>
                <View style={style.divider} />
              </View>
            </TouchableOpacity>

            {/* Link Bank Card */}
            <TouchableOpacity
              onPress={() => {
                router.push("../linkBank");
              }}
            >
              <View style={style.cardConatiner}>
                <View style={style.cardImgContainer}>
                  <Image
                    style={style.cardImg}
                    source={require("../../assets/images/linkBank.png")}
                  />
                  <Text style={style.cardTxt}>Link{"\n"}Bank...</Text>
                </View>
                <View style={style.divider} />
              </View>
            </TouchableOpacity>

            {/* Upload image card */}
            <TouchableOpacity>
              <View style={style.cardConatiner}>
                <View style={style.cardImgContainer}>
                  <Image
                    style={style.cardImg}
                    source={require("../../assets/images/uploadPic.png")}
                  />
                  <Text style={style.cardTxt}>Upload a {"\n"}Picture</Text>
                </View>
                <View style={style.divider} />
              </View>
            </TouchableOpacity>
            {/* Approve device card */}
            <TouchableOpacity>
              <View style={style.cardConatiner}>
                <View style={style.cardImgContainer}>
                  <Image
                    style={style.cardImg}
                    source={require("../../assets/images/addBVN.png")}
                  />
                  <Text style={style.cardTxt}>Approve{"\n"}Device</Text>
                </View>
                <View style={style.divider} />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* other Services section */}
        <Text
          style={{
            fontFamily: "PoppinsRegular",
            fontSize: 12,
            color: Colors.darkMode,
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          Other Services
        </Text>
        <View style={[style.cardImgContainer, { marginBottom: 20 }]}>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "column",
                marginTop: 10,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <Image
                resizeMode="contain"
                style={style.otherServiceImg}
                source={require("../../assets/images/scratchCard.png")}
              />
              <Text style={style.otherServiceTxt}>ScratchCard</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "column",
                marginTop: 10,
                marginLeft: 20,
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                resizeMode="contain"
                style={style.otherServiceImg}
                source={require("../../assets/images/airtime&Data.png")}
              />
              <Text style={style.otherServiceTxt}>Airtime & Data</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "column",
                marginTop: 10,
                marginLeft: 20,
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                resizeMode="contain"
                style={style.otherServiceImg}
                source={require("../../assets/images/Gotv&DsTV.png")}
              />
              <Text style={style.otherServiceTxt}>Gotv & Dstv sub.</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "column",
                marginTop: 10,
                marginLeft: 20,
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                resizeMode="contain"
                style={style.otherServiceImg}
                source={require("../../assets/images/Electricity.png")}
              />
              <Text style={style.otherServiceTxt}> Electricity</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Saving plans section */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          <Text style={[style.toDo_Txt, { color: "#928E8E" }]}>
            My Saving Plans
          </Text>
          <TouchableOpacity>
            <Text
              style={[
                style.toDo_Txt,
                { color: "#0B57BD", fontSize: 12, fontFamily: "PoppinsMedium" },
              ]}
            >
              View All {">"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* saving card */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={style.mainSavingsCardContainer}>
            {/* health savings */}
            <TouchableOpacity>
              <View style={[style.SavingCards, { backgroundColor: "#CCFDC7" }]}>
                <Image
                  style={style.savingsImg}
                  source={require("../../assets/images/health_savings.png")}
                />
                <Text style={style.savingsTxt}>Health Savings</Text>
              </View>
            </TouchableOpacity>

            {/* Education Savings */}
            <TouchableOpacity>
              <View style={[style.SavingCards, { backgroundColor: "#E5F6FF" }]}>
                <Image
                  style={style.savingsImg}
                  source={require("../../assets/images/education.png")}
                />
                <Text style={style.savingsTxt}>Education {"\n"} Savings</Text>
              </View>
            </TouchableOpacity>

            {/* Rent savings */}
            <TouchableOpacity>
              <View style={[style.SavingCards, { backgroundColor: "#FFEEBE" }]}>
                <Image
                  style={style.savingsImg}
                  source={require("../../assets/images/rent.png")}
                />
                <Text style={style.savingsTxt}>Rent {"\n"} Savings</Text>
              </View>
            </TouchableOpacity>

            {/* Wedding savings */}
            <TouchableOpacity>
              <View style={[style.SavingCards, { backgroundColor: "#F6D5D5" }]}>
                <Image
                  style={style.savingsImg}
                  source={require("../../assets/images/wedding_saving.png")}
                />
                <Text style={style.savingsTxt}>Wedding {"\n"} Savings</Text>
              </View>
            </TouchableOpacity>

            {/* Real estate savings */}
            <TouchableOpacity>
              <View style={[style.SavingCards, { backgroundColor: "#CBC3F8" }]}>
                <Image
                  style={style.savingsImg}
                  source={require("../../assets/images/real_estate_savings.png")}
                />
                <Text style={style.savingsTxt}>Real Estate {"\n"} Savings</Text>
              </View>
            </TouchableOpacity>

            {/* customize savings */}
            <TouchableOpacity>
              <View style={[style.SavingCards, { backgroundColor: "#9DBCE5" }]}>
                <Image
                  style={style.savingsImg}
                  source={require("../../assets/images/create_your_own_plan.png")}
                />
                <Text style={style.savingsTxt}>Create your own plan</Text>
              </View>
            </TouchableOpacity>

            {/* End of saving... */}
          </View>
        </ScrollView>

        {/* Sliding card 1*/}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={style.mainSavingsCardContainer}>
            <View
              style={[style.slidingCard, { backgroundColor: Colors.Primary }]}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "PoppinsExtraBold",
                  color: Colors.white,
                  marginLeft: 20,
                  marginTop: 10,
                  width: 150,
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Save Automatically {"\n"} Reach your goals {"\n"} without stress
              </Text>
              <Image
                resizeMode="contain"
                style={{
                  width: 89.5,
                  height: 73,
                  justifyContent: "space-between",
                }}
                source={require("../../assets/images/pana.png")}
              />
            </View>

            {/* Sliding card 2*/}

            <View style={[style.slidingCard, { backgroundColor: "#CD5DD3" }]}>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "PoppinsExtraBold",
                  color: Colors.white,
                  marginLeft: 20,
                  marginTop: 10,
                  width: 150,
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Save Automatically {"\n"} Reach your goals {"\n"} without stress
              </Text>
              <Image
                resizeMode="contain"
                style={{
                  width: 89.5,
                  height: 73,
                  justifyContent: "space-between",
                }}
                source={require("../../assets/images/pana.png")}
              />
            </View>
          </View>
        </ScrollView>

        {/* Trusted Investment Section */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          <Text style={[style.toDo_Txt, { color: "#928E8E" }]}>
            Truted Investments
          </Text>
          <TouchableOpacity>
            <Text
              style={[
                style.toDo_Txt,
                { color: "#CD5DD3", fontSize: 12, fontFamily: "PoppinsMedium" },
              ]}
            >
              Find more {">"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Invest Cards 1 */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={style.mainSavingsCardContainer}>
            <View>
              <TouchableOpacity>
                <ImageBackground
                  style={{ width: 103, height: 98 }}
                  resizeMode="contain"
                  source={require("../../assets/images/investCard_1.png")}
                >
                  <View
                    style={{
                      backgroundColor: "#0A9814",
                      borderRadius: 10,
                      width: "80%",
                      height: 15,
                      alignSelf: "flex-end",
                      justifyContent: "center",
                      margin: 5,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 8,
                        color: Colors.white,
                      }}
                    >
                      ₦5K . INVEST NOW
                    </Text>
                  </View>

                  <View>
                    <Text
                      style={{
                        // textAlign: "center",
                        fontSize: 12,
                        color: Colors.white,
                        position: "absolute",
                        top: 40,
                        fontFamily: "PoppinsExtraBold",
                        marginLeft: 10,
                      }}
                    >
                      19% {"\n"}
                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: "PoppinsBold",
                          textAlign: "left",
                        }}
                      >
                        Per Annum
                      </Text>
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <View style={{ width: 103 }}>
                <Text
                  style={{
                    color: "#7F7F7F",
                    fontSize: 8,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  INVESTORS:1,364
                </Text>
                <Text
                  style={{
                    color: Colors.darkMode,
                    fontSize: 10,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  CORPORATE DEBT NOTES...
                </Text>
                <Text
                  style={{
                    color: "#7F7F7F",
                    fontSize: 8,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  4.7% returns in 3months
                </Text>
              </View>
            </View>

            {/* Invest Card 2 */}
            <View>
              <TouchableOpacity>
                <ImageBackground
                  style={{ width: 103, height: 98 }}
                  resizeMode="contain"
                  source={require("../../assets/images/investCard_2.png")}
                >
                  <View
                    style={{
                      backgroundColor: "#D50707",
                      borderRadius: 10,
                      width: "80%",
                      height: 15,
                      alignSelf: "flex-end",
                      justifyContent: "center",
                      margin: 5,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 8,
                        color: Colors.white,
                      }}
                    >
                      ₦5K . SOLD OUT
                    </Text>
                  </View>

                  <View>
                    <Text
                      style={{
                        // textAlign: "center",
                        fontSize: 12,
                        color: Colors.white,
                        position: "absolute",
                        top: 40,
                        fontFamily: "PoppinsExtraBold",
                        marginLeft: 10,
                      }}
                    >
                      21% {"\n"}
                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: "PoppinsBold",
                          textAlign: "left",
                        }}
                      >
                        Per Annum
                      </Text>
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <View style={{ width: 103 }}>
                <Text
                  style={{
                    color: "#7F7F7F",
                    fontSize: 8,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  INVESTORS:1,364
                </Text>
                <Text
                  style={{
                    color: Colors.darkMode,
                    fontSize: 10,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  CORPORATE DEBT NOTES...
                </Text>
                <Text
                  style={{
                    color: "#7F7F7F",
                    fontSize: 8,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  4.7% returns in 3months
                </Text>
              </View>
            </View>

            {/* Invest Card 3 */}

            <View>
              <TouchableOpacity>
                <ImageBackground
                  style={{ width: 103, height: 98 }}
                  resizeMode="contain"
                  source={require("../../assets/images/investCard_3.png")}
                >
                  <View
                    style={{
                      backgroundColor: "#D50707",
                      borderRadius: 10,
                      width: "80%",
                      height: 15,
                      alignSelf: "flex-end",
                      justifyContent: "center",
                      margin: 5,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 8,
                        color: Colors.white,
                      }}
                    >
                      ₦5K . SOLD OUT
                    </Text>
                  </View>

                  <View>
                    <Text
                      style={{
                        // textAlign: "center",
                        fontSize: 12,
                        color: Colors.white,
                        position: "absolute",
                        top: 40,
                        fontFamily: "PoppinsExtraBold",
                        marginLeft: 10,
                      }}
                    >
                      19% {"\n"}
                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: "PoppinsBold",
                          textAlign: "left",
                        }}
                      >
                        Per Annum
                      </Text>
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <View style={{ width: 103 }}>
                <Text
                  style={{
                    color: "#7F7F7F",
                    fontSize: 8,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  INVESTORS:1,364
                </Text>
                <Text
                  style={{
                    color: Colors.darkMode,
                    fontSize: 10,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  CORPORATE DEBT NOTES...
                </Text>
                <Text
                  style={{
                    color: "#7F7F7F",
                    fontSize: 8,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  4.7% returns in 3months
                </Text>
              </View>
            </View>

            {/* Invest Card 4 */}
            <View>
              <TouchableOpacity>
                <ImageBackground
                  style={{ width: 103, height: 98 }}
                  resizeMode="contain"
                  source={require("../../assets/images/investCard_1.png")}
                >
                  <View
                    style={{
                      backgroundColor: "#D50707",
                      borderRadius: 10,
                      width: "80%",
                      height: 15,
                      alignSelf: "flex-end",
                      justifyContent: "center",
                      margin: 5,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 8,
                        color: Colors.white,
                      }}
                    >
                      ₦5K . SOLD OUT
                    </Text>
                  </View>

                  <View>
                    <Text
                      style={{
                        // textAlign: "center",
                        fontSize: 12,
                        color: Colors.white,
                        position: "absolute",
                        top: 40,
                        fontFamily: "PoppinsExtraBold",
                        marginLeft: 10,
                      }}
                    >
                      19% {"\n"}
                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: "PoppinsBold",
                          textAlign: "left",
                        }}
                      >
                        Per Annum
                      </Text>
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <View style={{ width: 103 }}>
                <Text
                  style={{
                    color: "#7F7F7F",
                    fontSize: 8,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  INVESTORS:1,364
                </Text>
                <Text
                  style={{
                    color: Colors.darkMode,
                    fontSize: 10,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  CORPORATE DEBT NOTES...
                </Text>
                <Text
                  style={{
                    color: "#7F7F7F",
                    fontSize: 8,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  4.7% returns in 3months
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  ProfileContainer: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: Colors.Secondary,
  },
  dash_Container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  dash_image: {
    borderRadius: 15,
    height: 139,

    justifyContent: "flex-start",
    overflow: "hidden",
    alignContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
  },
  toDo_Txt: {
    fontFamily: "PoppinsRegular",
    fontSize: 12,
    color: Colors.darkMode,
  },
  mainCardContainer: {
    marginTop: 10,
    flexDirection: "row",
    marginHorizontal: 20,
  },
  cardConatiner: {
    backgroundColor: Colors.white,
    width: 116,
    height: 66,
    borderRadius: 15,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardImgContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 8,
  },
  cardImg: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginBottom: 5,
    justifyContent: "center",
  },
  cardTxt: {
    fontFamily: "PoppinsMedium",
    fontSize: 12,
    color: Colors.darkMode,
    // justifyContent: "center",
    marginLeft: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#C3C3C3",
    marginHorizontal: 12,
    marginTop: 8,
  },
  otherServiceImg: {
    width: 44,
    height: 44,
    resizeMode: "contain",
  },
  otherServiceTxt: {
    fontSize: 10,
    fontFamily: "PoppinsMedium",
  },

  // Savings Section
  mainSavingsCardContainer: {
    marginTop: 10,
    flexDirection: "row",
    marginHorizontal: 20,
    gap: 15,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  SavingCards: {
    width: 65,
    height: 60,
    borderRadius: 6,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  savingsTxt: {
    fontSize: 9,
    fontFamily: "PoppinsRegular",
    textAlign: "center",
  },
  savingsImg: {
    width: 19.4,
    height: 24,
  },
  slidingCard: {
    width: 289,
    height: 83,
    // backgroundColor: Colors.Primary,
    borderRadius: 6,
    flexDirection: "row",
    marginTop: 20,
  },
});
