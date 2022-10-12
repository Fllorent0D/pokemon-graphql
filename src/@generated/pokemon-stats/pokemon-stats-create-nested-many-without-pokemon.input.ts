import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_statsCreateWithoutPokemonInput } from './pokemon-stats-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { pokemon_statsCreateOrConnectWithoutPokemonInput } from './pokemon-stats-create-or-connect-without-pokemon.input';
import { pokemon_statsWhereUniqueInput } from './pokemon-stats-where-unique.input';

@InputType()
export class pokemon_statsCreateNestedManyWithoutPokemonInput {

    @Field(() => [pokemon_statsCreateWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_statsCreateWithoutPokemonInput)
    create?: Array<pokemon_statsCreateWithoutPokemonInput>;

    @Field(() => [pokemon_statsCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_statsCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<pokemon_statsCreateOrConnectWithoutPokemonInput>;

    @Field(() => [pokemon_statsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_statsWhereUniqueInput)
    connect?: Array<pokemon_statsWhereUniqueInput>;
}
