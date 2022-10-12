import { registerEnumType } from '@nestjs/graphql';

export enum Item_fling_effect_proseScalarFieldEnum {
    item_fling_effect_id = "item_fling_effect_id",
    local_language_id = "local_language_id",
    effect = "effect"
}


registerEnumType(Item_fling_effect_proseScalarFieldEnum, { name: 'Item_fling_effect_proseScalarFieldEnum', description: undefined })
