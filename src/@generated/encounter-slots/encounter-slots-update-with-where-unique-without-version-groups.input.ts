import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_slotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_slotsUpdateWithoutVersion_groupsInput } from './encounter-slots-update-without-version-groups.input';

@InputType()
export class encounter_slotsUpdateWithWhereUniqueWithoutVersion_groupsInput {

    @Field(() => encounter_slotsWhereUniqueInput, {nullable:false})
    @Type(() => encounter_slotsWhereUniqueInput)
    where!: encounter_slotsWhereUniqueInput;

    @Field(() => encounter_slotsUpdateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => encounter_slotsUpdateWithoutVersion_groupsInput)
    data!: encounter_slotsUpdateWithoutVersion_groupsInput;
}
