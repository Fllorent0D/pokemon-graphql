import { registerEnumType } from '@nestjs/graphql';

export enum Move_battle_style_proseScalarFieldEnum {
    move_battle_style_id = "move_battle_style_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Move_battle_style_proseScalarFieldEnum, { name: 'Move_battle_style_proseScalarFieldEnum', description: undefined })
