import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutMove_changelogInput } from './version-groups-create-without-move-changelog.input';

@InputType()
export class version_groupsCreateOrConnectWithoutMove_changelogInput {

    @Field(() => version_groupsWhereUniqueInput, {nullable:false})
    @Type(() => version_groupsWhereUniqueInput)
    where!: version_groupsWhereUniqueInput;

    @Field(() => version_groupsCreateWithoutMove_changelogInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutMove_changelogInput)
    create!: version_groupsCreateWithoutMove_changelogInput;
}
