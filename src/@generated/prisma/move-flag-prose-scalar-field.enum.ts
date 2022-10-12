import { registerEnumType } from '@nestjs/graphql';

export enum Move_flag_proseScalarFieldEnum {
    move_flag_id = "move_flag_id",
    local_language_id = "local_language_id",
    name = "name",
    description = "description"
}


registerEnumType(Move_flag_proseScalarFieldEnum, { name: 'Move_flag_proseScalarFieldEnum', description: undefined })
