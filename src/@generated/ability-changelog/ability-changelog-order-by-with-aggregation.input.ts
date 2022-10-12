import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ability_changelogCountOrderByAggregateInput } from './ability-changelog-count-order-by-aggregate.input';
import { ability_changelogAvgOrderByAggregateInput } from './ability-changelog-avg-order-by-aggregate.input';
import { ability_changelogMaxOrderByAggregateInput } from './ability-changelog-max-order-by-aggregate.input';
import { ability_changelogMinOrderByAggregateInput } from './ability-changelog-min-order-by-aggregate.input';
import { ability_changelogSumOrderByAggregateInput } from './ability-changelog-sum-order-by-aggregate.input';

@InputType()
export class ability_changelogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ability_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    changed_in_version_group_id?: keyof typeof SortOrder;

    @Field(() => ability_changelogCountOrderByAggregateInput, {nullable:true})
    _count?: ability_changelogCountOrderByAggregateInput;

    @Field(() => ability_changelogAvgOrderByAggregateInput, {nullable:true})
    _avg?: ability_changelogAvgOrderByAggregateInput;

    @Field(() => ability_changelogMaxOrderByAggregateInput, {nullable:true})
    _max?: ability_changelogMaxOrderByAggregateInput;

    @Field(() => ability_changelogMinOrderByAggregateInput, {nullable:true})
    _min?: ability_changelogMinOrderByAggregateInput;

    @Field(() => ability_changelogSumOrderByAggregateInput, {nullable:true})
    _sum?: ability_changelogSumOrderByAggregateInput;
}
