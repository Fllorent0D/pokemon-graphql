import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesUpdateWithoutPokemon_speciesInput } from './pokemon-species-update-without-pokemon-species.input';
import { pokemon_speciesCreateWithoutPokemon_speciesInput } from './pokemon-species-create-without-pokemon-species.input';

@InputType()
export class pokemon_speciesUpsertWithWhereUniqueWithoutPokemon_speciesInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesUpdateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateWithoutPokemon_speciesInput)
    update!: pokemon_speciesUpdateWithoutPokemon_speciesInput;

    @Field(() => pokemon_speciesCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutPokemon_speciesInput)
    create!: pokemon_speciesCreateWithoutPokemon_speciesInput;
}
