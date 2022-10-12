import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_habitat_namesOrderByRelationAggregateInput } from '../pokemon-habitat-names/pokemon-habitat-names-order-by-relation-aggregate.input';
import { pokemon_speciesOrderByRelationAggregateInput } from '../pokemon-species/pokemon-species-order-by-relation-aggregate.input';

@InputType()
export class pokemon_habitatsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => pokemon_habitat_namesOrderByRelationAggregateInput, {nullable:true})
    pokemon_habitat_names?: pokemon_habitat_namesOrderByRelationAggregateInput;

    @Field(() => pokemon_speciesOrderByRelationAggregateInput, {nullable:true})
    pokemon_species?: pokemon_speciesOrderByRelationAggregateInput;
}
