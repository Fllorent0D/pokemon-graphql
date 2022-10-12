import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ability_flavor_textCountOrderByAggregateInput } from './ability-flavor-text-count-order-by-aggregate.input';
import { ability_flavor_textAvgOrderByAggregateInput } from './ability-flavor-text-avg-order-by-aggregate.input';
import { ability_flavor_textMaxOrderByAggregateInput } from './ability-flavor-text-max-order-by-aggregate.input';
import { ability_flavor_textMinOrderByAggregateInput } from './ability-flavor-text-min-order-by-aggregate.input';
import { ability_flavor_textSumOrderByAggregateInput } from './ability-flavor-text-sum-order-by-aggregate.input';

@InputType()
export class ability_flavor_textOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    ability_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flavor_text?: keyof typeof SortOrder;

    @Field(() => ability_flavor_textCountOrderByAggregateInput, {nullable:true})
    _count?: ability_flavor_textCountOrderByAggregateInput;

    @Field(() => ability_flavor_textAvgOrderByAggregateInput, {nullable:true})
    _avg?: ability_flavor_textAvgOrderByAggregateInput;

    @Field(() => ability_flavor_textMaxOrderByAggregateInput, {nullable:true})
    _max?: ability_flavor_textMaxOrderByAggregateInput;

    @Field(() => ability_flavor_textMinOrderByAggregateInput, {nullable:true})
    _min?: ability_flavor_textMinOrderByAggregateInput;

    @Field(() => ability_flavor_textSumOrderByAggregateInput, {nullable:true})
    _sum?: ability_flavor_textSumOrderByAggregateInput;
}
