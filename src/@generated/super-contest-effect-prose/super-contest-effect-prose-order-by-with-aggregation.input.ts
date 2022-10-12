import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { super_contest_effect_proseCountOrderByAggregateInput } from './super-contest-effect-prose-count-order-by-aggregate.input';
import { super_contest_effect_proseAvgOrderByAggregateInput } from './super-contest-effect-prose-avg-order-by-aggregate.input';
import { super_contest_effect_proseMaxOrderByAggregateInput } from './super-contest-effect-prose-max-order-by-aggregate.input';
import { super_contest_effect_proseMinOrderByAggregateInput } from './super-contest-effect-prose-min-order-by-aggregate.input';
import { super_contest_effect_proseSumOrderByAggregateInput } from './super-contest-effect-prose-sum-order-by-aggregate.input';

@InputType()
export class super_contest_effect_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    super_contest_effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flavor_text?: keyof typeof SortOrder;

    @Field(() => super_contest_effect_proseCountOrderByAggregateInput, {nullable:true})
    _count?: super_contest_effect_proseCountOrderByAggregateInput;

    @Field(() => super_contest_effect_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: super_contest_effect_proseAvgOrderByAggregateInput;

    @Field(() => super_contest_effect_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: super_contest_effect_proseMaxOrderByAggregateInput;

    @Field(() => super_contest_effect_proseMinOrderByAggregateInput, {nullable:true})
    _min?: super_contest_effect_proseMinOrderByAggregateInput;

    @Field(() => super_contest_effect_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: super_contest_effect_proseSumOrderByAggregateInput;
}
