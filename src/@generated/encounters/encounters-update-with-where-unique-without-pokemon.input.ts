import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { encountersUpdateWithoutPokemonInput } from './encounters-update-without-pokemon.input';

@InputType()
export class encountersUpdateWithWhereUniqueWithoutPokemonInput {

    @Field(() => encountersWhereUniqueInput, {nullable:false})
    @Type(() => encountersWhereUniqueInput)
    where!: encountersWhereUniqueInput;

    @Field(() => encountersUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => encountersUpdateWithoutPokemonInput)
    data!: encountersUpdateWithoutPokemonInput;
}
