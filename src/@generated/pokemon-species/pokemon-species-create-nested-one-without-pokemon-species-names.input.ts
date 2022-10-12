import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutPokemon_species_namesInput } from './pokemon-species-create-without-pokemon-species-names.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutPokemon_species_namesInput } from './pokemon-species-create-or-connect-without-pokemon-species-names.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class pokemon_speciesCreateNestedOneWithoutPokemon_species_namesInput {

    @Field(() => pokemon_speciesCreateWithoutPokemon_species_namesInput, {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutPokemon_species_namesInput)
    create?: pokemon_speciesCreateWithoutPokemon_species_namesInput;

    @Field(() => pokemon_speciesCreateOrConnectWithoutPokemon_species_namesInput, {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutPokemon_species_namesInput)
    connectOrCreate?: pokemon_speciesCreateOrConnectWithoutPokemon_species_namesInput;

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: pokemon_speciesWhereUniqueInput;
}
