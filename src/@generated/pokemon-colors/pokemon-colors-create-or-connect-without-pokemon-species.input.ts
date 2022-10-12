import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_colorsWhereUniqueInput } from './pokemon-colors-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_colorsCreateWithoutPokemon_speciesInput } from './pokemon-colors-create-without-pokemon-species.input';

@InputType()
export class pokemon_colorsCreateOrConnectWithoutPokemon_speciesInput {

    @Field(() => pokemon_colorsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_colorsWhereUniqueInput)
    where!: pokemon_colorsWhereUniqueInput;

    @Field(() => pokemon_colorsCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_colorsCreateWithoutPokemon_speciesInput)
    create!: pokemon_colorsCreateWithoutPokemon_speciesInput;
}
