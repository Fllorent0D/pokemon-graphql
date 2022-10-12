import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelogCreateWithoutMove_effectsInput } from './move-effect-changelog-create-without-move-effects.input';
import { Type } from 'class-transformer';
import { move_effect_changelogCreateOrConnectWithoutMove_effectsInput } from './move-effect-changelog-create-or-connect-without-move-effects.input';
import { move_effect_changelogUpsertWithWhereUniqueWithoutMove_effectsInput } from './move-effect-changelog-upsert-with-where-unique-without-move-effects.input';
import { move_effect_changelogWhereUniqueInput } from './move-effect-changelog-where-unique.input';
import { move_effect_changelogUpdateWithWhereUniqueWithoutMove_effectsInput } from './move-effect-changelog-update-with-where-unique-without-move-effects.input';
import { move_effect_changelogUpdateManyWithWhereWithoutMove_effectsInput } from './move-effect-changelog-update-many-with-where-without-move-effects.input';
import { move_effect_changelogScalarWhereInput } from './move-effect-changelog-scalar-where.input';

@InputType()
export class move_effect_changelogUncheckedUpdateManyWithoutMove_effectsNestedInput {

    @Field(() => [move_effect_changelogCreateWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_effect_changelogCreateWithoutMove_effectsInput)
    create?: Array<move_effect_changelogCreateWithoutMove_effectsInput>;

    @Field(() => [move_effect_changelogCreateOrConnectWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_effect_changelogCreateOrConnectWithoutMove_effectsInput)
    connectOrCreate?: Array<move_effect_changelogCreateOrConnectWithoutMove_effectsInput>;

    @Field(() => [move_effect_changelogUpsertWithWhereUniqueWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_effect_changelogUpsertWithWhereUniqueWithoutMove_effectsInput)
    upsert?: Array<move_effect_changelogUpsertWithWhereUniqueWithoutMove_effectsInput>;

    @Field(() => [move_effect_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelogWhereUniqueInput)
    set?: Array<move_effect_changelogWhereUniqueInput>;

    @Field(() => [move_effect_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelogWhereUniqueInput)
    disconnect?: Array<move_effect_changelogWhereUniqueInput>;

    @Field(() => [move_effect_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelogWhereUniqueInput)
    delete?: Array<move_effect_changelogWhereUniqueInput>;

    @Field(() => [move_effect_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelogWhereUniqueInput)
    connect?: Array<move_effect_changelogWhereUniqueInput>;

    @Field(() => [move_effect_changelogUpdateWithWhereUniqueWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_effect_changelogUpdateWithWhereUniqueWithoutMove_effectsInput)
    update?: Array<move_effect_changelogUpdateWithWhereUniqueWithoutMove_effectsInput>;

    @Field(() => [move_effect_changelogUpdateManyWithWhereWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_effect_changelogUpdateManyWithWhereWithoutMove_effectsInput)
    updateMany?: Array<move_effect_changelogUpdateManyWithWhereWithoutMove_effectsInput>;

    @Field(() => [move_effect_changelogScalarWhereInput], {nullable:true})
    @Type(() => move_effect_changelogScalarWhereInput)
    deleteMany?: Array<move_effect_changelogScalarWhereInput>;
}
