import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_slotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_slotsUpdateWithoutVersion_groupsInput } from './encounter-slots-update-without-version-groups.input';
import { encounter_slotsCreateWithoutVersion_groupsInput } from './encounter-slots-create-without-version-groups.input';

@InputType()
export class encounter_slotsUpsertWithWhereUniqueWithoutVersion_groupsInput {

    @Field(() => encounter_slotsWhereUniqueInput, {nullable:false})
    @Type(() => encounter_slotsWhereUniqueInput)
    where!: encounter_slotsWhereUniqueInput;

    @Field(() => encounter_slotsUpdateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => encounter_slotsUpdateWithoutVersion_groupsInput)
    update!: encounter_slotsUpdateWithoutVersion_groupsInput;

    @Field(() => encounter_slotsCreateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => encounter_slotsCreateWithoutVersion_groupsInput)
    create!: encounter_slotsCreateWithoutVersion_groupsInput;
}
