## MCP2221

The MCP2221 is a neat USB-to-UART/I2C serial converter that also features 4 GP pins which can be used for multiple functions (ADC, DAC, interrupt detection, clock output). It is intended to allow for easy communication with embedded devices over USB, either via the USB CDC interface for the UART, or via USB-HID events for the I2C and GPIO functions.

I'm specifically using the [Adafruit MCP2221A breakout](https://www.adafruit.com/product/4471) which features both USB-C and a StemmaQT connectors. 

There are already a number of open source libraries that support interfacing with the MCP2221 in languages such as Python, but so far there is none for Rust. I'm working on an implementation as a learning exercise to familiarize myself with the `embedded-hal` crate and its use of Traits.

[Datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/20005565C.pdf)
