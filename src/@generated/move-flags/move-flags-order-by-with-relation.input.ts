import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_flag_mapOrderByRelationAggregateInput } from '../move-flag-map/move-flag-map-order-by-relation-aggregate.input';
import { move_flag_proseOrderByRelationAggregateInput } from '../move-flag-prose/move-flag-prose-order-by-relation-aggregate.input';

@InputType()
export class move_flagsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => move_flag_mapOrderByRelationAggregateInput, {nullable:true})
    move_flag_map?: move_flag_mapOrderByRelationAggregateInput;

    @Field(() => move_flag_proseOrderByRelationAggregateInput, {nullable:true})
    move_flag_prose?: move_flag_proseOrderByRelationAggregateInput;
}
