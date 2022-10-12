import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_color_namesOrderByRelationAggregateInput } from '../pokemon-color-names/pokemon-color-names-order-by-relation-aggregate.input';
import { pokemon_speciesOrderByRelationAggregateInput } from '../pokemon-species/pokemon-species-order-by-relation-aggregate.input';

@InputType()
export class pokemon_colorsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => pokemon_color_namesOrderByRelationAggregateInput, {nullable:true})
    pokemon_color_names?: pokemon_color_namesOrderByRelationAggregateInput;

    @Field(() => pokemon_speciesOrderByRelationAggregateInput, {nullable:true})
    pokemon_species?: pokemon_speciesOrderByRelationAggregateInput;
}
