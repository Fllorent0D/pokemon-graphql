import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_flavor_textWhereUniqueInput } from './ability-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { ability_flavor_textUpdateWithoutVersion_groupsInput } from './ability-flavor-text-update-without-version-groups.input';
import { ability_flavor_textCreateWithoutVersion_groupsInput } from './ability-flavor-text-create-without-version-groups.input';

@InputType()
export class ability_flavor_textUpsertWithWhereUniqueWithoutVersion_groupsInput {

    @Field(() => ability_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => ability_flavor_textWhereUniqueInput)
    where!: ability_flavor_textWhereUniqueInput;

    @Field(() => ability_flavor_textUpdateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => ability_flavor_textUpdateWithoutVersion_groupsInput)
    update!: ability_flavor_textUpdateWithoutVersion_groupsInput;

    @Field(() => ability_flavor_textCreateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => ability_flavor_textCreateWithoutVersion_groupsInput)
    create!: ability_flavor_textCreateWithoutVersion_groupsInput;
}
