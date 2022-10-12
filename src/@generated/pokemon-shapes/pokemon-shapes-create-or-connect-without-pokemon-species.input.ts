import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_shapesWhereUniqueInput } from './pokemon-shapes-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_shapesCreateWithoutPokemon_speciesInput } from './pokemon-shapes-create-without-pokemon-species.input';

@InputType()
export class pokemon_shapesCreateOrConnectWithoutPokemon_speciesInput {

    @Field(() => pokemon_shapesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_shapesWhereUniqueInput)
    where!: pokemon_shapesWhereUniqueInput;

    @Field(() => pokemon_shapesCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_shapesCreateWithoutPokemon_speciesInput)
    create!: pokemon_shapesCreateWithoutPokemon_speciesInput;
}
