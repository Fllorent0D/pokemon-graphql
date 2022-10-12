import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsUpdateWithoutVersionsInput } from './version-groups-update-without-versions.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutVersionsInput } from './version-groups-create-without-versions.input';

@InputType()
export class version_groupsUpsertWithoutVersionsInput {

    @Field(() => version_groupsUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => version_groupsUpdateWithoutVersionsInput)
    update!: version_groupsUpdateWithoutVersionsInput;

    @Field(() => version_groupsCreateWithoutVersionsInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutVersionsInput)
    create!: version_groupsCreateWithoutVersionsInput;
}
