/* eslint-disable space-before-function-paren */
/* eslint-disable */
import axios from 'axios';


const getResource = async (clientAuthToken) => {
  const searchQuerybase = "https://us.api.blizzard.com/data/wow/search/";
  const document = "item";
  const nameSpace = "?namespace=static-classic-us";
  const locale = "&locale=en_US";
  const field = "&item_class.name.en_US='Weapon'&_pageSize=5";
  // const field = "&item_class.name.en_US='Armor'&id=[1,100]&orderby=id";
  const searchQuery = `${searchQuerybase}${document}${nameSpace}${locale}${field}`;

  const resourceAxios = axios.create({
    baseURL: searchQuery,

    headers: {
      Authorization: `Bearer ${clientAuthToken}`,
    }
  });

  const response = await resourceAxios.get();
  return response.data;
};


// const searchQuery = `${searchQuerybase}${document}${nameSpace}${locale}&_pageSize=5`;
// use this data structure to make other searches: item_class item_subclass, inventory_type
const temp =
{
  "page": 1,
  "pageSize": 5,
  "maxPageSize": 5,
  "pageCount": 200,
  "resultCountCapped": true,
  "results": [{
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/item/11472?namespace=static-1.13.6_36670-classic-us"
    },
    "data": {
      "item_subclass": {
        "name": {
          "ru_RU": "Задания",
          "en_GB": "Quest",
          "zh_TW": "任務",
          "ko_KR": "퀘스트",
          "en_US": "Quest",
          "es_MX": "Misión",
          "pt_BR": "Missão",
          "es_ES": "Misión",
          "zh_CN": "任务",
          "fr_FR": "Quête",
          "de_DE": "Quest"
        }
      },
      "name": {
        "ru_RU": "Окорок среброгривого бродяги",
        "en_GB": "Silvermane Stalker Flank",
        "zh_TW": "銀鬃捕獵者的肉",
        "ko_KR": "긴발톱 은빛갈기늑대 갈비살",
        "en_US": "Silvermane Stalker Flank",
        "es_MX": "Costillar de acechador melenargenta",
        "pt_BR": "Lombo de Espreitador Jubaprata",
        "es_ES": "Costillas de acechador Melenargenta",
        "zh_CN": "银鬃捕猎者的肉",
        "fr_FR": "Flanc de Traqueur Crins-d'argent",
        "de_DE": "Silbermähnenpirscherflanke"
      },
      "id": 11472,
      "inventory_type": {
        "name": {
          "ru_RU": "Неэкипируемое",
          "en_GB": "Non-equippable",
          "zh_TW": "無法裝備",
          "ko_KR": "착용 불가",
          "en_US": "Non-equippable",
          "es_MX": "No equipable",
          "pt_BR": "Não equipável",
          "es_ES": "No se puede equipar",
          "zh_CN": "无法装备",
          "fr_FR": "Objet hors équipement",
          "de_DE": "Nicht anlegbar"
        },
        "type": "NON_EQUIP"
      },
      "item_class": {
        "name": {
          "ru_RU": "Задания",
          "en_GB": "Quest",
          "zh_TW": "任務",
          "ko_KR": "퀘스트",
          "en_US": "Quest",
          "es_MX": "Misión",
          "pt_BR": "Missão",
          "es_ES": "Misión",
          "zh_CN": "任务",
          "fr_FR": "Quête",
          "de_DE": "Quest"
        }
      }
    }
  }, {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/item/11928?namespace=static-1.13.6_36670-classic-us"
    },
    "data": {
      "item_subclass": {
        "name": {
          "ru_RU": "Разное",
          "en_GB": "Miscellaneous",
          "zh_TW": "其他",
          "ko_KR": "기타",
          "en_US": "Miscellaneous",
          "es_MX": "Miscelánea",
          "pt_BR": "Diversos",
          "es_ES": "Misceláneo",
          "zh_CN": "其它",
          "fr_FR": "Divers",
          "de_DE": "Verschiedenes"
        }
      },
      "name": {
        "ru_RU": "Тауриссанский королевский скипетр",
        "en_GB": "Thaurissan's Royal Scepter",
        "zh_TW": "索瑞森皇家節杖",
        "ko_KR": "제왕 타우릿산의 홀",
        "en_US": "Thaurissan's Royal Scepter",
        "es_MX": "Cetro real Thaurissan",
        "pt_BR": "Cetro Real de Thaurissan",
        "es_ES": "Cetro real Thaurissan",
        "zh_CN": "索瑞森皇家节杖",
        "fr_FR": "Sceptre royal de Thaurissan",
        "de_DE": "Thaurissans königliches Szepter"
      },
      "id": 11928,
      "inventory_type": {
        "name": {
          "ru_RU": "Левая рука",
          "en_GB": "Held In Off-hand",
          "zh_TW": "副手物品",
          "ko_KR": "보조장비",
          "en_US": "Held In Off-hand",
          "es_MX": "Sostener con la mano izquierda",
          "pt_BR": "Empunhado na mão secundária",
          "es_ES": "Sostener con la mano izquierda",
          "zh_CN": "副手物品",
          "fr_FR": "Tenu(e) en main gauche",
          "de_DE": "In Schildhand geführt"
        },
        "type": "HOLDABLE"
      },
      "item_class": {
        "name": {
          "ru_RU": "Доспехи",
          "en_GB": "Armor",
          "zh_TW": "護甲",
          "ko_KR": "방어구",
          "en_US": "Armor",
          "es_MX": "Armadura",
          "pt_BR": "Armadura",
          "es_ES": "Armadura",
          "zh_CN": "护甲",
          "fr_FR": "Armure",
          "de_DE": "Rüstung"
        }
      }
    }
  }, {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/item/11929?namespace=static-1.13.6_36670-classic-us"
    },
    "data": {
      "item_subclass": {
        "name": {
          "ru_RU": "Ткань",
          "en_GB": "Cloth",
          "zh_TW": "布甲",
          "ko_KR": "천",
          "en_US": "Cloth",
          "es_MX": "Tela",
          "pt_BR": "Tecido",
          "es_ES": "Tela",
          "zh_CN": "布甲",
          "fr_FR": "Tissu",
          "de_DE": "Stoff"
        }
      },
      "name": {
        "ru_RU": "Поножи Проклятого Призрака",
        "en_GB": "Haunting Specter Leggings",
        "zh_TW": "鬼靈護腿",
        "ko_KR": "절규하는 유령의 다리보호구",
        "en_US": "Haunting Specter Leggings",
        "es_MX": "Leotardos de espectro inquietante",
        "pt_BR": "Perneiras da Assombração",
        "es_ES": "Leotardos de espectro inquietante",
        "zh_CN": "鬼灵护腿",
        "fr_FR": "Jambières du spectre frappeur",
        "de_DE": "Spukende Schreckgespenst-Gamaschen"
      },
      "id": 11929,
      "inventory_type": {
        "name": {
          "ru_RU": "Ноги",
          "en_GB": "Legs",
          "zh_TW": "腿部",
          "ko_KR": "다리",
          "en_US": "Legs",
          "es_MX": "Piernas",
          "pt_BR": "Pernas",
          "es_ES": "Piernas",
          "zh_CN": "腿部",
          "fr_FR": "Jambes",
          "de_DE": "Beine"
        },
        "type": "LEGS"
      },
      "item_class": {
        "name": {
          "ru_RU": "Доспехи",
          "en_GB": "Armor",
          "zh_TW": "護甲",
          "ko_KR": "방어구",
          "en_US": "Armor",
          "es_MX": "Armadura",
          "pt_BR": "Armadura",
          "es_ES": "Armadura",
          "zh_CN": "护甲",
          "fr_FR": "Armure",
          "de_DE": "Rüstung"
        }
      }
    }
  }, {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/item/11672?namespace=static-1.13.6_36670-classic-us"
    },
    "data": {
      "item_subclass": {
        "name": {
          "ru_RU": "Задания",
          "en_GB": "Quest",
          "zh_TW": "任務",
          "ko_KR": "퀘스트",
          "en_US": "Quest",
          "es_MX": "Misión",
          "pt_BR": "Missão",
          "es_ES": "Misión",
          "zh_CN": "任务",
          "fr_FR": "Quête",
          "de_DE": "Quest"
        }
      },
      "name": {
        "en_GB": "[PH] Greater Arcane Amalgamation (SPI/FR)",
        "en_US": "[PH] Greater Arcane Amalgamation (SPI/FR)"
      },
      "id": 11672,
      "inventory_type": {
        "name": {
          "ru_RU": "Неэкипируемое",
          "en_GB": "Non-equippable",
          "zh_TW": "無法裝備",
          "ko_KR": "착용 불가",
          "en_US": "Non-equippable",
          "es_MX": "No equipable",
          "pt_BR": "Não equipável",
          "es_ES": "No se puede equipar",
          "zh_CN": "无法装备",
          "fr_FR": "Objet hors équipement",
          "de_DE": "Nicht anlegbar"
        },
        "type": "NON_EQUIP"
      },
      "item_class": {
        "name": {
          "ru_RU": "Задания",
          "en_GB": "Quest",
          "zh_TW": "任務",
          "ko_KR": "퀘스트",
          "en_US": "Quest",
          "es_MX": "Misión",
          "pt_BR": "Missão",
          "es_ES": "Misión",
          "zh_CN": "任务",
          "fr_FR": "Quête",
          "de_DE": "Quest"
        }
      }
    }
  }, {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/item/11930?namespace=static-1.13.6_36670-classic-us"
    },
    "data": {
      "item_subclass": {
        "name": {
          "ru_RU": "Ткань",
          "en_GB": "Cloth",
          "zh_TW": "布甲",
          "ko_KR": "천",
          "en_US": "Cloth",
          "es_MX": "Tela",
          "pt_BR": "Tecido",
          "es_ES": "Tela",
          "zh_CN": "布甲",
          "fr_FR": "Tissu",
          "de_DE": "Stoff"
        }
      },
      "name": {
        "ru_RU": "Новая накидка короля",
        "en_GB": "The Emperor's New Cape",
        "zh_TW": "皇帝的新斗篷",
        "ko_KR": "벌거벗은 임금님의 단망토",
        "en_US": "The Emperor's New Cape",
        "es_MX": "El nuevo manteo del emperador",
        "pt_BR": "A Capa Nova do Imperador",
        "es_ES": "El nuevo manteo del emperador",
        "zh_CN": "皇帝的新斗篷",
        "fr_FR": "La cape neuve de l'Empereur",
        "de_DE": "Des Kaisers neuer Umhang"
      },
      "id": 11930,
      "inventory_type": {
        "name": {
          "ru_RU": "Спина",
          "en_GB": "Back",
          "zh_TW": "背部",
          "ko_KR": "등",
          "en_US": "Back",
          "es_MX": "Espalda",
          "pt_BR": "Costas",
          "es_ES": "Atrás",
          "zh_CN": "背部",
          "fr_FR": "Dos",
          "de_DE": "Rücken"
        },
        "type": "CLOAK"
      },
      "item_class": {
        "name": {
          "ru_RU": "Доспехи",
          "en_GB": "Armor",
          "zh_TW": "護甲",
          "ko_KR": "방어구",
          "en_US": "Armor",
          "es_MX": "Armadura",
          "pt_BR": "Armadura",
          "es_ES": "Armadura",
          "zh_CN": "护甲",
          "fr_FR": "Armure",
          "de_DE": "Rüstung"
        }
      }
    }
  }]
}

// const searchQuery = `${searchQuerybase}${document}${nameSpace}${locale}&item_class.name.en_US="Weapon"&_pageSize=5`;
const temp2 =
{
  "page": 1,
  "pageSize": 5,
  "maxPageSize": 5,
  "pageCount": 200,
  "resultCountCapped": true,
  "results": [{
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/item/11907?namespace=static-1.13.6_36670-classic-us"
    },
    "data": {
      "item_subclass": {
        "name": {
          "en_US": "Axe",
        }
      },
      "name": {
        "en_US": "Beastslayer",
      },
      "id": 11907,
      "inventory_type": {
        "name": {
          "en_US": "Two-Hand",
        },
        "type": "TWOHWEAPON"
      },
      "item_class": {
        "name": {
          "en_US": "Weapon",
        }
      }
    }
  }]
}

const temp2Original =
{
  "page": 1,
  "pageSize": 5,
  "maxPageSize": 5,
  "pageCount": 200,
  "resultCountCapped": true,
  "results": [{
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/item/11907?namespace=static-1.13.6_36670-classic-us"
    },
    "data": {
      "item_subclass": {
        "name": {
          "ru_RU": "Топор",
          "en_GB": "Axe",
          "zh_TW": "斧",
          "ko_KR": "도끼",
          "en_US": "Axe",
          "es_MX": "Hacha",
          "pt_BR": "Machado",
          "es_ES": "Hacha",
          "zh_CN": "斧",
          "fr_FR": "Hache",
          "de_DE": "Axt"
        }
      },
      "name": {
        "ru_RU": "Зверобой",
        "en_GB": "Beastslayer",
        "zh_TW": "野獸斬殺者",
        "ko_KR": "야수잡이 도끼",
        "en_US": "Beastslayer",
        "es_MX": "Destripadora de bestias",
        "pt_BR": "Matador de Feras",
        "es_ES": "Destripador de bestias",
        "zh_CN": "野兽斩杀者",
        "fr_FR": "Tranche-bêtes",
        "de_DE": "Wildtiertöter"
      },
      "id": 11907,
      "inventory_type": {
        "name": {
          "ru_RU": "Двуручное",
          "en_GB": "Two-Hand",
          "zh_TW": "雙手",
          "ko_KR": "양손 장비",
          "en_US": "Two-Hand",
          "es_MX": "Dos manos",
          "pt_BR": "Duas mãos",
          "es_ES": "Dos manos",
          "zh_CN": "双手",
          "fr_FR": "Deux mains",
          "de_DE": "Zweihändig"
        },
        "type": "TWOHWEAPON"
      },
      "item_class": {
        "name": {
          "ru_RU": "Оружие",
          "en_GB": "Weapon",
          "zh_TW": "武器",
          "ko_KR": "무기",
          "en_US": "Weapon",
          "es_MX": "Arma",
          "pt_BR": "Arma",
          "es_ES": "Arma",
          "zh_CN": "武器",
          "fr_FR": "Arme",
          "de_DE": "Waffe"
        }
      }
    }
  }, {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/item/12322?namespace=static-1.13.6_36670-classic-us"
    },
    "data": {
      "item_subclass": {
        "name": {
          "ru_RU": "Посох",
          "en_GB": "Staff",
          "zh_TW": "法杖",
          "ko_KR": "지팡이",
          "en_US": "Staff",
          "es_MX": "Bastón",
          "pt_BR": "Cajado",
          "es_ES": "Bastón",
          "zh_CN": "法杖",
          "fr_FR": "Bâton",
          "de_DE": "Stab"
        }
      },
      "name": {
        "en_GB": "Monster - Staff, Green Feathered",
        "en_US": "Monster - Staff, Green Feathered"
      },
      "id": 12322,
      "inventory_type": {
        "name": {
          "ru_RU": "Двуручное",
          "en_GB": "Two-Hand",
          "zh_TW": "雙手",
          "ko_KR": "양손 장비",
          "en_US": "Two-Hand",
          "es_MX": "Dos manos",
          "pt_BR": "Duas mãos",
          "es_ES": "Dos manos",
          "zh_CN": "双手",
          "fr_FR": "Deux mains",
          "de_DE": "Zweihändig"
        },
        "type": "TWOHWEAPON"
      },
      "item_class": {
        "name": {
          "ru_RU": "Оружие",
          "en_GB": "Weapon",
          "zh_TW": "武器",
          "ko_KR": "무기",
          "en_US": "Weapon",
          "es_MX": "Arma",
          "pt_BR": "Arma",
          "es_ES": "Arma",
          "zh_CN": "武器",
          "fr_FR": "Arme",
          "de_DE": "Waffe"
        }
      }
    }
  }, {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/item/12304?namespace=static-1.13.6_36670-classic-us"
    },
    "data": {
      "item_subclass": {
        "name": {
          "ru_RU": "Меч",
          "en_GB": "Sword",
          "zh_TW": "劍",
          "ko_KR": "도검",
          "en_US": "Sword",
          "es_MX": "Espada",
          "pt_BR": "Espada",
          "es_ES": "Espada",
          "zh_CN": "剑",
          "fr_FR": "Epée",
          "de_DE": "Schwert"
        }
      },
      "name": {
        "en_GB": "Monster - Sword, Horde Broad Pointed",
        "en_US": "Monster - Sword, Horde Broad Pointed"
      },
      "id": 12304,
      "inventory_type": {
        "name": {
          "ru_RU": "Одноручное",
          "en_GB": "One-Hand",
          "zh_TW": "單手",
          "ko_KR": "한손 장비",
          "en_US": "One-Hand",
          "es_MX": "Una mano",
          "pt_BR": "Uma Mão",
          "es_ES": "Una mano",
          "zh_CN": "单手",
          "fr_FR": "À une main",
          "de_DE": "Einhändig"
        },
        "type": "WEAPON"
      },
      "item_class": {
        "name": {
          "ru_RU": "Оружие",
          "en_GB": "Weapon",
          "zh_TW": "武器",
          "ko_KR": "무기",
          "en_US": "Weapon",
          "es_MX": "Arma",
          "pt_BR": "Arma",
          "es_ES": "Arma",
          "zh_CN": "武器",
          "fr_FR": "Arme",
          "de_DE": "Waffe"
        }
      }
    }
  }, {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/item/12421?namespace=static-1.13.6_36670-classic-us"
    },
    "data": {
      "item_subclass": {
        "name": {
          "ru_RU": "Посох",
          "en_GB": "Staff",
          "zh_TW": "法杖",
          "ko_KR": "지팡이",
          "en_US": "Staff",
          "es_MX": "Bastón",
          "pt_BR": "Cajado",
          "es_ES": "Bastón",
          "zh_CN": "法杖",
          "fr_FR": "Bâton",
          "de_DE": "Stab"
        }
      },
      "name": {
        "en_GB": "Monster - Staff, White Jeweled",
        "en_US": "Monster - Staff, White Jeweled"
      },
      "id": 12421,
      "inventory_type": {
        "name": {
          "ru_RU": "Двуручное",
          "en_GB": "Two-Hand",
          "zh_TW": "雙手",
          "ko_KR": "양손 장비",
          "en_US": "Two-Hand",
          "es_MX": "Dos manos",
          "pt_BR": "Duas mãos",
          "es_ES": "Dos manos",
          "zh_CN": "双手",
          "fr_FR": "Deux mains",
          "de_DE": "Zweihändig"
        },
        "type": "TWOHWEAPON"
      },
      "item_class": {
        "name": {
          "ru_RU": "Оружие",
          "en_GB": "Weapon",
          "zh_TW": "武器",
          "ko_KR": "무기",
          "en_US": "Weapon",
          "es_MX": "Arma",
          "pt_BR": "Arma",
          "es_ES": "Arma",
          "zh_CN": "武器",
          "fr_FR": "Arme",
          "de_DE": "Waffe"
        }
      }
    }
  }, {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/item/12461?namespace=static-1.13.6_36670-classic-us"
    },
    "data": {
      "item_subclass": {
        "name": {
          "ru_RU": "Топор",
          "en_GB": "Axe",
          "zh_TW": "斧",
          "ko_KR": "도끼",
          "en_US": "Axe",
          "es_MX": "Hacha",
          "pt_BR": "Machado",
          "es_ES": "Hacha",
          "zh_CN": "斧",
          "fr_FR": "Hache",
          "de_DE": "Axt"
        }
      },
      "name": {
        "en_GB": "Monster - Axe, 2H Horde Brown Tombstone",
        "en_US": "Monster - Axe, 2H Horde Brown Tombstone"
      },
      "id": 12461,
      "inventory_type": {
        "name": {
          "ru_RU": "Двуручное",
          "en_GB": "Two-Hand",
          "zh_TW": "雙手",
          "ko_KR": "양손 장비",
          "en_US": "Two-Hand",
          "es_MX": "Dos manos",
          "pt_BR": "Duas mãos",
          "es_ES": "Dos manos",
          "zh_CN": "双手",
          "fr_FR": "Deux mains",
          "de_DE": "Zweihändig"
        },
        "type": "TWOHWEAPON"
      },
      "item_class": {
        "name": {
          "ru_RU": "Оружие",
          "en_GB": "Weapon",
          "zh_TW": "武器",
          "ko_KR": "무기",
          "en_US": "Weapon",
          "es_MX": "Arma",
          "pt_BR": "Arma",
          "es_ES": "Arma",
          "zh_CN": "武器",
          "fr_FR": "Arme",
          "de_DE": "Waffe"
        }
      }
    }
  }]
}

// const searchQuery = `${searchQuerybase}${document}${nameSpace}${locale}&item_class.name.en_US="Armor"&_pageSize=5`;

const temp3O =
{
  "page": 1,
  "pageSize": 5,
  "maxPageSize": 5,
  "pageCount": 200,
  "resultCountCapped": true,
  "results": [{
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/item/2635?namespace=static-1.13.6_36670-classic-us"
    },
    "data": {
      "item_subclass": {
        "name": {
          "en_US": "Mail",
        }
      },
      "name": {
        "en_US": "Loose Chain Belt",
      },
      "id": 2635,
      "inventory_type": {
        "name": {
          "en_US": "Waist",
        },
        "type": "WAIST"
      },
      "item_class": {
        "name": {
          "en_US": "Armor",
        }
      }
    }
  }]
}

const temp3Original =
{
  "page": 1,
  "pageSize": 5,
  "maxPageSize": 5,
  "pageCount": 200,
  "resultCountCapped": true,
  "results": [{
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/item/2635?namespace=static-1.13.6_36670-classic-us"
    },
    "data": {
      "item_subclass": {
        "name": {
          "ru_RU": "Кольчуга",
          "en_GB": "Mail",
          "zh_TW": "鎖甲",
          "ko_KR": "사슬",
          "en_US": "Mail",
          "es_MX": "Malla",
          "pt_BR": "Malha",
          "es_ES": "Mallas",
          "zh_CN": "锁甲",
          "fr_FR": "Mailles",
          "de_DE": "Schwere Rüstung"
        }
      },
      "name": {
        "ru_RU": "Разболтанный плетеный пояс",
        "en_GB": "Loose Chain Belt",
        "zh_TW": "寬鬆鍊甲腰帶",
        "ko_KR": "느슨한 사슬 허리띠",
        "en_US": "Loose Chain Belt",
        "es_MX": "Cinturón de anillas sueltas",
        "pt_BR": "Cinto Folgado Encadeado",
        "es_ES": "Cinturón de anillas sueltas",
        "zh_CN": "宽松链甲腰带",
        "fr_FR": "Ceinture en anneaux distendus",
        "de_DE": "Lockerer Kettengürtel"
      },
      "id": 2635,
      "inventory_type": {
        "name": {
          "ru_RU": "Пояс",
          "en_GB": "Waist",
          "zh_TW": "腰部",
          "ko_KR": "허리",
          "en_US": "Waist",
          "es_MX": "Cintura",
          "pt_BR": "Cintura",
          "es_ES": "Cintura",
          "zh_CN": "腰部",
          "fr_FR": "Taille",
          "de_DE": "Taille"
        },
        "type": "WAIST"
      },
      "item_class": {
        "name": {
          "ru_RU": "Доспехи",
          "en_GB": "Armor",
          "zh_TW": "護甲",
          "ko_KR": "방어구",
          "en_US": "Armor",
          "es_MX": "Armadura",
          "pt_BR": "Armadura",
          "es_ES": "Armadura",
          "zh_CN": "护甲",
          "fr_FR": "Armure",
          "de_DE": "Rüstung"
        }
      }
    }
  }, {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/item/2644?namespace=static-1.13.6_36670-classic-us"
    },
    "data": {
      "item_subclass": {
        "name": {
          "ru_RU": "Ткань",
          "en_GB": "Cloth",
          "zh_TW": "布甲",
          "ko_KR": "천",
          "en_US": "Cloth",
          "es_MX": "Tela",
          "pt_BR": "Tecido",
          "es_ES": "Tela",
          "zh_CN": "布甲",
          "fr_FR": "Tissu",
          "de_DE": "Stoff"
        }
      },
      "name": {
        "ru_RU": "Разболтанный плетеный плащ",
        "en_GB": "Loose Chain Cloak",
        "zh_TW": "寬鬆鍊甲披風",
        "ko_KR": "느슨한 사슬 망토",
        "en_US": "Loose Chain Cloak",
        "es_MX": "Capa de anillas sueltas",
        "pt_BR": "Manto Folgado Encadeado",
        "es_ES": "Capa de anillas sueltas",
        "zh_CN": "宽松链甲披风",
        "fr_FR": "Cape en anneaux distendus",
        "de_DE": "Lockerer Kettenumhang"
      },
      "id": 2644,
      "inventory_type": {
        "name": {
          "ru_RU": "Спина",
          "en_GB": "Back",
          "zh_TW": "背部",
          "ko_KR": "등",
          "en_US": "Back",
          "es_MX": "Espalda",
          "pt_BR": "Costas",
          "es_ES": "Atrás",
          "zh_CN": "背部",
          "fr_FR": "Dos",
          "de_DE": "Rücken"
        },
        "type": "CLOAK"
      },
      "item_class": {
        "name": {
          "ru_RU": "Доспехи",
          "en_GB": "Armor",
          "zh_TW": "護甲",
          "ko_KR": "방어구",
          "en_US": "Armor",
          "es_MX": "Armadura",
          "pt_BR": "Armadura",
          "es_ES": "Armadura",
          "zh_CN": "护甲",
          "fr_FR": "Armure",
          "de_DE": "Rüstung"
        }
      }
    }
  }, {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/item/2643?namespace=static-1.13.6_36670-classic-us"
    },
    "data": {
      "item_subclass": {
        "name": {
          "ru_RU": "Кольчуга",
          "en_GB": "Mail",
          "zh_TW": "鎖甲",
          "ko_KR": "사슬",
          "en_US": "Mail",
          "es_MX": "Malla",
          "pt_BR": "Malha",
          "es_ES": "Mallas",
          "zh_CN": "锁甲",
          "fr_FR": "Mailles",
          "de_DE": "Schwere Rüstung"
        }
      },
      "name": {
        "ru_RU": "Разболтанные плетеные наручи",
        "en_GB": "Loose Chain Bracers",
        "zh_TW": "寬鬆鍊甲護腕",
        "ko_KR": "느슨한 사슬 팔보호구",
        "en_US": "Loose Chain Bracers",
        "es_MX": "Brazales de anillas sueltas",
        "pt_BR": "Braçadeiras Folgadas Encadeadas",
        "es_ES": "Brazales de anillas sueltas",
        "zh_CN": "宽松链甲护腕",
        "fr_FR": "Brassards en anneaux distendus",
        "de_DE": "Lockere Kettenarmschienen"
      },
      "id": 2643,
      "inventory_type": {
        "name": {
          "ru_RU": "Запястья",
          "en_GB": "Wrist",
          "zh_TW": "手腕",
          "ko_KR": "손목",
          "en_US": "Wrist",
          "es_MX": "Muñeca",
          "pt_BR": "Pulsos",
          "es_ES": "Muñeca",
          "zh_CN": "手腕",
          "fr_FR": "Poignets",
          "de_DE": "Handgelenke"
        },
        "type": "WRIST"
      },
      "item_class": {
        "name": {
          "ru_RU": "Доспехи",
          "en_GB": "Armor",
          "zh_TW": "護甲",
          "ko_KR": "방어구",
          "en_US": "Armor",
          "es_MX": "Armadura",
          "pt_BR": "Armadura",
          "es_ES": "Armadura",
          "zh_CN": "护甲",
          "fr_FR": "Armure",
          "de_DE": "Rüstung"
        }
      }
    }
  }, {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/item/2645?namespace=static-1.13.6_36670-classic-us"
    },
    "data": {
      "item_subclass": {
        "name": {
          "ru_RU": "Кольчуга",
          "en_GB": "Mail",
          "zh_TW": "鎖甲",
          "ko_KR": "사슬",
          "en_US": "Mail",
          "es_MX": "Malla",
          "pt_BR": "Malha",
          "es_ES": "Mallas",
          "zh_CN": "锁甲",
          "fr_FR": "Mailles",
          "de_DE": "Schwere Rüstung"
        }
      },
      "name": {
        "ru_RU": "Разболтанные плетеные перчатки",
        "en_GB": "Loose Chain Gloves",
        "zh_TW": "寬鬆鍊甲手套",
        "ko_KR": "느슨한 사슬 장갑",
        "en_US": "Loose Chain Gloves",
        "es_MX": "Guantes de anillas sueltas",
        "pt_BR": "Luvas Folgadas Encadeadas",
        "es_ES": "Guantes de anillas sueltas",
        "zh_CN": "宽松链甲手套",
        "fr_FR": "Gants en anneaux distendus",
        "de_DE": "Lockere Kettenhandschuhe"
      },
      "id": 2645,
      "inventory_type": {
        "name": {
          "ru_RU": "Кисти рук",
          "en_GB": "Hands",
          "zh_TW": "手",
          "ko_KR": "손",
          "en_US": "Hands",
          "es_MX": "Manos",
          "pt_BR": "Mãos",
          "es_ES": "Manos",
          "zh_CN": "手",
          "fr_FR": "Mains",
          "de_DE": "Hände"
        },
        "type": "HAND"
      },
      "item_class": {
        "name": {
          "ru_RU": "Доспехи",
          "en_GB": "Armor",
          "zh_TW": "護甲",
          "ko_KR": "방어구",
          "en_US": "Armor",
          "es_MX": "Armadura",
          "pt_BR": "Armadura",
          "es_ES": "Armadura",
          "zh_CN": "护甲",
          "fr_FR": "Armure",
          "de_DE": "Rüstung"
        }
      }
    }
  }, {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/item/2648?namespace=static-1.13.6_36670-classic-us"
    },
    "data": {
      "item_subclass": {
        "name": {
          "ru_RU": "Кольчуга",
          "en_GB": "Mail",
          "zh_TW": "鎖甲",
          "ko_KR": "사슬",
          "en_US": "Mail",
          "es_MX": "Malla",
          "pt_BR": "Malha",
          "es_ES": "Mallas",
          "zh_CN": "锁甲",
          "fr_FR": "Mailles",
          "de_DE": "Schwere Rüstung"
        }
      },
      "name": {
        "ru_RU": "Разболтанный плетеный нагрудник",
        "en_GB": "Loose Chain Vest",
        "zh_TW": "寬鬆鍊甲外衣",
        "ko_KR": "느슨한 사슬 조끼",
        "en_US": "Loose Chain Vest",
        "es_MX": "Jubón de anillas sueltas",
        "pt_BR": "Colete Folgado Encadeado",
        "es_ES": "Jubón de anillas sueltas",
        "zh_CN": "宽松链甲外衣",
        "fr_FR": "Lorica distendue",
        "de_DE": "Lockere Kettenweste"
      },
      "id": 2648,
      "inventory_type": {
        "name": {
          "ru_RU": "Грудь",
          "en_GB": "Chest",
          "zh_TW": "胸部",
          "ko_KR": "가슴",
          "en_US": "Chest",
          "es_MX": "Pecho",
          "pt_BR": "Torso",
          "es_ES": "Pecho",
          "zh_CN": "胸部",
          "fr_FR": "Torse",
          "de_DE": "Brust"
        },
        "type": "CHEST"
      },
      "item_class": {
        "name": {
          "ru_RU": "Доспехи",
          "en_GB": "Armor",
          "zh_TW": "護甲",
          "ko_KR": "방어구",
          "en_US": "Armor",
          "es_MX": "Armadura",
          "pt_BR": "Armadura",
          "es_ES": "Armadura",
          "zh_CN": "护甲",
          "fr_FR": "Armure",
          "de_DE": "Rüstung"
        }
      }
    }
  }]
}


export default getResource;