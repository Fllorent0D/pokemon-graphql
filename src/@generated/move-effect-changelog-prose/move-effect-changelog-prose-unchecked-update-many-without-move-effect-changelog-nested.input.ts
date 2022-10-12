import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelog_proseCreateWithoutMove_effect_changelogInput } from './move-effect-changelog-prose-create-without-move-effect-changelog.input';
import { Type } from 'class-transformer';
import { move_effect_changelog_proseCreateOrConnectWithoutMove_effect_changelogInput } from './move-effect-changelog-prose-create-or-connect-without-move-effect-changelog.input';
import { move_effect_changelog_proseUpsertWithWhereUniqueWithoutMove_effect_changelogInput } from './move-effect-changelog-prose-upsert-with-where-unique-without-move-effect-changelog.input';
import { move_effect_changelog_proseWhereUniqueInput } from './move-effect-changelog-prose-where-unique.input';
import { move_effect_changelog_proseUpdateWithWhereUniqueWithoutMove_effect_changelogInput } from './move-effect-changelog-prose-update-with-where-unique-without-move-effect-changelog.input';
import { move_effect_changelog_proseUpdateManyWithWhereWithoutMove_effect_changelogInput } from './move-effect-changelog-prose-update-many-with-where-without-move-effect-changelog.input';
import { move_effect_changelog_proseScalarWhereInput } from './move-effect-changelog-prose-scalar-where.input';

@InputType()
export class move_effect_changelog_proseUncheckedUpdateManyWithoutMove_effect_changelogNestedInput {

    @Field(() => [move_effect_changelog_proseCreateWithoutMove_effect_changelogInput], {nullable:true})
    @Type(() => move_effect_changelog_proseCreateWithoutMove_effect_changelogInput)
    create?: Array<move_effect_changelog_proseCreateWithoutMove_effect_changelogInput>;

    @Field(() => [move_effect_changelog_proseCreateOrConnectWithoutMove_effect_changelogInput], {nullable:true})
    @Type(() => move_effect_changelog_proseCreateOrConnectWithoutMove_effect_changelogInput)
    connectOrCreate?: Array<move_effect_changelog_proseCreateOrConnectWithoutMove_effect_changelogInput>;

    @Field(() => [move_effect_changelog_proseUpsertWithWhereUniqueWithoutMove_effect_changelogInput], {nullable:true})
    @Type(() => move_effect_changelog_proseUpsertWithWhereUniqueWithoutMove_effect_changelogInput)
    upsert?: Array<move_effect_changelog_proseUpsertWithWhereUniqueWithoutMove_effect_changelogInput>;

    @Field(() => [move_effect_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelog_proseWhereUniqueInput)
    set?: Array<move_effect_changelog_proseWhereUniqueInput>;

    @Field(() => [move_effect_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelog_proseWhereUniqueInput)
    disconnect?: Array<move_effect_changelog_proseWhereUniqueInput>;

    @Field(() => [move_effect_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelog_proseWhereUniqueInput)
    delete?: Array<move_effect_changelog_proseWhereUniqueInput>;

    @Field(() => [move_effect_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelog_proseWhereUniqueInput)
    connect?: Array<move_effect_changelog_proseWhereUniqueInput>;

    @Field(() => [move_effect_changelog_proseUpdateWithWhereUniqueWithoutMove_effect_changelogInput], {nullable:true})
    @Type(() => move_effect_changelog_proseUpdateWithWhereUniqueWithoutMove_effect_changelogInput)
    update?: Array<move_effect_changelog_proseUpdateWithWhereUniqueWithoutMove_effect_changelogInput>;

    @Field(() => [move_effect_changelog_proseUpdateManyWithWhereWithoutMove_effect_changelogInput], {nullable:true})
    @Type(() => move_effect_changelog_proseUpdateManyWithWhereWithoutMove_effect_changelogInput)
    updateMany?: Array<move_effect_changelog_proseUpdateManyWithWhereWithoutMove_effect_changelogInput>;

    @Field(() => [move_effect_changelog_proseScalarWhereInput], {nullable:true})
    @Type(() => move_effect_changelog_proseScalarWhereInput)
    deleteMany?: Array<move_effect_changelog_proseScalarWhereInput>;
}
