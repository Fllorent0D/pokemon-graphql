import { registerEnumType } from '@nestjs/graphql';

export enum Move_meta_category_proseScalarFieldEnum {
    move_meta_category_id = "move_meta_category_id",
    local_language_id = "local_language_id",
    description = "description"
}


registerEnumType(Move_meta_category_proseScalarFieldEnum, { name: 'Move_meta_category_proseScalarFieldEnum', description: undefined })
