import { registerEnumType } from '@nestjs/graphql';

export enum Move_meta_ailment_namesScalarFieldEnum {
    move_meta_ailment_id = "move_meta_ailment_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Move_meta_ailment_namesScalarFieldEnum, { name: 'Move_meta_ailment_namesScalarFieldEnum', description: undefined })
