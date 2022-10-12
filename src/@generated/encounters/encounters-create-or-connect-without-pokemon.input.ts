import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { encountersCreateWithoutPokemonInput } from './encounters-create-without-pokemon.input';

@InputType()
export class encountersCreateOrConnectWithoutPokemonInput {

    @Field(() => encountersWhereUniqueInput, {nullable:false})
    @Type(() => encountersWhereUniqueInput)
    where!: encountersWhereUniqueInput;

    @Field(() => encountersCreateWithoutPokemonInput, {nullable:false})
    @Type(() => encountersCreateWithoutPokemonInput)
    create!: encountersCreateWithoutPokemonInput;
}
