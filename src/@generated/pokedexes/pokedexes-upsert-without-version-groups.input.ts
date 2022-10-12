import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesUpdateWithoutVersion_groupsInput } from './pokedexes-update-without-version-groups.input';
import { Type } from 'class-transformer';
import { pokedexesCreateWithoutVersion_groupsInput } from './pokedexes-create-without-version-groups.input';

@InputType()
export class pokedexesUpsertWithoutVersion_groupsInput {

    @Field(() => pokedexesUpdateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => pokedexesUpdateWithoutVersion_groupsInput)
    update!: pokedexesUpdateWithoutVersion_groupsInput;

    @Field(() => pokedexesCreateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => pokedexesCreateWithoutVersion_groupsInput)
    create!: pokedexesCreateWithoutVersion_groupsInput;
}
