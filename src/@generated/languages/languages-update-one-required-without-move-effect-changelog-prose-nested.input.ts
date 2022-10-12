import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutMove_effect_changelog_proseInput } from './languages-create-without-move-effect-changelog-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutMove_effect_changelog_proseInput } from './languages-create-or-connect-without-move-effect-changelog-prose.input';
import { languagesUpsertWithoutMove_effect_changelog_proseInput } from './languages-upsert-without-move-effect-changelog-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutMove_effect_changelog_proseInput } from './languages-update-without-move-effect-changelog-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutMove_effect_changelog_proseNestedInput {

    @Field(() => languagesCreateWithoutMove_effect_changelog_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutMove_effect_changelog_proseInput)
    create?: languagesCreateWithoutMove_effect_changelog_proseInput;

    @Field(() => languagesCreateOrConnectWithoutMove_effect_changelog_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutMove_effect_changelog_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutMove_effect_changelog_proseInput;

    @Field(() => languagesUpsertWithoutMove_effect_changelog_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutMove_effect_changelog_proseInput)
    upsert?: languagesUpsertWithoutMove_effect_changelog_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutMove_effect_changelog_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutMove_effect_changelog_proseInput)
    update?: languagesUpdateWithoutMove_effect_changelog_proseInput;
}
