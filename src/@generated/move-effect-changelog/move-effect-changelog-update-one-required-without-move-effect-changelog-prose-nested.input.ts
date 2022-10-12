import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelogCreateWithoutMove_effect_changelog_proseInput } from './move-effect-changelog-create-without-move-effect-changelog-prose.input';
import { Type } from 'class-transformer';
import { move_effect_changelogCreateOrConnectWithoutMove_effect_changelog_proseInput } from './move-effect-changelog-create-or-connect-without-move-effect-changelog-prose.input';
import { move_effect_changelogUpsertWithoutMove_effect_changelog_proseInput } from './move-effect-changelog-upsert-without-move-effect-changelog-prose.input';
import { move_effect_changelogWhereUniqueInput } from './move-effect-changelog-where-unique.input';
import { move_effect_changelogUpdateWithoutMove_effect_changelog_proseInput } from './move-effect-changelog-update-without-move-effect-changelog-prose.input';

@InputType()
export class move_effect_changelogUpdateOneRequiredWithoutMove_effect_changelog_proseNestedInput {

    @Field(() => move_effect_changelogCreateWithoutMove_effect_changelog_proseInput, {nullable:true})
    @Type(() => move_effect_changelogCreateWithoutMove_effect_changelog_proseInput)
    create?: move_effect_changelogCreateWithoutMove_effect_changelog_proseInput;

    @Field(() => move_effect_changelogCreateOrConnectWithoutMove_effect_changelog_proseInput, {nullable:true})
    @Type(() => move_effect_changelogCreateOrConnectWithoutMove_effect_changelog_proseInput)
    connectOrCreate?: move_effect_changelogCreateOrConnectWithoutMove_effect_changelog_proseInput;

    @Field(() => move_effect_changelogUpsertWithoutMove_effect_changelog_proseInput, {nullable:true})
    @Type(() => move_effect_changelogUpsertWithoutMove_effect_changelog_proseInput)
    upsert?: move_effect_changelogUpsertWithoutMove_effect_changelog_proseInput;

    @Field(() => move_effect_changelogWhereUniqueInput, {nullable:true})
    @Type(() => move_effect_changelogWhereUniqueInput)
    connect?: move_effect_changelogWhereUniqueInput;

    @Field(() => move_effect_changelogUpdateWithoutMove_effect_changelog_proseInput, {nullable:true})
    @Type(() => move_effect_changelogUpdateWithoutMove_effect_changelog_proseInput)
    update?: move_effect_changelogUpdateWithoutMove_effect_changelog_proseInput;
}
