import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_flag_mapOrderByRelationAggregateInput } from '../item-flag-map/item-flag-map-order-by-relation-aggregate.input';
import { item_flag_proseOrderByRelationAggregateInput } from '../item-flag-prose/item-flag-prose-order-by-relation-aggregate.input';

@InputType()
export class item_flagsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => item_flag_mapOrderByRelationAggregateInput, {nullable:true})
    item_flag_map?: item_flag_mapOrderByRelationAggregateInput;

    @Field(() => item_flag_proseOrderByRelationAggregateInput, {nullable:true})
    item_flag_prose?: item_flag_proseOrderByRelationAggregateInput;
}
