import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutMove_effect_changelog_proseInput } from './languages-update-without-move-effect-changelog-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_effect_changelog_proseInput } from './languages-create-without-move-effect-changelog-prose.input';

@InputType()
export class languagesUpsertWithoutMove_effect_changelog_proseInput {

    @Field(() => languagesUpdateWithoutMove_effect_changelog_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutMove_effect_changelog_proseInput)
    update!: languagesUpdateWithoutMove_effect_changelog_proseInput;

    @Field(() => languagesCreateWithoutMove_effect_changelog_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_effect_changelog_proseInput)
    create!: languagesCreateWithoutMove_effect_changelog_proseInput;
}
