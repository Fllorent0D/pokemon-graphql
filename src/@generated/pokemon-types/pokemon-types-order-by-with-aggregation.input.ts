import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_typesCountOrderByAggregateInput } from './pokemon-types-count-order-by-aggregate.input';
import { pokemon_typesAvgOrderByAggregateInput } from './pokemon-types-avg-order-by-aggregate.input';
import { pokemon_typesMaxOrderByAggregateInput } from './pokemon-types-max-order-by-aggregate.input';
import { pokemon_typesMinOrderByAggregateInput } from './pokemon-types-min-order-by-aggregate.input';
import { pokemon_typesSumOrderByAggregateInput } from './pokemon-types-sum-order-by-aggregate.input';

@InputType()
export class pokemon_typesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slot?: keyof typeof SortOrder;

    @Field(() => pokemon_typesCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_typesCountOrderByAggregateInput;

    @Field(() => pokemon_typesAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_typesAvgOrderByAggregateInput;

    @Field(() => pokemon_typesMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_typesMaxOrderByAggregateInput;

    @Field(() => pokemon_typesMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_typesMinOrderByAggregateInput;

    @Field(() => pokemon_typesSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_typesSumOrderByAggregateInput;
}
