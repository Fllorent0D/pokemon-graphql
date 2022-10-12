import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutMove_effect_changelog_proseInput } from './languages-create-without-move-effect-changelog-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutMove_effect_changelog_proseInput } from './languages-create-or-connect-without-move-effect-changelog-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutMove_effect_changelog_proseInput {

    @Field(() => languagesCreateWithoutMove_effect_changelog_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutMove_effect_changelog_proseInput)
    create?: languagesCreateWithoutMove_effect_changelog_proseInput;

    @Field(() => languagesCreateOrConnectWithoutMove_effect_changelog_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutMove_effect_changelog_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutMove_effect_changelog_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
