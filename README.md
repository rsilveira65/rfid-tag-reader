# rfid-tag-reader

## Raspberry Config

Use the interactive menu to enable the SPI Interface.

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
SDA --> 24

SCK --> 23

MOSI --> 19

MISO --> 21

GND --> 6

RST --> 22

3.3V --> 1

LED --> 7

LOCK --> 8

BUZZER --> 9
```


![alt tag](http://osoyoo.com/wp-content/uploads/2017/06/raspberry-pi-zero.jpg)
