import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_formsCountOrderByAggregateInput } from './pokemon-forms-count-order-by-aggregate.input';
import { pokemon_formsAvgOrderByAggregateInput } from './pokemon-forms-avg-order-by-aggregate.input';
import { pokemon_formsMaxOrderByAggregateInput } from './pokemon-forms-max-order-by-aggregate.input';
import { pokemon_formsMinOrderByAggregateInput } from './pokemon-forms-min-order-by-aggregate.input';
import { pokemon_formsSumOrderByAggregateInput } from './pokemon-forms-sum-order-by-aggregate.input';

@InputType()
export class pokemon_formsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    form_identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    introduced_in_version_group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_default?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_battle_only?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => pokemon_formsCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_formsCountOrderByAggregateInput;

    @Field(() => pokemon_formsAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_formsAvgOrderByAggregateInput;

    @Field(() => pokemon_formsMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_formsMaxOrderByAggregateInput;

    @Field(() => pokemon_formsMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_formsMinOrderByAggregateInput;

    @Field(() => pokemon_formsSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_formsSumOrderByAggregateInput;
}
