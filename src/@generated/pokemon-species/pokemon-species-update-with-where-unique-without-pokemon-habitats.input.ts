import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesUpdateWithoutPokemon_habitatsInput } from './pokemon-species-update-without-pokemon-habitats.input';

@InputType()
export class pokemon_speciesUpdateWithWhereUniqueWithoutPokemon_habitatsInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesUpdateWithoutPokemon_habitatsInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateWithoutPokemon_habitatsInput)
    data!: pokemon_speciesUpdateWithoutPokemon_habitatsInput;
}
