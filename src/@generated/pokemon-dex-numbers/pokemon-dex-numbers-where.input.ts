import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { PokedexesRelationFilter } from '../prisma/pokedexes-relation-filter.input';
import { Pokemon_speciesRelationFilter } from '../prisma/pokemon-species-relation-filter.input';

@InputType()
export class pokemon_dex_numbersWhereInput {

    @Field(() => [pokemon_dex_numbersWhereInput], {nullable:true})
    AND?: Array<pokemon_dex_numbersWhereInput>;

    @Field(() => [pokemon_dex_numbersWhereInput], {nullable:true})
    OR?: Array<pokemon_dex_numbersWhereInput>;

    @Field(() => [pokemon_dex_numbersWhereInput], {nullable:true})
    NOT?: Array<pokemon_dex_numbersWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    species_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pokedex_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pokedex_number?: IntFilter;

    @Field(() => PokedexesRelationFilter, {nullable:true})
    pokedexes?: PokedexesRelationFilter;

    @Field(() => Pokemon_speciesRelationFilter, {nullable:true})
    pokemon_species?: Pokemon_speciesRelationFilter;
}
