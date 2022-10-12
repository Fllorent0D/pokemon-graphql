import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutPokemon_species_proseInput } from './pokemon-species-create-without-pokemon-species-prose.input';

@InputType()
export class pokemon_speciesCreateOrConnectWithoutPokemon_species_proseInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesCreateWithoutPokemon_species_proseInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutPokemon_species_proseInput)
    create!: pokemon_speciesCreateWithoutPokemon_species_proseInput;
}
