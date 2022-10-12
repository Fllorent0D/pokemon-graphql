import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelog_proseWhereUniqueInput } from './ability-changelog-prose-where-unique.input';
import { Type } from 'class-transformer';
import { ability_changelog_proseCreateWithoutLanguagesInput } from './ability-changelog-prose-create-without-languages.input';

@InputType()
export class ability_changelog_proseCreateOrConnectWithoutLanguagesInput {

    @Field(() => ability_changelog_proseWhereUniqueInput, {nullable:false})
    @Type(() => ability_changelog_proseWhereUniqueInput)
    where!: ability_changelog_proseWhereUniqueInput;

    @Field(() => ability_changelog_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => ability_changelog_proseCreateWithoutLanguagesInput)
    create!: ability_changelog_proseCreateWithoutLanguagesInput;
}
