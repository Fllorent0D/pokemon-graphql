import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_namesCreateWithoutPokemon_speciesInput } from './pokemon-species-names-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_species_namesCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-species-names-create-or-connect-without-pokemon-species.input';
import { pokemon_species_namesWhereUniqueInput } from './pokemon-species-names-where-unique.input';

@InputType()
export class pokemon_species_namesUncheckedCreateNestedManyWithoutPokemon_speciesInput {

    @Field(() => [pokemon_species_namesCreateWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_namesCreateWithoutPokemon_speciesInput)
    create?: Array<pokemon_species_namesCreateWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_namesCreateOrConnectWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_namesCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: Array<pokemon_species_namesCreateOrConnectWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_namesWhereUniqueInput)
    connect?: Array<pokemon_species_namesWhereUniqueInput>;
}
