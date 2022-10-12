import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_form_namesCountOrderByAggregateInput } from './pokemon-form-names-count-order-by-aggregate.input';
import { pokemon_form_namesAvgOrderByAggregateInput } from './pokemon-form-names-avg-order-by-aggregate.input';
import { pokemon_form_namesMaxOrderByAggregateInput } from './pokemon-form-names-max-order-by-aggregate.input';
import { pokemon_form_namesMinOrderByAggregateInput } from './pokemon-form-names-min-order-by-aggregate.input';
import { pokemon_form_namesSumOrderByAggregateInput } from './pokemon-form-names-sum-order-by-aggregate.input';

@InputType()
export class pokemon_form_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_form_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    form_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pokemon_name?: keyof typeof SortOrder;

    @Field(() => pokemon_form_namesCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_form_namesCountOrderByAggregateInput;

    @Field(() => pokemon_form_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_form_namesAvgOrderByAggregateInput;

    @Field(() => pokemon_form_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_form_namesMaxOrderByAggregateInput;

    @Field(() => pokemon_form_namesMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_form_namesMinOrderByAggregateInput;

    @Field(() => pokemon_form_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_form_namesSumOrderByAggregateInput;
}
