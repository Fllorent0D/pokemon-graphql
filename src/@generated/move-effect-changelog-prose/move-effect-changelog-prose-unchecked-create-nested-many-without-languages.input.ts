import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelog_proseCreateWithoutLanguagesInput } from './move-effect-changelog-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_effect_changelog_proseCreateOrConnectWithoutLanguagesInput } from './move-effect-changelog-prose-create-or-connect-without-languages.input';
import { move_effect_changelog_proseWhereUniqueInput } from './move-effect-changelog-prose-where-unique.input';

@InputType()
export class move_effect_changelog_proseUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [move_effect_changelog_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_effect_changelog_proseCreateWithoutLanguagesInput)
    create?: Array<move_effect_changelog_proseCreateWithoutLanguagesInput>;

    @Field(() => [move_effect_changelog_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_effect_changelog_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_effect_changelog_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_effect_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelog_proseWhereUniqueInput)
    connect?: Array<move_effect_changelog_proseWhereUniqueInput>;
}
