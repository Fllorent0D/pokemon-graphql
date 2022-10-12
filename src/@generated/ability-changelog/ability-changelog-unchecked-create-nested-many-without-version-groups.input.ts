import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelogCreateWithoutVersion_groupsInput } from './ability-changelog-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { ability_changelogCreateOrConnectWithoutVersion_groupsInput } from './ability-changelog-create-or-connect-without-version-groups.input';
import { ability_changelogWhereUniqueInput } from './ability-changelog-where-unique.input';

@InputType()
export class ability_changelogUncheckedCreateNestedManyWithoutVersion_groupsInput {

    @Field(() => [ability_changelogCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => ability_changelogCreateWithoutVersion_groupsInput)
    create?: Array<ability_changelogCreateWithoutVersion_groupsInput>;

    @Field(() => [ability_changelogCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => ability_changelogCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<ability_changelogCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [ability_changelogWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelogWhereUniqueInput)
    connect?: Array<ability_changelogWhereUniqueInput>;
}
