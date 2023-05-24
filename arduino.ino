const int ledPin = 2;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);
}

void loop() {
  if (Serial.available() > 0) {
    char receivedChar = Serial.read();
    if (receivedChar == '1') {
      digitalWrite(ledPin, HIGH);
    } else if (receivedChar == '0') {
      digitalWrite(ledPin, LOW);
    }
  }
}
