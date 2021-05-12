// `https://us.api.blizzard.com/data/wow/search/item?namespace=static-us&locale=en_US&orderby=id&_page=1&_pageSize=3`
const data1 = {
  "page": 1,
  "pageSize": 3,
  "maxPageSize": 3,
  "pageCount": 334,
  "resultCountCapped": true,
  "results": [
    {
      "key": {
        "href":
          "https://us.api.blizzard.com/data/wow/item/25?namespace=static-9.0.5_37760-us"
      },
      "data": {
        "level": 1,
        "required_level": 1,
        "sell_price": 3,
        "item_subclass": {
          "name": {
            "en_US": "Sword",
          },
          "id": 7
        },
        "is_equippable": true,
        "purchase_quantity": 1,
        "media": {
          "id": 25
        },
        "item_class": {
          "name": {
            "en_US": "Weapon",
          },
          "id": 2
        },
        "quality": {
          "name": {
            "en_US": "Common",
          },
          "type": "COMMON"
        },
        "max_count": 0,
        "is_stackable": false,
        "name": {
          "en_US": "Worn Shortsword",
        },
        "purchase_price": 18,
        "id": 25,
        "inventory_type": {
          "name": {
            "en_US": "Main Hand",
          },
          "type": "WEAPONMAINHAND"
        }
      }
    },
    {
      "key": {
        "href": "https://us.api.blizzard.com/data/wow/item/35?namespace=static-9.0.5_37760-us"
      },
      "data": {
        "level": 1,
        "required_level": 1,
        "sell_price": 4,
        "item_subclass": {
          "name": {
            "en_US": "Staff",
          },
          "id": 10
        },
        "is_equippable": true,
        "purchase_quantity": 1,
        "media": {
          "id": 35
        },
        "item_class": {
          "name": {
            "en_US": "Weapon",
          },
          "id": 2
        },
        "quality": {
          "name": {
            "en_US": "Common",
          },
          "type": "COMMON"
        },
        "max_count": 0,
        "is_stackable": false,
        "name": {
          "en_US": "Bent Staff",
        },
        "purchase_price": 24,
        "id": 35,
        "inventory_type": {
          "name": {
            "en_US": "Two-Hand",
          },
          "type": "TWOHWEAPON"
        }
      }
    },
    {
      "key": {
        "href": "https://us.api.blizzard.com/data/wow/item/36?namespace=static-9.0.5_37760-us"
      },
      "data": {
        "level": 1,
        "required_level": 1,
        "sell_price": 3,
        "item_subclass": {
          "name": {
            "en_US": "Mace",
          },
          "id": 4
        },
        "is_equippable": true,
        "purchase_quantity": 1,
        "media": {
          "id": 36
        },
        "item_class": {
          "name": {
            "en_US": "Weapon",
          }, "id": 2
        },
        "quality": {
          "name": {
            "en_US": "Common",
          },
          "type": "COMMON"
        },
        "max_count": 0,
        "is_stackable": false,
        "name": {
          "en_US": "Worn Mace",
        },
        "purchase_price": 19,
        "id": 36,
        "inventory_type": {
          "name": {
            "en_US": "Main Hand",
          },
          "type": "WEAPONMAINHAND"
        }
      }
    }
  ]
}

// https://us.api.blizzard.com/data/wow/item/19912?namespace=static-9.0.5_37760-us
const data2 = {
  "_links": {
    "self": {
      "href": "https://us.api.blizzard.com/data/wow/item/19912?namespace=static-9.0.5_37760-us"
    }
  },
  "id": 19912,
  "name": {
    "en_US": "Overlord's Onyx Band",
  },
  "quality": {
    "type": "RARE",
    "name": {
      "en_US": "Rare",
    }
  },
  "level": 29,
  "required_level": 25,
  "media": {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/media/item/19912?namespace=static-9.0.5_37760-us"
    },
    "id": 19912
  },
  "item_class": {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-9.0.5_37760-us"
    },
    "name": {
      "en_US": "Armor",
    },
    "id": 4
  },
  "item_subclass": {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/0?namespace=static-9.0.5_37760-us"
    },
    "name": {
      "en_US": "Miscellaneous",
    },
    "id": 0
  },
  "inventory_type": {
    "type": "FINGER",
    "name": {
      "en_US": "Finger",
    }
  },
  "purchase_price": 174192,
  "sell_price": 43548,
  "max_count": 0,
  "is_equippable": true,
  "is_stackable": false,
  "preview_item": {
    "item": {
      "key": {
        "href": "https://us.api.blizzard.com/data/wow/item/19912?namespace=static-9.0.5_37760-us"
      },
      "id": 19912
    },
    "quality": {
      "type": "RARE",
      "name": {
        "en_US": "Rare",
      }
    },
    "name": {
      "en_US": "Overlord's Onyx Band",
    },
    "media": {
      "key": {
        "href": "https://us.api.blizzard.com/data/wow/media/item/19912?namespace=static-9.0.5_37760-us"
      },
      "id": 19912
    },
    "item_class": {
      "key": {
        "href": "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-9.0.5_37760-us"
      },
      "name": {
        "en_US": "Armor",
      },
      "id": 4
    },
    "item_subclass": {
      "key": {
        "href": "https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/0?namespace=static-9.0.5_37760-us"
      },
      "name": {
        "en_US": "Miscellaneous",
      },
      "id": 0
    },
    "inventory_type": {
      "type": "FINGER",
      "name": {
        "en_US": "Finger",
      }
    },
    "binding": {
      "type": "ON_ACQUIRE",
      "name": {
        "en_US": "Binds when picked up",
      }
    },
    "unique_equipped": {
      "en_US": "Unique-Equipped",
    },
    "stats": [
      {
        "type": {
          "type": "STAMINA",
          "name": {
            "en_US": "Stamina",
          }
        },
        "value": 6,
        "display": {
          "display_string": {
            "en_US": "+6 Stamina",
          },
          "color": {
            "r": 255, "g": 255, "b": 255, "a": 1
          }
        }
      },
      {
        "type": {
          "type": "DODGE_RATING",
          "name": {
            "en_US": "Dodge",
          }
        },
        "value": 8,
        "is_equip_bonus": true,
        "display": {
          "display_string": {
            "en_US": "+8 Dodge",
          },
          "color": {
            "r": 0, "g": 255, "b": 0, "a": 1
          }
        }
      },
      {
        "type": {
          "type": "PARRY_RATING",
          "name": {
            "en_US": "Parry",
          }
        },
        "value": 7,
        "is_equip_bonus": true,
        "display": {
          "display_string": {
            "en_US": "+7 Parry",
          },
          "color": {
            "r": 0, "g": 255, "b": 0, "a": 1
          }
        }
      }
    ],
    "sell_price": {
      "value": 43548,
      "display_strings": {
        "header": {
          "en_US": "Sell Price:",
        },
        "gold": {
          "en_US": "4",
        },
        "silver": {
          "en_US": "35",
        },
        "copper": {
          "en_US": "48",
        }
      }
    },
    "requirements": {
      "level": {
        "value": 25,
        "display_string": {
          "en_US": "Requires Level 25",
        }
      }
    },
    "set": {
      "item_set": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-set/464?namespace=static-9.0.5_37760-us"
        },
        "name": {
          "en_US": "Overlord's Resolution",
        },
        "id": 464
      },
      "items": [
        {
          "item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/19873?namespace=static-9.0.5_37760-us"
            },
            "name": {
              "en_US": "Overlord's Crimson Band",
            },
            "id": 19873
          }
        },
        {
          "item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/19912?namespace=static-9.0.5_37760-us"
            },
            "name": {
              "en_US": "Overlord's Onyx Band",
            },
            "id": 19912
          }
        }
      ],
      "effects": [
        {
          "display_string": {
            "en_US": "(2) Set: Increases your dodge by 4.",
          },
          "required_count": 2
        }
      ],
      "display_string": {
        "en_US": "Overlord's Resolution (0/2)",
      }
    },
    "level": {
      "value": 29,
      "display_string": {
        "en_US": "Item Level 29",
      }
    },
    "is_subclass_hidden": true
  },
  "purchase_quantity": 1
}