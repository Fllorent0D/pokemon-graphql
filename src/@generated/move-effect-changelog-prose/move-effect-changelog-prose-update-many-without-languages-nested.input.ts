import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelog_proseCreateWithoutLanguagesInput } from './move-effect-changelog-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_effect_changelog_proseCreateOrConnectWithoutLanguagesInput } from './move-effect-changelog-prose-create-or-connect-without-languages.input';
import { move_effect_changelog_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './move-effect-changelog-prose-upsert-with-where-unique-without-languages.input';
import { move_effect_changelog_proseWhereUniqueInput } from './move-effect-changelog-prose-where-unique.input';
import { move_effect_changelog_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './move-effect-changelog-prose-update-with-where-unique-without-languages.input';
import { move_effect_changelog_proseUpdateManyWithWhereWithoutLanguagesInput } from './move-effect-changelog-prose-update-many-with-where-without-languages.input';
import { move_effect_changelog_proseScalarWhereInput } from './move-effect-changelog-prose-scalar-where.input';

@InputType()
export class move_effect_changelog_proseUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [move_effect_changelog_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_effect_changelog_proseCreateWithoutLanguagesInput)
    create?: Array<move_effect_changelog_proseCreateWithoutLanguagesInput>;

    @Field(() => [move_effect_changelog_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_effect_changelog_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_effect_changelog_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_effect_changelog_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_effect_changelog_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<move_effect_changelog_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_effect_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelog_proseWhereUniqueInput)
    set?: Array<move_effect_changelog_proseWhereUniqueInput>;

    @Field(() => [move_effect_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelog_proseWhereUniqueInput)
    disconnect?: Array<move_effect_changelog_proseWhereUniqueInput>;

    @Field(() => [move_effect_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelog_proseWhereUniqueInput)
    delete?: Array<move_effect_changelog_proseWhereUniqueInput>;

    @Field(() => [move_effect_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelog_proseWhereUniqueInput)
    connect?: Array<move_effect_changelog_proseWhereUniqueInput>;

    @Field(() => [move_effect_changelog_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_effect_changelog_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<move_effect_changelog_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_effect_changelog_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => move_effect_changelog_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<move_effect_changelog_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [move_effect_changelog_proseScalarWhereInput], {nullable:true})
    @Type(() => move_effect_changelog_proseScalarWhereInput)
    deleteMany?: Array<move_effect_changelog_proseScalarWhereInput>;
}
