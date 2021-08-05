//% color=#008080 weight=100 icon="\uf26c"
    namespace HT16K33_Alnum4 {


        enum Brightnesses {
            0=0x00,
            1=0x01,
            2=0x02,
            3=0x03,
            4=0x04,
            5=0x05,
            6=0x06,
            7=0x07,
            8=0x08,
            9=0x09,
            10=0x0A,
            11=0x0B,
            12=0x0C,
            13=0x0D,
            14=0x0E,
            15=0x0F
        }


    /**
     * Change Brightness
     * Defaults to flush right
     */
    //% weight=96
    //% blockId=alnum_change_bright 
    //% block="show|number %number" blockGap=8
    //% async rightAlign.defl=1 interval.defl=250 shim=HT16K33_Alnum4::changeBright
    export function setBrightness(del : Brightnesses): void {
        console.log("brightness display:" + value);
        return;
    }
    /**
     * Scroll a number on the screen. If the number fits on the screen (i.e. less than 4 digit), do not scroll.
     * Defaults to flush right
     */
    //% weight=96
    //% blockId=alnum_print_number 
    //% block="show|number %number" blockGap=8
    //% async rightAlign.defl=1 interval.defl=250 shim=HT16K33_Alnum4::showNumber
    export function showNumber(value: number, rightAlign?: boolean, interval?: number): void {
        console.log("alphanumeric display:" + value);
        return;
    }
    /**
     * initialises I2C for alnum display
     */
    //% blockId=alnum_init
    //% block="Initialize Alphanumeric Display"
    //% icon="\uf1ec" shim=HT16K33_Alnum4::init
    export function init(): void {
        return;
    }
}
