import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutVersion_group_regionsInput } from './version-groups-create-without-version-group-regions.input';

@InputType()
export class version_groupsCreateOrConnectWithoutVersion_group_regionsInput {

    @Field(() => version_groupsWhereUniqueInput, {nullable:false})
    @Type(() => version_groupsWhereUniqueInput)
    where!: version_groupsWhereUniqueInput;

    @Field(() => version_groupsCreateWithoutVersion_group_regionsInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutVersion_group_regionsInput)
    create!: version_groupsCreateWithoutVersion_group_regionsInput;
}
