import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_fling_effect_proseOrderByRelationAggregateInput } from '../item-fling-effect-prose/item-fling-effect-prose-order-by-relation-aggregate.input';
import { itemsOrderByRelationAggregateInput } from '../items/items-order-by-relation-aggregate.input';

@InputType()
export class item_fling_effectsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => item_fling_effect_proseOrderByRelationAggregateInput, {nullable:true})
    item_fling_effect_prose?: item_fling_effect_proseOrderByRelationAggregateInput;

    @Field(() => itemsOrderByRelationAggregateInput, {nullable:true})
    items?: itemsOrderByRelationAggregateInput;
}
