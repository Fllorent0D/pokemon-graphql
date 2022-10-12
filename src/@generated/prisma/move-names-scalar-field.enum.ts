import { registerEnumType } from '@nestjs/graphql';

export enum Move_namesScalarFieldEnum {
    move_id = "move_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Move_namesScalarFieldEnum, { name: 'Move_namesScalarFieldEnum', description: undefined })
