import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { item_fling_effect_prose } from '../item-fling-effect-prose/item-fling-effect-prose.model';
import { items } from '../items/items.model';
import { Item_fling_effectsCount } from '../prisma/item-fling-effects-count.output';

@ObjectType()
export class item_fling_effects {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => [item_fling_effect_prose], {nullable:true})
    item_fling_effect_prose?: Array<item_fling_effect_prose>;

    @Field(() => [items], {nullable:true})
    items?: Array<items>;

    @Field(() => Item_fling_effectsCount, {nullable:false})
    _count?: Item_fling_effectsCount;
}
