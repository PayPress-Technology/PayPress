import React, { useState, useRef, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import styles from "../styles";
import { Image } from "expo-image";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";

const { width } = Dimensions.get("window");

const carouselData = [
  { id: 1, image: require("../../assets/images/banner1.jpg") },
  { id: 2, image: require("../../assets/images/banner2.jpg") },
];

export default function HomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % carouselData.length;
      setCurrentIndex(nextIndex);

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  type CarouselItem = {
    id: number;
    image: any;
  };

  const renderCarouselItem = ({ item }: { item: CarouselItem }) => (
    <View style={style.carouselSlide}>
      <Image
        source={item.image}
        style={style.carouselImage}
        contentFit="contain"
      />
    </View>
  );

  const renderDots = () => {
    return (
      <View style={style.dotsContainer}>
        {carouselData.map((_, index) => (
          <View
            key={index}
            style={[style.dot, currentIndex === index && style.activeDot]}
          />
        ))}
      </View>
    );
  };

  return (
    <ThemedContainer>
      <View style={style.container}>
        <View>
          <ThemedText style={{ fontFamily: "PoppinsExtraBold", fontSize: 18 }}>
            Hello
          </ThemedText>
          <ThemedText>Spend wisely</ThemedText>
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
            contentFit="contain"
          />
          <Image
            source={require("../../assets/images/dash_star.png")}
            style={{ width: 44, height: 44, position: "absolute", top: 65 }}
            contentFit="contain"
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
                router.push("/fundWallet");
              }}
            >
              <Ionicons
                name="add"
                size={20}
                color="black"
                style={{ marginRight: 6 }}
              />
              <Text>Fund wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                router.push("/my_savings");
              }}
              style={{
                backgroundColor: Colors.Secondary,
                borderRadius: 15,
                padding: 5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text>Quick Savings</Text>
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
              <ThemedText
                style={{
                  color: Colors.white,
                  fontWeight: "bold",
                  fontSize: 14,
                }}
              >
                My Savings
              </ThemedText>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <ThemedText
                  style={{ color: Colors.white, fontSize: 18, marginTop: 2 }}
                >
                  ₦0
                </ThemedText>
                <Ionicons name="eye" size={18} color={Colors.white} />
              </View>
            </View>
            <View style={{ alignItems: "flex-end", flexDirection: "row" }}>
              <ThemedText
                style={{
                  color: Colors.white,
                  fontWeight: "bold",
                  fontSize: 14,
                  marginRight: 6,
                }}
              >
                Transaction History
              </ThemedText>
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
          <ThemedText style={style.toDo_Txt}>To-do lists</ThemedText>
          <TouchableOpacity>
            <ThemedText style={[style.toDo_Txt, { color: Colors.Primary }]}>
              Hide {">"}
            </ThemedText>
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
                  <ThemedText style={style.cardTxt}>
                    Add your {"\n"}BVN
                  </ThemedText>
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
                  <ThemedText style={style.cardTxt}>
                    Lock {"\n"}Funds
                  </ThemedText>
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
                  <ThemedText style={style.cardTxt}>
                    Link{"\n"}Bank...
                  </ThemedText>
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
                  <ThemedText style={style.cardTxt}>
                    Upload a {"\n"}Picture
                  </ThemedText>
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
                  <ThemedText style={style.cardTxt}>
                    Approve{"\n"}Device
                  </ThemedText>
                </View>
                <View style={style.divider} />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* other Services section */}
        <ThemedText
          style={{
            fontFamily: "PoppinsRegular",
            fontSize: 12,
            color: Colors.gray,
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          Other Services
        </ThemedText>
        <View style={[style.cardImgContainer, { marginBottom: 20 }]}>
          <TouchableOpacity
            onPress={() => {
              router.navigate("../scratchCard");
            }}
          >
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
                contentFit="contain"
                style={style.otherServiceImg}
                source={require("../../assets/images/scratchCard.png")}
              />
              <ThemedText style={style.otherServiceTxt}>ScratchCard</ThemedText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push("../airtime");
            }}
          >
            <View
              style={{
                flexDirection: "column",
                marginTop: 10,
                marginLeft: 20,
                alignItems: "center",
              }}
            >
              <Image
                contentFit="contain"
                style={style.otherServiceImg}
                source={require("../../assets/images/airtime&Data.png")}
              />
              <ThemedText style={style.otherServiceTxt}>
                Airtime & Data
              </ThemedText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "column",
                marginTop: 10,
                marginLeft: 20,
                alignItems: "center",
              }}
            >
              <Image
                contentFit="contain"
                style={style.otherServiceImg}
                source={require("../../assets/images/Gotv&DsTV.png")}
              />
              <ThemedText style={style.otherServiceTxt}>
                Gotv & Dstv sub.
              </ThemedText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "column",
                marginTop: 10,
                marginLeft: 20,
                alignItems: "center",
              }}
            >
              <Image
                contentFit="contain"
                style={style.otherServiceImg}
                source={require("../../assets/images/Electricity.png")}
              />
              <ThemedText style={style.otherServiceTxt}>
                {" "}
                Electricity
              </ThemedText>
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
          <ThemedText style={[style.toDo_Txt, { color: Colors.gray }]}>
            My Saving Plans
          </ThemedText>
          <TouchableOpacity>
            <Text
              style={[
                style.toDo_Txt,
                {
                  color: Colors.Primary,
                  fontSize: 12,
                  fontFamily: "PoppinsMedium",
                },
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
                <Text style={style.savingsTxt}>Customize Plan</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Auto-Sliding Carousel */}
        <View style={style.carouselContainer}>
          <FlatList
            ref={flatListRef}
            data={carouselData}
            renderItem={renderCarouselItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(event) => {
              const index = Math.round(
                event.nativeEvent.contentOffset.x / width
              );
              setCurrentIndex(index);
            }}
          />
          {renderDots()}
        </View>

        {/* Trusted Investment Section */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          <ThemedText style={[style.toDo_Txt, { color: Colors.gray }]}>
            Truted Investments
          </ThemedText>
          <TouchableOpacity>
            <ThemedText
              style={[
                style.toDo_Txt,
                {
                  color: Colors.Primary,
                  fontSize: 12,
                  fontFamily: "PoppinsMedium",
                },
              ]}
            >
              Find more {">"}
            </ThemedText>
          </TouchableOpacity>
        </View>

        {/* Invest Cards 1 */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={[style.mainSavingsCardContainer, { marginBottom: 30 }]}>
            <View>
              <TouchableOpacity>
                <ImageBackground
                  style={{ width: 103, height: 98 }}
                  resizeMode="contain"
                  source={require("../../assets/images/investCard_1.png")}
                >
                  <View
                    style={{
                      backgroundColor: Colors.green,
                      borderRadius: 10,
                      width: "80%",
                      height: 15,
                      alignSelf: "flex-end",
                      justifyContent: "center",
                      margin: 5,
                    }}
                  >
                    <ThemedText
                      style={{
                        textAlign: "center",
                        fontSize: 8,
                        color: Colors.white,
                      }}
                    >
                      ₦5K . INVEST NOW
                    </ThemedText>
                  </View>

                  <View>
                    <ThemedText
                      style={{
                        fontSize: 12,
                        color: Colors.white,
                        position: "absolute",
                        top: 40,
                        fontFamily: "PoppinsExtraBold",
                        marginLeft: 10,
                      }}
                    >
                      19% {"\n"}
                      <ThemedText
                        style={{
                          fontSize: 10,
                          fontFamily: "PoppinsBold",
                          textAlign: "left",
                        }}
                      >
                        Per Annum
                      </ThemedText>
                    </ThemedText>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <View style={{ width: 103 }}>
                <ThemedText
                  style={{
                    color: Colors.gray,
                    fontSize: 8,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  INVESTORS:1,364
                </ThemedText>
                <ThemedText style={style.trustTxt}>
                  CORPORATE DEBT NOTES...
                </ThemedText>
                <ThemedText
                  style={{
                    color: Colors.gray,
                    fontSize: 8,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  4.7% returns in 3months
                </ThemedText>
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
                    <ThemedText
                      style={{
                        textAlign: "center",
                        fontSize: 8,
                        color: Colors.white,
                      }}
                    >
                      ₦5K . SOLD OUT
                    </ThemedText>
                  </View>

                  <View>
                    <ThemedText
                      style={{
                        fontSize: 12,
                        color: Colors.white,
                        position: "absolute",
                        top: 40,
                        fontFamily: "PoppinsExtraBold",
                        marginLeft: 10,
                      }}
                    >
                      21% {"\n"}
                      <ThemedText
                        style={{
                          fontSize: 10,
                          fontFamily: "PoppinsBold",
                          textAlign: "left",
                        }}
                      >
                        Per Annum
                      </ThemedText>
                    </ThemedText>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <View style={{ width: 103 }}>
                <ThemedText
                  style={{
                    color: Colors.gray,
                    fontSize: 8,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  INVESTORS:1,364
                </ThemedText>
                <ThemedText style={style.trustTxt}>
                  CORPORATE DEBT NOTES...
                </ThemedText>
                <ThemedText
                  style={{
                    color: Colors.gray,
                    fontSize: 8,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  4.7% returns in 3months
                </ThemedText>
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
                    <ThemedText
                      style={{
                        textAlign: "center",
                        fontSize: 8,
                        color: Colors.white,
                      }}
                    >
                      ₦5K . SOLD OUT
                    </ThemedText>
                  </View>

                  <View>
                    <ThemedText
                      style={{
                        fontSize: 12,
                        color: Colors.white,
                        position: "absolute",
                        top: 40,
                        fontFamily: "PoppinsExtraBold",
                        marginLeft: 10,
                      }}
                    >
                      19% {"\n"}
                      <ThemedText
                        style={{
                          fontSize: 10,
                          fontFamily: "PoppinsBold",
                          textAlign: "left",
                        }}
                      >
                        Per Annum
                      </ThemedText>
                    </ThemedText>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <View style={{ width: 103 }}>
                <ThemedText
                  style={{
                    color: Colors.gray,
                    fontSize: 8,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  INVESTORS:1,364
                </ThemedText>
                <ThemedText style={style.trustTxt}>
                  CORPORATE DEBT NOTES...
                </ThemedText>
                <ThemedText
                  style={{
                    color: Colors.gray,
                    fontSize: 8,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  4.7% returns in 3months
                </ThemedText>
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
                    <ThemedText
                      style={{
                        textAlign: "center",
                        fontSize: 8,
                        color: Colors.white,
                      }}
                    >
                      ₦5K . SOLD OUT
                    </ThemedText>
                  </View>

                  <View>
                    <ThemedText
                      style={{
                        fontSize: 12,
                        color: Colors.white,
                        position: "absolute",
                        top: 40,
                        fontFamily: "PoppinsExtraBold",
                        marginLeft: 10,
                      }}
                    >
                      19% {"\n"}
                      <ThemedText
                        style={{
                          fontSize: 10,
                          fontFamily: "PoppinsBold",
                          textAlign: "left",
                        }}
                      >
                        Per Annum
                      </ThemedText>
                    </ThemedText>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <View style={{ width: 103 }}>
                <ThemedText
                  style={{
                    color: Colors.gray,
                    fontSize: 8,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  INVESTORS:1,364
                </ThemedText>
                <ThemedText style={style.trustTxt}>
                  CORPORATE DEBT NOTES...
                </ThemedText>
                <ThemedText
                  style={{
                    color: Colors.gray,
                    fontSize: 8,
                    fontFamily: "PoppinsBold",
                  }}
                >
                  4.7% returns in 3months
                </ThemedText>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </ThemedContainer>
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
    color: Colors.gray,
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
    borderRadius: 6,
    flexDirection: "row",
    marginTop: 20,
  },
  trustTxt: {
    fontSize: 10,
    fontFamily: "PoppinsBold",
  },

  // Carousel styles
  carouselContainer: {
    marginVertical: 20,
    // marginHorizontal: 20,
  },
  carouselSlide: {
    width: width,
  },
  carouselImage: {
    width: width,
    height: 100,
    borderRadius: 10,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: Colors.Primary,
  },
});
