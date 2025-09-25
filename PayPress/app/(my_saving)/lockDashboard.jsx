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
import ThemedContainer from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";

export default function LockDashboard() {
  return (
    <ThemedContainer style={styles.container}>
      <ThemedText style={styles.headingTxt}>Lock Dashboard</ThemedText>
      <ScrollView
        style={{ marginBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        {/* dash */}
        <View style={styles.mainDashContainer}>
          {/* total locked */}
          <View
            style={[styles.lockedDash, { backgroundColor: Colors.Primary }]}
          >
            <Image
              source={require("../../assets/images/locked.png")}
              style={styles.dashIcon}
            />
            <Text
              style={{
                fontSize: 12,
                fontFamily: "PoppinsRegular",
                color: Colors.white,
              }}
            >
              Total Locked {"\n"}
              <Text style={{ fontFamily: "PoppinsBold" }}> ₦2,500</Text>
            </Text>
          </View>

          {/* total earnings */}
          <View style={[styles.lockedDash, { backgroundColor: Colors.green }]}>
            <Image
              source={require("../../assets/images/earnings.png")}
              style={styles.dashIcon}
            />
            <Text
              style={{
                fontSize: 12,
                fontFamily: "PoppinsRegular",
                color: Colors.white,
              }}
            >
              Total Earnings {"\n"}
              <Text style={{ fontFamily: "PoppinsBold" }}> ₦2,500</Text>
            </Text>
          </View>
        </View>
        {/* ... */}

        <View>
          <ThemedText
            style={[styles.headingTxt, { fontSize: 18, paddingRight: 20 }]}
          >
            Active Locks
          </ThemedText>
        </View>

        {/* premium */}
        <View style={styles.savingsPlanCard}>
          <View style={styles.savingsPlanHeader}>
            <View style={styles.savingsPlanTitleContainer}>
              <Text style={styles.premiumLockTitle}>
                Premium Lock
                {/* health savinf amount */}
                {"\n"}
                <Text
                  style={[
                    styles.progressLabel,
                    {
                      fontSize: 20,
                      color: Colors.darkMode,
                      fontFamily: "PoppinsSemiBold",
                    },
                  ]}
                >
                  {" "}
                  ₦2,500
                </Text>
              </Text>
            </View>
            <View style={styles.savingsPlanBadge}>
              <Text style={styles.savingsPlanBadgeText}>287 days left</Text>
            </View>
          </View>
          <View style={styles.savingsPlanDetails}>
            <View style={styles.savingsPlanDetailItem}>
              <Text style={styles.savingsPlanDetailLabel}>Interest Rate</Text>
              <ThemedText style={styles.savingsPlanDetailValue}>
                4.5% APY
              </ThemedText>
            </View>
            <View style={styles.savingsPlanDetailItem}>
              <Text style={styles.savingsPlanDetailLabel}>
                Current Earnings
              </Text>
              <ThemedText style={styles.savingsPlanDetailValue}>
                {" "}
                ₦2,500
              </ThemedText>
            </View>
            <View style={styles.savingsPlanDetailItem}>
              <Text style={styles.savingsPlanDetailLabel}>End Date</Text>
              <ThemedText style={styles.savingsPlanDetailValue}>
                15/09/2025
              </ThemedText>
            </View>
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.progressLabels}>
              <Text style={styles.progressLabel}>Progress</Text>
              <Text style={styles.progressPercentage}>100%</Text>
            </View>
            <Bar
              progress={1.0}
              width={null}
              height={8}
              color="#2CAD25"
              unfilledColor="#E0E0E0"
              borderWidth={0}
              borderRadius={4}
              marginTop="10"
            />
          </View>
        </View>

        <View style={styles.savingsPlanCard}>
          <View style={styles.savingsPlanHeader}>
            <View style={styles.savingsPlanTitleContainer}>
              <Text style={styles.premiumLockTitle}>
                Premium Lock
                {/* health savinf amount */}
                {"\n"}
                <Text
                  style={[
                    styles.progressLabel,
                    {
                      fontSize: 20,
                      color: Colors.darkMode,
                      fontFamily: "PoppinsSemiBold",
                    },
                  ]}
                >
                  {" "}
                  ₦3,500
                </Text>
              </Text>
            </View>
            <View style={styles.savingsPlanBadge}>
              <Text style={styles.savingsPlanBadgeText}>45 days left</Text>
            </View>
          </View>
          <View style={styles.savingsPlanDetails}>
            <View style={styles.savingsPlanDetailItem}>
              <Text style={styles.savingsPlanDetailLabel}>Interest Rate</Text>
              <ThemedText style={styles.savingsPlanDetailValue}>
                4.5% APY
              </ThemedText>
            </View>
            <View style={styles.savingsPlanDetailItem}>
              <Text style={styles.savingsPlanDetailLabel}>
                Current Earnings
              </Text>
              <ThemedText style={styles.savingsPlanDetailValue}>
                {" "}
                ₦2,500
              </ThemedText>
            </View>
            <View style={styles.savingsPlanDetailItem}>
              <Text style={styles.savingsPlanDetailLabel}>End Date</Text>
              <ThemedText style={styles.savingsPlanDetailValue}>
                15/09/2025
              </ThemedText>
            </View>
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.progressLabels}>
              <Text style={styles.progressLabel}>Progress</Text>
              <Text style={styles.progressPercentage}>100%</Text>
            </View>
            <Bar
              progress={1.0}
              width={null}
              height={8}
              color="#2CAD25"
              unfilledColor="#E0E0E0"
              borderWidth={0}
              borderRadius={4}
              marginTop="10"
            />
          </View>
        </View>

        {/*  */}
        <View style={styles.savingsPlanCard}>
          <View style={styles.savingsPlanHeader}>
            <View style={styles.savingsPlanTitleContainer}>
              <Text style={styles.premiumLockTitle}>
                Flexible Lock
                {/* health savinf amount */}
                {"\n"}
                <Text
                  style={[
                    styles.progressLabel,
                    {
                      fontSize: 20,
                      color: Colors.darkMode,
                      fontFamily: "PoppinsSemiBold",
                    },
                  ]}
                >
                  {" "}
                  ₦3,500
                </Text>
              </Text>
            </View>
            <View style={styles.savingsPlanBadge}>
              <Text style={styles.savingsPlanBadgeText}>287 days left</Text>
            </View>
          </View>
          <View style={styles.savingsPlanDetails}>
            <View style={styles.savingsPlanDetailItem}>
              <Text style={styles.savingsPlanDetailLabel}>Interest Rate</Text>
              <ThemedText style={styles.savingsPlanDetailValue}>
                4.5% APY
              </ThemedText>
            </View>
            <View style={styles.savingsPlanDetailItem}>
              <Text style={styles.savingsPlanDetailLabel}>
                Current Earnings
              </Text>
              <ThemedText style={styles.savingsPlanDetailValue}>
                {" "}
                ₦2,500
              </ThemedText>
            </View>
            <View style={styles.savingsPlanDetailItem}>
              <Text style={styles.savingsPlanDetailLabel}>End Date</Text>
              <ThemedText style={styles.savingsPlanDetailValue}>
                15/09/2025
              </ThemedText>
            </View>
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.progressLabels}>
              <Text style={styles.progressLabel}>Progress</Text>
              <Text style={styles.progressPercentage}>100%</Text>
            </View>
            <Bar
              progress={1.0}
              width={null}
              height={8}
              color="#0B57BD"
              unfilledColor="#E0E0E0"
              borderWidth={0}
              borderRadius={4}
              marginTop="10"
            />
          </View>
        </View>

        {/* button */}
        <TouchableOpacity
          onPress={() => {
            // router.navigate("./lockDashboard");
          }}
          style={[
            styles.button,
            { backgroundColor: Colors.Primary, marginTop: 20 },
          ]}
        >
          <Text style={styles.mainTxt}>Withdraw</Text>
        </TouchableOpacity>
      </ScrollView>
    </ThemedContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#FFFFFF",
  },
  headingTxt: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    paddingLeft: 15,
    paddingTop: 10,
    // color: Colors.darkMode,
  },
  mainDashContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  lockedDash: {
    width: 174,
    height: 85,
    borderRadius: 8,
    padding: 10,
    flexDirection: "column",
    gap: 10,
  },
  dashIcon: {
    resizeMode: "contain",
    width: 24,
    height: 24,
  },
  savingsPlanCard: {
    // backgroundColor: "#F0F0F0",
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    marginHorizontal: 10,
    borderColor: Colors.gray,
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
  premiumLockTitle: {
    fontSize: 16,
    fontFamily: "PoppinsSemiBold",
    color: Colors.gray,
  },
  savingsPlanBadge: {
    backgroundColor: "#C8F3C8",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  activeBadge: {
    backgroundColor: "#4CAF50",
  },
  savingsPlanBadgeText: {
    fontSize: 10,
    color: Colors.green,
    fontFamily: "PoppinsMedium",
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
    color: Colors.gray,
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
    color: Colors.gray,
  },
  savingsPlanDetailItem: {
    flexDirection: "column",
  },
  savingsPlanDetailLabel: {
    fontSize: 12,
    color: Colors.gray,
    fontFamily: "PoppinsMedium",
  },
  savingsPlanDetailValue: {
    fontSize: 14,
    // color: Colors.darkMode,
    fontFamily: "PoppinsSemiBold",
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
  button: {
    padding: 10,
    width: "80%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  mainTxt: {
    fontSize: 16,
    fontFamily: "PoppinsBold",

    color: Colors.white,
  },
});
