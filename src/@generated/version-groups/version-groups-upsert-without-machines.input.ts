import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsUpdateWithoutMachinesInput } from './version-groups-update-without-machines.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutMachinesInput } from './version-groups-create-without-machines.input';

@InputType()
export class version_groupsUpsertWithoutMachinesInput {

    @Field(() => version_groupsUpdateWithoutMachinesInput, {nullable:false})
    @Type(() => version_groupsUpdateWithoutMachinesInput)
    update!: version_groupsUpdateWithoutMachinesInput;

    @Field(() => version_groupsCreateWithoutMachinesInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutMachinesInput)
    create!: version_groupsCreateWithoutMachinesInput;
}
