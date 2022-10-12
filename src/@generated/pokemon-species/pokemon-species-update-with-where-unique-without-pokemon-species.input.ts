import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesUpdateWithoutPokemon_speciesInput } from './pokemon-species-update-without-pokemon-species.input';

@InputType()
export class pokemon_speciesUpdateWithWhereUniqueWithoutPokemon_speciesInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesUpdateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateWithoutPokemon_speciesInput)
    data!: pokemon_speciesUpdateWithoutPokemon_speciesInput;
}
