import Movement from "@/model/Movement";

const MOVEMENTS : Movement[] = [
  {
    "from": "base",
    "symbol": "牛",
    "name": "ox",
    "color": "red",
    "startWith": "blue",
    "board": [
      {
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 2,
            "column": 3
          },
          {
            "row": 3,
            "column": 4
          },
          {
            "row": 4,
            "column": 3
          }
        ]
      }
    ]
  },
  {
    "from": "base",
    "symbol": "蟹",
    "name": "crab",
    "color": "green",
    "startWith": "blue",
    "board": [
      {
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 2,
            "column": 3
          },
          {
            "row": 3,
            "column": 1
          },
          {
            "row": 3,
            "column": 5
          }
        ]
      }
    ]
  },
  {
    "from": "base",
    "symbol": "馬",
    "name": "horse",
    "color": "blue",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 2,
            "column": 3
          },
          {
            "row": 3,
            "column": 2
          },
          {
            "row": 4,
            "column": 3
          }
        ]
      }
    ]
  },
  {
    "from": "base",
    "symbol": "蛇",
    "name": "cobra",
    "color": "red",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 2,
            "column": 4
          },
          {
            "row": 3,
            "column": 2
          },
          {
            "row": 4,
            "column": 4
          }
        ]
      }
    ]
  },
  {
    "from": "base",
    "symbol": "兎",
    "name": "rabbit",
    "color": "red",
    "startWith": "blue",
    "board": [
      {
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 2,
            "column": 4
          },
          {
            "row": 3,
            "column": 5
          },
          {
            "row": 4,
            "column": 2
          }
        ]
      }
    ]
  },
  {
    "from": "base",
    "symbol": "龍",
    "name": "dragon",
    "color": "green",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 2,
            "column": 1
          },
          {
            "row": 2,
            "column": 5
          },
          {
            "row": 4,
            "column": 2
          },
          {
            "row": 4,
            "column": 4
          }
        ]
      }
    ]
  },
  {
    "from": "base",
    "symbol": "象",
    "name": "elephant",
    "color": "green",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 2,
            "column": 2
          },
          {
            "row": 2,
            "column": 4
          },
          {
            "row": 3,
            "column": 2
          },
          {
            "row": 3,
            "column": 4
          }
        ]
      }
    ]
  },
  {
    "from": "base",
    "symbol": "鰻",
    "name": "eel",
    "color": "blue",
    "startWith": "blue",
    "board": [
      {
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 2,
            "column": 2
          },
          {
            "row": 3,
            "column": 4
          },
          {
            "row": 4,
            "column": 2
          }
        ]
      }
    ]
  },
  {
    "from": "base",
    "symbol": "鶏",
    "name": "rooster",
    "color": "red",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 2,
            "column": 4
          },
          {
            "row": 3,
            "column": 4
          },
          {
            "row": 3,
            "column": 2
          },
          {
            "row": 4,
            "column": 2
          }
        ]
      }
    ]
  },
  {
    "from": "base",
    "symbol": "鵞鳥",
    "name": "goose",
    "color": "blue",
    "startWith": "blue",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 2
          },
          {
            "row": 3,
            "column": 2
          },
          {
            "row": 3,
            "column": 4
          },
          {
            "row": 4,
            "column": 4
          }
        ]
      }
    ]
  },
  {
    "from": "base",
    "symbol": "鶴",
    "name": "crane",
    "color": "green",
    "startWith": "blue",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 3
          },
          {
            "row": 4,
            "column": 2
          },
          {
            "row": 4,
            "column": 4
          }
        ]
      }
    ]
  },
  {
    "from": "base",
    "symbol": "猪",
    "name": "boar",
    "color": "green",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 3
          },
          {
            "row": 3,
            "column": 2
          },
          {
            "row": 3,
            "column": 4
          }
        ]
      }
    ]
  },
  {
    "from": "base",
    "symbol": "蟻",
    "name": "mantis",
    "color": "green",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 2
          },
          {
            "row": 2,
            "column": 4
          },
          {
            "row": 4,
            "column": 3
          }
        ]
      }
    ]
  },
  {
    "from": "base",
    "symbol": "猿",
    "name": "monkey",
    "color": "green",
    "startWith": "blue",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 2
          },
          {
            "row": 2,
            "column": 4
          },
          {
            "row": 4,
            "column": 2
          },
          {
            "row": 4,
            "column": 4
          }
        ]
      }
    ]
  },
  {
    "from": "base",
    "symbol": "蛙",
    "name": "frog",
    "color": "blue",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 2
          },
          {
            "row": 3,
            "column": 1
          },
          {
            "row": 4,
            "column": 4
          }
        ]
      }
    ]
  },
  {
    "from": "base",
    "symbol": "虎",
    "name": "tiger",
    "color": "green",
    "startWith": "blue",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 1,
            "column": 3
          },
          {
            "row": 4,
            "column": 3
          }
        ]
      }
    ]
  },
  {
    "from": "senseis-path",
    "symbol": "犬",
    "name": "dog",
    "color": "blue",
    "startWith": "blue",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 2
          },
          {
            "row": 3,
            "column": 2
          },
          {
            "row": 4,
            "column": 2
          }
        ]
      }
    ]
  },
  {
    "from": "senseis-path",
    "symbol": "鼠",
    "name": "mouse",
    "color": "red",
    "startWith": "blue",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 3
          },
          {
            "row": 3,
            "column": 4
          },
          {
            "row": 4,
            "column": 2
          }
        ]
      }
    ]
  },
  {
    "from": "senseis-path",
    "symbol": "鳳凰",
    "name": "phoenix",
    "color": "green",
    "startWith": "blue",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 2
          },
          {
            "row": 2,
            "column": 4
          },
          {
            "row": 3,
            "column": 1
          },
          {
            "row": 3,
            "column": 5
          }
        ]
      }
    ]
  },
  {
    "from": "senseis-path",
    "symbol": "キリン",
    "name": "giraffe",
    "color": "green",
    "startWith": "blue",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 1
          },
          {
            "row": 2,
            "column": 5
          },
          {
            "row": 4,
            "column": 3
          }
        ]
      }
    ]
  },
  {
    "from": "senseis-path",
    "symbol": "狸",
    "name": "tanuki",
    "color": "red",
    "startWith": "blue",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 3
          },
          {
            "row": 2,
            "column": 5
          },
          {
            "row": 4,
            "column": 2
          }
        ]
      }
    ]
  },
  {
    "from": "senseis-path",
    "symbol": "蜥蜴",
    "name": "iguana",
    "color": "blue",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 1
          },
          {
            "row": 2,
            "column": 3
          },
          {
            "row": 4,
            "column": 4
          }
        ]
      }
    ]
  },
  {
    "from": "senseis-path",
    "symbol": "麒麟",
    "name": "kirin",
    "color": "green",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 1,
            "column": 2
          },
          {
            "row": 1,
            "column": 4
          },
          {
            "row": 5,
            "column": 3
          }
        ]
      }
    ]
  },
  {
    "from": "senseis-path",
    "symbol": "獺",
    "name": "otter",
    "color": "blue",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 2
          },
          {
            "row": 3,
            "column": 5
          },
          {
            "row": 4,
            "column": 4
          }
        ]
      }
    ]
  },
  {
    "from": "senseis-path",
    "symbol": "熊",
    "name": "panda",
    "color": "red",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 3
          },
          {
            "row": 2,
            "column": 4
          },
          {
            "row": 4,
            "column": 2
          }
        ]
      }
    ]
  },
  {
    "from": "senseis-path",
    "symbol": "狐",
    "name": "fox",
    "color": "red",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 4
          },
          {
            "row": 3,
            "column": 4
          },
          {
            "row": 4,
            "column": 4
          }
        ]
      }
    ]
  },
  {
    "from": "senseis-path",
    "symbol": "鼠",
    "name": "rat",
    "color": "blue",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 3
          },
          {
            "row": 3,
            "column": 2
          },
          {
            "row": 4,
            "column": 4
          }
        ]
      }
    ]
  },
  {
    "from": "senseis-path",
    "symbol": "羚羊",
    "name": "sable",
    "color": "red",
    "startWith": "blue",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 4
          },
          {
            "row": 3,
            "column": 1
          },
          {
            "row": 4,
            "column": 2
          }
        ]
      }
    ]
  },
  {
    "from": "senseis-path",
    "symbol": "海蛇",
    "name": "sea snake",
    "color": "red",
    "startWith": "blue",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 3
          },
          {
            "row": 3,
            "column": 5
          },
          {
            "row": 4,
            "column": 2
          }
        ]
      }
    ]
  },
  {
    "from": "senseis-path",
    "symbol": "亀",
    "name": "turtle",
    "color": "green",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 3,
            "column": 1
          },
          {
            "row": 3,
            "column": 5
          },
          {
            "row": 4,
            "column": 2
          },
          {
            "row": 4,
            "column": 4
          }
        ]
      }
    ]
  },
  {
    "from": "senseis-path",
    "symbol": "熊",
    "name": "bear",
    "color": "blue",
    "startWith": "blue",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 2
          },
          {
            "row": 2,
            "column": 3
          },
          {
            "row": 4,
            "column": 4
          }
        ]
      }
    ]
  },
  {
    "from": "senseis-path",
    "symbol": "蝮蛇",
    "name": "viper",
    "color": "blue",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 3
          },
          {
            "row": 3,
            "column": 1
          },
          {
            "row": 4,
            "column": 4
          }
        ]
      }
    ]
  },
  {
    "from": "way-of-wind",
    "symbol": "蝙蝠",
    "name": "bat",
    "color": "green",
    "startWith": "blue",
    "board": [
      {
        "rows": 3,
        "description": "Move your student or Master as shown above, then move the Wind Spirit as shown below.",
        "movements": [
          {
          "movementType": "initial-position",
          "row": 2,
          "column": 3
        },
          {
            "row": 1,
            "column": 3
          },
          {
            "row": 3,
            "column": 3
          }
        ]
      },
      {
        "rows": 3,
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 2,
            "column": 1
          },
          {
            "row": 2,
            "column": 2
          },
          {
            "row": 2,
            "column": 4
          },
          {
            "row": 2,
            "column": 5
          }
        ]
      }
    ]
  },
  {
    "from": "way-of-wind",
    "symbol": "鷲",
    "name": "eagle",
    "color": "green",
    "startWith": "red",
    "board": [
      {
        "rows": 3,
        "description": "Move your student or Master as shown above, then move the Wind Spirit as shown below.",
        "movements": [
          {
          "movementType": "initial-position",
          "row": 2,
          "column": 3
        },
          {
            "row": 1,
            "column": 2
          },
          {
            "row": 1,
            "column": 4
          }
        ]
      },
      {
        "rows": 3,
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 1,
            "column": 1
          },
          {
            "row": 1,
            "column": 5
          }
        ]
      }
    ]
  },
  {
    "from": "way-of-wind",
    "symbol": "鷹",
    "name": "hawk",
    "color": "green",
    "startWith": "blue",
    "board": [
      {
        "rows": 3,
        "description": "Move your student or Master as shown above, then move the Wind Spirit as shown below.",
        "movements": [
          {
          "movementType": "initial-position",
          "row": 2,
          "column": 3
        },
          {
            "row": 1,
            "column": 2
          },
          {
            "row": 3,
            "column": 2
          }
        ]
      },
      {
        "rows": 3,
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 1
          },
          {
            "row": 2,
            "column": 5
          },
          {
            "row": 3,
            "column": 1
          },
          {
            "row": 3,
            "column": 5
          }
        ]
      }
    ]
  },
  {
    "from": "way-of-wind",
    "symbol": "獅子",
    "name": "lion",
    "color": "red",
    "startWith": "red",
    "board": [
      {
        "rows": 3,
        "description": "Move your student or Master as shown above, then move the Wind Spirit as shown below.",
        "movements": [
          {
          "movementType": "initial-position",
          "row": 2,
          "column": 3
        },
          {
            "row": 1,
            "column": 4
          },
          {
            "row": 3,
            "column": 2
          }
        ]
      },
      {
        "rows": 3,
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 1,
            "column": 3
          },
          {
            "row": 2,
            "column": 3
          }
        ]
      }
    ]
  },
  {
    "from": "way-of-wind",
    "symbol": "蛸",
    "name": "octopus",
    "color": "blue",
    "startWith": "blue",
    "board": [
      {
        "rows": 3,
        "description": "Move your student or Master as shown above, then move the Wind Spirit as shown below.",
        "movements": [
          {
          "movementType": "initial-position",
          "row": 2,
          "column": 3
        },
          {
            "row": 1,
            "column": 2
          },
          {
            "row": 3,
            "column": 4
          }
        ]
      },
      {
        "rows": 3,
        "movements": [
          {
          "movementType": "initial-position",
          "row": 2,
        "column": 3
      },
          {
            "row": 1,
            "column": 3
          },
          {
            "row": 2,
            "column": 2
          },
          {
            "row": 2,
            "column": 4
          },
          {
            "row": 3,
            "column": 2
          },
          {
            "row": 3,
            "column": 3
          },
          {
            "row": 3,
            "column": 4
          }
        ]
      }
    ]
  },
  {
    "from": "way-of-wind",
    "symbol": "犀",
    "name": "rhinoceros",
    "color": "blue",
    "startWith": "red",
    "board": [
      {
        "rows": 3,
        "description": "Move your student or Master as shown above, then move the Wind Spirit as shown below.",
        "movements": [
          {
          "movementType": "initial-position",
          "row": 2,
          "column": 3
        },
          {
            "row": 1,
            "column": 2
          },
          {
            "row": 3,
            "column": 3
          }
        ]
      },
      {
        "rows": 3,
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 2,
            "column": 2
          },
          {
            "row": 2,
            "column": 3
          },
          {
            "row": 2,
            "column": 4
          },
          {
            "row": 3,
            "column": 1
          },
          {
            "row": 3,
            "column": 5
          }
        ]
      }
    ]
  },
  {
    "from": "way-of-wind",
    "symbol": "蠍",
    "name": "scorpion",
    "color": "red",
    "startWith": "blue",
    "board": [
      {
        "rows": 3,
        "description": "Move your student or Master as shown above, then move the Wind Spirit as shown below.",
        "movements": [
          {
          "movementType": "initial-position",
          "row": 2,
          "column": 3
        },
          {
            "row": 1,
            "column": 4
          },
          {
            "row": 3,
            "column": 4
          }
        ]
      },
      {
        "rows": 3,
        "movements": [
          {
          "movementType": "initial-position",
          "row": 3,
          "column": 3
        },
          {
            "row": 1,
            "column": 2
          },
          {
            "row": 1,
            "column": 4
          },
          {
            "row": 2,
            "column": 1
          },
          {
            "row": 2,
            "column": 5
          }
        ]
      }
    ]
  },
  {
    "from": "way-of-wind",
    "symbol": "蜘蛛",
    "name": "spider",
    "color": "red",
    "startWith": "red",
    "board": [
      {
        "rows": 3,
        "description": "Move your student or Master as shown above, then move the Wind Spirit as shown below.",
        "movements": [
          {
          "movementType": "initial-position",
          "row": 2,
          "column": 3
        },
          {
            "row": 1,
            "column": 4
          },
          {
            "row": 3,
            "column": 3
          }
        ]
      },
      {
        "rows": 3,
        "movements": [
          {
          "movementType": "initial-position",
          "row": 2,
          "column": 3
        },
          {
            "row": 1,
            "column": 2
          },
          {
            "row": 1,
            "column": 3
          },
          {
            "row": 1,
            "column": 4
          },
          {
            "row": 3,
            "column": 3
          }
        ]
      }
    ]
  },
  {
    "from": "promo",
    "symbol": "山羊",
    "name": "goat",
    "color": "red",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 2,
            "column": 4
          },
          {
            "row": 3,
            "column": 2
          },
          {
            "row": 4,
            "column": 3
          }
        ]
      }
    ]
  },
  {
    "from": "promo",
    "symbol": "牡牛",
    "name": "steer",
    "color": "green",
    "startWith": "blue",
    "board": [
      {
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 3,
            "column": 2
          },
          {
            "row": 3,
            "column": 4
          },
          {
            "row": 4,
            "column": 2
          },
          {
            "row": 4,
            "column": 4
          }
        ]
      }
    ]
  },
  {
    "from": "promo",
    "symbol": "鰕",
    "name": "lobster",
    "color": "green",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 2,
            "column": 2
          },
          {
            "row": 2,
            "column": 4
          },
          {
            "row": 5,
            "column": 2
          },
          {
            "row": 5,
            "column": 4
          }
        ]
      }
    ]
  },
  {
    "from": "promo",
    "symbol": "猫",
    "name": "cat",
    "color": "red",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 2,
            "column": 3
          },
          {
            "row": 3,
            "column": 2
          },
          {
            "row": 3,
            "column": 5
          },
          {
            "row": 5,
            "column": 3
          }
        ]
      }
    ]
  },
  {
    "from": "promo",
    "symbol": "カモ",
    "name": "serow",
    "color": "green",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 2,
            "column": 3
          },
          {
            "row": 3,
            "column": 2
          },
          {
            "row": 3,
            "column": 5
          },
          {
            "row": 5,
            "column": 3
          }
        ]
      }
    ]
  },
  {
    "from": "promo",
    "symbol": "羊",
    "name": "sheep",
    "color": "blue",
    "startWith": "blue",
    "board": [
      {
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 2,
            "column": 2
          },
          {
            "row": 3,
            "column": 4
          },
          {
            "row": 4,
            "column": 3
          }
        ]
      }
    ]
  },
  {
    "from": "promo",
    "symbol": "鹿",
    "name": "mejika",
    "color": "green",
    "startWith": "blue",
    "board": [
      {
        "rows": 2,
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 2,
            "column": 1
          },
          {
            "row": 2,
            "column": 5
          }
        ]
      },
      {
        "rows": 2,
        "movements": [
          {
            "movementType": "initial-position",
            "row": 2,
            "column": 3
          },
          {
            "row": 1,
            "column": 3
          }
        ]
      }
    ]
  },
  {
    "from": "promo",
    "symbol": "鹿",
    "name": "okija",
    "color": "green",
    "startWith": "red",
    "board": [
      {
        "rows": 2,
        "description": "Move the student above or master below.",
        "movements": [
          {
            "movementType": "initial-position",
            "row": 2,
            "column": 3
          },
          {
            "row": 1,
            "column": 3
          }
        ]
      },
      {
        "rows": 3,
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 1,
            "column": 1
          },
          {
            "row": 1,
            "column": 5
          }
        ]
      }
    ]
  },
  {
    "from": "promo",
    "symbol": "蠍",
    "name": "sasori",
    "color": "green",
    "startWith": "red",
    "board": [
      {
        "rows": 2,
        "description": "Move the student above or master below.",
        "movements": [
          {
            "movementType": "initial-position",
            "row": 2,
            "column": 3
          },
          {
            "row": 2,
            "column": 1
          },
          {
            "row": 2,
            "column": 5
          }
        ]
      },
      {
        "rows": 3,
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 1,
            "column": 2
          },
          {
            "row": 1,
            "column": 4
          }
        ]
      }
    ]
  },
  {
    "from": "promo",
    "symbol": "雀蜂",
    "name": "hornet",
    "color": "red",
    "startWith": "blue",
    "board": [
      {
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 2,
            "column": 3
          },
          {
            "row": 3,
            "column": 4
          },
          {
            "row": 5,
            "column": 1
          }
        ]
      }
    ]
  },
  {
    "from": "promo",
    "symbol": "百足",
    "name": "centipede",
    "color": "blue",
    "startWith": "red",
    "board": [
      {
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 2,
            "column": 3
          },
          {
            "row": 3,
            "column": 2
          },
          {
            "row": 5,
            "column": 5
          }
        ]
      }
    ]
  },
  {
    "from": "promo",
    "symbol": "蜘蛛",
    "name": "kumo",
    "color": "green",
    "startWith": "blue",
    "board": [
      {
        "rows": 3,
        "description": "Move the student above or master below.",
        "movements": [
          {
            "movementType": "initial-position",
            "row": 3,
            "column": 3
          },
          {
            "row": 2,
            "column": 2
          },
          {
            "row": 2,
            "column": 4
          }
        ]
      },
      {
        "rows": 2,
        "movements": [
          {
            "movementType": "initial-position",
            "row": 2,
            "column": 3
          },
          {
            "row": 2,
            "column": 1
          },
          {
            "row": 2,
            "column": 5
          }
        ]
      }
    ]
  }
]

export default MOVEMENTS;