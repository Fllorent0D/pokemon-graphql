import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_abilitiesCreateWithoutPokemonInput } from './pokemon-abilities-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { pokemon_abilitiesCreateOrConnectWithoutPokemonInput } from './pokemon-abilities-create-or-connect-without-pokemon.input';
import { pokemon_abilitiesWhereUniqueInput } from './pokemon-abilities-where-unique.input';

@InputType()
export class pokemon_abilitiesUncheckedCreateNestedManyWithoutPokemonInput {

    @Field(() => [pokemon_abilitiesCreateWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_abilitiesCreateWithoutPokemonInput)
    create?: Array<pokemon_abilitiesCreateWithoutPokemonInput>;

    @Field(() => [pokemon_abilitiesCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_abilitiesCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<pokemon_abilitiesCreateOrConnectWithoutPokemonInput>;

    @Field(() => [pokemon_abilitiesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_abilitiesWhereUniqueInput)
    connect?: Array<pokemon_abilitiesWhereUniqueInput>;
}
