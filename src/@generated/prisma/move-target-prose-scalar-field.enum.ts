import { registerEnumType } from '@nestjs/graphql';

export enum Move_target_proseScalarFieldEnum {
    move_target_id = "move_target_id",
    local_language_id = "local_language_id",
    name = "name",
    description = "description"
}


registerEnumType(Move_target_proseScalarFieldEnum, { name: 'Move_target_proseScalarFieldEnum', description: undefined })
