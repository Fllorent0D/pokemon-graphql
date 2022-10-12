import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelog_proseWhereUniqueInput } from './move-effect-changelog-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_effect_changelog_proseUpdateWithoutLanguagesInput } from './move-effect-changelog-prose-update-without-languages.input';
import { move_effect_changelog_proseCreateWithoutLanguagesInput } from './move-effect-changelog-prose-create-without-languages.input';

@InputType()
export class move_effect_changelog_proseUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => move_effect_changelog_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_effect_changelog_proseWhereUniqueInput)
    where!: move_effect_changelog_proseWhereUniqueInput;

    @Field(() => move_effect_changelog_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_effect_changelog_proseUpdateWithoutLanguagesInput)
    update!: move_effect_changelog_proseUpdateWithoutLanguagesInput;

    @Field(() => move_effect_changelog_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_effect_changelog_proseCreateWithoutLanguagesInput)
    create!: move_effect_changelog_proseCreateWithoutLanguagesInput;
}
