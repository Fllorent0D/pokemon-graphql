import { registerEnumType } from '@nestjs/graphql';

export enum Item_flag_proseScalarFieldEnum {
    item_flag_id = "item_flag_id",
    local_language_id = "local_language_id",
    name = "name",
    description = "description"
}


registerEnumType(Item_flag_proseScalarFieldEnum, { name: 'Item_flag_proseScalarFieldEnum', description: undefined })
