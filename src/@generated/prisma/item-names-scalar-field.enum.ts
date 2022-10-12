import { registerEnumType } from '@nestjs/graphql';

export enum Item_namesScalarFieldEnum {
    item_id = "item_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Item_namesScalarFieldEnum, { name: 'Item_namesScalarFieldEnum', description: undefined })
