import { registerEnumType } from '@nestjs/graphql';

export enum Nature_battle_style_preferencesScalarFieldEnum {
    nature_id = "nature_id",
    move_battle_style_id = "move_battle_style_id",
    low_hp_preference = "low_hp_preference",
    high_hp_preference = "high_hp_preference"
}


registerEnumType(Nature_battle_style_preferencesScalarFieldEnum, { name: 'Nature_battle_style_preferencesScalarFieldEnum', description: undefined })
