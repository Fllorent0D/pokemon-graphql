import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_metaCountOrderByAggregateInput } from './move-meta-count-order-by-aggregate.input';
import { move_metaAvgOrderByAggregateInput } from './move-meta-avg-order-by-aggregate.input';
import { move_metaMaxOrderByAggregateInput } from './move-meta-max-order-by-aggregate.input';
import { move_metaMinOrderByAggregateInput } from './move-meta-min-order-by-aggregate.input';
import { move_metaSumOrderByAggregateInput } from './move-meta-sum-order-by-aggregate.input';

@InputType()
export class move_metaOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    meta_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    meta_ailment_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    min_hits?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_hits?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    min_turns?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_turns?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recoil?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    healing?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    crit_rate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ailment_chance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flinch_chance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stat_chance?: keyof typeof SortOrder;

    @Field(() => move_metaCountOrderByAggregateInput, {nullable:true})
    _count?: move_metaCountOrderByAggregateInput;

    @Field(() => move_metaAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_metaAvgOrderByAggregateInput;

    @Field(() => move_metaMaxOrderByAggregateInput, {nullable:true})
    _max?: move_metaMaxOrderByAggregateInput;

    @Field(() => move_metaMinOrderByAggregateInput, {nullable:true})
    _min?: move_metaMinOrderByAggregateInput;

    @Field(() => move_metaSumOrderByAggregateInput, {nullable:true})
    _sum?: move_metaSumOrderByAggregateInput;
}
