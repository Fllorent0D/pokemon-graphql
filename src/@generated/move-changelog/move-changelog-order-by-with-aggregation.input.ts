import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_changelogCountOrderByAggregateInput } from './move-changelog-count-order-by-aggregate.input';
import { move_changelogAvgOrderByAggregateInput } from './move-changelog-avg-order-by-aggregate.input';
import { move_changelogMaxOrderByAggregateInput } from './move-changelog-max-order-by-aggregate.input';
import { move_changelogMinOrderByAggregateInput } from './move-changelog-min-order-by-aggregate.input';
import { move_changelogSumOrderByAggregateInput } from './move-changelog-sum-order-by-aggregate.input';

@InputType()
export class move_changelogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    changed_in_version_group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect_chance?: keyof typeof SortOrder;

    @Field(() => move_changelogCountOrderByAggregateInput, {nullable:true})
    _count?: move_changelogCountOrderByAggregateInput;

    @Field(() => move_changelogAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_changelogAvgOrderByAggregateInput;

    @Field(() => move_changelogMaxOrderByAggregateInput, {nullable:true})
    _max?: move_changelogMaxOrderByAggregateInput;

    @Field(() => move_changelogMinOrderByAggregateInput, {nullable:true})
    _min?: move_changelogMinOrderByAggregateInput;

    @Field(() => move_changelogSumOrderByAggregateInput, {nullable:true})
    _sum?: move_changelogSumOrderByAggregateInput;
}
