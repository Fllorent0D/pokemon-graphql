import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelog_proseWhereUniqueInput } from './ability-changelog-prose-where-unique.input';
import { Type } from 'class-transformer';
import { ability_changelog_proseUpdateWithoutLanguagesInput } from './ability-changelog-prose-update-without-languages.input';

@InputType()
export class ability_changelog_proseUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => ability_changelog_proseWhereUniqueInput, {nullable:false})
    @Type(() => ability_changelog_proseWhereUniqueInput)
    where!: ability_changelog_proseWhereUniqueInput;

    @Field(() => ability_changelog_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => ability_changelog_proseUpdateWithoutLanguagesInput)
    data!: ability_changelog_proseUpdateWithoutLanguagesInput;
}
