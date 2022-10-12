import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { encountersUpdateWithoutPokemonInput } from './encounters-update-without-pokemon.input';
import { encountersCreateWithoutPokemonInput } from './encounters-create-without-pokemon.input';

@InputType()
export class encountersUpsertWithWhereUniqueWithoutPokemonInput {

    @Field(() => encountersWhereUniqueInput, {nullable:false})
    @Type(() => encountersWhereUniqueInput)
    where!: encountersWhereUniqueInput;

    @Field(() => encountersUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => encountersUpdateWithoutPokemonInput)
    update!: encountersUpdateWithoutPokemonInput;

    @Field(() => encountersCreateWithoutPokemonInput, {nullable:false})
    @Type(() => encountersCreateWithoutPokemonInput)
    create!: encountersCreateWithoutPokemonInput;
}
