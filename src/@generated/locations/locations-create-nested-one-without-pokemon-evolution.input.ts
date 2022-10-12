import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsCreateWithoutPokemon_evolutionInput } from './locations-create-without-pokemon-evolution.input';
import { Type } from 'class-transformer';
import { locationsCreateOrConnectWithoutPokemon_evolutionInput } from './locations-create-or-connect-without-pokemon-evolution.input';
import { locationsWhereUniqueInput } from './locations-where-unique.input';

@InputType()
export class locationsCreateNestedOneWithoutPokemon_evolutionInput {

    @Field(() => locationsCreateWithoutPokemon_evolutionInput, {nullable:true})
    @Type(() => locationsCreateWithoutPokemon_evolutionInput)
    create?: locationsCreateWithoutPokemon_evolutionInput;

    @Field(() => locationsCreateOrConnectWithoutPokemon_evolutionInput, {nullable:true})
    @Type(() => locationsCreateOrConnectWithoutPokemon_evolutionInput)
    connectOrCreate?: locationsCreateOrConnectWithoutPokemon_evolutionInput;

    @Field(() => locationsWhereUniqueInput, {nullable:true})
    @Type(() => locationsWhereUniqueInput)
    connect?: locationsWhereUniqueInput;
}
