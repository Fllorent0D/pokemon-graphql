import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesCreateWithoutVersion_groupsInput } from './pokedexes-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { pokedexesCreateOrConnectWithoutVersion_groupsInput } from './pokedexes-create-or-connect-without-version-groups.input';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';

@InputType()
export class pokedexesCreateNestedOneWithoutVersion_groupsInput {

    @Field(() => pokedexesCreateWithoutVersion_groupsInput, {nullable:true})
    @Type(() => pokedexesCreateWithoutVersion_groupsInput)
    create?: pokedexesCreateWithoutVersion_groupsInput;

    @Field(() => pokedexesCreateOrConnectWithoutVersion_groupsInput, {nullable:true})
    @Type(() => pokedexesCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: pokedexesCreateOrConnectWithoutVersion_groupsInput;

    @Field(() => pokedexesWhereUniqueInput, {nullable:true})
    @Type(() => pokedexesWhereUniqueInput)
    connect?: pokedexesWhereUniqueInput;
}
