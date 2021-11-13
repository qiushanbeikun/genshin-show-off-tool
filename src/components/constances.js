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
    '风属性加成',
    '火属性加成',
    '水属性加成',
    '雷属性加成',
    '岩属性加成',
    '冰属性加成',
    '防御力百分比'];

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

const mapHelper = (list, level) => {
    let result = 0;
    for (let i=0; i<level; i++) {
        result += list[Math.floor(Math.random() * 3)];
    }
    return result;
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
            return (mapHelper(ENHANCE_RATES.atk_percent, level)).toFixed(1);
        case 5:
            return (mapHelper(ENHANCE_RATES.life_percent, level)).toFixed(1);
        case 6:
            return (mapHelper(ENHANCE_RATES.def_percent, level)).toFixed(1);
        case 7:
            return mapHelper(ENHANCE_RATES.ele_mastery, level);
        case 8:
            return (mapHelper(ENHANCE_RATES.charge_rate, level)).toFixed(1);
        case 9:
            return (mapHelper(ENHANCE_RATES.ctk_rate, level)).toFixed(1);
        case 10:
            return (mapHelper(ENHANCE_RATES.ctk_dmg, level)).toFixed(1);
        default:
            return -1
    }
}


