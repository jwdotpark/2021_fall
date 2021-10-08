// // Libraries
// #include <DHT.h>

// // Constants
// #define DHTPIN 1          // what pin we're connected to
// #define DHTTYPE DHT22     // DHT 22  (AM2302)
// DHT dht(DHTPIN, DHTTYPE); //// Initialize DHT sensor for normal 16mhz Arduino

// // Variables
// float hum;  // Stores humidity value
// float temp; // Stores temperature value+-
// int baselineTemp int baselineHum

//     void
//     setup() {
//   Serial.begin(9600);
//   dht.begin();
//   pinMode(2, OUTPUT);
//   pinMode(3, OUTPUT);
//   pinMode(4, OUTPUT);
// }

// void loop() {
//   // Read data and store it to variables hum and temp
//   hum = dht.readHumidity();
//   temp = dht.readTemperature();

//   baselineTemp = 25;
//   baselineHum = 50;

//   // Print temp and humidity values to serial monitor
//   Serial.print("Humidity: ");
//   Serial.print(hum);
//   Serial.print(" %, Temp: ");
//   Serial.print(temp);
//   Serial.println(" Celsius");

//   if (temp >= baselineTemp - 2 && temp < baselineTemp + 2) {
//     // green
//     Serial.print("green ");
//     digitalWrite(2, HIGH);
//     digitalWrite(3, LOW);
//     digitalWrite(4, LOW);
//   } else if (temp >= baselineTemp - 5 && temp < baselineTemp + 5) {
//     // yellow
//     Serial.print("yellow ");
//     digitalWrite(2, LOW);
//     digitalWrite(3, HIGH);
//     digitalWrite(4, LOW);
//   } else {
//     // red
//     Serial.print("red ");
//     digitalWrite(2, LOW);
//     digitalWrite(3, LOW);
//     digitalWrite(4, HIGH);
//   }
//   delay(1000);
// }

// Libraries
#include <DHT.h>

// Constants
#define DHTPIN 1          // what pin we're connected to
#define DHTTYPE DHT22     // DHT 22  (AM2302)
DHT dht(DHTPIN, DHTTYPE); //// Initialize DHT sensor for normal 16mhz Arduino

// Variables
float hum;  // Stores humidity value
float temp; // Stores temperature value+-
int baselineTemp, baselineHum;

void setup() {
  Serial.begin(9600);
  dht.begin();
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
}

void loop() {
  // Read data and store it to variables hum and temp
  hum = dht.readHumidity();
  temp = dht.readTemperature();

  baselineTemp = 25;
  baselineHum = 50;

  // Print temp and humidity values to serial monitor
  Serial.print("Humidity: ");
  Serial.print(hum);
  Serial.print(" %, Temp: ");
  Serial.print(temp);
  Serial.println(" Celsius");

  if ((temp >= baselineTemp - 2 && temp < baselineTemp + 2) &&
      (hum >= baselineHum - 10 && hum < baselineHum + 10)) {
    // green
    Serial.print("green ");
    digitalWrite(2, HIGH);
    digitalWrite(3, LOW);
    digitalWrite(4, LOW);
  } else if ((temp >= baselineTemp - 5 && temp < baselineTemp + 5) &&
             (hum >= baselineHum - 20 && hum < baselineHum + 20)) {
    // yellow
    Serial.print("yellow ");
    digitalWrite(2, LOW);
    digitalWrite(3, HIGH);
    digitalWrite(4, LOW);
  } else {
    // red
    Serial.print("red ");
    digitalWrite(2, LOW);
    digitalWrite(3, LOW);
    digitalWrite(4, HIGH);
  }
  delay(1000);
}
