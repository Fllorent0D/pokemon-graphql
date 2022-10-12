import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutEncounter_slotsInput } from './version-groups-create-without-encounter-slots.input';

@InputType()
export class version_groupsCreateOrConnectWithoutEncounter_slotsInput {

    @Field(() => version_groupsWhereUniqueInput, {nullable:false})
    @Type(() => version_groupsWhereUniqueInput)
    where!: version_groupsWhereUniqueInput;

    @Field(() => version_groupsCreateWithoutEncounter_slotsInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutEncounter_slotsInput)
    create!: version_groupsCreateWithoutEncounter_slotsInput;
}
