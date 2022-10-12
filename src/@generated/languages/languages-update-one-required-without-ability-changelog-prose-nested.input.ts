import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutAbility_changelog_proseInput } from './languages-create-without-ability-changelog-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutAbility_changelog_proseInput } from './languages-create-or-connect-without-ability-changelog-prose.input';
import { languagesUpsertWithoutAbility_changelog_proseInput } from './languages-upsert-without-ability-changelog-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutAbility_changelog_proseInput } from './languages-update-without-ability-changelog-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutAbility_changelog_proseNestedInput {

    @Field(() => languagesCreateWithoutAbility_changelog_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutAbility_changelog_proseInput)
    create?: languagesCreateWithoutAbility_changelog_proseInput;

    @Field(() => languagesCreateOrConnectWithoutAbility_changelog_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutAbility_changelog_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutAbility_changelog_proseInput;

    @Field(() => languagesUpsertWithoutAbility_changelog_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutAbility_changelog_proseInput)
    upsert?: languagesUpsertWithoutAbility_changelog_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutAbility_changelog_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutAbility_changelog_proseInput)
    update?: languagesUpdateWithoutAbility_changelog_proseInput;
}
