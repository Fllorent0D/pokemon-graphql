import { registerEnumType } from '@nestjs/graphql';

export enum Item_category_proseScalarFieldEnum {
    item_category_id = "item_category_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Item_category_proseScalarFieldEnum, { name: 'Item_category_proseScalarFieldEnum', description: undefined })
