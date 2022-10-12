import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelogCreateWithoutAbility_changelog_proseInput } from './ability-changelog-create-without-ability-changelog-prose.input';
import { Type } from 'class-transformer';
import { ability_changelogCreateOrConnectWithoutAbility_changelog_proseInput } from './ability-changelog-create-or-connect-without-ability-changelog-prose.input';
import { ability_changelogWhereUniqueInput } from './ability-changelog-where-unique.input';

@InputType()
export class ability_changelogCreateNestedOneWithoutAbility_changelog_proseInput {

    @Field(() => ability_changelogCreateWithoutAbility_changelog_proseInput, {nullable:true})
    @Type(() => ability_changelogCreateWithoutAbility_changelog_proseInput)
    create?: ability_changelogCreateWithoutAbility_changelog_proseInput;

    @Field(() => ability_changelogCreateOrConnectWithoutAbility_changelog_proseInput, {nullable:true})
    @Type(() => ability_changelogCreateOrConnectWithoutAbility_changelog_proseInput)
    connectOrCreate?: ability_changelogCreateOrConnectWithoutAbility_changelog_proseInput;

    @Field(() => ability_changelogWhereUniqueInput, {nullable:true})
    @Type(() => ability_changelogWhereUniqueInput)
    connect?: ability_changelogWhereUniqueInput;
}
