import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_statsCreateWithoutNature_pokeathlon_statsInput } from './pokeathlon-stats-create-without-nature-pokeathlon-stats.input';
import { Type } from 'class-transformer';
import { pokeathlon_statsCreateOrConnectWithoutNature_pokeathlon_statsInput } from './pokeathlon-stats-create-or-connect-without-nature-pokeathlon-stats.input';
import { pokeathlon_statsWhereUniqueInput } from './pokeathlon-stats-where-unique.input';

@InputType()
export class pokeathlon_statsCreateNestedOneWithoutNature_pokeathlon_statsInput {

    @Field(() => pokeathlon_statsCreateWithoutNature_pokeathlon_statsInput, {nullable:true})
    @Type(() => pokeathlon_statsCreateWithoutNature_pokeathlon_statsInput)
    create?: pokeathlon_statsCreateWithoutNature_pokeathlon_statsInput;

    @Field(() => pokeathlon_statsCreateOrConnectWithoutNature_pokeathlon_statsInput, {nullable:true})
    @Type(() => pokeathlon_statsCreateOrConnectWithoutNature_pokeathlon_statsInput)
    connectOrCreate?: pokeathlon_statsCreateOrConnectWithoutNature_pokeathlon_statsInput;

    @Field(() => pokeathlon_statsWhereUniqueInput, {nullable:true})
    @Type(() => pokeathlon_statsWhereUniqueInput)
    connect?: pokeathlon_statsWhereUniqueInput;
}
