import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemonCountOrderByAggregateInput } from './pokemon-count-order-by-aggregate.input';
import { pokemonAvgOrderByAggregateInput } from './pokemon-avg-order-by-aggregate.input';
import { pokemonMaxOrderByAggregateInput } from './pokemon-max-order-by-aggregate.input';
import { pokemonMinOrderByAggregateInput } from './pokemon-min-order-by-aggregate.input';
import { pokemonSumOrderByAggregateInput } from './pokemon-sum-order-by-aggregate.input';

@InputType()
export class pokemonOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    species_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weight?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    base_experience?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_default?: keyof typeof SortOrder;

    @Field(() => pokemonCountOrderByAggregateInput, {nullable:true})
    _count?: pokemonCountOrderByAggregateInput;

    @Field(() => pokemonAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemonAvgOrderByAggregateInput;

    @Field(() => pokemonMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemonMaxOrderByAggregateInput;

    @Field(() => pokemonMinOrderByAggregateInput, {nullable:true})
    _min?: pokemonMinOrderByAggregateInput;

    @Field(() => pokemonSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemonSumOrderByAggregateInput;
}
