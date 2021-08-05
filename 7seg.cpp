// Documentation on defining PXT blocks:
// https://www.pxt.io/defining-blocks

#include "pxt.h"
using namespace pxt;

namespace HT16K33_Alnum4 {
  #define HT16K33_ADDRESS 0xE0
  #define HT16K33_ON              0x21  // Commands
  #define HT16K33_STANDBY         0x20
  #define HT16K33_DISPLAYON       0x81
  #define HT16K33_DISPLAYOFF      0x80
  #define HT16K33_BRIGHTNESS      0xE0  // 0xE0|F from 0..15: Set brightness from 1/16 (0x00) to 16/16 (0x0F)
  
  
  
  void setBrightness(uint8_t b) {
    /* Brightness can vary from 0 to 15 */
    if (b > 15) b = 15;
    command(HT16K33_BRIGHTNESS | b);
  }

  void blinkRate(uint8_t b) {
    if (b > 3) b = 0; // turn off if not sure
    /*  0: Blinking off
      1: Blink at 2Hz
      2: Blink at 1Hz
      3: Blink at 0.5Hz
    */
    command(HT16K33_DISPLAYON | (b << 1));
  }


  void begin() {
    command(HT16K33_ON);
    command(HT16K33_DISPLAYON);
    setBrightness(15);
  }

 

    void showNumber(int value, bool rightAlign = true, int interval = 250) { 
      matrix.print(value);
      matrix.writeDisplay();
    }
  
  //%
  void init(){
      matrix.begin(0x70);
  }
}
