import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateWithoutMachinesInput } from './version-groups-create-without-machines.input';
import { Type } from 'class-transformer';
import { version_groupsCreateOrConnectWithoutMachinesInput } from './version-groups-create-or-connect-without-machines.input';
import { version_groupsUpsertWithoutMachinesInput } from './version-groups-upsert-without-machines.input';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { version_groupsUpdateWithoutMachinesInput } from './version-groups-update-without-machines.input';

@InputType()
export class version_groupsUpdateOneRequiredWithoutMachinesNestedInput {

    @Field(() => version_groupsCreateWithoutMachinesInput, {nullable:true})
    @Type(() => version_groupsCreateWithoutMachinesInput)
    create?: version_groupsCreateWithoutMachinesInput;

    @Field(() => version_groupsCreateOrConnectWithoutMachinesInput, {nullable:true})
    @Type(() => version_groupsCreateOrConnectWithoutMachinesInput)
    connectOrCreate?: version_groupsCreateOrConnectWithoutMachinesInput;

    @Field(() => version_groupsUpsertWithoutMachinesInput, {nullable:true})
    @Type(() => version_groupsUpsertWithoutMachinesInput)
    upsert?: version_groupsUpsertWithoutMachinesInput;

    @Field(() => version_groupsWhereUniqueInput, {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    connect?: version_groupsWhereUniqueInput;

    @Field(() => version_groupsUpdateWithoutMachinesInput, {nullable:true})
    @Type(() => version_groupsUpdateWithoutMachinesInput)
    update?: version_groupsUpdateWithoutMachinesInput;
}
