import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelog_proseCreateWithoutLanguagesInput } from './ability-changelog-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { ability_changelog_proseCreateOrConnectWithoutLanguagesInput } from './ability-changelog-prose-create-or-connect-without-languages.input';
import { ability_changelog_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './ability-changelog-prose-upsert-with-where-unique-without-languages.input';
import { ability_changelog_proseWhereUniqueInput } from './ability-changelog-prose-where-unique.input';
import { ability_changelog_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './ability-changelog-prose-update-with-where-unique-without-languages.input';
import { ability_changelog_proseUpdateManyWithWhereWithoutLanguagesInput } from './ability-changelog-prose-update-many-with-where-without-languages.input';
import { ability_changelog_proseScalarWhereInput } from './ability-changelog-prose-scalar-where.input';

@InputType()
export class ability_changelog_proseUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [ability_changelog_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_changelog_proseCreateWithoutLanguagesInput)
    create?: Array<ability_changelog_proseCreateWithoutLanguagesInput>;

    @Field(() => [ability_changelog_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_changelog_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<ability_changelog_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [ability_changelog_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_changelog_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<ability_changelog_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [ability_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelog_proseWhereUniqueInput)
    set?: Array<ability_changelog_proseWhereUniqueInput>;

    @Field(() => [ability_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelog_proseWhereUniqueInput)
    disconnect?: Array<ability_changelog_proseWhereUniqueInput>;

    @Field(() => [ability_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelog_proseWhereUniqueInput)
    delete?: Array<ability_changelog_proseWhereUniqueInput>;

    @Field(() => [ability_changelog_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelog_proseWhereUniqueInput)
    connect?: Array<ability_changelog_proseWhereUniqueInput>;

    @Field(() => [ability_changelog_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_changelog_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<ability_changelog_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [ability_changelog_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_changelog_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<ability_changelog_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [ability_changelog_proseScalarWhereInput], {nullable:true})
    @Type(() => ability_changelog_proseScalarWhereInput)
    deleteMany?: Array<ability_changelog_proseScalarWhereInput>;
}
