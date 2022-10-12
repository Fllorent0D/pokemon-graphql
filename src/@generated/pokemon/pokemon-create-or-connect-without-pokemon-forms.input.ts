import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import { pokemonCreateWithoutPokemon_formsInput } from './pokemon-create-without-pokemon-forms.input';

@InputType()
export class pokemonCreateOrConnectWithoutPokemon_formsInput {

    @Field(() => pokemonWhereUniqueInput, {nullable:false})
    @Type(() => pokemonWhereUniqueInput)
    where!: pokemonWhereUniqueInput;

    @Field(() => pokemonCreateWithoutPokemon_formsInput, {nullable:false})
    @Type(() => pokemonCreateWithoutPokemon_formsInput)
    create!: pokemonCreateWithoutPokemon_formsInput;
}
