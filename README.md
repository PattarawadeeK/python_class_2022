# CONTENTS
- [CONTENTS](#contents)
- [2602348: Program Design (Python)](#2602348-program-design-python)
  - [class registration issues](#class-registration-issues)
  - [Week 1: 10-Jan-2022](#week-1-10-jan-2022)
    - [Why Python](#why-python)
    - [Basic Python](#basic-python)
    - [Basic Command line](#basic-command-line)
      - [Windows command line](#windows-command-line)
      - [macOS Terminal command line](#macos-terminal-command-line)
    - [First program: Hello World](#first-program-hello-world)
    - [Programming concepts](#programming-concepts)
    - [Class materials](#class-materials)
      - [Clone class materials](#clone-class-materials)
    - [Class exercises](#class-exercises)
  - [week 2 (17-Jan-2022)](#week-2-17-jan-2022)
    - [Program design](#program-design)
    - [Principles of programming](#principles-of-programming)

---
# 2602348: Program Design (Python)
* github: https://github.com/prasertcbs/python_class_2022
* author: [Prasert Kanawattanachai](mailto:prasert.k@chula.ac.th)
* Chulalongkorn Business School
* YouTube: https://youtube.com/prasertcbs
## class registration issues
## Week 1: 10-Jan-2022
* [x] [week 1 clips](https://github.com/prasertcbs/python_class_2022/blob/main/week1_clips.md)
### Why Python
* [x] [Why Python?](https://realpython.com/world-class-companies-using-python/)
* [x] [History](https://en.wikipedia.org/wiki/Python_(programming_language))
  * [x] [Popularity](https://en.wikipedia.org/wiki/Python_(programming_language)#Popularity)
* [x] [Designer/Inventor](https://en.wikipedia.org/wiki/Guido_van_Rossum)
* [x] Stack Overflow survey
  * [x] [2020](https://insights.stackoverflow.com/survey/2020#most-popular-technologies)
    * [x] [most wanted](https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages-wanted)
  * [x] [2021](https://insights.stackoverflow.com/survey/2021#technology-most-popular-technologies)
    * [x] [most wanted](https://insights.stackoverflow.com/survey/2021#most-loved-dreaded-and-wanted-language-want)
### Basic Python
* [x] Install Python
  * [ ] [Windows](https://youtu.be/NxIwWGKuSco)
    * [ ] `where.exe python`
  * [ ] macOS (preinstalled with macOS)
    * [ ] `python3` instead of `python`
      * [ ] `which python3`
      * [ ] `which python`
    * [ ] `pip3` instead of `pip`
* [x] IDE (Integrated development environment)
  * [ ] Visual Studio Code
    * [ ] [Download and Install](https://www.youtube.com/playlist?list=PLoTScYm9O0GEo8pnhJb-m-MGVGDvGb4bB)
    * [ ] [Visual Studio Code for Python](https://www.youtube.com/watch?v=D2Q_P5BcgpU&list=PLoTScYm9O0GE-HoYQYU2lsIQblP430ypV)
  * [ ] Jupyter Lab (Python Notebook)
    * [ ] [Installation](https://www.youtube.com/watch?v=TAZluNvUgds&list=PLoTScYm9O0GEour5CiwfSnoutg3RyA76O&index=2)
    * [ ] [Learn](https://www.youtube.com/watch?v=3PkMNsUCAM0&list=PLoTScYm9O0GEour5CiwfSnoutg3RyA76O)
* [ ] [Cheat sheet](https://cheatography.com/sschaub/cheat-sheets/essential-python/)
### Basic Command line
#### [Windows command line](https://www.youtube.com/watch?v=C5fCLAA7Mmc&list=PLoTScYm9O0GGpQRdTu3Y8sGA8MsBuojhV)
* [ ] `dir`: list files
* [ ] `md`: make directory
* [ ] `cd`: change directory
* [ ] `copy`: copy file
* [ ] `move`: move file
* [ ] `del`: delete file
#### [macOS Terminal command line](https://www.youtube.com/watch?v=-5SI3xFM_3E&list=PLoTScYm9O0GGWXd_4sYsADmM4og6vU1Zh)
* [ ] `ls`: list files
* [ ] `mkdir`: make directory
* [ ] `cd`: change directory
* [ ] `cp`: copy file
* [ ] `mv`: move file
* [ ] `rm`: delete file
* [ ] `man`: command manual
### First program: Hello World
* [x] New, Edit, Save, Run Python file
### [Programming concepts](https://www.youtube.com/watch?v=bu6kwrpOqFM&list=PLoTScYm9O0GH4YQs9t4tf2RIYolHt_YwW)
* [x] IPO (Input-Process-Output)
  * [x] rock-paper-scissors
* [x] sample programs:
  * [x] [come x pay y](https://youtu.be/qqk0iTdmeTA)
  * [x] [get historical stock prices](https://www.youtube.com/watch?v=U2YMOfGcsvg)
  * [ ] [generate QR Code](https://youtu.be/zjGXl3iLCs8)
  * [ ] [lucky phone number](https://youtu.be/OK5lP47wd3k)
  * [ ] [NATO phonetic](https://youtu.be/3sofYly_vxA)
### Class materials
* [ ] [Python playlist](https://www.youtube.com/playlist?list=PLoTScYm9O0GH4YQs9t4tf2RIYolHt_YwW)
* [ ] [book](https://www.eng.chula.ac.th/th/20535)
* [ ] [tutorial](https://www.tutorialspoint.com/python3/python_overview.htm)
#### Clone class materials
* [x] [install git](https://www.git-scm.com/)
  * [x] [how to use github](https://www.youtube.com/watch?v=hSQgAA8bj6I&list=PLoTScYm9O0GGsV1ZAyP4m_iyAbflQrKrX)
* [x] clone git repo to local machine
```bat
cd ~
git clone https://github.com/prasertcbs/python_class_2022.git snowball
```
* [ ] pull latest files from git repo
```bat
cd ~/snowball
git pull
```
### Class exercises
* [ ] find a simple real-world application (e.g., come x pay y, buy 1 get 1 free)

## week 2 (17-Jan-2022)
* [ ] [week 2 clips](https://github.com/prasertcbs/python_class_2022/blob/main/week2_clips.md)

### Program design
* [ ] Static vs Dynamic typing systems
  * [ ] Static typing (C, Java)
  * [ ] Dynamic typing (Python, JavaScript)
    * [ ] problem with dynamic typing
      * [ ] rectangle(5, 7)
      * [ ] rectangle("5", 7)
* [ ] variable (w=5, h=2.54, fname='Peter')
* [ ] data type (int, float, bool, str, tuple, list, dict, ...)
* [ ] flow (sequence, condition, loop)
* [ ] variable scope (global, local)
* [ ] function (just like functions in Excel)
* [ ] [Variable scope](https://www.youtube.com/watch?v=3-OaUTf_1Cs&list=PLoTScYm9O0GH4YQs9t4tf2RIYolHt_YwW&index=49)
* [ ] Function
  * [ ] return value(s)
  * [ ] return None (void function)
### Principles of programming
* [ ] Single Responsibility: Do one thing, do it best
  * [ ] area
    * [ ] rectangle
    * [ ] square
    * [ ] triangle
    * [ ] circle
    * [ ] cylinder
  * [ ] body mass index
* [ ] How to debug your code
  * [ ] [Python Preview](https://youtu.be/4r4Qb1a1rD4)
  * [ ] [Visual Studio Code Debugger](https://youtu.be/89Ch7ON2Tqg) 
