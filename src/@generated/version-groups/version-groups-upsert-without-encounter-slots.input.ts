import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsUpdateWithoutEncounter_slotsInput } from './version-groups-update-without-encounter-slots.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutEncounter_slotsInput } from './version-groups-create-without-encounter-slots.input';

@InputType()
export class version_groupsUpsertWithoutEncounter_slotsInput {

    @Field(() => version_groupsUpdateWithoutEncounter_slotsInput, {nullable:false})
    @Type(() => version_groupsUpdateWithoutEncounter_slotsInput)
    update!: version_groupsUpdateWithoutEncounter_slotsInput;

    @Field(() => version_groupsCreateWithoutEncounter_slotsInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutEncounter_slotsInput)
    create!: version_groupsCreateWithoutEncounter_slotsInput;
}
