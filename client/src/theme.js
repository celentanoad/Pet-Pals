const theme = {
    "name": "my theme",
    "rounding": 24,
    "spacing": 28,
    "defaultMode": "light",
    "global": {
      "colors": {
        "brand": {
          "dark": "#7AC6C6",
          "light": "#7AC6A0"
        },
        "background": {
          "dark": "#111111",
          "light": "#33333"
        },
        "background-back": {
          "dark": "#111111",
          "light": "#EEEEEE"
        },
        "background-front": {
          "dark": "#222222",
          "light": "#FFFFFF"
        },
        "background-contrast": {
          "dark": "#FFFFFF11",
          "light": "#11111111"
        },
        "text": {
          "dark": "#EEEEEE",
          "light": "#333333"
        },
        "text-strong": {
          "light": "#222222",
          "dark": "#ffffff"
        },
        "text-weak": {
          "dark": "#CCCCCC",
          "light": "#444444"
        },
        "text-xweak": {
          "dark": "#999999",
          "light": "#666666"
        },
        "border": {
          "dark": "brand",
          "light": "brand"
        },
        "control": "text",
        "active-background": "background-contrast",
        "active-text": {
          "light": "text-strong",
          "dark": "#7AC67A"
        },
        "selected-background": "brand",
        "selected-text": {
          "light": "text-strong",
          "dark": "#7AC67A"
        },
        "status-critical": "#FF4040",
        "status-warning": "#FFAA15",
        "status-ok": "#00C781",
        "status-unknown": "#CCCCCC",
        "status-disabled": "#CCCCCC",
        "graph-0": {
          "light": "#7AC6A0",
          "dark": "#7AC6A0"
        },
        "graph-1": {
          "light": "#7AC6C6",
          "dark": "#7AC6C6"
        },
        "focus": "background-contrast",
      },
      "font": {
        "family": "\"Raleway\"",
        "size": "21px",
        "height": "28px",
        "maxWidth": "588px",
        "face": "/* cyrillic-ext */\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/raleway/v17/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCFPrEHJA.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/raleway/v17/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCMPrEHJA.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/raleway/v17/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCHPrEHJA.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/raleway/v17/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCGPrEHJA.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/raleway/v17/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* latin */\n@font-face {\n  font-family: 'Acme';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Acme Regular'), local('Acme-Regular'), url(https://fonts.gstatic.com/s/acme/v10/RrQfboBx-C5_XxrBbg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* latin */\n@font-face {\n  font-family: 'Acme';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Acme Regular'), local('Acme-Regular'), url(https://fonts.gstatic.com/s/acme/v10/RrQfboBx-C5_XxrBbg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"
      },
      "active": {
        "background": "active-background",
        "color": "active-text"
      },
      "hover": {
        "background": "active-background",
        "color": "active-text"
      },
      "selected": {
        "background": "selected-background",
        "color": "selected-text",
        "box-shadow": "none"
      },
      "control": {
        "border": {
          "radius": "24px"
        }
      },
      "drop": {
        "border": {
          "radius": "24px"
        },
        "shadowSize": "none"
      },
      "borderSize": {
        "xsmall": "1px",
        "small": "2px",
        "medium": "5px",
        "large": "14px",
        "xlarge": "28px"
      },
      "breakpoints": {
        "small": {
          "value": 600,
          "borderSize": {
            "xsmall": "1px",
            "small": "2px",
            "medium": "5px",
            "large": "7px",
            "xlarge": "14px"
          },
          "edgeSize": {
            "none": "0px",
            "hair": "1px",
            "xxsmall": "2px",
            "xsmall": "4px",
            "small": "7px",
            "medium": "14px",
            "large": "28px",
            "xlarge": "56px"
          },
          "size": {
            "xxsmall": "28px",
            "xsmall": "56px",
            "small": "112px",
            "medium": "224px",
            "large": "448px",
            "xlarge": "896px",
            "full": "100%"
          }
        },
        "medium": {
          "value": 700
        },
        "large": {}
      },
      "edgeSize": {
        "none": "0px",
        "hair": "1px",
        "xxsmall": "4px",
        "xsmall": "7px",
        "small": "14px",
        "medium": "28px",
        "large": "56px",
        "xlarge": "112px",
        "responsiveBreakpoint": "small"
      },
      "input": {
        "padding": "14px",
        "weight": 600
      },
      "spacing": "28px",
      "size": {
        "xxsmall": "56px",
        "xsmall": "112px",
        "small": "224px",
        "medium": "448px",
        "large": "896px",
        "xlarge": "1344px",
        "xxlarge": "1792px",
        "full": "100%"
      }
    },
    "chart": {},
    "diagram": {
      "line": {}
    },
    "meter": {},
    "button": {
      "border": {
        "width": "2px",
        "radius": "21px"
      },
      "padding": {
        "vertical": "5px",
        "horizontal": "26px"
      },
      "box-shadow": "none"
    },
    "checkBox": {
      "check": {
        "radius": "24px"
      },
      "toggle": {
        "radius": "28px",
        "size": "56px"
      },
      "size": "28px"
    },
    "radioButton": {
      "size": "28px"
    },
    "formField": {
      "border": {
        "error": {
          "color": {
            "dark": "white",
            "light": "status-critical"
          }
        },
        "position": "inner",
        "side": "all",
        "size": "xsmall",
        "style": "solid"
      },
      "content": {
        "pad": "xsmall"
      },
      "disabled": {
        "background": {
          "color": "status-disabled",
          "opacity": "medium"
        }
      },
      "error": {
        "color": "status-critical",
        "margin": {
          "vertical": "xsmall",
          "horizontal": "small"
        }
      },
      "help": {
        "color": "dark-3",
        "margin": {
          "start": "small"
        }
      },
      "info": {
        "color": "text-xweak",
        "margin": {
          "vertical": "xsmall",
          "horizontal": "small"
        }
      },
      "label": {
        "margin": {
          "vertical": "xsmall",
          "horizontal": "small"
        }
      },
      "margin": {
        "bottom": "small"
      },
      "round": "24px"
    },
    "calendar": {
      "small": {
        "fontSize": "17.733333333333334px",
        "lineHeight": 1.375,
        "daySize": "32.00px"
      },
      "medium": {
        "fontSize": "21px",
        "lineHeight": 1.45,
        "daySize": "64.00px"
      },
      "large": {
        "fontSize": "30.8px",
        "lineHeight": 1.11,
        "daySize": "128.00px"
      }
    },
    "clock": {
      "analog": {
        "hour": {
          "width": "9px",
          "size": "28px"
        },
        "minute": {
          "width": "5px",
          "size": "14px"
        },
        "second": {
          "width": "4px",
          "size": "11px"
        },
        "size": {
          "small": "84px",
          "medium": "112px",
          "large": "168px",
          "xlarge": "252px",
          "huge": "336px"
        }
      },
      "digital": {
        "text": {
          "xsmall": {
            "size": "14.466666666666667px",
            "height": 1.5
          },
          "small": {
            "size": "17.733333333333334px",
            "height": 1.43
          },
          "medium": {
            "size": "21px",
            "height": 1.375
          },
          "large": {
            "size": "24.266666666666666px",
            "height": 1.167
          },
          "xlarge": {
            "size": "27.53333333333333px",
            "height": 1.1875
          },
          "xxlarge": {
            "size": "34.06666666666666px",
            "height": 1.125
          }
        }
      }
    },
    "heading": {
      "level": {
        "1": {
          "small": {
            "size": "34px",
            "height": "41px",
            "maxWidth": "954px"
          },
          "medium": {
            "size": "47px",
            "height": "54px",
            "maxWidth": "1320px"
          },
          "large": {
            "size": "73px",
            "height": "80px",
            "maxWidth": "2051px"
          },
          "xlarge": {
            "size": "99px",
            "height": "106px",
            "maxWidth": "2783px"
          }
        },
        "2": {
          "small": {
            "size": "31px",
            "height": "38px",
            "maxWidth": "862px"
          },
          "medium": {
            "size": "41px",
            "height": "48px",
            "maxWidth": "1137px"
          },
          "large": {
            "size": "50px",
            "height": "57px",
            "maxWidth": "1411px"
          },
          "xlarge": {
            "size": "60px",
            "height": "67px",
            "maxWidth": "1686px"
          }
        },
        "3": {
          "small": {
            "size": "28px",
            "height": "35px",
            "maxWidth": "771px"
          },
          "medium": {
            "size": "34px",
            "height": "41px",
            "maxWidth": "954px"
          },
          "large": {
            "size": "41px",
            "height": "48px",
            "maxWidth": "1137px"
          },
          "xlarge": {
            "size": "47px",
            "height": "54px",
            "maxWidth": "1320px"
          }
        },
        "4": {
          "small": {
            "size": "24px",
            "height": "31px",
            "maxWidth": "679px"
          },
          "medium": {
            "size": "28px",
            "height": "35px",
            "maxWidth": "771px"
          },
          "large": {
            "size": "31px",
            "height": "38px",
            "maxWidth": "862px"
          },
          "xlarge": {
            "size": "34px",
            "height": "41px",
            "maxWidth": "954px"
          }
        },
        "5": {
          "small": {
            "size": "19px",
            "height": "26px",
            "maxWidth": "542px"
          },
          "medium": {
            "size": "19px",
            "height": "26px",
            "maxWidth": "542px"
          },
          "large": {
            "size": "19px",
            "height": "26px",
            "maxWidth": "542px"
          },
          "xlarge": {
            "size": "19px",
            "height": "26px",
            "maxWidth": "542px"
          }
        },
        "6": {
          "small": {
            "size": "18px",
            "height": "25px",
            "maxWidth": "497px"
          },
          "medium": {
            "size": "18px",
            "height": "25px",
            "maxWidth": "497px"
          },
          "large": {
            "size": "18px",
            "height": "25px",
            "maxWidth": "497px"
          },
          "xlarge": {
            "size": "18px",
            "height": "25px",
            "maxWidth": "497px"
          }
        }
      },
      "font": {
        "family": ""
      }
    },
    "paragraph": {
      "small": {
        "size": "19px",
        "height": "26px",
        "maxWidth": "542px"
      },
      "medium": {
        "size": "21px",
        "height": "28px",
        "maxWidth": "588px"
      },
      "large": {
        "size": "24px",
        "height": "31px",
        "maxWidth": "679px"
      },
      "xlarge": {
        "size": "28px",
        "height": "35px",
        "maxWidth": "771px"
      },
      "xxlarge": {
        "size": "34px",
        "height": "41px",
        "maxWidth": "954px"
      }
    },
    "text": {
        "xxsmall": {
            "size": "12px",
            "height": "20px",
            "maxWidth": "300px"
        },
      "xsmall": {
        "size": "18px",
        "height": "25px",
        "maxWidth": "497px"
      },
      "small": {
        "size": "19px",
        "height": "26px",
        "maxWidth": "542px"
      },
      "medium": {
        "size": "21px",
        "height": "28px",
        "maxWidth": "588px"
      },
      "large": {
        "size": "24px",
        "height": "31px",
        "maxWidth": "679px"
      },
      "xlarge": {
        "size": "28px",
        "height": "35px",
        "maxWidth": "771px"
      },
      "xxlarge": {
        "size": "34px",
        "height": "41px",
        "maxWidth": "954px"
      }
    },
    "scale": 0.7,
    "layer": {
      "background": {
        "dark": "#111111",
        "light": "#33333"
      }
    }
  }

  export default theme;