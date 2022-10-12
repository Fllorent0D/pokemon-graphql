import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_abilitiesCountOrderByAggregateInput } from './pokemon-abilities-count-order-by-aggregate.input';
import { pokemon_abilitiesAvgOrderByAggregateInput } from './pokemon-abilities-avg-order-by-aggregate.input';
import { pokemon_abilitiesMaxOrderByAggregateInput } from './pokemon-abilities-max-order-by-aggregate.input';
import { pokemon_abilitiesMinOrderByAggregateInput } from './pokemon-abilities-min-order-by-aggregate.input';
import { pokemon_abilitiesSumOrderByAggregateInput } from './pokemon-abilities-sum-order-by-aggregate.input';

@InputType()
export class pokemon_abilitiesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ability_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_dream?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slot?: keyof typeof SortOrder;

    @Field(() => pokemon_abilitiesCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_abilitiesCountOrderByAggregateInput;

    @Field(() => pokemon_abilitiesAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_abilitiesAvgOrderByAggregateInput;

    @Field(() => pokemon_abilitiesMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_abilitiesMaxOrderByAggregateInput;

    @Field(() => pokemon_abilitiesMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_abilitiesMinOrderByAggregateInput;

    @Field(() => pokemon_abilitiesSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_abilitiesSumOrderByAggregateInput;
}
