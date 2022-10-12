import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelog_proseWhereUniqueInput } from './move-effect-changelog-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_effect_changelog_proseUpdateWithoutMove_effect_changelogInput } from './move-effect-changelog-prose-update-without-move-effect-changelog.input';
import { move_effect_changelog_proseCreateWithoutMove_effect_changelogInput } from './move-effect-changelog-prose-create-without-move-effect-changelog.input';

@InputType()
export class move_effect_changelog_proseUpsertWithWhereUniqueWithoutMove_effect_changelogInput {

    @Field(() => move_effect_changelog_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_effect_changelog_proseWhereUniqueInput)
    where!: move_effect_changelog_proseWhereUniqueInput;

    @Field(() => move_effect_changelog_proseUpdateWithoutMove_effect_changelogInput, {nullable:false})
    @Type(() => move_effect_changelog_proseUpdateWithoutMove_effect_changelogInput)
    update!: move_effect_changelog_proseUpdateWithoutMove_effect_changelogInput;

    @Field(() => move_effect_changelog_proseCreateWithoutMove_effect_changelogInput, {nullable:false})
    @Type(() => move_effect_changelog_proseCreateWithoutMove_effect_changelogInput)
    create!: move_effect_changelog_proseCreateWithoutMove_effect_changelogInput;
}
