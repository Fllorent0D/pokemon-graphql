import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokedexesOrderByWithRelationInput } from '../pokedexes/pokedexes-order-by-with-relation.input';
import { pokemon_speciesOrderByWithRelationInput } from '../pokemon-species/pokemon-species-order-by-with-relation.input';

@InputType()
export class pokemon_dex_numbersOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    species_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pokedex_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pokedex_number?: keyof typeof SortOrder;

    @Field(() => pokedexesOrderByWithRelationInput, {nullable:true})
    pokedexes?: pokedexesOrderByWithRelationInput;

    @Field(() => pokemon_speciesOrderByWithRelationInput, {nullable:true})
    pokemon_species?: pokemon_speciesOrderByWithRelationInput;
}
