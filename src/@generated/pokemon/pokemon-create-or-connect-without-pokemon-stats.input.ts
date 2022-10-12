import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import { pokemonCreateWithoutPokemon_statsInput } from './pokemon-create-without-pokemon-stats.input';

@InputType()
export class pokemonCreateOrConnectWithoutPokemon_statsInput {

    @Field(() => pokemonWhereUniqueInput, {nullable:false})
    @Type(() => pokemonWhereUniqueInput)
    where!: pokemonWhereUniqueInput;

    @Field(() => pokemonCreateWithoutPokemon_statsInput, {nullable:false})
    @Type(() => pokemonCreateWithoutPokemon_statsInput)
    create!: pokemonCreateWithoutPokemon_statsInput;
}
