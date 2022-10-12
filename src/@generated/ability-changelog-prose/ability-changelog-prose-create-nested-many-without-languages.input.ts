import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelog_proseCreateWithoutLanguagesInput } from './ability-changelog-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { ability_changelog_proseCreateOrConnectWithoutLanguagesInput } from './ability-changelog-prose-create-or-connect-without-languages.input';
import { ability_changelog_proseWhereUniqueInput } from './ability-changelog-prose-where-unique.input';

@InputType()
export class ability_changelog_proseCreateNestedManyWithoutLanguagesInput {

    @Field(() => [ability_changelog_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_changelog_proseCreateWithoutLanguagesInput)
    create?: Array<ability_changelog_proseCreateWithoutLanguagesInput>;

    @Field(() => [ability_changelog_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_changelog_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<ability_changelog_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [ability_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelog_proseWhereUniqueInput)
    connect?: Array<ability_changelog_proseWhereUniqueInput>;
}
