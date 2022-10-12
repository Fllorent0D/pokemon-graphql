import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_flavor_textWhereUniqueInput } from './ability-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { ability_flavor_textUpdateWithoutVersion_groupsInput } from './ability-flavor-text-update-without-version-groups.input';

@InputType()
export class ability_flavor_textUpdateWithWhereUniqueWithoutVersion_groupsInput {

    @Field(() => ability_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => ability_flavor_textWhereUniqueInput)
    where!: ability_flavor_textWhereUniqueInput;

    @Field(() => ability_flavor_textUpdateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => ability_flavor_textUpdateWithoutVersion_groupsInput)
    data!: ability_flavor_textUpdateWithoutVersion_groupsInput;
}
