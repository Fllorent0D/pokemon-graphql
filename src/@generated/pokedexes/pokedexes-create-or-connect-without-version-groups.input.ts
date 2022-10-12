import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { Type } from 'class-transformer';
import { pokedexesCreateWithoutVersion_groupsInput } from './pokedexes-create-without-version-groups.input';

@InputType()
export class pokedexesCreateOrConnectWithoutVersion_groupsInput {

    @Field(() => pokedexesWhereUniqueInput, {nullable:false})
    @Type(() => pokedexesWhereUniqueInput)
    where!: pokedexesWhereUniqueInput;

    @Field(() => pokedexesCreateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => pokedexesCreateWithoutVersion_groupsInput)
    create!: pokedexesCreateWithoutVersion_groupsInput;
}
