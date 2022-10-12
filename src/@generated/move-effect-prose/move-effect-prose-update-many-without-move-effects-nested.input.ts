import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_proseCreateWithoutMove_effectsInput } from './move-effect-prose-create-without-move-effects.input';
import { Type } from 'class-transformer';
import { move_effect_proseCreateOrConnectWithoutMove_effectsInput } from './move-effect-prose-create-or-connect-without-move-effects.input';
import { move_effect_proseUpsertWithWhereUniqueWithoutMove_effectsInput } from './move-effect-prose-upsert-with-where-unique-without-move-effects.input';
import { move_effect_proseWhereUniqueInput } from './move-effect-prose-where-unique.input';
import { move_effect_proseUpdateWithWhereUniqueWithoutMove_effectsInput } from './move-effect-prose-update-with-where-unique-without-move-effects.input';
import { move_effect_proseUpdateManyWithWhereWithoutMove_effectsInput } from './move-effect-prose-update-many-with-where-without-move-effects.input';
import { move_effect_proseScalarWhereInput } from './move-effect-prose-scalar-where.input';

@InputType()
export class move_effect_proseUpdateManyWithoutMove_effectsNestedInput {

    @Field(() => [move_effect_proseCreateWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_effect_proseCreateWithoutMove_effectsInput)
    create?: Array<move_effect_proseCreateWithoutMove_effectsInput>;

    @Field(() => [move_effect_proseCreateOrConnectWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_effect_proseCreateOrConnectWithoutMove_effectsInput)
    connectOrCreate?: Array<move_effect_proseCreateOrConnectWithoutMove_effectsInput>;

    @Field(() => [move_effect_proseUpsertWithWhereUniqueWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_effect_proseUpsertWithWhereUniqueWithoutMove_effectsInput)
    upsert?: Array<move_effect_proseUpsertWithWhereUniqueWithoutMove_effectsInput>;

    @Field(() => [move_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_proseWhereUniqueInput)
    set?: Array<move_effect_proseWhereUniqueInput>;

    @Field(() => [move_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_proseWhereUniqueInput)
    disconnect?: Array<move_effect_proseWhereUniqueInput>;

    @Field(() => [move_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_proseWhereUniqueInput)
    delete?: Array<move_effect_proseWhereUniqueInput>;

    @Field(() => [move_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_proseWhereUniqueInput)
    connect?: Array<move_effect_proseWhereUniqueInput>;

    @Field(() => [move_effect_proseUpdateWithWhereUniqueWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_effect_proseUpdateWithWhereUniqueWithoutMove_effectsInput)
    update?: Array<move_effect_proseUpdateWithWhereUniqueWithoutMove_effectsInput>;

    @Field(() => [move_effect_proseUpdateManyWithWhereWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_effect_proseUpdateManyWithWhereWithoutMove_effectsInput)
    updateMany?: Array<move_effect_proseUpdateManyWithWhereWithoutMove_effectsInput>;

    @Field(() => [move_effect_proseScalarWhereInput], {nullable:true})
    @Type(() => move_effect_proseScalarWhereInput)
    deleteMany?: Array<move_effect_proseScalarWhereInput>;
}
