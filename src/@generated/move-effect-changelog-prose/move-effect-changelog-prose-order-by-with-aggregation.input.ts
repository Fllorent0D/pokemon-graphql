import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_effect_changelog_proseCountOrderByAggregateInput } from './move-effect-changelog-prose-count-order-by-aggregate.input';
import { move_effect_changelog_proseAvgOrderByAggregateInput } from './move-effect-changelog-prose-avg-order-by-aggregate.input';
import { move_effect_changelog_proseMaxOrderByAggregateInput } from './move-effect-changelog-prose-max-order-by-aggregate.input';
import { move_effect_changelog_proseMinOrderByAggregateInput } from './move-effect-changelog-prose-min-order-by-aggregate.input';
import { move_effect_changelog_proseSumOrderByAggregateInput } from './move-effect-changelog-prose-sum-order-by-aggregate.input';

@InputType()
export class move_effect_changelog_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    move_effect_changelog_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect?: keyof typeof SortOrder;

    @Field(() => move_effect_changelog_proseCountOrderByAggregateInput, {nullable:true})
    _count?: move_effect_changelog_proseCountOrderByAggregateInput;

    @Field(() => move_effect_changelog_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_effect_changelog_proseAvgOrderByAggregateInput;

    @Field(() => move_effect_changelog_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: move_effect_changelog_proseMaxOrderByAggregateInput;

    @Field(() => move_effect_changelog_proseMinOrderByAggregateInput, {nullable:true})
    _min?: move_effect_changelog_proseMinOrderByAggregateInput;

    @Field(() => move_effect_changelog_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: move_effect_changelog_proseSumOrderByAggregateInput;
}
