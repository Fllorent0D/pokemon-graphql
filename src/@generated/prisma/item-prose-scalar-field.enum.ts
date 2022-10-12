import { registerEnumType } from '@nestjs/graphql';

export enum Item_proseScalarFieldEnum {
    item_id = "item_id",
    local_language_id = "local_language_id",
    short_effect = "short_effect",
    effect = "effect"
}


registerEnumType(Item_proseScalarFieldEnum, { name: 'Item_proseScalarFieldEnum', description: undefined })
