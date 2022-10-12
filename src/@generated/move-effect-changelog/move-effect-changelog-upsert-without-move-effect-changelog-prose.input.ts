import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelogUpdateWithoutMove_effect_changelog_proseInput } from './move-effect-changelog-update-without-move-effect-changelog-prose.input';
import { Type } from 'class-transformer';
import { move_effect_changelogCreateWithoutMove_effect_changelog_proseInput } from './move-effect-changelog-create-without-move-effect-changelog-prose.input';

@InputType()
export class move_effect_changelogUpsertWithoutMove_effect_changelog_proseInput {

    @Field(() => move_effect_changelogUpdateWithoutMove_effect_changelog_proseInput, {nullable:false})
    @Type(() => move_effect_changelogUpdateWithoutMove_effect_changelog_proseInput)
    update!: move_effect_changelogUpdateWithoutMove_effect_changelog_proseInput;

    @Field(() => move_effect_changelogCreateWithoutMove_effect_changelog_proseInput, {nullable:false})
    @Type(() => move_effect_changelogCreateWithoutMove_effect_changelog_proseInput)
    create!: move_effect_changelogCreateWithoutMove_effect_changelog_proseInput;
}
