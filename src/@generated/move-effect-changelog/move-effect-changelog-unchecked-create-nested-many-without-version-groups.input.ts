import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelogCreateWithoutVersion_groupsInput } from './move-effect-changelog-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { move_effect_changelogCreateOrConnectWithoutVersion_groupsInput } from './move-effect-changelog-create-or-connect-without-version-groups.input';
import { move_effect_changelogWhereUniqueInput } from './move-effect-changelog-where-unique.input';

@InputType()
export class move_effect_changelogUncheckedCreateNestedManyWithoutVersion_groupsInput {

    @Field(() => [move_effect_changelogCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_effect_changelogCreateWithoutVersion_groupsInput)
    create?: Array<move_effect_changelogCreateWithoutVersion_groupsInput>;

    @Field(() => [move_effect_changelogCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_effect_changelogCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<move_effect_changelogCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [move_effect_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelogWhereUniqueInput)
    connect?: Array<move_effect_changelogWhereUniqueInput>;
}
