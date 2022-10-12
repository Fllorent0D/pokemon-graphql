import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_color_namesCountOrderByAggregateInput } from './pokemon-color-names-count-order-by-aggregate.input';
import { pokemon_color_namesAvgOrderByAggregateInput } from './pokemon-color-names-avg-order-by-aggregate.input';
import { pokemon_color_namesMaxOrderByAggregateInput } from './pokemon-color-names-max-order-by-aggregate.input';
import { pokemon_color_namesMinOrderByAggregateInput } from './pokemon-color-names-min-order-by-aggregate.input';
import { pokemon_color_namesSumOrderByAggregateInput } from './pokemon-color-names-sum-order-by-aggregate.input';

@InputType()
export class pokemon_color_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_color_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => pokemon_color_namesCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_color_namesCountOrderByAggregateInput;

    @Field(() => pokemon_color_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_color_namesAvgOrderByAggregateInput;

    @Field(() => pokemon_color_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_color_namesMaxOrderByAggregateInput;

    @Field(() => pokemon_color_namesMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_color_namesMinOrderByAggregateInput;

    @Field(() => pokemon_color_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_color_namesSumOrderByAggregateInput;
}
