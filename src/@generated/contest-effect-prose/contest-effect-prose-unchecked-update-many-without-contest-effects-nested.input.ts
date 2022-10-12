import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_effect_proseCreateWithoutContest_effectsInput } from './contest-effect-prose-create-without-contest-effects.input';
import { Type } from 'class-transformer';
import { contest_effect_proseCreateOrConnectWithoutContest_effectsInput } from './contest-effect-prose-create-or-connect-without-contest-effects.input';
import { contest_effect_proseUpsertWithWhereUniqueWithoutContest_effectsInput } from './contest-effect-prose-upsert-with-where-unique-without-contest-effects.input';
import { contest_effect_proseWhereUniqueInput } from './contest-effect-prose-where-unique.input';
import { contest_effect_proseUpdateWithWhereUniqueWithoutContest_effectsInput } from './contest-effect-prose-update-with-where-unique-without-contest-effects.input';
import { contest_effect_proseUpdateManyWithWhereWithoutContest_effectsInput } from './contest-effect-prose-update-many-with-where-without-contest-effects.input';
import { contest_effect_proseScalarWhereInput } from './contest-effect-prose-scalar-where.input';

@InputType()
export class contest_effect_proseUncheckedUpdateManyWithoutContest_effectsNestedInput {

    @Field(() => [contest_effect_proseCreateWithoutContest_effectsInput], {nullable:true})
    @Type(() => contest_effect_proseCreateWithoutContest_effectsInput)
    create?: Array<contest_effect_proseCreateWithoutContest_effectsInput>;

    @Field(() => [contest_effect_proseCreateOrConnectWithoutContest_effectsInput], {nullable:true})
    @Type(() => contest_effect_proseCreateOrConnectWithoutContest_effectsInput)
    connectOrCreate?: Array<contest_effect_proseCreateOrConnectWithoutContest_effectsInput>;

    @Field(() => [contest_effect_proseUpsertWithWhereUniqueWithoutContest_effectsInput], {nullable:true})
    @Type(() => contest_effect_proseUpsertWithWhereUniqueWithoutContest_effectsInput)
    upsert?: Array<contest_effect_proseUpsertWithWhereUniqueWithoutContest_effectsInput>;

    @Field(() => [contest_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => contest_effect_proseWhereUniqueInput)
    set?: Array<contest_effect_proseWhereUniqueInput>;

    @Field(() => [contest_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => contest_effect_proseWhereUniqueInput)
    disconnect?: Array<contest_effect_proseWhereUniqueInput>;

    @Field(() => [contest_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => contest_effect_proseWhereUniqueInput)
    delete?: Array<contest_effect_proseWhereUniqueInput>;

    @Field(() => [contest_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => contest_effect_proseWhereUniqueInput)
    connect?: Array<contest_effect_proseWhereUniqueInput>;

    @Field(() => [contest_effect_proseUpdateWithWhereUniqueWithoutContest_effectsInput], {nullable:true})
    @Type(() => contest_effect_proseUpdateWithWhereUniqueWithoutContest_effectsInput)
    update?: Array<contest_effect_proseUpdateWithWhereUniqueWithoutContest_effectsInput>;

    @Field(() => [contest_effect_proseUpdateManyWithWhereWithoutContest_effectsInput], {nullable:true})
    @Type(() => contest_effect_proseUpdateManyWithWhereWithoutContest_effectsInput)
    updateMany?: Array<contest_effect_proseUpdateManyWithWhereWithoutContest_effectsInput>;

    @Field(() => [contest_effect_proseScalarWhereInput], {nullable:true})
    @Type(() => contest_effect_proseScalarWhereInput)
    deleteMany?: Array<contest_effect_proseScalarWhereInput>;
}
