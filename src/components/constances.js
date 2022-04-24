export const MAIN_PROP_TYPES = ['生命值',
    '生命值百分比',
    '攻击力',
    '攻击力百分比',
    '元素精通',
    '元素充能效率',
    '风属性加成',
    '火属性加成',
    '水属性加成',
    '雷属性加成',
    '岩属性加成',
    '冰属性加成',
    '治疗加成',
    '防御力',
    '防御力百分比',
    '暴击率',
    '暴击伤害'];

export const FLOWER_CONSTRAINT = ['生命值'];

export const FEATHER_CONSTRAINT = ['攻击力'];

export const SANDGLASS_CONSTRAINT = [
    '攻击力百分比',
    '元素精通',
    '生命值百分比',
    '元素充能效率',
    '防御力百分比'];

export const GOBLET_CONSTRAINT = [
    '攻击力百分比',
    '元素精通',
    '生命值',
    '风元素伤害加成',
    '火元素伤害加成',
    '水元素伤害加成',
    '雷元素伤害加成',
    '岩元素伤害加成',
    '冰元素伤害加成',
    '物理伤害加成',
    '防御力'];

export const CROWN_CONSTRAINT = [
    '治疗加成',
    '防御力百分比',
    '暴击率',
    '暴击伤害',
    '攻击力百分比',
    '元素精通',];

export const VICE_PROP_TYPE = [
    '攻击力',
    '生命值',
    '防御力',
    '攻击力百分比',
    '生命值百分比',
    '防御力百分比',
    '元素精通',
    '元素充能效率',
    '暴击率',
    '暴击伤害'];


export const POSITION = {
    'flower': '生之花',
    'feather': '死之羽',
    'sandglass': '时之沙',
    'goblet': '空之杯',
    'crown': '理之冠'
}

export const MAIN_PROP_RATE = {
    "攻击力百分比": '46.6%',
    '攻击力': '311',
    '元素精通': '187',
    '生命值': '4780',
    '生命值百分比': '46.6%',
    '风元素伤害加成': '46.6%',
    '火元素伤害加成': '46.6%',
    '水元素伤害加成': '46.6%',
    '雷元素伤害加成': '46.6%',
    '岩元素伤害加成': '46.6%',
    '冰元素伤害加成': '46.6%',
    '物理伤害加成': '58.3%',
    '防御力': '58.3%',
    '暴击率': '31.1%',
    '暴击伤害': '62.2%',
    '治疗加成': '35.9%',
    '元素充能效率': '51.8%',
}

export const ARTIFACT_NAMES = {
    'flower': '明威之镡',
    'feather': '切落之羽',
    'sandglass': '雷云之笼',
    'goblet': '绯花之壶',
    'crown': '华饰之兜',
}

const display_languages = {
    'zh-cn': {

        'MAIN_PROP_TYPES': ['生命值',
            '生命值百分比',
            '攻击力',
            '攻击力百分比',
            '元素精通',
            '元素充能效率',
            '风属性加成',
            '火属性加成',
            '水属性加成',
            '雷属性加成',
            '岩属性加成',
            '冰属性加成',
            '物理伤害加成',
            '治疗加成',
            '防御力',
            '防御力百分比',
            '暴击率',
            '暴击伤害'],

        'FLOWER_CONSTRAINT': ['生命值'],

        'FEATHER_CONSTRAINT': ['攻击力'],

        'SANDGLASS_CONSTRAINT': [
            '攻击力百分比',
            '元素精通',
            '生命值百分比',
            '元素充能效率',
            '防御力百分比'],

        'CROWN_CONSTRAINT': [
            '治疗加成',
            '防御力百分比',
            '暴击率',
            '暴击伤害',
            '攻击力百分比',
            '元素精通',],

        'GOBLET_CONSTRAINT': [
            '攻击力百分比',
            '元素精通',
            '生命值',
            '风元素伤害加成',
            '火元素伤害加成',
            '水元素伤害加成',
            '雷元素伤害加成',
            '岩元素伤害加成',
            '冰元素伤害加成',
            '物理伤害加成',
            '防御力'],

        'VICE_PROP_TYPE': [
            '攻击力',
            '生命值',
            '防御力',
            '攻击力百分比',
            '生命值百分比',
            '防御力百分比',
            '元素精通',
            '元素充能效率',
            '暴击率',
            '暴击伤害'],

        'MAIN_PROP_RATE': {
            "攻击力百分比": '46.6%',
            '攻击力': '311',
            '元素精通': '187',
            '生命值': '4780',
            '生命值百分比': '46.6%',
            '风元素伤害加成': '46.6%',
            '火元素伤害加成': '46.6%',
            '水元素伤害加成': '46.6%',
            '雷元素伤害加成': '46.6%',
            '岩元素伤害加成': '46.6%',
            '冰元素伤害加成': '46.6%',
            '物理伤害加成': '58.3%',
            '防御力': '58.3%',
            '暴击率': '31.1%',
            '暴击伤害': '62.2%',
            '治疗加成': '35.9%',
            '元素充能效率': '51.8%',
        },

        'ARTIFACT_NAMES':

            {
                'flower': '明威之镡',
                'feather': '切落之羽',
                'sandglass': '雷云之笼',
                'goblet': '绯花之壶',
                'crown': '华饰之兜',
            }

    },
    'en-us': {

        'MAIN_PROP_TYPES': ['HP',
            'HP %',
            'ATK',
            'ATK %',
            'Elemental Mastery',
            'Energy Recharge',
            'Anemo DMG Bonus',
            'Pyro DMG Bouns',
            'Hydro DMG Bouns',
            'Electro DMG Bouns',
            'Geo DMG Bonus',
            'Cryo DMG Bouns',
            'Physical DMG Bouns',
            'Healing Bonus',
            'DEF',
            'DEF %',
            'CRIT Rate',
            'CRIT DMG'],

        'FLOWER_CONSTRAINT': ['HP'],

        'FEATHER_CONSTRAINT': ['ATK'],

        'SANDGLASS_CONSTRAINT': [
            'ATK %',
            'Elemental Mastery',
            'HP %',
            'Energy Recharge',
            'DEF %'],

        'CROWN_CONSTRAINT': [
            'Healing Bonus',
            'DEF %',
            'CRIT Rate',
            'CRIT DMG',
            'ATK %',
            'Elemental Mastery',],

        'GOBLET_CONSTRAINT': [
            'ATK %',
            'Elemental Mastery',
            'HP',
            'Anemo DMG Bonus',
            'Pyro DMG Bouns',
            'Hydro DMG Bouns',
            'Electro DMG Bouns',
            'Geo DMG Bonus',
            'Cryo DMG Bouns',
            'Physical DMG Bouns',
            'DEF'],

        'VICE_PROP_TYPE': [
            'ATK',
            'HP',
            'DEF',
            'ATK %',
            'HP %',
            'DEF %',
            'Elemental Mastery',
            'Energy Recharge',
            'CRIT Rate',
            'CRIT DMG'],

        'MAIN_PROP_RATE': {
            "ATK %": '46.6%',
            'ATK': '311',
            'Elemental Mastery': '187',
            'HP': '4780',
            'HP %': '46.6%',
            'Anemo DMG Bonus': '46.6%',
            'Pyro DMG Bouns': '46.6%',
            'Hydro DMG Bouns': '46.6%',
            'Electro DMG Bouns': '46.6%',
            'Geo DMG Bonus': '46.6%',
            'Cryo DMG Bouns': '46.6%',
            'Physical DMG Bouns': '58.3%',
            'DEF': '58.3%',
            'CRIT Rate': '31.1%',
            'CRIT DMG': '62.2%',
            'Healing Bonus': '35.9%',
            'Energy Recharge': '51.8%',
        },

        'ARTIFACT_NAMES':

            {
                'flower': 'Magnificient Tsuba',
                'feather': 'Sundered Feather',
                'sandglass': 'Storm Cage',
                'goblet': 'Forest Waved Dignity',
                'crown': 'Ornate Kabuto',
            }
    }
}

const mapHelper = (list, level) => {
    let result = 0;
    for (let i = 0; i < level; i++) {
        result += list[Math.floor(Math.random() * 3)];
    }
    return result;
}

// values shard by both chin and eng

export const ENHANCE_RATES = {
    'atk_num': [14, 16, 18, 19],
    'life_num': [209, 239, 269, 299],
    'def_num': [16, 19, 21, 23],
    'atk_percent': [4.1, 4.7, 5.3, 5.8],
    'life_percent': [4.1, 4.7, 5.4, 5.8],
    'def_percent': [5.1, 5.8, 6.6, 7.3],
    'ele_mastery': [16, 19, 21, 23],
    'charge_rate': [4.5, 5.2, 5.8, 6.5],
    'ctk_rate': [2.7, 3.1, 3.5, 3.9],
    'ctk_dmg': [5.4, 6.2, 7.0, 7.8],
}

export const calculateEnhancement = (prop, level) => {
    switch (prop) {
        case 1:
            return mapHelper(ENHANCE_RATES.atk_num, level);
        case 2:
            return mapHelper(ENHANCE_RATES.life_num, level);
        case 3:
            return mapHelper(ENHANCE_RATES.def_num, level);
        case 4:
            return (mapHelper(ENHANCE_RATES.atk_percent, level)).toFixed(1) + '%';
        case 5:
            return (mapHelper(ENHANCE_RATES.life_percent, level)).toFixed(1) + '%';
        case 6:
            return (mapHelper(ENHANCE_RATES.def_percent, level)).toFixed(1) + '%';
        case 7:
            return mapHelper(ENHANCE_RATES.ele_mastery, level);
        case 8:
            return (mapHelper(ENHANCE_RATES.charge_rate, level)).toFixed(1) + '%';
        case 9:
            return (mapHelper(ENHANCE_RATES.ctk_rate, level)).toFixed(1) + '%';
        case 10:
            return (mapHelper(ENHANCE_RATES.ctk_dmg, level)).toFixed(1) + '%';
        default:
            return -1
    }
}

export const propTypeCondenser = (prop) => {
    return (prop.includes('百分比') ? prop.replace('百分比', '') : prop)
}



