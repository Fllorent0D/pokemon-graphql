import { registerEnumType } from '@nestjs/graphql';

export enum Item_pocket_namesScalarFieldEnum {
    item_pocket_id = "item_pocket_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Item_pocket_namesScalarFieldEnum, { name: 'Item_pocket_namesScalarFieldEnum', description: undefined })
