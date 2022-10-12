import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { contest_effect_proseCountOrderByAggregateInput } from './contest-effect-prose-count-order-by-aggregate.input';
import { contest_effect_proseAvgOrderByAggregateInput } from './contest-effect-prose-avg-order-by-aggregate.input';
import { contest_effect_proseMaxOrderByAggregateInput } from './contest-effect-prose-max-order-by-aggregate.input';
import { contest_effect_proseMinOrderByAggregateInput } from './contest-effect-prose-min-order-by-aggregate.input';
import { contest_effect_proseSumOrderByAggregateInput } from './contest-effect-prose-sum-order-by-aggregate.input';

@InputType()
export class contest_effect_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    contest_effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flavor_text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect?: keyof typeof SortOrder;

    @Field(() => contest_effect_proseCountOrderByAggregateInput, {nullable:true})
    _count?: contest_effect_proseCountOrderByAggregateInput;

    @Field(() => contest_effect_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: contest_effect_proseAvgOrderByAggregateInput;

    @Field(() => contest_effect_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: contest_effect_proseMaxOrderByAggregateInput;

    @Field(() => contest_effect_proseMinOrderByAggregateInput, {nullable:true})
    _min?: contest_effect_proseMinOrderByAggregateInput;

    @Field(() => contest_effect_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: contest_effect_proseSumOrderByAggregateInput;
}
