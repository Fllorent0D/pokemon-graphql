import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutAbility_changelog_proseInput } from './languages-create-without-ability-changelog-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutAbility_changelog_proseInput } from './languages-create-or-connect-without-ability-changelog-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutAbility_changelog_proseInput {

    @Field(() => languagesCreateWithoutAbility_changelog_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutAbility_changelog_proseInput)
    create?: languagesCreateWithoutAbility_changelog_proseInput;

    @Field(() => languagesCreateOrConnectWithoutAbility_changelog_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutAbility_changelog_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutAbility_changelog_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
