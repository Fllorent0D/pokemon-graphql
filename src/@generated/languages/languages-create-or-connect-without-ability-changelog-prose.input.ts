import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutAbility_changelog_proseInput } from './languages-create-without-ability-changelog-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutAbility_changelog_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutAbility_changelog_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutAbility_changelog_proseInput)
    create!: languagesCreateWithoutAbility_changelog_proseInput;
}
