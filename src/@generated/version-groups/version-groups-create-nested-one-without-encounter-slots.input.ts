import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateWithoutEncounter_slotsInput } from './version-groups-create-without-encounter-slots.input';
import { Type } from 'class-transformer';
import { version_groupsCreateOrConnectWithoutEncounter_slotsInput } from './version-groups-create-or-connect-without-encounter-slots.input';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class version_groupsCreateNestedOneWithoutEncounter_slotsInput {

    @Field(() => version_groupsCreateWithoutEncounter_slotsInput, {nullable:true})
    @Type(() => version_groupsCreateWithoutEncounter_slotsInput)
    create?: version_groupsCreateWithoutEncounter_slotsInput;

    @Field(() => version_groupsCreateOrConnectWithoutEncounter_slotsInput, {nullable:true})
    @Type(() => version_groupsCreateOrConnectWithoutEncounter_slotsInput)
    connectOrCreate?: version_groupsCreateOrConnectWithoutEncounter_slotsInput;

    @Field(() => version_groupsWhereUniqueInput, {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    connect?: version_groupsWhereUniqueInput;
}
