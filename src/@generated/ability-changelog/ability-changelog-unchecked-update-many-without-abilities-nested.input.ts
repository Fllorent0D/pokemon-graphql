import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelogCreateWithoutAbilitiesInput } from './ability-changelog-create-without-abilities.input';
import { Type } from 'class-transformer';
import { ability_changelogCreateOrConnectWithoutAbilitiesInput } from './ability-changelog-create-or-connect-without-abilities.input';
import { ability_changelogUpsertWithWhereUniqueWithoutAbilitiesInput } from './ability-changelog-upsert-with-where-unique-without-abilities.input';
import { ability_changelogWhereUniqueInput } from './ability-changelog-where-unique.input';
import { ability_changelogUpdateWithWhereUniqueWithoutAbilitiesInput } from './ability-changelog-update-with-where-unique-without-abilities.input';
import { ability_changelogUpdateManyWithWhereWithoutAbilitiesInput } from './ability-changelog-update-many-with-where-without-abilities.input';
import { ability_changelogScalarWhereInput } from './ability-changelog-scalar-where.input';

@InputType()
export class ability_changelogUncheckedUpdateManyWithoutAbilitiesNestedInput {

    @Field(() => [ability_changelogCreateWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_changelogCreateWithoutAbilitiesInput)
    create?: Array<ability_changelogCreateWithoutAbilitiesInput>;

    @Field(() => [ability_changelogCreateOrConnectWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_changelogCreateOrConnectWithoutAbilitiesInput)
    connectOrCreate?: Array<ability_changelogCreateOrConnectWithoutAbilitiesInput>;

    @Field(() => [ability_changelogUpsertWithWhereUniqueWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_changelogUpsertWithWhereUniqueWithoutAbilitiesInput)
    upsert?: Array<ability_changelogUpsertWithWhereUniqueWithoutAbilitiesInput>;

    @Field(() => [ability_changelogWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelogWhereUniqueInput)
    set?: Array<ability_changelogWhereUniqueInput>;

    @Field(() => [ability_changelogWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelogWhereUniqueInput)
    disconnect?: Array<ability_changelogWhereUniqueInput>;

    @Field(() => [ability_changelogWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelogWhereUniqueInput)
    delete?: Array<ability_changelogWhereUniqueInput>;

    @Field(() => [ability_changelogWhereUniqueInput], {nullable:true})
    @Type(() => ability_changelogWhereUniqueInput)
    connect?: Array<ability_changelogWhereUniqueInput>;

    @Field(() => [ability_changelogUpdateWithWhereUniqueWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_changelogUpdateWithWhereUniqueWithoutAbilitiesInput)
    update?: Array<ability_changelogUpdateWithWhereUniqueWithoutAbilitiesInput>;

    @Field(() => [ability_changelogUpdateManyWithWhereWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_changelogUpdateManyWithWhereWithoutAbilitiesInput)
    updateMany?: Array<ability_changelogUpdateManyWithWhereWithoutAbilitiesInput>;

    @Field(() => [ability_changelogScalarWhereInput], {nullable:true})
    @Type(() => ability_changelogScalarWhereInput)
    deleteMany?: Array<ability_changelogScalarWhereInput>;
}
