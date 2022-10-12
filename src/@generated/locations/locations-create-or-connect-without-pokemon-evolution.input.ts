import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsWhereUniqueInput } from './locations-where-unique.input';
import { Type } from 'class-transformer';
import { locationsCreateWithoutPokemon_evolutionInput } from './locations-create-without-pokemon-evolution.input';

@InputType()
export class locationsCreateOrConnectWithoutPokemon_evolutionInput {

    @Field(() => locationsWhereUniqueInput, {nullable:false})
    @Type(() => locationsWhereUniqueInput)
    where!: locationsWhereUniqueInput;

    @Field(() => locationsCreateWithoutPokemon_evolutionInput, {nullable:false})
    @Type(() => locationsCreateWithoutPokemon_evolutionInput)
    create!: locationsCreateWithoutPokemon_evolutionInput;
}
