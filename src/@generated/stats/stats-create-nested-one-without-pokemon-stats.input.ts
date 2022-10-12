import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsCreateWithoutPokemon_statsInput } from './stats-create-without-pokemon-stats.input';
import { Type } from 'class-transformer';
import { statsCreateOrConnectWithoutPokemon_statsInput } from './stats-create-or-connect-without-pokemon-stats.input';
import { statsWhereUniqueInput } from './stats-where-unique.input';

@InputType()
export class statsCreateNestedOneWithoutPokemon_statsInput {

    @Field(() => statsCreateWithoutPokemon_statsInput, {nullable:true})
    @Type(() => statsCreateWithoutPokemon_statsInput)
    create?: statsCreateWithoutPokemon_statsInput;

    @Field(() => statsCreateOrConnectWithoutPokemon_statsInput, {nullable:true})
    @Type(() => statsCreateOrConnectWithoutPokemon_statsInput)
    connectOrCreate?: statsCreateOrConnectWithoutPokemon_statsInput;

    @Field(() => statsWhereUniqueInput, {nullable:true})
    @Type(() => statsWhereUniqueInput)
    connect?: statsWhereUniqueInput;
}
