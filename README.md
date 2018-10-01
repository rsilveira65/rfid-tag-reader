# rfid-tag-reader

## Raspberry Config

Use the interactive menu to enable the SPI Interface. See more:  [here](https://www.raspberrypi-spy.co.uk/2014/08/enabling-the-spi-interface-on-the-raspberry-pi/)

Reboot your PI using:
```
$ sudo reboot
```
When you login again check to see that the SPI Interface is enabled
```
$ sudo nano /boot/config.txt
```
Try to find a line that says:
```
dtparam=spi=on
```
If you see the above line then SPI is enabled

Save & Reboot your PI using:
```
$ sudo reboot
```
When you login again check to see that the spi_bcm2835 module is loaded
```
$ lsmod | grep spi
```
Install python2.7-dev:
```
$ sudo apt-get install python2.7-dev
```
Download and Install SPI-Py executing the following commands:
```
$ git clone https://github.com/lthiery/SPI-Py.git
```
```
$ cd SPI-Py
```
```
$ sudo python setup.py install
```


## Project Setup
```bash
$ npm install
```

## Hardware Setup (PIN/GPIO)
```
SDA --> 24 - YELLOW

SCK --> 23 - BLUE

MOSI --> 19 - GREEN

MISO --> 21 - ORANGE

GND --> 6 - BLACK

RST --> 22 - BROWN

3.3V --> 1 - RED

LED --> 7 - WHITE

LOCK --> 8

BUZZER --> 9
```


![alt tag](http://osoyoo.com/wp-content/uploads/2017/06/raspberry-pi-zero.jpg)
