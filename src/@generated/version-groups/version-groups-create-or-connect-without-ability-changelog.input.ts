import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutAbility_changelogInput } from './version-groups-create-without-ability-changelog.input';

@InputType()
export class version_groupsCreateOrConnectWithoutAbility_changelogInput {

    @Field(() => version_groupsWhereUniqueInput, {nullable:false})
    @Type(() => version_groupsWhereUniqueInput)
    where!: version_groupsWhereUniqueInput;

    @Field(() => version_groupsCreateWithoutAbility_changelogInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutAbility_changelogInput)
    create!: version_groupsCreateWithoutAbility_changelogInput;
}
