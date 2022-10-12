import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import { pokemonUpdateWithoutPokemon_speciesInput } from './pokemon-update-without-pokemon-species.input';
import { pokemonCreateWithoutPokemon_speciesInput } from './pokemon-create-without-pokemon-species.input';

@InputType()
export class pokemonUpsertWithWhereUniqueWithoutPokemon_speciesInput {

    @Field(() => pokemonWhereUniqueInput, {nullable:false})
    @Type(() => pokemonWhereUniqueInput)
    where!: pokemonWhereUniqueInput;

    @Field(() => pokemonUpdateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemonUpdateWithoutPokemon_speciesInput)
    update!: pokemonUpdateWithoutPokemon_speciesInput;

    @Field(() => pokemonCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemonCreateWithoutPokemon_speciesInput)
    create!: pokemonCreateWithoutPokemon_speciesInput;
}
