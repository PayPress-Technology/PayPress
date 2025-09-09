import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { Bar } from "react-native-progress";
import { Ionicons } from "@expo/vector-icons";

export default function SavingsDashboard() {
  const [isHealthAutoDebitEnabled, setIsHealthAutoDebitEnabled] =
    useState(false);
  const [isAgricAutoDebitEnabled, setIsAgricAutoDebitEnabled] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingTxt}>Savings Dashboard</Text>
      <Text style={styles.subHeadingTxt}>Track your financial goals</Text>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Plan Counter Cards */}
        <View style={styles.counterCardsContainer}>
          {/* Active Plans Card */}
          <View style={styles.counterCard}>
            <View>
              <Text style={styles.counterLabel}>Active Plans</Text>
              <Text style={styles.counterValue}>1</Text>
            </View>
            <Image
              style={styles.counterIcon}
              source={require("../../assets/images/active-plan.png")}
            />
          </View>

          {/* Paused Plans Card */}
          <View style={styles.counterCard}>
            <View>
              <Text style={styles.counterLabel}>Paused Plans</Text>
              <Text style={styles.counterValue}>1</Text>
            </View>
            <Image
              style={styles.counterIcon}
              source={require("../../assets/images/pause-plan.png")}
            />
          </View>
        </View>

        {/* Health Savings Plan Card */}
        <View style={styles.savingsPlanCard}>
          <View style={styles.savingsPlanHeader}>
            <View style={styles.savingsPlanTitleContainer}>
              <Image
                style={styles.savingsPlanIcon}
                source={require("../../assets/images/health.png")}
              />
              <Text style={styles.savingsPlanTitle}>
                Health Savings
                {/* health savinf amount */}
                {"\n"}
                <Text style={styles.progressLabel}> ₦2,500</Text>
              </Text>
            </View>
            <View style={styles.savingsPlanBadge}>
              <Text style={styles.savingsPlanBadgeText}>Paused</Text>
            </View>
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.progressLabels}>
              <Text style={styles.progressLabel}>Progress</Text>
              <Text style={styles.progressPercentage}>25%</Text>
            </View>
            <Bar
              progress={0.25}
              width={null}
              height={8}
              color="#0B57BD"
              unfilledColor="#E0E0E0"
              borderWidth={0}
              borderRadius={4}
              marginTop="10"
            />
          </View>

          <View style={styles.savingsPlanDetails}>
            <View style={styles.savingsPlanDetailItem}>
              <Text style={styles.savingsPlanDetailLabel}>Duration</Text>
              <Text style={styles.savingsPlanDetailValue}>2 months</Text>
            </View>
            <View style={styles.savingsPlanDetailItem}>
              <Text style={styles.savingsPlanDetailLabel}>Interest Rate</Text>
              <Text style={styles.savingsPlanDetailValue}>4.5% APY</Text>
            </View>
          </View>

          <View style={styles.savingsPlanDetails}>
            <View style={styles.savingsPlanDetailItem}>
              <Text style={styles.savingsPlanDetailLabel}>Expected Return</Text>
              <Text
                style={[styles.savingsPlanDetailValue, { color: Colors.green }]}
              >
                ₦2,500
              </Text>
            </View>
            <View style={styles.savingsPlanDetailItem}>
              <Text style={styles.savingsPlanDetailLabel}>Auto Debit</Text>
              <Text style={styles.savingsPlanDetailLabel}>Disabled</Text>
            </View>
          </View>

          {/* Resume button */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              gap: 10,
            }}
          >
            <TouchableOpacity
              // navigation logic
              onPress={() => {}}
              style={[
                styles.resumeSavingButton,
                {
                  backgroundColor: Colors.green,
                },
              ]}
            >
              <View style={{ flexDirection: "row", gap: 2 }}>
                <View
                  style={{
                    padding: 2,
                    borderRadius: 20,
                    borderColor: Colors.white,
                  }}
                >
                  <Image
                    source={require("../../assets/images/play-circle.png")}
                    style={{
                      resizeMode: "contain",
                      width: 16,
                      height: 16,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={[
                      styles.resumeSavingButtonText,
                      {
                        alignContent: "center",
                        alignSelf: "center",
                        fontSize: 14,
                        fontFamily: "PoppinsBold",
                      },
                    ]}
                  >
                    Resume Saving
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "#E0E0E0",
                padding: 5,
                borderRadius: 8,
                alignItems: "center",
              }}
            >
              <Ionicons name="eye" size={25} color={Colors.gray} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Agriculture Savings Plan Card */}
        <View style={styles.savingsPlanCard}>
          <View style={styles.savingsPlanHeader}>
            <View style={styles.savingsPlanTitleContainer}>
              <Image
                style={styles.savingsPlanIcon}
                source={require("../../assets/images/agric_savings.png")}
              />
              <Text style={styles.savingsPlanTitle}>Agriculture Savings</Text>
            </View>
            <View
              style={[
                styles.savingsPlanBadge,
                styles.activeBadge,
                { backgroundColor: "#C8F3C8" },
              ]}
            >
              <Text
                style={[styles.savingsPlanBadgeText, { color: Colors.green }]}
              >
                Active
              </Text>
            </View>
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.progressLabels}>
              <Text style={styles.progressLabel}>Progress</Text>
              <Text style={styles.progressPercentage}>20%</Text>
            </View>
            <Bar
              progress={0.2}
              width={null}
              height={8}
              color="#0B57BD"
              unfilledColor="#E0E0E0"
              borderWidth={0}
              borderRadius={4}
              marginTop="10"
            />
          </View>

          <View style={styles.savingsPlanDetails}>
            <View style={styles.savingsPlanDetailItem}>
              <Text style={styles.savingsPlanDetailLabel}>Duration</Text>
              <Text style={styles.savingsPlanDetailValue}>2 months</Text>
            </View>
            <View style={styles.savingsPlanDetailItem}>
              <Text style={styles.savingsPlanDetailLabel}>Interest Rate</Text>
              <Text style={styles.savingsPlanDetailValue}>4.5% APY</Text>
            </View>
          </View>

          <View style={styles.savingsPlanDetails}>
            <View style={styles.savingsPlanDetailItem}>
              <Text style={styles.savingsPlanDetailLabel}>Expected Return</Text>
              <Text style={styles.savingsPlanDetailValue}>₦2,500</Text>
            </View>
            <View style={styles.savingsPlanDetailItem}>
              <Text style={styles.savingsPlanDetailLabel}>Auto Debit</Text>
              <Text style={styles.savingsPlanDetailLabel}>Disabled</Text>
            </View>
          </View>

          {/* Pause button */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              gap: 10,
            }}
          >
            <TouchableOpacity
              // navigation logic
              onPress={() => {}}
              style={[
                styles.resumeSavingButton,
                {
                  backgroundColor: Colors.Secondary,
                },
              ]}
            >
              <View style={{ flexDirection: "row", gap: 2 }}>
                <View
                  style={{
                    padding: 2,
                    borderRadius: 20,
                    borderColor: Colors.white,
                  }}
                >
                  <Image
                    source={require("../../assets/images/pause-circle.png")}
                    style={{
                      resizeMode: "contain",
                      width: 16,
                      height: 16,
                    }}
                  />{" "}
                </View>
                <View>
                  <Text
                    style={[
                      styles.resumeSavingButtonText,
                      {
                        alignContent: "center",
                        alignSelf: "center",
                        fontSize: 14,
                        fontFamily: "PoppinsBold",
                      },
                    ]}
                  >
                    Pause Saving
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "#E0E0E0",
                padding: 5,
                borderRadius: 8,
                alignItems: "center",
              }}
            >
              <Ionicons name="eye" size={25} color={Colors.gray} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headingTxt: {
    fontSize: 24,
    fontFamily: "PoppinsSemiBold",
    paddingLeft: 15,
    paddingTop: 10,
  },
  subHeadingTxt: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    paddingLeft: 15,
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 15,
  },
  counterCardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  counterCard: {
    height: 55,
    width: "48%",
    borderRadius: 8,
    backgroundColor: "#DFDEDE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  counterLabel: {
    color: Colors.darkMode,
    fontSize: 14,
  },
  counterValue: {
    color: Colors.darkMode,
    fontFamily: "PoppinsSemiBold",
    fontSize: 16,
  },
  counterIcon: {
    resizeMode: "contain",
    width: 30,
    height: 30,
  },
  savingsPlanCard: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
  },
  savingsPlanHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  savingsPlanTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  savingsPlanIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  savingsPlanTitle: {
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    color: Colors.darkMode,
  },
  savingsPlanBadge: {
    backgroundColor: "#FFC107",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  activeBadge: {
    backgroundColor: "#4CAF50",
  },
  savingsPlanBadgeText: {
    fontSize: 12,
    color: "#A5632A",
    fontFamily: "PoppinsRegular",
  },
  progressContainer: {
    marginVertical: 10,
  },
  progressLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  progressLabel: {
    fontSize: 12,
    color: "#757575",
    fontFamily: "PoppinsRegular",
  },
  progressPercentage: {
    fontSize: 12,
    color: "#757575",
    fontFamily: "PoppinsRegular",
  },
  savingsPlanDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  savingsPlanDetailItem: {
    flexDirection: "column",
  },
  savingsPlanDetailLabel: {
    fontSize: 12,
    color: "#757575",
    fontFamily: "PoppinsRegular",
  },
  savingsPlanDetailValue: {
    fontSize: 14,
    color: Colors.darkMode,
    fontFamily: "PoppinsMedium",
  },
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
  resumeSavingButton: {
    backgroundColor: Colors.green,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 10,
    width: "90%",
  },
  resumeSavingButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "PoppinsMedium",
  },
});
