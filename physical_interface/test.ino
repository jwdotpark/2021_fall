int red = 0;
int blue = 0;

#define echoPin 4  // attach pin D2 Arduino to pin Echo of HC-SR04
#define trigPin 5  // attach pin D3 Arduino to pin Trig of HC-SR04

// defines variables
long duration;  // variable for the duration of sound wave travel
int distance;   // variable for the distance measurement
//
// // matrix led
// #include <LedControl.h>
//
// const int dataInPin = 9;
// const int clockPin = 10;
// const int csPin = 11;
// LedControl lc = LedControl(dataInPin, clockPin, csPin, 1);
//

// lcd
#include <LiquidCrystal.h>
LiquidCrystal lcd(11, 10, 9, 8, 7, 6);

// initialization
void setup() {
  // init serial
  Serial.begin(57600);

  // red led and switch
  pinMode(2, INPUT);    // switch input
  pinMode(12, OUTPUT);  // led output

  // blue led and switch;
  pinMode(3, INPUT);
  pinMode(13, OUTPUT);

  pinMode(trigPin, OUTPUT);  // Sets the trigPin as an OUTPUT
  pinMode(echoPin, INPUT);   // Sets the echoPin as an INPUT
  Serial.begin(57600);       // // Serial Communication is starting with 9600 of
                             // baudrate speed
  Serial.println(
      "Ultrasonic Sensor HC-SR04 Test");  // print some text in Serial Monitor
  Serial.println("with Arduino UNO R3");

  //  // matrix led
  //   while (!Serial) { }
  //  lc.shutdown(0,false);
  //  lc.setIntensity(0,8);
  //  lc.clearDisplay(0);

  // lcd
  lcd.begin(16, 2);
}

// matrix counter init
// int counter = 0;

void loop() {
  // led + switch
  red = digitalRead(2);
  blue = digitalRead(3);

  if (red == HIGH) {
    digitalWrite(12, HIGH);
    Serial.print("red led on\n");
  } else {
    digitalWrite(12, LOW);
  }

  if (blue == HIGH) {
    digitalWrite(13, HIGH);
    Serial.print("blue led on\n");
  } else {
    digitalWrite(13, LOW);
  }

  // SR04 ultra sonic range sensor
  // Clears the trigPin condition
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  // Sets the trigPin HIGH (ACTIVE) for 10 microseconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);

  // Calculating the distance
  // Speed of sound wave divided by 2 (go and back)
  distance = duration * 0.034 / 2;

  // Displays the distance on the Serial Monitor
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  //  // matrix led
  //    lc.clearDisplay(0);
  //  // Explain why this is a bad thing: flicker. We should buffer
  //  // and load deltas. NOTE: not needed once we add the for-loop
  //  //  Device is mounted sideways: discuss orientation
  //  lc.setColumn(0, 4, counter);
  //  counter = (counter + 1) % 256;
  //  delay(100);

  // lcd
  lcd.clear();
  lcd.print("   cm far away!");
  delay(10);
  lcd.setCursor(0, 1);
  lcd.print(distance);
  delay(500);
  lcd.clear();
}