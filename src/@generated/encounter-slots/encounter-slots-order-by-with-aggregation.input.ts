import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { encounter_slotsCountOrderByAggregateInput } from './encounter-slots-count-order-by-aggregate.input';
import { encounter_slotsAvgOrderByAggregateInput } from './encounter-slots-avg-order-by-aggregate.input';
import { encounter_slotsMaxOrderByAggregateInput } from './encounter-slots-max-order-by-aggregate.input';
import { encounter_slotsMinOrderByAggregateInput } from './encounter-slots-min-order-by-aggregate.input';
import { encounter_slotsSumOrderByAggregateInput } from './encounter-slots-sum-order-by-aggregate.input';

@InputType()
export class encounter_slotsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    encounter_method_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slot?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rarity?: keyof typeof SortOrder;

    @Field(() => encounter_slotsCountOrderByAggregateInput, {nullable:true})
    _count?: encounter_slotsCountOrderByAggregateInput;

    @Field(() => encounter_slotsAvgOrderByAggregateInput, {nullable:true})
    _avg?: encounter_slotsAvgOrderByAggregateInput;

    @Field(() => encounter_slotsMaxOrderByAggregateInput, {nullable:true})
    _max?: encounter_slotsMaxOrderByAggregateInput;

    @Field(() => encounter_slotsMinOrderByAggregateInput, {nullable:true})
    _min?: encounter_slotsMinOrderByAggregateInput;

    @Field(() => encounter_slotsSumOrderByAggregateInput, {nullable:true})
    _sum?: encounter_slotsSumOrderByAggregateInput;
}
