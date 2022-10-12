import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_effect_changelog_proseInput } from './languages-create-without-move-effect-changelog-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutMove_effect_changelog_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutMove_effect_changelog_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_effect_changelog_proseInput)
    create!: languagesCreateWithoutMove_effect_changelog_proseInput;
}
