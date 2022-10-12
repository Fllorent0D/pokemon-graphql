import { registerEnumType } from '@nestjs/graphql';

export enum Move_damage_class_proseScalarFieldEnum {
    move_damage_class_id = "move_damage_class_id",
    local_language_id = "local_language_id",
    name = "name",
    description = "description"
}


registerEnumType(Move_damage_class_proseScalarFieldEnum, { name: 'Move_damage_class_proseScalarFieldEnum', description: undefined })
