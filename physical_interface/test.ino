int red = 0;
int blue = 0;

// dht sensor
#include "dht.h"
#define dht_apin A5  // Analog Pin sensor is connected to
dht DHT;

// ultrasonic sensor
#define echoPin 4  // attach pin D2 Arduino to pin Echo of HC-SR04
#define trigPin 5  // attach pin D3 Arduino to pin Trig of HC-SR04

// defines variables
long duration;  // variable for the duration of sound wave travel
int distance;   // variable for the distance measurement

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
  Serial.print("board init");

  // lcd
  lcd.begin(16, 2);
}

void loop() {
  // dht11
  DHT.read11(dht_apin);
  Serial.print("Current humidity = ");
  Serial.print(DHT.humidity);
  Serial.print("%  ");
  Serial.print("temperature = ");
  Serial.print(DHT.temperature);
  Serial.println("C  ");

  red = digitalRead(2);
  blue = digitalRead(3);

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

  if (distance < 100) {
    // green if close
    digitalWrite(13, HIGH);
    digitalWrite(12, LOW);
    Serial.print("red led on\n");
  } else {
    // else blue
    digitalWrite(13, LOW);
    digitalWrite(12, HIGH);
    Serial.print("blue led on\n");
  }

  // lcd
  lcd.clear();
  lcd.print(distance);
  lcd.print(" cm far away!");
  lcd.setCursor(0, 1);
  lcd.print(DHT.humidity);
  lcd.print("% / ");
  lcd.print(DHT.temperature);
  lcd.print("C");
  lcd.setCursor(1, 1);
  delay(500);
  lcd.clear();
}