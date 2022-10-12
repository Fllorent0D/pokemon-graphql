import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_formsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_formsUpdateWithoutVersion_groupsInput } from './pokemon-forms-update-without-version-groups.input';
import { pokemon_formsCreateWithoutVersion_groupsInput } from './pokemon-forms-create-without-version-groups.input';

@InputType()
export class pokemon_formsUpsertWithWhereUniqueWithoutVersion_groupsInput {

    @Field(() => pokemon_formsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_formsWhereUniqueInput)
    where!: pokemon_formsWhereUniqueInput;

    @Field(() => pokemon_formsUpdateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => pokemon_formsUpdateWithoutVersion_groupsInput)
    update!: pokemon_formsUpdateWithoutVersion_groupsInput;

    @Field(() => pokemon_formsCreateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => pokemon_formsCreateWithoutVersion_groupsInput)
    create!: pokemon_formsCreateWithoutVersion_groupsInput;
}
