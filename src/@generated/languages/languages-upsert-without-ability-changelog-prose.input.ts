import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutAbility_changelog_proseInput } from './languages-update-without-ability-changelog-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutAbility_changelog_proseInput } from './languages-create-without-ability-changelog-prose.input';

@InputType()
export class languagesUpsertWithoutAbility_changelog_proseInput {

    @Field(() => languagesUpdateWithoutAbility_changelog_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutAbility_changelog_proseInput)
    update!: languagesUpdateWithoutAbility_changelog_proseInput;

    @Field(() => languagesCreateWithoutAbility_changelog_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutAbility_changelog_proseInput)
    create!: languagesCreateWithoutAbility_changelog_proseInput;
}
