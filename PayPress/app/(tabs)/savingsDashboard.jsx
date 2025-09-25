import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Switch,
} from "react-native";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Bar } from "react-native-progress";
import { Ionicons } from "@expo/vector-icons";

export default function SavingsDashboard() {
  const [isHealthAutoDebitEnabled, setIsHealthAutoDebitEnabled] =
    useState(false);
  const [isAgricAutoDebitEnabled, setIsAgricAutoDebitEnabled] = useState(false);

  return (
    <ThemedContainer>
      <ThemedText style={styles.headingTxt}>Savings Dashboard</ThemedText>
      <ThemedText style={styles.subHeadingTxt}>
        Track your financial goals
      </ThemedText>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Plan Counter Cards */}
        <View style={styles.counterCardsContainer}>
          {/* Active Plans Card */}
          <View style={styles.counterCard}>
            <View>
              <ThemedText style={styles.counterLabel}>Active Plans</ThemedText>
              <ThemedText style={styles.counterValue}>1</ThemedText>
            </View>
            <Image
              style={styles.counterIcon}
              source={require("../../assets/images/active-plan.png")}
            />
          </View>

          {/* Paused Plans Card */}
          <View style={styles.counterCard}>
            <View>
              <ThemedText style={styles.counterLabel}>Paused Plans</ThemedText>
              <ThemedText style={styles.counterValue}>1</ThemedText>
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
              <ThemedText style={styles.savingsPlanTitle}>
                Health Savings
                {/* health savinf amount */}
                {"\n"}
                <ThemedText style={styles.progressLabel}> ₦2,500</ThemedText>
              </ThemedText>
            </View>
            <View style={styles.savingsPlanBadge}>
              <ThemedText style={styles.savingsPlanBadgeText}>
                Paused
              </ThemedText>
            </View>
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.progressLabels}>
              <ThemedText style={styles.progressLabel}>Progress</ThemedText>
              <ThemedText style={styles.progressPercentage}>25%</ThemedText>
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
              <ThemedText style={styles.savingsPlanDetailLabel}>
                Duration
              </ThemedText>
              <ThemedText style={styles.savingsPlanDetailValue}>
                2 months
              </ThemedText>
            </View>
            <View style={styles.savingsPlanDetailItem}>
              <ThemedText style={styles.savingsPlanDetailLabel}>
                Interest Rate
              </ThemedText>
              <ThemedText style={styles.savingsPlanDetailValue}>
                4.5% APY
              </ThemedText>
            </View>
          </View>

          <View style={styles.savingsPlanDetails}>
            <View style={styles.savingsPlanDetailItem}>
              <ThemedText style={styles.savingsPlanDetailLabel}>
                Expected Return
              </ThemedText>
              <ThemedText
                style={[styles.savingsPlanDetailValue, { color: Colors.green }]}
              >
                ₦2,500
              </ThemedText>
            </View>
            <View style={styles.savingsPlanDetailItem}>
              <ThemedText style={styles.savingsPlanDetailLabel}>
                Auto Debit
              </ThemedText>
              <ThemedText style={styles.savingsPlanDetailLabel}>
                Disabled
              </ThemedText>
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
                  <ThemedText
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
                  </ThemedText>
                </View>
              </View>
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
              <ThemedText style={styles.savingsPlanTitle}>
                Agriculture Savings
              </ThemedText>
            </View>
            <View
              style={[
                styles.savingsPlanBadge,
                styles.activeBadge,
                { backgroundColor: "#C8F3C8" },
              ]}
            >
              <ThemedText
                style={[styles.savingsPlanBadgeText, { color: Colors.green }]}
              >
                Active
              </ThemedText>
            </View>
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.progressLabels}>
              <ThemedText style={styles.progressLabel}>Progress</ThemedText>
              <ThemedText style={styles.progressPercentage}>20%</ThemedText>
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
              <ThemedText style={styles.savingsPlanDetailLabel}>
                Duration
              </ThemedText>
              <ThemedText style={styles.savingsPlanDetailValue}>
                2 months
              </ThemedText>
            </View>
            <View style={styles.savingsPlanDetailItem}>
              <ThemedText style={styles.savingsPlanDetailLabel}>
                Interest Rate
              </ThemedText>
              <ThemedText style={styles.savingsPlanDetailValue}>
                4.5% APY
              </ThemedText>
            </View>
          </View>

          <View style={styles.savingsPlanDetails}>
            <View style={styles.savingsPlanDetailItem}>
              <ThemedText style={styles.savingsPlanDetailLabel}>
                Expected Return
              </ThemedText>
              <ThemedText style={styles.savingsPlanDetailValue}>
                ₦2,500
              </ThemedText>
            </View>
            <View style={styles.savingsPlanDetailItem}>
              <ThemedText style={styles.savingsPlanDetailLabel}>
                Auto Debit
              </ThemedText>
              <ThemedText style={styles.savingsPlanDetailLabel}>
                Disabled
              </ThemedText>
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
                  <ThemedText
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
                  </ThemedText>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ThemedContainer>
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
    // backgroundColor: "#F5F5F5",
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
    // color: Colors.darkMode,
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
    // color: Colors.darkMode,
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
    width: "100%",
  },
  resumeSavingButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "PoppinsMedium",
  },
});
