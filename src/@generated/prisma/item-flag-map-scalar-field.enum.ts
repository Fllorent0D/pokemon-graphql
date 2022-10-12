import { registerEnumType } from '@nestjs/graphql';

export enum Item_flag_mapScalarFieldEnum {
    item_id = "item_id",
    item_flag_id = "item_flag_id"
}


registerEnumType(Item_flag_mapScalarFieldEnum, { name: 'Item_flag_mapScalarFieldEnum', description: undefined })
