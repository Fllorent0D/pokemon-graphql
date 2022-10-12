import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutPokemon_species_namesInput } from './pokemon-species-create-without-pokemon-species-names.input';

@InputType()
export class pokemon_speciesCreateOrConnectWithoutPokemon_species_namesInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesCreateWithoutPokemon_species_namesInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutPokemon_species_namesInput)
    create!: pokemon_speciesCreateWithoutPokemon_species_namesInput;
}
