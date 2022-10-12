import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { super_contest_effect_proseCreateWithoutSuper_contest_effectsInput } from './super-contest-effect-prose-create-without-super-contest-effects.input';
import { Type } from 'class-transformer';
import { super_contest_effect_proseCreateOrConnectWithoutSuper_contest_effectsInput } from './super-contest-effect-prose-create-or-connect-without-super-contest-effects.input';
import { super_contest_effect_proseUpsertWithWhereUniqueWithoutSuper_contest_effectsInput } from './super-contest-effect-prose-upsert-with-where-unique-without-super-contest-effects.input';
import { super_contest_effect_proseWhereUniqueInput } from './super-contest-effect-prose-where-unique.input';
import { super_contest_effect_proseUpdateWithWhereUniqueWithoutSuper_contest_effectsInput } from './super-contest-effect-prose-update-with-where-unique-without-super-contest-effects.input';
import { super_contest_effect_proseUpdateManyWithWhereWithoutSuper_contest_effectsInput } from './super-contest-effect-prose-update-many-with-where-without-super-contest-effects.input';
import { super_contest_effect_proseScalarWhereInput } from './super-contest-effect-prose-scalar-where.input';

@InputType()
export class super_contest_effect_proseUpdateManyWithoutSuper_contest_effectsNestedInput {

    @Field(() => [super_contest_effect_proseCreateWithoutSuper_contest_effectsInput], {nullable:true})
    @Type(() => super_contest_effect_proseCreateWithoutSuper_contest_effectsInput)
    create?: Array<super_contest_effect_proseCreateWithoutSuper_contest_effectsInput>;

    @Field(() => [super_contest_effect_proseCreateOrConnectWithoutSuper_contest_effectsInput], {nullable:true})
    @Type(() => super_contest_effect_proseCreateOrConnectWithoutSuper_contest_effectsInput)
    connectOrCreate?: Array<super_contest_effect_proseCreateOrConnectWithoutSuper_contest_effectsInput>;

    @Field(() => [super_contest_effect_proseUpsertWithWhereUniqueWithoutSuper_contest_effectsInput], {nullable:true})
    @Type(() => super_contest_effect_proseUpsertWithWhereUniqueWithoutSuper_contest_effectsInput)
    upsert?: Array<super_contest_effect_proseUpsertWithWhereUniqueWithoutSuper_contest_effectsInput>;

    @Field(() => [super_contest_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => super_contest_effect_proseWhereUniqueInput)
    set?: Array<super_contest_effect_proseWhereUniqueInput>;

    @Field(() => [super_contest_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => super_contest_effect_proseWhereUniqueInput)
    disconnect?: Array<super_contest_effect_proseWhereUniqueInput>;

    @Field(() => [super_contest_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => super_contest_effect_proseWhereUniqueInput)
    delete?: Array<super_contest_effect_proseWhereUniqueInput>;

    @Field(() => [super_contest_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => super_contest_effect_proseWhereUniqueInput)
    connect?: Array<super_contest_effect_proseWhereUniqueInput>;

    @Field(() => [super_contest_effect_proseUpdateWithWhereUniqueWithoutSuper_contest_effectsInput], {nullable:true})
    @Type(() => super_contest_effect_proseUpdateWithWhereUniqueWithoutSuper_contest_effectsInput)
    update?: Array<super_contest_effect_proseUpdateWithWhereUniqueWithoutSuper_contest_effectsInput>;

    @Field(() => [super_contest_effect_proseUpdateManyWithWhereWithoutSuper_contest_effectsInput], {nullable:true})
    @Type(() => super_contest_effect_proseUpdateManyWithWhereWithoutSuper_contest_effectsInput)
    updateMany?: Array<super_contest_effect_proseUpdateManyWithWhereWithoutSuper_contest_effectsInput>;

    @Field(() => [super_contest_effect_proseScalarWhereInput], {nullable:true})
    @Type(() => super_contest_effect_proseScalarWhereInput)
    deleteMany?: Array<super_contest_effect_proseScalarWhereInput>;
}
