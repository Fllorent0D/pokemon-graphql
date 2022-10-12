import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ability_proseCountOrderByAggregateInput } from './ability-prose-count-order-by-aggregate.input';
import { ability_proseAvgOrderByAggregateInput } from './ability-prose-avg-order-by-aggregate.input';
import { ability_proseMaxOrderByAggregateInput } from './ability-prose-max-order-by-aggregate.input';
import { ability_proseMinOrderByAggregateInput } from './ability-prose-min-order-by-aggregate.input';
import { ability_proseSumOrderByAggregateInput } from './ability-prose-sum-order-by-aggregate.input';

@InputType()
export class ability_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    ability_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    short_effect?: keyof typeof SortOrder;

    @Field(() => ability_proseCountOrderByAggregateInput, {nullable:true})
    _count?: ability_proseCountOrderByAggregateInput;

    @Field(() => ability_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: ability_proseAvgOrderByAggregateInput;

    @Field(() => ability_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: ability_proseMaxOrderByAggregateInput;

    @Field(() => ability_proseMinOrderByAggregateInput, {nullable:true})
    _min?: ability_proseMinOrderByAggregateInput;

    @Field(() => ability_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: ability_proseSumOrderByAggregateInput;
}
