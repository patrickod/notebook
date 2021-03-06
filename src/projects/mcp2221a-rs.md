## MCP2221

The MCP2221 is a neat USB-to-UART/I2C serial converter that also features 4 GP pins which can be used for multiple functions (ADC, DAC, interrupt detection, clock output). It is intended to allow for easy communication with embedded devices over USB, either via the USB CDC interface for the UART, or via USB-HID events for the I2C and GPIO functions.

I'm specifically using the [Adafruit MCP2221A breakout](https://www.adafruit.com/product/4471) which features both USB-C and a StemmaQT connectors. 

There are already a number of open source libraries that support interfacing with the MCP2221 in languages such as Python, but so far there is none for Rust. I'm working on an implementation as a learning exercise to familiarize myself with the `embedded-hal` crate and its use of Traits.

### Reference material

* [Datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/20005565C.pdf)
* [USB Human Input Device Tutorial Application Note](https://www.silabs.com/documents/public/application-notes/AN249.pdf)
* [Adafruit Blinka library MCP2221 implementation](https://github.com/adafruit/Adafruit_Blinka/blob/master/src/adafruit_blinka/microcontroller/mcp2221/mcp2221.py)

### USB-HID

With the exception of the UART which uses USB-CDC all of the functionality in the MCP2221 is accessed via the USB HID (Human Interface Device) procotol. USB HID works by sending 64 byte command and response packets between the USB host and peripheral devices.

Datasheet section `3.0` details the MCP2221 use of USB HID

### Commands & bytes

**misc commansd relating to steting device configuration values**

| command                         | byte   | description                                                                                                                                                                       |
| --------------------            | ----   |                                                                                                                                                                                   |
| `STATUS/SET_PARAMETERS`         | `0x10` | used both as the event which polls for status updates & also sets certain I2C parameters                                                                                          |
| `READ_FLASH_DATA`               | `0xB0` | reads data structures from flash memory (chip settings, GPIO settings, USB VID/PID, serial). takes variable which dictates which data structure should be serialized and returned |
| `WRITE_FLASH_DATA`              | `0xB1` | writes the same configuration data structures into flash memory to adjust operation of the device. accepts variable which informs the device on how to interpret incoming bytes   |
| `SEND_FLASH_PASSWORD`           | `0xB2` | set an 8 byte password to prevent alteration of configuration (not implemented**                                                                                                   |

**I2C transfer commands**

| command                         | byte   | description                                                                                                                                                                       |
| --------------------            | ----   |                                                                                                                                                                                   |
| `I2C_WRITE_DATA`                | `0x90` | initiate I2C transfers and in cases of transfers over 60 bytes to send the next 60 bytes repeatedly until exhausted.                                                              |
| `I2C_WRITE_DATA_REPEATED_START` | `0x92` | initiate I2C transfers using the repeated-start condition                                                                                                                         |
| `I2C_WRITE_DATA_NO_STOP`        | `0x94` | initiate I2C transfers but withholds STOP condition on transfer end                                                                                                               |
| `I2C_READ_DATA`                 | `0x91` | initiate/continue read I2C transfer (sends STOP)                                                                                                                                  |
| `I2C_READ_DATA_REPEATED_START`  | `0x93` | initiate read transfer with repeated START                                                                                                                                        |
| `I2C_READ_DATA`                 | `0x40` | command which actually retrieves the I2C data for transfers started with the READ commands. Reads back responses in 60 byte chunks until complete                                 |

**GPIO pin commands**

| command           | byte   | description                                                                  |
|-------------------|--------|------------------------------------------------------------------------------|
| `SET_GPIO_VALUES` | `0x50` | Change the GPIO output values for pins configured to operate as GPIO outputs |
| `GET_GPIO_VALUES` | `0x51` | Read back direction and pin value information for all pins operating as GPIO |

**SRAM settings**

| command             | byte   | description                                                                                        |
|---------------------|--------|----------------------------------------------------------------------------------------------------|
| `SET_SRAM_SETTINGS` | `0x60` | alters run-time chip settings which are not persisted to flash and which are reset upon power-down |
| `GET_SRAM_SETTINGS` | `0x61` | read back ephemeral run-time chip settings                                                         |


**Misc**

| command      | byte   | description                                                                                                |
|--------------|--------|------------------------------------------------------------------------------------------------------------|
| `CHIP_RESET` | `0x70` | forces a reset of the MCP2221. usually performed after updaing Flash config values to put them into effect |
|              |        |                                                                                                            |
