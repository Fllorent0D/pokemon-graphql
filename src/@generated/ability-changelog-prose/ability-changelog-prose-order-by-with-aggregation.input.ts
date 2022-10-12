import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ability_changelog_proseCountOrderByAggregateInput } from './ability-changelog-prose-count-order-by-aggregate.input';
import { ability_changelog_proseAvgOrderByAggregateInput } from './ability-changelog-prose-avg-order-by-aggregate.input';
import { ability_changelog_proseMaxOrderByAggregateInput } from './ability-changelog-prose-max-order-by-aggregate.input';
import { ability_changelog_proseMinOrderByAggregateInput } from './ability-changelog-prose-min-order-by-aggregate.input';
import { ability_changelog_proseSumOrderByAggregateInput } from './ability-changelog-prose-sum-order-by-aggregate.input';

@InputType()
export class ability_changelog_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    ability_changelog_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect?: keyof typeof SortOrder;

    @Field(() => ability_changelog_proseCountOrderByAggregateInput, {nullable:true})
    _count?: ability_changelog_proseCountOrderByAggregateInput;

    @Field(() => ability_changelog_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: ability_changelog_proseAvgOrderByAggregateInput;

    @Field(() => ability_changelog_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: ability_changelog_proseMaxOrderByAggregateInput;

    @Field(() => ability_changelog_proseMinOrderByAggregateInput, {nullable:true})
    _min?: ability_changelog_proseMinOrderByAggregateInput;

    @Field(() => ability_changelog_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: ability_changelog_proseSumOrderByAggregateInput;
}
