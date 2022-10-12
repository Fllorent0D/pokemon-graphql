import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_effect_changelogCountOrderByAggregateInput } from './move-effect-changelog-count-order-by-aggregate.input';
import { move_effect_changelogAvgOrderByAggregateInput } from './move-effect-changelog-avg-order-by-aggregate.input';
import { move_effect_changelogMaxOrderByAggregateInput } from './move-effect-changelog-max-order-by-aggregate.input';
import { move_effect_changelogMinOrderByAggregateInput } from './move-effect-changelog-min-order-by-aggregate.input';
import { move_effect_changelogSumOrderByAggregateInput } from './move-effect-changelog-sum-order-by-aggregate.input';

@InputType()
export class move_effect_changelogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    changed_in_version_group_id?: keyof typeof SortOrder;

    @Field(() => move_effect_changelogCountOrderByAggregateInput, {nullable:true})
    _count?: move_effect_changelogCountOrderByAggregateInput;

    @Field(() => move_effect_changelogAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_effect_changelogAvgOrderByAggregateInput;

    @Field(() => move_effect_changelogMaxOrderByAggregateInput, {nullable:true})
    _max?: move_effect_changelogMaxOrderByAggregateInput;

    @Field(() => move_effect_changelogMinOrderByAggregateInput, {nullable:true})
    _min?: move_effect_changelogMinOrderByAggregateInput;

    @Field(() => move_effect_changelogSumOrderByAggregateInput, {nullable:true})
    _sum?: move_effect_changelogSumOrderByAggregateInput;
}
