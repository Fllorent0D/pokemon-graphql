import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ability_namesCountOrderByAggregateInput } from './ability-names-count-order-by-aggregate.input';
import { ability_namesAvgOrderByAggregateInput } from './ability-names-avg-order-by-aggregate.input';
import { ability_namesMaxOrderByAggregateInput } from './ability-names-max-order-by-aggregate.input';
import { ability_namesMinOrderByAggregateInput } from './ability-names-min-order-by-aggregate.input';
import { ability_namesSumOrderByAggregateInput } from './ability-names-sum-order-by-aggregate.input';

@InputType()
export class ability_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    ability_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => ability_namesCountOrderByAggregateInput, {nullable:true})
    _count?: ability_namesCountOrderByAggregateInput;

    @Field(() => ability_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: ability_namesAvgOrderByAggregateInput;

    @Field(() => ability_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: ability_namesMaxOrderByAggregateInput;

    @Field(() => ability_namesMinOrderByAggregateInput, {nullable:true})
    _min?: ability_namesMinOrderByAggregateInput;

    @Field(() => ability_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: ability_namesSumOrderByAggregateInput;
}
