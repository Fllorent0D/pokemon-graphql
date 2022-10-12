import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesCreateWithoutVersion_groupsInput } from './pokedexes-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { pokedexesCreateOrConnectWithoutVersion_groupsInput } from './pokedexes-create-or-connect-without-version-groups.input';
import { pokedexesUpsertWithoutVersion_groupsInput } from './pokedexes-upsert-without-version-groups.input';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { pokedexesUpdateWithoutVersion_groupsInput } from './pokedexes-update-without-version-groups.input';

@InputType()
export class pokedexesUpdateOneRequiredWithoutVersion_groupsNestedInput {

    @Field(() => pokedexesCreateWithoutVersion_groupsInput, {nullable:true})
    @Type(() => pokedexesCreateWithoutVersion_groupsInput)
    create?: pokedexesCreateWithoutVersion_groupsInput;

    @Field(() => pokedexesCreateOrConnectWithoutVersion_groupsInput, {nullable:true})
    @Type(() => pokedexesCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: pokedexesCreateOrConnectWithoutVersion_groupsInput;

    @Field(() => pokedexesUpsertWithoutVersion_groupsInput, {nullable:true})
    @Type(() => pokedexesUpsertWithoutVersion_groupsInput)
    upsert?: pokedexesUpsertWithoutVersion_groupsInput;

    @Field(() => pokedexesWhereUniqueInput, {nullable:true})
    @Type(() => pokedexesWhereUniqueInput)
    connect?: pokedexesWhereUniqueInput;

    @Field(() => pokedexesUpdateWithoutVersion_groupsInput, {nullable:true})
    @Type(() => pokedexesUpdateWithoutVersion_groupsInput)
    update?: pokedexesUpdateWithoutVersion_groupsInput;
}
